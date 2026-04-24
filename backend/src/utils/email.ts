import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const FROM = process.env.SENDGRID_FROM || 'noreply@thefutureperfectglobal.com';
const CC = ['neelesh@havantage.com', 'mksingh@hvantage.com'];

interface OrderEmailData {
  orderNumber: string;
  companyName: string;
  packageType: string;
  state: string;
  total: string | null;
}

export async function sendOrderPendingEmail(to: string, data: OrderEmailData): Promise<void> {
  try {
    await sgMail.send({
      to,
      cc: CC,
      from: FROM,
      subject: `Order Received - ${data.orderNumber} (Pending Review)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff4a00; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">Order Received!</h1>
          </div>
          <div style="padding: 32px 24px; background: #fff;">
            <p>Thank you for placing your order! We've received it and it is currently <strong>pending review</strong>. Our team will begin processing it shortly.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px 0; color: #666;">Order Number</td><td style="padding: 8px 0; font-weight: bold;">${data.orderNumber}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Company Name</td><td style="padding: 8px 0; font-weight: bold;">${data.companyName}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Package</td><td style="padding: 8px 0; font-weight: bold;">${data.packageType}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">State</td><td style="padding: 8px 0; font-weight: bold;">${data.state}</td></tr>
              ${data.total ? `<tr><td style="padding: 8px 0; color: #666;">Total</td><td style="padding: 8px 0; font-weight: bold;">$${data.total}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; color: #666;">Status</td><td style="padding: 8px 0;"><span style="background: #fff3cd; color: #856404; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: bold;">Pending</span></td></tr>
            </table>
            <p>You'll receive another email once your order has been confirmed and processing begins. You can also track your order status anytime from your dashboard.</p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://us.thefutureperfectglobal.com/login" style="background: #ff4a00; color: #fff; padding: 12px 32px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Dashboard</a>
            </div>
          </div>
          <div style="padding: 16px 24px; background: #f5f5f5; text-align: center; color: #999; font-size: 12px;">
            <p>Future Perfect Global USA | Business Formation Services</p>
          </div>
        </div>
      `,
    });
    console.log(`Order pending email sent to ${to}`);
  } catch (error) {
    console.error('Failed to send order pending email:', error);
  }
}

export async function sendWelcomeEmail(to: string, firstName: string): Promise<void> {
  try {
    await sgMail.send({
      to,
      cc: CC,
      from: FROM,
      subject: 'Welcome to Future Perfect Global - Your Account is Ready',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff4a00; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">Welcome, ${firstName}!</h1>
          </div>
          <div style="padding: 32px 24px; background: #fff;">
            <p>Your account has been created automatically with your order. You can now log in to track your order, manage documents, and access all business tools.</p>
            <div style="background: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <p style="margin: 0;"><strong>Email:</strong> ${to}</p>
            </div>
            <p>To sign in, simply enter your email on the login page and we'll send you a one-time verification code.</p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://us.thefutureperfectglobal.com/login" style="background: #ff4a00; color: #fff; padding: 12px 32px; text-decoration: none; border-radius: 6px; font-weight: bold;">Log In Now</a>
            </div>
          </div>
          <div style="padding: 16px 24px; background: #f5f5f5; text-align: center; color: #999; font-size: 12px;">
            <p>Future Perfect Global USA | Business Formation Services</p>
          </div>
        </div>
      `,
    });
    console.log(`Welcome email sent to ${to}`);
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}

export async function sendOtpEmail(to: string, firstName: string, otpCode: string): Promise<void> {
  try {
    await sgMail.send({
      to,
      cc: CC,
      from: FROM,
      subject: `${otpCode} - Your Login Verification Code`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff4a00; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">Verification Code</h1>
          </div>
          <div style="padding: 32px 24px; background: #fff; text-align: center;">
            <p>Hi ${firstName},</p>
            <p>Use the following code to sign in to your dashboard:</p>
            <div style="background: #f9f9f9; border: 2px solid #ff4a00; border-radius: 12px; padding: 24px; margin: 24px auto; max-width: 250px;">
              <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #ff4a00;">${otpCode}</span>
            </div>
            <p style="color: #999; font-size: 14px;">This code expires in 10 minutes. Do not share it with anyone.</p>
          </div>
          <div style="padding: 16px 24px; background: #f5f5f5; text-align: center; color: #999; font-size: 12px;">
            <p>Future Perfect Global USA | Business Formation Services</p>
          </div>
        </div>
      `,
    });
    console.log(`OTP email sent to ${to}`);
  } catch (error) {
    console.error('Failed to send OTP email:', error);
  }
}
