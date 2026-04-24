import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';
import type {
  OrderState,
  CompanyInfo,
  ExpeditedFiling,
  ContactInfo,
  CompanyAddressInfo,
  MemberInfo,
  AgentInfo,
  TaxIdInfo,
  TaxConsultation,
  LicenseInfo,
  OrderAddon,
  OrderSummaryItem,
  StateSelection,
  Package,
} from '../types/order';

const STORAGE_KEY = 'fpg_order_data';

const initialOrderState: OrderState = {
  entityType: '',
  selectedState: null,
  selectedPackage: null,
  companyInfo: { llcName: '', designator: 'LLC', managementMethod: '', businessPurpose: '', nonprofitHasMembers: '', nonprofitPurpose: '' },
  expeditedFiling: { selected: 'normal', fee: 0 },
  contactInfo: { firstName: '', lastName: '', email: '', phone: '', smsConsent: false },
  companyAddress: { addressType: 'virtual', country: '', street: '', city: '', state: '', zip: '' },
  members: [],
  agentInfo: {
    option: 'bizee', agentType: 'individual',
    firstName: '', lastName: '', companyName: '',
    street: '', city: '', state: '', zip: '', country: '',
  },
  taxIdInfo: {
    foreign: null, idType: null,
    firstName: '', lastName: '', ssn: '', itin: '',
    country: '', street: '', city: '', state: '', zip: '',
  },
  taxConsultation: { selection: '', consent: false },
  wantsBanking: null,
  licenseInfo: { selection: '', street: '', address2: '', city: '', state: '', zip: '', purpose: '' },
  addons: {},
};

