export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  publishedDate: string;
  imageUrl: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'how-to-start-llc-2024',
    title: 'How to Start an LLC in 2024: Complete Step-by-Step Guide',
    excerpt: 'Learn everything you need to know about forming an LLC, from choosing a business name to filing your articles of organization.',
    content: 'Full article content goes here...',
    category: 'Legal',
    readTime: '8 min read',
    author: 'Sarah Johnson',
    publishedDate: '2024-01-15',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    slug: 'business-tax-deductions-guide',
    title: 'Top Business Tax Deductions You Should Know About',
    excerpt: 'Maximize your tax savings with these essential business deductions that every entrepreneur should take advantage of.',
    content: 'Full article content goes here...',
    category: 'Taxes',
    readTime: '6 min read',
    author: 'Michael Chen',
    publishedDate: '2024-01-12',
    imageUrl: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    slug: 'digital-marketing-strategies-small-business',
    title: 'Digital Marketing Strategies That Work for Small Businesses',
    excerpt: 'Discover proven digital marketing tactics to grow your small business without breaking the bank.',
    content: 'Full article content goes here...',
    category: 'Marketing',
    readTime: '10 min read',
    author: 'Emma Williams',
    publishedDate: '2024-01-10',
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    slug: 'business-plan-template-2024',
    title: 'Free Business Plan Template and How to Use It',
    excerpt: 'Get your free business plan template and learn how to create a compelling plan that attracts investors.',
    content: 'Full article content goes here...',
    category: 'Strategy',
    readTime: '12 min read',
    author: 'David Brown',
    publishedDate: '2024-01-08',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    slug: 'small-business-funding-options',
    title: 'Small Business Funding: Options and How to Choose',
    excerpt: 'Explore various funding options for your small business and learn which one is right for your situation.',
    content: 'Full article content goes here...',
    category: 'Finance',
    readTime: '9 min read',
    author: 'Lisa Anderson',
    publishedDate: '2024-01-05',
    imageUrl: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    slug: 'llc-vs-corporation-comparison',
    title: 'LLC vs Corporation: Which Business Structure is Right for You?',
    excerpt: 'Understanding the key differences between LLCs and corporations to make the best choice for your business.',
    content: 'Full article content goes here...',
    category: 'Legal',
    readTime: '7 min read',
    author: 'Sarah Johnson',
    publishedDate: '2024-01-03',
    imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    slug: 'social-media-marketing-tips',
    title: '10 Social Media Marketing Tips That Drive Real Results',
    excerpt: 'Boost your social media presence with these proven strategies that increase engagement and sales.',
    content: 'Full article content goes here...',
    category: 'Marketing',
    readTime: '8 min read',
    author: 'Emma Williams',
    publishedDate: '2024-01-01',
    imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    slug: 'quarterly-taxes-guide',
    title: 'Quarterly Taxes Explained: What Every Business Owner Needs to Know',
    excerpt: 'Learn when and how to pay quarterly estimated taxes to avoid penalties and stay compliant.',
    content: 'Full article content goes here...',
    category: 'Taxes',
    readTime: '6 min read',
    author: 'Michael Chen',
    publishedDate: '2023-12-28',
    imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    slug: 'scaling-business-growth-strategies',
    title: 'Scaling Your Business: Growth Strategies That Work',
    excerpt: 'Ready to take your business to the next level? Here are proven strategies for sustainable growth.',
    content: 'Full article content goes here...',
    category: 'Strategy',
    readTime: '11 min read',
    author: 'David Brown',
    publishedDate: '2023-12-25',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '10',
    slug: 'cash-flow-management-tips',
    title: 'Cash Flow Management: Essential Tips for Small Business Success',
    excerpt: 'Master cash flow management to keep your business financially healthy and ready for growth.',
    content: 'Full article content goes here...',
    category: 'Finance',
    readTime: '7 min read',
    author: 'Lisa Anderson',
    publishedDate: '2023-12-22',
    imageUrl: 'https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '11',
    slug: 'trademark-registration-guide',
    title: 'Trademark Registration: Protect Your Brand Identity',
    excerpt: 'Learn how to register a trademark and protect your business name, logo, and brand identity.',
    content: 'Full article content goes here...',
    category: 'Legal',
    readTime: '9 min read',
    author: 'Sarah Johnson',
    publishedDate: '2023-12-20',
    imageUrl: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '12',
    slug: 'content-marketing-strategy',
    title: 'Building a Content Marketing Strategy That Converts',
    excerpt: 'Create a content marketing strategy that attracts your ideal customers and drives conversions.',
    content: 'Full article content goes here...',
    category: 'Marketing',
    readTime: '10 min read',
    author: 'Emma Williams',
    publishedDate: '2023-12-18',
    imageUrl: 'https://images.pexels.com/photos/5797903/pexels-photo-5797903.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
