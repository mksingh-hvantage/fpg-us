/**
 * States data used across multiple pages
 * ⚠️ Do NOT rename exports – other pages depend on them
 */

import type { ReactNode } from "react";

/* =========================
   TYPES
========================= */

export interface StateInfo {
  expeditedTime: ReactNode;
  name: string;
  slug: string;
  filingFee: string;
  processingTime: string;
  annualReportFee: string;
  description: string;
  benefits?: string[];
}

/**
 * Backward-compatibility alias
 * Some pages import `State`
 */
export type State = StateInfo;

/* =========================
   DATA
========================= */

export const states: StateInfo[] = [
  {
    name: 'Alabama',
    slug: 'alabama',
    filingFee: '$200',
    processingTime: '7-10 business days',
    annualReportFee: '$100',
    description: 'Alabama offers a straightforward LLC formation process with competitive filing fees.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Alaska',
    slug: 'alaska',
    filingFee: '$250',
    processingTime: '10-15 business days',
    annualReportFee: '$100',
    description: 'Form your Alaska LLC with ease. Known for its business-friendly regulations.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    filingFee: '$50',
    processingTime: '5-7 business days',
    annualReportFee: '$0',
    description: 'Arizona has one of the lowest LLC filing fees in the nation with no annual report requirement.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    filingFee: '$45',
    processingTime: '7-10 business days',
    annualReportFee: '$150',
    description: 'Arkansas provides affordable LLC formation with quick processing times.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'California',
    slug: 'california',
    filingFee: '$70',
    processingTime: '10-15 business days',
    annualReportFee: '$800',
    description: 'California requires an annual franchise tax but offers access to the largest state economy.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    filingFee: '$50',
    processingTime: '5-7 business days',
    annualReportFee: '$10',
    description: 'Colorado offers fast processing and low annual fees, making it ideal for startups.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    filingFee: '$120',
    processingTime: '7-10 business days',
    annualReportFee: '$80',
    description: 'Connecticut offers a stable business environment with access to major Northeast markets.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Delaware',
    slug: 'delaware',
    filingFee: '$90',
    processingTime: '7-10 business days',
    annualReportFee: '$300',
    description: 'Delaware is famous for its business-friendly laws and Court of Chancery.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Florida',
    slug: 'florida',
    filingFee: '$125',
    processingTime: '7-10 business days',
    annualReportFee: '$138.75',
    description: 'Florida has no state income tax and is perfect for businesses targeting the Southeast.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    filingFee: '$100',
    processingTime: '7-14 business days',
    annualReportFee: '$50',
    description: 'Georgia offers reasonable fees and is a growing hub for business in the South.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    filingFee: '$50',
    processingTime: '7-10 business days',
    annualReportFee: '$15',
    description: 'Hawaii provides low filing fees and serves as a gateway to Pacific markets.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$0',
    description: 'Idaho has no annual report fee and offers a business-friendly regulatory environment.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    filingFee: '$150',
    processingTime: '10-15 business days',
    annualReportFee: '$75',
    description: 'Illinois provides access to major Midwest markets with Chicago as an economic hub.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    filingFee: '$95',
    processingTime: '7-10 business days',
    annualReportFee: '$31',
    description: 'Indiana offers competitive fees and a central location for distribution businesses.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    filingFee: '$50',
    processingTime: '5-7 business days',
    annualReportFee: '$45',
    description: 'Iowa provides affordable LLC formation with strong agricultural and manufacturing sectors.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Kansas',
    slug: 'kansas',
    filingFee: '$160',
    processingTime: '7-10 business days',
    annualReportFee: '$50',
    description: 'Kansas offers a central U.S. location with access to major transportation corridors.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    filingFee: '$40',
    processingTime: '7-10 business days',
    annualReportFee: '$15',
    description: 'Kentucky has one of the lowest filing fees in the nation with minimal ongoing costs.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    filingFee: '$100',
    processingTime: '10-15 business days',
    annualReportFee: '$30',
    description: 'Louisiana offers access to Gulf Coast markets and energy sector opportunities.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Maine',
    slug: 'maine',
    filingFee: '$175',
    processingTime: '7-10 business days',
    annualReportFee: '$85',
    description: 'Maine provides a stable business environment with growing tourism and technology sectors.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$300',
    description: 'Maryland offers proximity to Washington D.C. and access to federal contracting opportunities.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    filingFee: '$500',
    processingTime: '10-15 business days',
    annualReportFee: '$500',
    description: 'Massachusetts is a hub for technology, healthcare, and education industries.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    filingFee: '$50',
    processingTime: '5-7 business days',
    annualReportFee: '$25',
    description: 'Michigan offers low fees and is a center for automotive and manufacturing industries.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    filingFee: '$135',
    processingTime: '7-10 business days',
    annualReportFee: '$0',
    description: 'Minnesota has no annual report fee and is home to numerous Fortune 500 companies.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    filingFee: '$50',
    processingTime: '7-10 business days',
    annualReportFee: '$0',
    description: 'Mississippi offers low costs and no annual report requirement for LLCs.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    filingFee: '$50',
    processingTime: '5-7 business days',
    annualReportFee: '$0',
    description: 'Missouri provides affordable LLC formation with no ongoing annual report fees.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Montana',
    slug: 'montana',
    filingFee: '$35',
    processingTime: '7-10 business days',
    annualReportFee: '$20',
    description: 'Montana has some of the lowest LLC filing fees in the nation.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$10',
    description: 'Nebraska offers low annual fees and a business-friendly regulatory environment.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    filingFee: '$75',
    processingTime: '5-7 business days',
    annualReportFee: '$350',
    description: 'Nevada has no state income tax and strong privacy protections for business owners.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$100',
    description: 'New Hampshire has no state income tax and offers a business-friendly environment.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    filingFee: '$125',
    processingTime: '7-10 business days',
    annualReportFee: '$75',
    description: 'New Jersey provides access to major Northeast markets and transportation hubs.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    filingFee: '$50',
    processingTime: '10-15 business days',
    annualReportFee: '$0',
    description: 'New Mexico offers low fees with no annual report requirement for LLCs.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'New York',
    slug: 'new-york',
    filingFee: '$200',
    processingTime: '7-10 business days',
    annualReportFee: '$9',
    description: 'New York requires publication but offers access to major markets and business opportunities.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    filingFee: '$125',
    processingTime: '7-10 business days',
    annualReportFee: '$200',
    description: 'North Carolina is a growing business hub with strong technology and research sectors.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    filingFee: '$135',
    processingTime: '7-10 business days',
    annualReportFee: '$50',
    description: 'North Dakota offers energy sector opportunities and agricultural business advantages.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    filingFee: '$99',
    processingTime: '7-10 business days',
    annualReportFee: '$0',
    description: 'Ohio has no annual report fee and provides access to major Midwest markets.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$25',
    description: 'Oklahoma offers affordable fees and a growing energy and aerospace sector.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$100',
    description: 'Oregon has no state sales tax and is a hub for outdoor recreation and technology.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    filingFee: '$125',
    processingTime: '7-10 business days',
    annualReportFee: '$7',
    description: 'Pennsylvania offers access to major East Coast markets with minimal annual fees.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    filingFee: '$150',
    processingTime: '7-10 business days',
    annualReportFee: '$50',
    description: 'Rhode Island provides access to Northeast markets with a growing innovation economy.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    filingFee: '$110',
    processingTime: '7-10 business days',
    annualReportFee: '$0',
    description: 'South Carolina has no annual report fee and offers growing manufacturing opportunities.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    filingFee: '$150',
    processingTime: '7-10 business days',
    annualReportFee: '$50',
    description: 'South Dakota has no state income tax and business-friendly regulations.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    filingFee: '$300',
    processingTime: '5-7 business days',
    annualReportFee: '$300',
    description: 'Tennessee has no state income tax and is a growing center for healthcare and logistics.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Texas',
    slug: 'texas',
    filingFee: '$300',
    processingTime: '5-7 business days',
    annualReportFee: '$0',
    description: 'Texas has no state income tax and no annual report fee, making it highly attractive for LLCs.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Utah',
    slug: 'utah',
    filingFee: '$70',
    processingTime: '5-7 business days',
    annualReportFee: '$18',
    description: 'Utah offers low fees and is consistently ranked as one of the best states for business.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    filingFee: '$125',
    processingTime: '7-10 business days',
    annualReportFee: '$35',
    description: 'Vermont provides a stable environment with growing tourism and artisan industries.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$50',
    description: 'Virginia offers proximity to D.C. and access to government contracting opportunities.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Washington',
    slug: 'washington',
    filingFee: '$200',
    processingTime: '5-7 business days',
    annualReportFee: '$69',
    description: 'Washington has no state income tax and is a hub for technology and aerospace industries.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    filingFee: '$100',
    processingTime: '7-10 business days',
    annualReportFee: '$25',
    description: 'West Virginia offers low fees and opportunities in energy and natural resources sectors.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    filingFee: '$130',
    processingTime: '7-10 business days',
    annualReportFee: '$25',
    description: 'Wisconsin provides access to Great Lakes markets with strong manufacturing roots.',
    benefits: [],
    expeditedTime: undefined
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    filingFee: '$100',
    processingTime: '5-7 business days',
    annualReportFee: '$60',
    description: 'Wyoming has no state income tax and offers strong privacy protections for LLC owners.',
    benefits: [],
    expeditedTime: undefined
  },
];
