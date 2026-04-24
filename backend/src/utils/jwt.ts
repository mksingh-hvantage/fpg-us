import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

export interface CustomerJwtPayload {
  type: 'customer';
  customerId: string;
  email: string;
}

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

export function signCustomerToken(payload: CustomerJwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
}

export function verifyCustomerToken(token: string): CustomerJwtPayload {
  const decoded = jwt.verify(token, JWT_SECRET) as CustomerJwtPayload;
  if (decoded.type !== 'customer') {
    throw new Error('Invalid token type');
  }
  return decoded;
}