interface OrderContextType {
  order: OrderState;
  setInitialSelection: (entityType: string, state: StateSelection, pkg: Package) => void;
  setCompanyInfo: (info: CompanyInfo) => void;
  setExpeditedFiling: (filing: ExpeditedFiling) => void;
  setContactInfo: (info: ContactInfo) => void;
  setCompanyAddress: (address: CompanyAddressInfo) => void;
  setMembers: (members: MemberInfo[]) => void;
  setAgentInfo: (info: AgentInfo) => void;
  setTaxIdInfo: (info: TaxIdInfo) => void;
  setTaxConsultation: (info: TaxConsultation) => void;
  setBanking: (wants: boolean) => void;
  setLicenseInfo: (info: LicenseInfo) => void;
  addAddon: (key: string, addon: OrderAddon) => void;
  removeAddon: (key: string) => void;
  getOrderSummaryItems: () => OrderSummaryItem[];
  getTotal: () => number;
  getStateFee: () => number;
  resetOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used within OrderProvider');
  return context;
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<OrderState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return { ...initialOrderState, ...JSON.parse(stored) };
      } catch {
        return initialOrderState;
      }
    }
    return initialOrderState;
  });

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  }, [order]);

  const setInitialSelection = (entityType: string, state: StateSelection, pkg: Package) => {
    setOrder(prev => ({ ...prev, entityType, selectedState: state, selectedPackage: pkg }));
  };

  const setCompanyInfo = (info: CompanyInfo) => {
    setOrder(prev => ({ ...prev, companyInfo: info }));
  };

  const setExpeditedFiling = (filing: ExpeditedFiling) => {
    setOrder(prev => {
      const newAddons = { ...prev.addons };
      if (filing.selected === 'fast' && filing.fee > 0) {
        newAddons.expeditedFiling = { name: 'Expedited Filing', price: filing.fee };
      } else {
        delete newAddons.expeditedFiling;
      }
      return { ...prev, expeditedFiling: filing, addons: newAddons };
    });
  };

  const setContactInfo = (info: ContactInfo) => {
    setOrder(prev => ({ ...prev, contactInfo: info }));
  };

  const setCompanyAddress = (address: CompanyAddressInfo) => {
    setOrder(prev => {
      const newAddons = { ...prev.addons };
      if (address.addressType === 'virtual') {
        newAddons.virtualAddress = { name: 'Virtual Address (1st Month)', price: 0 };
      } else {
        delete newAddons.virtualAddress;
      }
      return { ...prev, companyAddress: address, addons: newAddons };
    });
  };

  const setMembers = (members: MemberInfo[]) => {
    setOrder(prev => ({ ...prev, members }));
  };

  const setAgentInfo = (info: AgentInfo) => {
    setOrder(prev => {
      const newAddons = { ...prev.addons };
      if (info.option === 'bizee') {
        newAddons.registeredAgent = { name: 'Registered Agent (1st Year)', price: 0 };
      } else {
        delete newAddons.registeredAgent;
      }
      return { ...prev, agentInfo: info, addons: newAddons };
    });
  };

  const setTaxIdInfo = (info: TaxIdInfo) => {
    setOrder(prev => ({ ...prev, taxIdInfo: info }));
  };

  const setTaxConsultation = (info: TaxConsultation) => {
    setOrder(prev => {
      const newAddons = { ...prev.addons };
      if (info.selection === 'yes') {
        newAddons.taxConsultation = { name: 'Tax Consultation', price: 0 };
      } else {
        delete newAddons.taxConsultation;
      }
      return { ...prev, taxConsultation: info, addons: newAddons };
    });
  };

  const setBanking = (wants: boolean) => {
    setOrder(prev => {
      const newAddons = { ...prev.addons };
      if (wants) {
        newAddons.banking = { name: 'Business Banking Setup', price: 0 };
      } else {
        delete newAddons.banking;
      }
      return { ...prev, wantsBanking: wants, addons: newAddons };
    });
  };

  const setLicenseInfo = (info: LicenseInfo) => {
    setOrder(prev => {
      const newAddons = { ...prev.addons };
      if (info.selection === 'yes') {
        newAddons.licenseResearch = { name: 'Business License Research', price: 99 };
      } else {
        delete newAddons.licenseResearch;
      }
      return { ...prev, licenseInfo: info, addons: newAddons };
    });
  };

  const addAddon = (key: string, addon: OrderAddon) => {
    setOrder(prev => ({ ...prev, addons: { ...prev.addons, [key]: addon } }));
  };

  const removeAddon = (key: string) => {
    setOrder(prev => {
      const newAddons = { ...prev.addons };
      delete newAddons[key];
      return { ...prev, addons: newAddons };
    });
  };

  const getStateFee = (): number => {
    if (!order.selectedState) return 0;
    return parseInt(order.selectedState.filingFee.replace(/[^0-9]/g, '')) || 0;
  };

  const getOrderSummaryItems = (): OrderSummaryItem[] => {
    const items: OrderSummaryItem[] = [];

    if (order.selectedPackage) {
      items.push({
        label: `${order.selectedPackage.name} Package`,
        price: order.selectedPackage.price,
      });
    }

    if (order.selectedState) {
      items.push({
        label: `${order.selectedState.name} State Fee`,
        price: getStateFee(),
      });
    }

    Object.values(order.addons).forEach(addon => {
      items.push({
        label: addon.name,
        price: addon.price,
        isFree: addon.price === 0,
      });
    });

    return items;
  };

  const getTotal = (): number => {
    const packagePrice = order.selectedPackage?.price || 0;
    const stateFee = getStateFee();
    const addonsTotal = Object.values(order.addons).reduce((sum, a) => sum + a.price, 0);
    return packagePrice + stateFee + addonsTotal;
  };

  const resetOrder = () => {
    setOrder(initialOrderState);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <OrderContext.Provider value={{
      order,
      setInitialSelection, setCompanyInfo, setExpeditedFiling,
      setContactInfo, setCompanyAddress, setMembers, setAgentInfo,
      setTaxIdInfo, setTaxConsultation, setBanking, setLicenseInfo,
      addAddon, removeAddon, getOrderSummaryItems, getTotal, getStateFee,
      resetOrder,
    }}>
      {children}
    </OrderContext.Provider>
  );
}
