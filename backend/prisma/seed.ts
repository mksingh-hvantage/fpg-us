import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Inline data from frontend data files (to avoid import issues with React types)
const statesData = [
  { name: 'Alabama', slug: 'alabama', filingFee: '$236', processingTime: '3-5 business days', annualReportFee: '$0', description: 'Alabama offers a straightforward LLC formation process with no annual report requirement.' },
  { name: 'Alaska', slug: 'alaska', filingFee: '$250', processingTime: '3-5 business days', annualReportFee: '$100', description: 'Alaska provides a business-friendly environment with no state income tax or sales tax.' },
  { name: 'Arizona', slug: 'arizona', filingFee: '$50', processingTime: '2-3 business days', annualReportFee: '$0', description: 'Arizona has low formation costs and no annual report filing requirement for LLCs.' },
  { name: 'Arkansas', slug: 'arkansas', filingFee: '$45', processingTime: '3-5 business days', annualReportFee: '$150', description: 'Arkansas offers affordable formation fees for new businesses.' },
  { name: 'California', slug: 'california', filingFee: '$70', processingTime: '10-15 business days', annualReportFee: '$800', description: 'California requires an annual franchise tax of $800 for all LLCs.' },
  { name: 'Colorado', slug: 'colorado', filingFee: '$50', processingTime: '5-7 business days', annualReportFee: '$10', description: 'Colorado has very low formation and maintenance costs for businesses.' },
  { name: 'Connecticut', slug: 'connecticut', filingFee: '$120', processingTime: '5-7 business days', annualReportFee: '$80', description: 'Connecticut provides access to major Northeast markets.' },
  { name: 'Delaware', slug: 'delaware', filingFee: '$90', processingTime: '3-5 business days', annualReportFee: '$300', description: 'Delaware is the most popular state for incorporation due to its business-friendly laws.' },
  { name: 'Florida', slug: 'florida', filingFee: '$125', processingTime: '5-7 business days', annualReportFee: '$138.75', description: 'Florida has no state personal income tax, making it attractive for business owners.' },
  { name: 'Georgia', slug: 'georgia', filingFee: '$100', processingTime: '5-7 business days', annualReportFee: '$50', description: 'Georgia offers a strong business climate and access to major markets.' },
  { name: 'Hawaii', slug: 'hawaii', filingFee: '$50', processingTime: '5-7 business days', annualReportFee: '$15', description: 'Hawaii offers unique market opportunities in the Pacific region.' },
  { name: 'Idaho', slug: 'idaho', filingFee: '$100', processingTime: '5-7 business days', annualReportFee: '$0', description: 'Idaho has no annual report requirement for LLCs.' },
  { name: 'Illinois', slug: 'illinois', filingFee: '$150', processingTime: '5-10 business days', annualReportFee: '$75', description: 'Illinois provides access to the Chicago metropolitan market.' },
  { name: 'Indiana', slug: 'indiana', filingFee: '$95', processingTime: '3-5 business days', annualReportFee: '$31', description: 'Indiana offers moderate formation fees and a business-friendly environment.' },
  { name: 'Iowa', slug: 'iowa', filingFee: '$50', processingTime: '5-7 business days', annualReportFee: '$45', description: 'Iowa provides affordable business formation options.' },
  { name: 'Kansas', slug: 'kansas', filingFee: '$160', processingTime: '3-5 business days', annualReportFee: '$55', description: 'Kansas offers a central US location with reasonable business costs.' },
  { name: 'Kentucky', slug: 'kentucky', filingFee: '$40', processingTime: '3-5 business days', annualReportFee: '$15', description: 'Kentucky has some of the lowest formation fees in the country.' },
  { name: 'Louisiana', slug: 'louisiana', filingFee: '$100', processingTime: '5-7 business days', annualReportFee: '$35', description: 'Louisiana offers a unique business culture and diverse economy.' },
  { name: 'Maine', slug: 'maine', filingFee: '$175', processingTime: '5-7 business days', annualReportFee: '$85', description: 'Maine provides a quality business environment in New England.' },
  { name: 'Maryland', slug: 'maryland', filingFee: '$100', processingTime: '5-7 business days', annualReportFee: '$300', description: 'Maryland offers proximity to Washington DC and federal contracting opportunities.' },
  { name: 'Massachusetts', slug: 'massachusetts', filingFee: '$500', processingTime: '5-10 business days', annualReportFee: '$500', description: 'Massachusetts has higher formation costs but strong economic opportunities.' },
  { name: 'Michigan', slug: 'michigan', filingFee: '$50', processingTime: '3-5 business days', annualReportFee: '$25', description: 'Michigan offers affordable LLC formation with low annual costs.' },
  { name: 'Minnesota', slug: 'minnesota', filingFee: '$155', processingTime: '5-7 business days', annualReportFee: '$0', description: 'Minnesota has no annual report filing requirement for LLCs.' },
  { name: 'Mississippi', slug: 'mississippi', filingFee: '$50', processingTime: '3-5 business days', annualReportFee: '$0', description: 'Mississippi offers low-cost formation with no annual report requirement.' },
  { name: 'Missouri', slug: 'missouri', filingFee: '$50', processingTime: '3-5 business days', annualReportFee: '$0', description: 'Missouri has no annual report requirement and low formation costs.' },
  { name: 'Montana', slug: 'montana', filingFee: '$35', processingTime: '3-5 business days', annualReportFee: '$20', description: 'Montana has the lowest filing fee in the country for LLC formation.' },
  { name: 'Nebraska', slug: 'nebraska', filingFee: '$105', processingTime: '3-5 business days', annualReportFee: '$10', description: 'Nebraska offers a stable business environment with moderate costs.' },
  { name: 'Nevada', slug: 'nevada', filingFee: '$425', processingTime: '3-5 business days', annualReportFee: '$150', description: 'Nevada has no state income tax and strong asset protection laws.' },
  { name: 'New Hampshire', slug: 'new-hampshire', filingFee: '$100', processingTime: '5-7 business days', annualReportFee: '$100', description: 'New Hampshire has no sales tax or personal income tax.' },
  { name: 'New Jersey', slug: 'new-jersey', filingFee: '$125', processingTime: '5-7 business days', annualReportFee: '$75', description: 'New Jersey provides access to the New York metropolitan market.' },
  { name: 'New Mexico', slug: 'new-mexico', filingFee: '$50', processingTime: '3-5 business days', annualReportFee: '$0', description: 'New Mexico has no annual report requirement for LLCs.' },
  { name: 'New York', slug: 'new-york', filingFee: '$200', processingTime: '7-14 business days', annualReportFee: '$9', description: 'New York requires publication of LLC formation in newspapers.' },
  { name: 'North Carolina', slug: 'north-carolina', filingFee: '$125', processingTime: '5-7 business days', annualReportFee: '$200', description: 'North Carolina offers a strong business environment in the Southeast.' },
  { name: 'North Dakota', slug: 'north-dakota', filingFee: '$135', processingTime: '3-5 business days', annualReportFee: '$50', description: 'North Dakota provides a stable regulatory environment for businesses.' },
  { name: 'Ohio', slug: 'ohio', filingFee: '$99', processingTime: '3-5 business days', annualReportFee: '$0', description: 'Ohio has no annual report requirement for LLCs.' },
  { name: 'Oklahoma', slug: 'oklahoma', filingFee: '$100', processingTime: '3-5 business days', annualReportFee: '$25', description: 'Oklahoma offers affordable business formation and operation costs.' },
  { name: 'Oregon', slug: 'oregon', filingFee: '$100', processingTime: '5-7 business days', annualReportFee: '$100', description: 'Oregon has no sales tax, benefiting retail businesses.' },
  { name: 'Pennsylvania', slug: 'pennsylvania', filingFee: '$125', processingTime: '5-7 business days', annualReportFee: '$7', description: 'Pennsylvania offers access to major East Coast markets.' },
  { name: 'Rhode Island', slug: 'rhode-island', filingFee: '$150', processingTime: '5-7 business days', annualReportFee: '$50', description: 'Rhode Island provides a compact market with Northeast access.' },
  { name: 'South Carolina', slug: 'south-carolina', filingFee: '$110', processingTime: '5-7 business days', annualReportFee: '$0', description: 'South Carolina has no annual report requirement for LLCs.' },
  { name: 'South Dakota', slug: 'south-dakota', filingFee: '$150', processingTime: '3-5 business days', annualReportFee: '$50', description: 'South Dakota has no state income tax.' },
  { name: 'Tennessee', slug: 'tennessee', filingFee: '$300', processingTime: '5-7 business days', annualReportFee: '$300', description: 'Tennessee has no state income tax on wages and salaries.' },
  { name: 'Texas', slug: 'texas', filingFee: '$300', processingTime: '3-5 business days', annualReportFee: '$0', description: 'Texas has no state income tax and a strong business economy.' },
  { name: 'Utah', slug: 'utah', filingFee: '$54', processingTime: '3-5 business days', annualReportFee: '$18', description: 'Utah offers low formation costs and a growing tech economy.' },
  { name: 'Vermont', slug: 'vermont', filingFee: '$125', processingTime: '5-7 business days', annualReportFee: '$35', description: 'Vermont provides a supportive small business environment.' },
  { name: 'Virginia', slug: 'virginia', filingFee: '$100', processingTime: '3-5 business days', annualReportFee: '$50', description: 'Virginia offers proximity to the federal government and defense industry.' },
  { name: 'Washington', slug: 'washington', filingFee: '$200', processingTime: '5-7 business days', annualReportFee: '$60', description: 'Washington has no state income tax.' },
  { name: 'West Virginia', slug: 'west-virginia', filingFee: '$100', processingTime: '3-5 business days', annualReportFee: '$25', description: 'West Virginia offers affordable business costs.' },
  { name: 'Wisconsin', slug: 'wisconsin', filingFee: '$130', processingTime: '5-7 business days', annualReportFee: '$25', description: 'Wisconsin provides a diverse economy with strong manufacturing.' },
  { name: 'Wyoming', slug: 'wyoming', filingFee: '$100', processingTime: '3-5 business days', annualReportFee: '$60', description: 'Wyoming has no state income tax and strong privacy protections.' },
  { name: 'District of Columbia', slug: 'district-of-columbia', filingFee: '$220', processingTime: '3-5 business days', annualReportFee: '$300', description: 'DC offers direct access to the federal government market.' },
];

