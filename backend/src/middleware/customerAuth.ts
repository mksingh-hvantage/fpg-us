import { Request, Response, NextFunction } from 'express';
import { verifyCustomerToken, CustomerJwtPayload } from '../utils/jwt.js';

declare global {
  namespace Express {
    interface Request {
      customer?: CustomerJwtPayload;
    }
  }
}

export function authenticateCustomer(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    req.customer = verifyCustomerToken(token);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}
