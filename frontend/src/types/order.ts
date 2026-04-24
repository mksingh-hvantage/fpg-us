import type { Package, PackageFeature } from './admin';

export interface StateSelection {
  id: string;
  name: string;
  slug: string;
  filingFee: string;
  processingTime: string;
  annualReportFee: string;
  description: string;
}

export interface CompanyInfo {
  llcName: string;
  designator: string;
  managementMethod: string;
  businessPurpose: string;
  nonprofitHasMembers: string;
  nonprofitPurpose: string;
}

export interface ExpeditedFiling {
  selected: 'fast' | 'normal';
  fee: number;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
}

export interface CompanyAddressInfo {
  addressType: 'virtual' | 'own';
  country: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface MemberInfo {
  type: 'individual' | 'company';
  firstName: string;
  lastName: string;
  ownership: string;
  useAddress: boolean;
  country: string;
  state: string;
}

export interface AgentInfo {
  option: 'bizee' | 'self';
  agentType: 'individual' | 'company';
  firstName: string;
  lastName: string;
  companyName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface TaxIdInfo {
  foreign: 'yes' | 'no' | null;
  idType: 'ssn' | 'itin' | null;
  firstName: string;
  lastName: string;
  ssn: string;
  itin: string;
  country: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface TaxConsultation {
  selection: 'yes' | 'no' | '';
  consent: boolean;
}

export interface LicenseInfo {
  selection: 'yes' | 'no' | '';
  street: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  purpose: string;
}

export interface OrderAddon {
  name: string;
  price: number;
}

export interface OrderSummaryItem {
  label: string;
  price: number | null;
  isFree?: boolean;
  isIncluded?: boolean;
}

export interface OrderState {
  entityType: string;
  selectedState: StateSelection | null;
  selectedPackage: Package | null;
  companyInfo: CompanyInfo;
  expeditedFiling: ExpeditedFiling;
  contactInfo: ContactInfo;
  companyAddress: CompanyAddressInfo;
  members: MemberInfo[];
  agentInfo: AgentInfo;
  taxIdInfo: TaxIdInfo;
  taxConsultation: TaxConsultation;
  wantsBanking: boolean | null;
  licenseInfo: LicenseInfo;
  addons: Record<string, OrderAddon>;
}

export type { Package, PackageFeature };