const industriesData = [
  { slug: 'consulting-business', name: 'Consulting Business', icon: '💼' },
  { slug: 'food-truck', name: 'Food Truck', icon: '🚚' },
  { slug: 'llc', name: 'LLC', icon: '📋' },
  { slug: 'real-estate', name: 'Real Estate', icon: '🏠' },
  { slug: 'cleaning-business', name: 'Cleaning Business', icon: '🧹' },
  { slug: 'photography', name: 'Photography', icon: '📸' },
  { slug: 'landscaping', name: 'Landscaping', icon: '🌿' },
  { slug: 'personal-training', name: 'Personal Training', icon: '💪' },
  { slug: 'tutoring', name: 'Tutoring', icon: '📚' },
  { slug: 'pet-grooming', name: 'Pet Grooming', icon: '🐕' },
  { slug: 'bakery', name: 'Bakery', icon: '🍰' },
  { slug: 'event-planning', name: 'Event Planning', icon: '🎉' },
  { slug: 'graphic-design', name: 'Graphic Design', icon: '🎨' },
  { slug: 'web-development', name: 'Web Development', icon: '💻' },
  { slug: 'handyman', name: 'Handyman', icon: '🔧' },
  { slug: 'accounting', name: 'Accounting', icon: '📊' },
  { slug: 'marketing-agency', name: 'Marketing Agency', icon: '📢' },
  { slug: 'restaurant', name: 'Restaurant', icon: '🍽️' },
  { slug: 'construction', name: 'Construction', icon: '🏗️' },
  { slug: 'auto-repair', name: 'Auto Repair', icon: '🔧' },
  { slug: 'salon', name: 'Salon', icon: '💇' },
  { slug: 'daycare', name: 'Daycare', icon: '👶' },
  { slug: 'fitness-studio', name: 'Fitness Studio', icon: '🏋️' },
  { slug: 'insurance-agency', name: 'Insurance Agency', icon: '🛡️' },
  { slug: 'law-firm', name: 'Law Firm', icon: '⚖️' },
  { slug: 'medical-practice', name: 'Medical Practice', icon: '🏥' },
  { slug: 'dental-practice', name: 'Dental Practice', icon: '🦷' },
  { slug: 'veterinary', name: 'Veterinary', icon: '🐾' },
  { slug: 'trucking', name: 'Trucking', icon: '🚛' },
  { slug: 'plumbing', name: 'Plumbing', icon: '🔧' },
  { slug: 'electrical', name: 'Electrical', icon: '⚡' },
  { slug: 'roofing', name: 'Roofing', icon: '🏠' },
  { slug: 'hvac', name: 'HVAC', icon: '❄️' },
  { slug: 'moving-company', name: 'Moving Company', icon: '📦' },
  { slug: 'florist', name: 'Florist', icon: '🌸' },
  { slug: 'coffee-shop', name: 'Coffee Shop', icon: '☕' },
  { slug: 'brewery', name: 'Brewery', icon: '🍺' },
  { slug: 'yoga-studio', name: 'Yoga Studio', icon: '🧘' },
  { slug: 'car-wash', name: 'Car Wash', icon: '🚗' },
  { slug: 'pressure-washing', name: 'Pressure Washing', icon: '💦' },
  { slug: 'tree-service', name: 'Tree Service', icon: '🌳' },
  { slug: 'painting', name: 'Painting', icon: '🖌️' },
  { slug: 'home-inspection', name: 'Home Inspection', icon: '🔍' },
  { slug: 'pest-control', name: 'Pest Control', icon: '🐛' },
  { slug: 'staffing-agency', name: 'Staffing Agency', icon: '👥' },
  { slug: 'it-services', name: 'IT Services', icon: '🖥️' },
];

