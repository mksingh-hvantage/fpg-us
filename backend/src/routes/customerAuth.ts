import { Router, Request, Response } from 'express';
import { prisma } from '../index.js';
import { signCustomerToken } from '../utils/jwt.js';
import { authenticateCustomer } from '../middleware/customerAuth.js';
import { sendOtpEmail } from '../utils/email.js';

const router = Router();

// POST /api/customer-auth/send-otp
router.post('/send-otp', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    const customer = await prisma.customer.findUnique({ where: { email: email.toLowerCase() } });
    if (!customer) {
      res.status(404).json({ error: 'No account found with this email. Please place an order first.' });
      return;
    }

    if (!customer.isActive) {
      res.status(403).json({ error: 'Account is deactivated' });
      return;
    }

    // Generate 6-digit OTP
    const otpCode = String(Math.floor(100000 + Math.random() * 900000));
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.customer.update({
      where: { id: customer.id },
      data: { otpCode, otpExpiry },
    });

    // Send OTP email
    sendOtpEmail(email.toLowerCase(), customer.firstName, otpCode);

    res.json({ message: 'OTP sent to your email' });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/customer-auth/verify-otp
router.post('/verify-otp', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      res.status(400).json({ error: 'Email and OTP are required' });
      return;
    }

    const customer = await prisma.customer.findUnique({ where: { email: email.toLowerCase() } });
    if (!customer) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    if (!customer.isActive) {
      res.status(403).json({ error: 'Account is deactivated' });
      return;
    }

    if (!customer.otpCode || !customer.otpExpiry) {
      res.status(401).json({ error: 'No OTP requested. Please send a new OTP.' });
      return;
    }

    if (new Date() > customer.otpExpiry) {
      res.status(401).json({ error: 'OTP has expired. Please request a new one.' });
      return;
    }

    if (customer.otpCode !== otp) {
      res.status(401).json({ error: 'Invalid OTP' });
      return;
    }

    // Clear OTP after successful verification
    await prisma.customer.update({
      where: { id: customer.id },
      data: { otpCode: null, otpExpiry: null, lastLoginAt: new Date(), emailVerified: true },
    });

    const token = signCustomerToken({ type: 'customer', customerId: customer.id, email: customer.email });

    res.json({
      token,
      customer: {
        id: customer.id,
        email: customer.email,
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone: customer.phone,
        businessName: customer.businessName,
        businessType: customer.businessType,
        state: customer.state,
        avatarUrl: customer.avatarUrl,
        profileCompleted: customer.profileCompleted,
      },
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/customer-auth/me
router.get('/me', authenticateCustomer, async (req: Request, res: Response): Promise<void> => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id: req.customer!.customerId },
      select: {
        id: true, email: true, firstName: true, lastName: true,
        phone: true, businessName: true, businessType: true, state: true,
        avatarUrl: true, profileCompleted: true, emailVerified: true, createdAt: true,
      },
    });
    if (!customer) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }
    res.json(customer);
  } catch (error) {
    console.error('Customer me error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/customer-auth/profile
router.put('/profile', authenticateCustomer, async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, phone, businessName, businessType, state } = req.body;
    const data: Record<string, unknown> = {};
    if (firstName !== undefined) data.firstName = firstName;
    if (lastName !== undefined) data.lastName = lastName;
    if (phone !== undefined) data.phone = phone;
    if (businessName !== undefined) data.businessName = businessName;
    if (businessType !== undefined) data.businessType = businessType;
    if (state !== undefined) data.state = state;

    // Calculate profile completeness
    const current = await prisma.customer.findUnique({ where: { id: req.customer!.customerId } });
    const merged = { ...current, ...data };
    const profileCompleted = !!(merged.firstName && merged.lastName && merged.phone && merged.businessName && merged.businessType && merged.state);
    data.profileCompleted = profileCompleted;

    const customer = await prisma.customer.update({
      where: { id: req.customer!.customerId },
      data,
      select: {
        id: true, email: true, firstName: true, lastName: true,
        phone: true, businessName: true, businessType: true, state: true,
        avatarUrl: true, profileCompleted: true,
      },
    });
    res.json(customer);
  } catch (error) {
    console.error('Customer profile update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
