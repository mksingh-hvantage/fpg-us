import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const FROM = process.env.SENDGRID_FROM || 'noreply@thefutureperfectglobal.com';
const CC = ['neelesh@havantage.com', 'mksingh@hvantage.com'];

const ADMIN_RECIPIENTS = [
  'mksingh@hvantage.com',
  'neelesh@thefutureperfectglobal.com',
  'design@hvantagetechnologies.com',
];

interface ContactEmailData {
  source: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  businessType?: string;
  businessName?: string;
  state?: string;
}

function row(label: string, value?: string | null) {
  if (!value) return '';
  return `<tr><td style="padding: 8px 0; color: #666;">${label}</td><td style="padding: 8px 0; font-weight: bold;">${value}</td></tr>`;
}

export async function sendContactAdminEmail(data: ContactEmailData): Promise<void> {
  try {
    await sgMail.send({
      to: ADMIN_RECIPIENTS,
      from: FROM,
      replyTo: data.email,
      subject: `New Contact Enquiry from ${data.name} (${data.source})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff4a00; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">New Contact Enquiry</h1>
          </div>
          <div style="padding: 32px 24px; background: #fff;">
            <p>A new enquiry has been submitted via <strong>${data.source}</strong>.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              ${row('Name', data.name)}
              ${row('Email', data.email)}
              ${row('Phone', data.phone)}
              ${row('Business Type', data.businessType)}
              ${row('Business Name', data.businessName)}
              ${row('State', data.state)}
              ${row('Subject', data.subject)}
              ${data.message ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Message</td><td style="padding: 8px 0;">${data.message.replace(/\n/g, '<br>')}</td></tr>` : ''}
            </table>
          </div>
          <div style="padding: 16px 24px; background: #f5f5f5; text-align: center; color: #999; font-size: 12px;">
            <p>Future Perfect Global USA | Admin Notification</p>
          </div>
        </div>
      `,
    });
    console.log(`Contact admin email sent for enquiry from ${data.email}`);
  } catch (error) {
    console.error('Failed to send contact admin email:', error);
  }
}

type OrderStatus = 'PENDING' | 'PROCESSING' | 'FILED' | 'COMPLETED' | 'CANCELLED';

interface OrderStatusEmailData {
  orderNumber: string;
  companyName: string;
  packageType: string;
  state: string;
  status: OrderStatus;
  customerName?: string;
  notes?: string | null;
}

const STATUS_COPY: Record<OrderStatus, { subject: string; heading: string; intro: string }> = {
  PENDING: {
    subject: 'Order Received - Pending Review',
    heading: 'Order Received',
    intro: 'Thank you for placing your order. It has been received and is currently <strong>pending review</strong>. Our team will begin processing it shortly.',
  },
  PROCESSING: {
    subject: 'Your Order is Now Being Processed',
    heading: 'Order In Processing',
    intro: 'Good news — your order is now <strong>being processed</strong> by our team. We will notify you once it is filed with the state.',
  },
  FILED: {
    subject: 'Your Filing Has Been Submitted',
    heading: 'Filed With State',
    intro: 'Your formation documents have been <strong>filed with the state</strong>. We will share confirmation as soon as the state finalises your filing.',
  },
  COMPLETED: {
    subject: 'Your Order is Complete',
    heading: 'Order Completed',
    intro: 'Congratulations — your order is now <strong>complete</strong>. You can log in to your dashboard to download all formation documents and access your business tools.',
  },
  CANCELLED: {
    subject: 'Your Order Has Been Cancelled',
    heading: 'Order Cancelled',
    intro: 'Your order has been <strong>cancelled</strong>. If this was unexpected or you need assistance, please reach out to our support team.',
  },
};

export async function sendOrderStatusEmail(to: string, data: OrderStatusEmailData): Promise<void> {
  const copy = STATUS_COPY[data.status];
  if (!copy) {
    console.warn(`No email copy for order status: ${data.status}`);
    return;
  }
  try {
    await sgMail.send({
      to,
      cc: CC,
      from: FROM,
      subject: `${copy.subject} - ${data.orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff4a00; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">${copy.heading}</h1>
          </div>
          <div style="padding: 32px 24px; background: #fff;">
            ${data.customerName ? `<p>Hi ${data.customerName},</p>` : ''}
            <p>${copy.intro}</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px 0; color: #666;">Order Number</td><td style="padding: 8px 0; font-weight: bold;">${data.orderNumber}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Company Name</td><td style="padding: 8px 0; font-weight: bold;">${data.companyName}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Package</td><td style="padding: 8px 0; font-weight: bold;">${data.packageType}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">State</td><td style="padding: 8px 0; font-weight: bold;">${data.state}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Status</td><td style="padding: 8px 0;"><span style="background: #fff3cd; color: #856404; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: bold;">${data.status}</span></td></tr>
            </table>
            ${data.notes ? `<div style="background: #f9f9f9; border-left: 4px solid #ff4a00; padding: 12px 16px; margin: 16px 0;"><strong>Note from our team:</strong><br>${data.notes.replace(/\n/g, '<br>')}</div>` : ''}
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
    console.log(`Order status email (${data.status}) sent to ${to} for order ${data.orderNumber}`);
  } catch (error) {
    console.error(`Failed to send order status email (${data.status}) to ${to}:`, error);
  }
}

export async function sendContactCustomerEmail(data: ContactEmailData): Promise<void> {
  try {
    await sgMail.send({
      to: data.email,
      from: FROM,
      subject: 'Thank You for Contacting Future Perfect Global',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff4a00; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">Thank You, ${data.name}!</h1>
          </div>
          <div style="padding: 32px 24px; background: #fff;">
            <p>We have received your enquiry and our team will get back to you shortly.</p>
            <p>Here is a copy of the details you submitted:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              ${row('Name', data.name)}
              ${row('Email', data.email)}
              ${row('Phone', data.phone)}
              ${row('Business Type', data.businessType)}
              ${row('Business Name', data.businessName)}
              ${row('State', data.state)}
              ${row('Subject', data.subject)}
              ${data.message ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Message</td><td style="padding: 8px 0;">${data.message.replace(/\n/g, '<br>')}</td></tr>` : ''}
            </table>
            <p>If you have any urgent queries, please reach us at <a href="mailto:enquiry@thefutureperfectglobal.us">enquiry@thefutureperfectglobal.us</a>.</p>
            <p>Thank you for choosing <strong>Future Perfect Global USA</strong>.</p>
          </div>
          <div style="padding: 16px 24px; background: #f5f5f5; text-align: center; color: #999; font-size: 12px;">
            <p>Future Perfect Global USA | Business Formation Services</p>
          </div>
        </div>
      `,
    });
    console.log(`Contact customer email sent to ${data.email}`);
  } catch (error) {
    console.error('Failed to send contact customer email:', error);
  }
}

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
      subject: `Thank You For Place Order. ${data.orderNumber} Pending Review`,
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

interface OrderAdminEmailData {
  orderNumber: string;
  companyName: string;
  packageType: string;
  state: string;
  total: string | null;
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  paymentId?: string | null;
  paymentMethod?: string | null;
  receiptUrl?: string | null;
}

export async function sendOrderAdminEmail(data: OrderAdminEmailData): Promise<void> {
  try {
    await sgMail.send({
      to: ADMIN_RECIPIENTS,
      from: FROM,
      replyTo: data.customerEmail,
      subject: `New Paid Order ${data.orderNumber} - ${data.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff4a00; padding: 24px; text-align: center;">
            <h1 style="color: #fff; margin: 0;">New Paid Order Received</h1>
          </div>
          <div style="padding: 32px 24px; background: #fff;">
            <p>A new order has been placed and <strong>payment has been received</strong>.</p>
            <h3 style="margin-top: 24px; color: #ff4a00;">Order Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
              ${row('Order Number', data.orderNumber)}
              ${row('Company Name', data.companyName)}
              ${row('Package', data.packageType)}
              ${row('State', data.state)}
              ${data.total ? row('Total', `$${data.total}`) : ''}
            </table>
            <h3 style="margin-top: 24px; color: #ff4a00;">Customer</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
              ${row('Name', data.customerName)}
              ${row('Email', data.customerEmail)}
              ${row('Phone', data.customerPhone || undefined)}
            </table>
            <h3 style="margin-top: 24px; color: #ff4a00;">Payment</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
              ${row('Payment ID', data.paymentId || undefined)}
              ${row('Method', data.paymentMethod || undefined)}
              <tr><td style="padding: 8px 0; color: #666;">Status</td><td style="padding: 8px 0;"><span style="background: #d4edda; color: #155724; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: bold;">SUCCEEDED</span></td></tr>
            </table>
            ${data.receiptUrl ? `<div style="text-align: center; margin: 24px 0;"><a href="${data.receiptUrl}" style="background: #ff4a00; color: #fff; padding: 12px 32px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Stripe Receipt</a></div>` : ''}
          </div>
          <div style="padding: 16px 24px; background: #f5f5f5; text-align: center; color: #999; font-size: 12px;">
            <p>Future Perfect Global USA | Admin Notification</p>
          </div>
        </div>
      `,
    });
    console.log(`Order admin email sent for order ${data.orderNumber}`);
  } catch (error) {
    console.error('Failed to send order admin email:', error);
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