const contractsData = [
  { slug: 'nda', name: 'Non-Disclosure Agreement (NDA)', category: 'Confidentiality' },
  { slug: 'employment-agreement', name: 'Employment Agreement', category: 'Employment' },
  { slug: 'operating-agreement', name: 'LLC Operating Agreement', category: 'Business' },
  { slug: 'independent-contractor', name: 'Independent Contractor Agreement', category: 'Employment' },
  { slug: 'partnership-agreement', name: 'Partnership Agreement', category: 'Business' },
  { slug: 'service-agreement', name: 'Service Agreement', category: 'Services' },
  { slug: 'lease-agreement', name: 'Commercial Lease Agreement', category: 'Real Estate' },
  { slug: 'consulting-agreement', name: 'Consulting Agreement', category: 'Services' },
  { slug: 'purchase-agreement', name: 'Purchase Agreement', category: 'Sales' },
  { slug: 'licensing-agreement', name: 'Licensing Agreement', category: 'Intellectual Property' },
  { slug: 'terms-of-service', name: 'Terms of Service', category: 'Legal' },
  { slug: 'privacy-policy', name: 'Privacy Policy', category: 'Legal' },
  { slug: 'release-of-liability', name: 'Release of Liability Waiver', category: 'Legal' },
  { slug: 'bill-of-sale', name: 'Bill of Sale', category: 'Sales' },
  { slug: 'promissory-note', name: 'Promissory Note', category: 'Finance' },
  { slug: 'power-of-attorney', name: 'Power of Attorney', category: 'Legal' },
  { slug: 'non-compete', name: 'Non-Compete Agreement', category: 'Employment' },
  { slug: 'joint-venture', name: 'Joint Venture Agreement', category: 'Business' },
  { slug: 'shareholder-agreement', name: 'Shareholder Agreement', category: 'Business' },
  { slug: 'sublease-agreement', name: 'Sublease Agreement', category: 'Real Estate' },
  { slug: 'loan-agreement', name: 'Loan Agreement', category: 'Finance' },
  { slug: 'website-development', name: 'Website Development Agreement', category: 'Services' },
  { slug: 'photography-contract', name: 'Photography Contract', category: 'Services' },
  { slug: 'event-planning-contract', name: 'Event Planning Contract', category: 'Services' },
  { slug: 'franchise-agreement', name: 'Franchise Agreement', category: 'Business' },
];

const articlesData = [
  { slug: 'how-to-start-llc-2024', title: 'How to Start an LLC in 2024: Complete Step-by-Step Guide', excerpt: 'Learn everything you need to know about forming an LLC.', content: 'Full article content goes here...', category: 'Legal', readTime: '8 min read', author: 'Sarah Johnson', publishedDate: '2024-01-15', imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'business-tax-deductions-guide', title: 'Top Business Tax Deductions You Should Know About', excerpt: 'Maximize your savings with these essential business tax deductions.', content: 'Full article content goes here...', category: 'Taxes', readTime: '6 min read', author: 'Michael Chen', publishedDate: '2024-02-01', imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'llc-vs-corporation', title: 'LLC vs Corporation: Which Is Right for Your Business?', excerpt: 'Compare LLCs and corporations to find the best fit.', content: 'Full article content goes here...', category: 'Legal', readTime: '10 min read', author: 'Sarah Johnson', publishedDate: '2024-02-15', imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'small-business-marketing-strategies', title: '10 Marketing Strategies for Small Businesses in 2024', excerpt: 'Grow your business with these proven marketing strategies.', content: 'Full article content goes here...', category: 'Marketing', readTime: '7 min read', author: 'Emily Davis', publishedDate: '2024-03-01', imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'business-plan-guide', title: 'How to Write a Business Plan: Complete Guide', excerpt: 'Create a compelling business plan step by step.', content: 'Full article content goes here...', category: 'Strategy', readTime: '12 min read', author: 'Michael Chen', publishedDate: '2024-03-15', imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'ein-guide', title: 'EIN Number: What It Is and How to Get One', excerpt: 'Everything you need to know about Employer Identification Numbers.', content: 'Full article content goes here...', category: 'Legal', readTime: '5 min read', author: 'Sarah Johnson', publishedDate: '2024-04-01', imageUrl: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

async function main() {
  console.log('Seeding database...');

  // Seed admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);
  await prisma.user.upsert({
    where: { email: 'admin@fpglobal.us' },
    update: {},
    create: {
      email: 'admin@fpglobal.us',
      password: hashedPassword,
      fullName: 'Admin User',
      role: 'SUPER_ADMIN',
    },
  });
  console.log('Admin user created: admin@fpglobal.us / admin123');

  // Seed states
  for (const state of statesData) {
    await prisma.state.upsert({
      where: { slug: state.slug },
      update: {},
      create: state,
    });
  }
  console.log(`Seeded ${statesData.length} states`);

  // Seed industries
  for (const industry of industriesData) {
    await prisma.industry.upsert({
      where: { slug: industry.slug },
      update: {},
      create: industry,
    });
  }
  console.log(`Seeded ${industriesData.length} industries`);

  // Seed contracts
  for (const contract of contractsData) {
    await prisma.contractTemplate.upsert({
      where: { slug: contract.slug },
      update: {},
      create: contract,
    });
  }
  console.log(`Seeded ${contractsData.length} contract templates`);

  // Seed articles
  for (const article of articlesData) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: {
        ...article,
        published: true,
        publishedDate: new Date(article.publishedDate),
      },
    });
  }
  console.log(`Seeded ${articlesData.length} articles`);

  // Seed packages
  const packagesData = [
    {
      name: 'Basic',
      price: 0,
      processingTime: '4 Weeks',
      recommended: false,
      sortOrder: 0,
      features: [
        { name: 'Preparing & Filing the Articles of Organization', included: true },
        { name: 'FREE 1st Year Registered Agent Service', included: true },
        { name: 'FREE 1st Month of Virtual Address Service', included: true },
        { name: 'Expedited Filing', included: false, addonPrice: 50 },
        { name: 'Business Contract Templates', included: false, addonPrice: 150 },
        { name: 'EIN Business Tax Number', included: false, addonPrice: 70 },
        { name: 'Operating Agreement', included: false, addonPrice: 99 },
        { name: 'Domain Name + Business Email', included: false },
        { name: 'FREE 1st Year Business Phone Number', included: false },
        { name: 'Lifetime Compliance Alerts', included: false },
        { name: 'Unlimited Phone & Email Support', included: false },
        { name: 'Online Access Dashboard', included: true },
        { name: 'Business Banking Account Offer', included: true },
        { name: 'Business Tax Consultation', included: true },
        { name: 'IRS Form 2553', included: false, addonPrice: 50 },
      ],
    },
    {
      name: 'Standard',
      price: 199,
      processingTime: '4 Weeks',
      recommended: true,
      sortOrder: 1,
      features: [
        { name: 'Preparing & Filing the Articles of Organization', included: true },
        { name: 'FREE 1st Year Registered Agent Service', included: true },
        { name: 'FREE 1st Month of Virtual Address Service', included: true },
        { name: 'Expedited Filing', included: false, addonPrice: 50 },
        { name: 'Business Contract Templates', included: false, addonPrice: 150 },
        { name: 'EIN Business Tax Number', included: true },
        { name: 'Operating Agreement', included: true },
        { name: 'Domain Name + Business Email', included: false },
        { name: 'FREE 1st Year Business Phone Number', included: false },
        { name: 'Lifetime Compliance Alerts', included: true },
        { name: 'Unlimited Phone & Email Support', included: true },
        { name: 'Online Access Dashboard', included: true },
        { name: 'Business Banking Account Offer', included: true },
        { name: 'Business Tax Consultation', included: true },
        { name: 'IRS Form 2553', included: true },
      ],
    },
    {
      name: 'Premium',
      price: 299,
      processingTime: '4 Days',
      recommended: false,
      sortOrder: 2,
      features: [
        { name: 'Preparing & Filing the Articles of Organization', included: true },
        { name: 'FREE 1st Year Registered Agent Service', included: true },
        { name: 'FREE 1st Month of Virtual Address Service', included: true },
        { name: 'Expedited Filing (4 Business Days)', included: true },
        { name: 'Business Contract Templates', included: true },
        { name: 'EIN Business Tax Number', included: true },
        { name: 'Operating Agreement', included: true },
        { name: 'Domain Name + Business Email', included: true },
        { name: 'FREE 1st Year Business Phone Number', included: true },
        { name: 'Lifetime Compliance Alerts', included: true },
        { name: 'Unlimited Phone & Email Support', included: true },
        { name: 'Online Access Dashboard', included: true },
        { name: 'Business Banking Account Offer', included: true },
        { name: 'Business Tax Consultation', included: true },
        { name: 'IRS Form 2553', included: true },
      ],
    },
  ];

  for (const pkg of packagesData) {
    await prisma.package.upsert({
      where: { name: pkg.name },
      update: {},
      create: pkg,
    });
  }
  console.log(`Seeded ${packagesData.length} packages`);

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
