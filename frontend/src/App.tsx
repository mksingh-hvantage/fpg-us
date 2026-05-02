import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageWrapper from './components/PageWrapper';

// Admin imports
import AdminLogin from './pages/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';
import RequirePermission from './components/admin/RequirePermission';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import OrderList from './pages/admin/orders/OrderList';
import OrderDetail from './pages/admin/orders/OrderDetail';
import ContactList from './pages/admin/contacts/ContactList';
import ContactDetail from './pages/admin/contacts/ContactDetail';
import ArticleList from './pages/admin/content/ArticleList';
import ArticleForm from './pages/admin/content/ArticleForm';
import StateList from './pages/admin/content/StateList';
import StateForm from './pages/admin/content/StateForm';
import ContractListAdmin from './pages/admin/content/ContractList';
import IndustryList from './pages/admin/content/IndustryList';
import PackageList from './pages/admin/content/PackageList';
import UserList from './pages/admin/users/UserList';
import UserForm from './pages/admin/users/UserForm';
import UserPermissions from './pages/admin/users/UserPermissions';
import AdminCustomerList from './pages/admin/customers/CustomerList';
import AdminCustomerDetail from './pages/admin/customers/CustomerDetail';
// Phase 1: Tasks, Documents, Audit
import TaskList from './pages/admin/tasks/TaskList';
import TaskForm from './pages/admin/tasks/TaskForm';
import TaskDetail from './pages/admin/tasks/TaskDetail';
import DocumentList from './pages/admin/documents/DocumentList';
import AuditLogList from './pages/admin/security/AuditLogList';
// Phase 2: Mailroom, Notifications
import MailroomList from './pages/admin/mailroom/MailroomList';
import MailroomDetail from './pages/admin/mailroom/MailroomDetail';
import NotificationList from './pages/admin/notifications/NotificationList';
import NotificationForm from './pages/admin/notifications/NotificationForm';
// Phase 3: Services, Recommendations, CMS, FAQs, Banners
import ServiceList from './pages/admin/services/ServiceList';
import ServiceForm from './pages/admin/services/ServiceForm';
import RecommendationList from './pages/admin/recommendations/RecommendationList';
import RecommendationForm from './pages/admin/recommendations/RecommendationForm';
import CmsPageList from './pages/admin/cms/CmsPageList';
import CmsPageEditor from './pages/admin/cms/CmsPageEditor';
import FaqList from './pages/admin/cms/FaqList';
import FaqForm from './pages/admin/cms/FaqForm';
import BannerList from './pages/admin/cms/BannerList';
import BannerForm from './pages/admin/cms/BannerForm';
// Phase 4: Payments, Invoices, Analytics
import PaymentList from './pages/admin/payments/PaymentList';
import PaymentDetail from './pages/admin/payments/PaymentDetail';
import InvoiceList from './pages/admin/payments/InvoiceList';
import InvoiceDetail from './pages/admin/payments/InvoiceDetail';
import InvoiceCreate from './pages/admin/payments/InvoiceCreate';
import AnalyticsDashboard from './pages/admin/analytics/AnalyticsDashboard';
// Phase 5: Settings, State Rules, API Keys, Email Templates
import SettingsPage from './pages/admin/settings/SettingsPage';
import StateRuleList from './pages/admin/settings/StateRuleList';
import StateRuleForm from './pages/admin/settings/StateRuleForm';
import ApiKeyList from './pages/admin/settings/ApiKeyList';
import EmailTemplateList from './pages/admin/settings/EmailTemplateList';
import EmailTemplateForm from './pages/admin/settings/EmailTemplateForm';
import Home from './pages/Home';
import LLC from './pages/LLC';
import StartLLCSteps from './pages/StartLLCSteps';
import CPA from './pages/CPA';
import AfterFormingLLC from './pages/AfterFormingLLC'; 
import FormOrderNow from './pages/form-order-now';
import OrderProcess from './pages/process-coinfo';
import ProcessContact from './pages/process-contact';
import ProcessComAdd from './pages/process-company-address';
import ProcessMember from './pages/process-members';
import ProcessAgent from './pages/process-agent';
import ProcesssFour from './pages/process-ss4';
import ProcessBusBank from './pages/process-business-banking';
import ProcessTax from './pages/process-tax-invite';
import ProcessOrderReview from './pages/process-order-review';
import ProcessPay from './pages/process-payment';
import ThankYou from './pages/ThankYou';
import ProcessLicense from './pages/process-licenses';
import ProcessExpedite from './pages/process-expedite';
import ProcessNonprofit from './pages/process-nonprofit';
import Affiliates from './pages/Affiliates';
import SCorporation from './pages/SCorporation';
import WhatIsScorporation from './pages/WhatIsScorporation';
import WhatIsCCorporation from './pages/WhatIsCCorporation';
import WhatIsNonProfitCorporation from './pages/WhatIsNonProfitCorporation';
import CCorporation from './pages/CCorporation';
import Nonprofit from './pages/Nonprofit';
import FuturePerfectGlobalProSuite from './pages/Future-Perfect-Global-Pro-Suite';
import RegisteredAgent from './pages/RegisteredAgent';
import RegAgent from './pages/RegAgent';
import VirtualAddress from './pages/VirtualAddress';
import BusinessVirtualAddress from './pages/BusinessVirtualAddress';
import PersonalVirtualAddress from './pages/PersonalVirtualAddress';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import LLCSCorpElection from './pages/LLCSCorpElection';
import ContactSales from './pages/ContactSales';
import BusinessNameGenerator from './pages/BusinessNameGenerator';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import StateInfo from './pages/StateInfo';
import StateCorp from './pages/StateCorp';
import EIN from './pages/EIN';
import DBA from './pages/DBA';
import AnnualReport from './pages/AnnualReport';
import FillingBusinessTaxes from './pages/Filling-Business-Taxes';
import ManageYourCompany from './pages/Manage-Your-Company';
import BusinessLicense from './pages/BusinessLicense';
import BookkeepingConsultation from './pages/bookkeeping-consultation';
import Trademark from './pages/Trademark';
import Amendment from './pages/Amendment';
import ForeignQualification from './pages/ForeignQualification';
import GoodStanding from './pages/GoodStanding';
import Form2553 from './pages/Form2553';
import Dissolution from './pages/Dissolution';
import BusinessNameSearch from './pages/BusinessNameSearch';
import IndustryGuide from './pages/IndustryGuide';
import ContractTemplate from './pages/ContractTemplate';
import StateLLC from './pages/StateLLC';
import StateBusinessNames from './pages/StateBusinessNames';
import StateCosts from './pages/StateCosts';
import StateTax from './pages/StateTax';
import StateFaq from './pages/StateFaq';
import VirtualMailboxx from './pages/VirtualMailboxx';
import CompanyAbout from './pages/CompanyAbout';
import WhatMakesUsDifferent from './pages/WhatMakesUsDifferent';
import FreeLLC from './pages/FreeLLC';
import CancellationPolicy from './pages/cancellation-policy.tsx';
import BusinessEntityComparison from './pages/BusinessEntityComparison';
import FormABusiness from './pages/FormABusiness';
import EssentialServices from './pages/EssentialServices';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import CheckDeadline from './pages/CheckDeadline';
import Reinstatement from './pages/Reinstatement';
import CertificateOfGoodStanding from './pages/Certificate-Of-Good-Standing';
import SCorpTaxCalculator from './pages/SCorpTaxCalculator';
import EmployerPayrollTaxCalculator from './pages/EmployerPayrollTaxCalculator';
import StateCorporation from './pages/StateCorporation';
import StateFilingFees from './pages/StateFilingFees';
import StateFilingTimes from './pages/StateFilingTimes';
import RegisteredAgentChange from './pages/RegisteredAgentChange';
import CorporateLLCKit from './pages/CorporateLLCKit';
import Sitemap from './pages/Sitemapp';
import { states } from './data/states';
import { industries } from './data/industries';
import { contractTemplates } from './data/contracts';
import StateDetail from './components/StateDetail';
import States from './pages/StateInfo';
import FormAnLLC from './pages/FormAnLLC';
import IncFile from './pages/incfile-is-now-future-perfect-global';
import VirtualMailbox from './pages/VirtualMailbox';
import PartnerWithFuturePerfectGlobal from './pages/Partner-With-FuturePerfectGlobal';
import Disclaimer from './pages/disclaimer';
import HelpCenter from './pages/Help-Center';
import Glossary from './pages/Glossary';
import Login from './pages/Login';
// Customer Dashboard imports
import CustomerProtectedRoute from './components/customer/CustomerProtectedRoute';
import CustomerLayout from './components/customer/CustomerLayout';
import CustomerDashboard from './pages/customer/Dashboard';
import CustomerOrders from './pages/customer/Orders';
import CustomerOrderDetail from './pages/customer/OrderDetail';
import CustomerTasks from './pages/customer/Tasks';
import CustomerDocuments from './pages/customer/Documents';
import CustomerMailroom from './pages/customer/Mailroom';
import CustomerMailDetail from './pages/customer/MailDetail';
import CustomerPayments from './pages/customer/Payments';
import CustomerInvoices from './pages/customer/Invoices';
import CustomerInvoiceDetail from './pages/customer/InvoiceDetail';
import CustomerRecommendations from './pages/customer/Recommendations';
import CustomerMarketplace from './pages/customer/Marketplace';
import CustomerNotifications from './pages/customer/Notifications';
import CustomerSettings from './pages/customer/Settings';
import CustomerSupport from './pages/customer/Support';
import SalesTaxCalculator from './pages/SalesTaxCalculator';
import BusinessLicenseTool from './pages/BusinessLicenseTool';
import NewyorkEntitySearch from './pages/NewyorkEntitySearch';
import VirginiaEntitySearch from './pages/VirginiaEntitySearch';
import GeorgiaEntitySearch from './pages/GeorgiaEntitySearch';
import DelawareEntitySearch from './pages/DelawareEntitySearch';
import MichiganEntitySearch from './pages/MichiganEntitySearch';
import TexasEntitySearch from './pages/TexasEntitySearch';
import NewJerseyEntitySearch from './pages/NewJerseyEntitySearch';
import FloridaEntitySearch from './pages/FloridaEntitySearch';
import WhatIsRegisteredAgent from './pages/WhatIsRegisteredAgent';
import Handyman from './pages/Handyman';
import DigitalNomadBusiness from './pages/DigitalNomadBusiness';
import LaundromatBusiness from './pages/LaundromatBusiness';
import LandscapingBusiness from './pages/LandscapingBusiness';
import RealEstateBusiness from './pages/RealEstateBusiness';
import ShirtBusiness from './pages/ShirtBusiness';
import CateringBusiness from './pages/CateringBusiness';
import CleaningBusiness from './pages/CleaningBusiness';
import BeautySaloonBusiness from './pages/BeautySaloonBusiness';
import ConsultingBusiness from './pages/ConsultingBusiness';
import TeenBusiness from './pages/TeenBusiness';
import OnlineBusiness from './pages/OnlineBusiness';
import AmazonBusiness from './pages/AmazonBusiness';
import SummerBusiness from './pages/SummerBusiness';
import FrenchiseBusiness from './pages/FrenchiseBusiness';
import BarNightclub from './pages/BarNightclub';
import DogWalkingBusiness from './pages/DogWalkingBusiness';
import WithNoMoneyBusiness from './pages/WithNoMoneyBusiness';
import RestaurantBusiness from './pages/RestaurantBusiness';
import PhotographyBusiness from './pages/PhotographyBusiness';
import HomeBusiness from './pages/HomeBusiness';
import SideHustle from './pages/SideHustle';
import WomenBusiness from './pages/WomenBusiness';
import DaycareBusiness from './pages/DaycareBusiness';
import BreweryBusiness from './pages/BreweryBusiness';
import CoachBusiness from './pages/CoachBusiness';
import Airbnb from './pages/Airbnb';
import TravelAgency from './pages/TravelAgency';
import ConstructionCompany from './pages/ConstructionCompany';
import GymPersonalTraining from './pages/GymPersonalTraining';
import EventPlanning from './pages/EventPlanning';
import Bookstore from './pages/Bookstore';
import PublishingCompanyBusiness from './pages/PublishingCompanyBusiness';
import FoodTruck from './pages/FoodTruck';
import Blockchain from './pages/Blockchain';
import BedBreakfast from './pages/BedBreakfast';
import Bakery from './pages/Bakery';
import BusinessManagement from './pages/BusinessManagement';
import BusinessFormation from './pages/BusinessFormation';
import BusinessProcessOutsourcing from './pages/BusinessProcessOutsourcing';
import ReverseMortgageAssistanceServices from './pages/ReverseMortgageAssistanceServices';
import ApplicationOutsourcing from './pages/ApplicationOutsourcing';
import InfrastructureOutsourcing from './pages/InfrastructureOutsourcing';
import EcomManagement from './pages/EcomManagement';
import CustomerService from './pages/CustomerService';
import HumanResources from './pages/HumanResources';
import SouNPro from './pages/SouNPro';
import FinanceAc from './pages/FinanceAc';
import ClaimsManagement from './pages/ClaimsManagement';
import BPOBPS from './pages/BPOBPS';
import DataService from './pages/DataService';
import DataEntry from './pages/DataEntry';
import DataManagement from './pages/DataManagement';
import DataProcessing from './pages/DataProcessing';
import SpecializedData from './pages/SpecializedData';
import EComBPO from './pages/EComBPO';
import BackendSupport from './pages/BackendSupport';
import CatalogManagement from './pages/CatalogManagement';
import ProductDataEntry from './pages/ProductDataEntry';
import PhotoEditing from './pages/PhotoEditing';
import ContentWriting from './pages/ContentWriting';
import Epublishing from './pages/Epublishing';
import SeoSem from './pages/SeoSem';
import DigitalMarketing from './pages/DigitalMarketing';
import MovingCompany from './pages/MovingCompany';
import RecordLabel from './pages/RecordLabel';
import SocialMediaInfluencer from './pages/SocialMediaInfluencer';
import ContingentWorkforceSolution from './pages/ContingentWorkforceSolution';
 
function App() {
  return (

    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes (no public Header/Footer) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            {/* Orders */}
            <Route path="orders" element={<RequirePermission module="Orders"><OrderList /></RequirePermission>} />
            <Route path="orders/:id" element={<RequirePermission module="Orders"><OrderDetail /></RequirePermission>} />
            {/* Contacts */}
            <Route path="contacts" element={<RequirePermission module="Contacts"><ContactList /></RequirePermission>} />
            <Route path="contacts/:id" element={<RequirePermission module="Contacts"><ContactDetail /></RequirePermission>} />
            {/* Articles */}
            <Route path="articles" element={<RequirePermission module="Articles"><ArticleList /></RequirePermission>} />
            <Route path="articles/new" element={<RequirePermission module="Articles"><ArticleForm /></RequirePermission>} />
            <Route path="articles/:id" element={<RequirePermission module="Articles"><ArticleForm /></RequirePermission>} />
            {/* States */}
            <Route path="states" element={<RequirePermission module="States"><StateList /></RequirePermission>} />
            <Route path="states/:id" element={<RequirePermission module="States"><StateForm /></RequirePermission>} />
            {/* Contracts */}
            <Route path="contracts" element={<RequirePermission module="Contracts"><ContractListAdmin /></RequirePermission>} />
            {/* Industries */}
            <Route path="industries" element={<RequirePermission module="Industries"><IndustryList /></RequirePermission>} />
            {/* Packages */}
            <Route path="packages" element={<RequirePermission module="Packages"><PackageList /></RequirePermission>} />
            {/* Users — SUPER_ADMIN only via permissions */}
            <Route path="users" element={<RequirePermission module="Users"><UserList /></RequirePermission>} />
            <Route path="users/new" element={<RequirePermission module="Users"><UserForm /></RequirePermission>} />
            <Route path="users/:id" element={<RequirePermission module="Users"><UserForm /></RequirePermission>} />
            <Route path="users/:id/permissions" element={<RequirePermission module="Permissions"><UserPermissions /></RequirePermission>} />
            {/* Customers */}
            <Route path="customers" element={<RequirePermission module="Users"><AdminCustomerList /></RequirePermission>} />
            <Route path="customers/:id" element={<RequirePermission module="Users"><AdminCustomerDetail /></RequirePermission>} />
            {/* Tasks */}
            <Route path="tasks" element={<RequirePermission module="Tasks"><TaskList /></RequirePermission>} />
            <Route path="tasks/new" element={<RequirePermission module="Tasks"><TaskForm /></RequirePermission>} />
            <Route path="tasks/:id" element={<RequirePermission module="Tasks"><TaskDetail /></RequirePermission>} />
            <Route path="tasks/:id/edit" element={<RequirePermission module="Tasks"><TaskForm /></RequirePermission>} />
            {/* Documents */}
            <Route path="documents" element={<RequirePermission module="Documents"><DocumentList /></RequirePermission>} />
            {/* Audit Logs */}
            <Route path="audit-logs" element={<RequirePermission module="AuditLogs"><AuditLogList /></RequirePermission>} />
            {/* Mailroom */}
            <Route path="mailroom" element={<RequirePermission module="Mailroom"><MailroomList /></RequirePermission>} />
            <Route path="mailroom/:id" element={<RequirePermission module="Mailroom"><MailroomDetail /></RequirePermission>} />
            {/* Notifications */}
            <Route path="notifications" element={<RequirePermission module="Notifications"><NotificationList /></RequirePermission>} />
            <Route path="notifications/new" element={<RequirePermission module="Notifications"><NotificationForm /></RequirePermission>} />
            {/* Services */}
            <Route path="services" element={<RequirePermission module="Services"><ServiceList /></RequirePermission>} />
            <Route path="services/new" element={<RequirePermission module="Services"><ServiceForm /></RequirePermission>} />
            <Route path="services/:id" element={<RequirePermission module="Services"><ServiceForm /></RequirePermission>} />
            {/* Recommendations */}
            <Route path="recommendations" element={<RequirePermission module="Recommendations"><RecommendationList /></RequirePermission>} />
            <Route path="recommendations/new" element={<RequirePermission module="Recommendations"><RecommendationForm /></RequirePermission>} />
            <Route path="recommendations/:id" element={<RequirePermission module="Recommendations"><RecommendationForm /></RequirePermission>} />
            {/* CMS */}
            <Route path="cms" element={<RequirePermission module="CMS"><CmsPageList /></RequirePermission>} />
            <Route path="cms/new" element={<RequirePermission module="CMS"><CmsPageEditor /></RequirePermission>} />
            <Route path="cms/edit/:id" element={<RequirePermission module="CMS"><CmsPageEditor /></RequirePermission>} />
            <Route path="cms/faqs" element={<RequirePermission module="FAQ"><FaqList /></RequirePermission>} />
            <Route path="cms/faqs/new" element={<RequirePermission module="FAQ"><FaqForm /></RequirePermission>} />
            <Route path="cms/faqs/:id" element={<RequirePermission module="FAQ"><FaqForm /></RequirePermission>} />
            <Route path="cms/banners" element={<RequirePermission module="Banners"><BannerList /></RequirePermission>} />
            <Route path="cms/banners/new" element={<RequirePermission module="Banners"><BannerForm /></RequirePermission>} />
            <Route path="cms/banners/:id" element={<RequirePermission module="Banners"><BannerForm /></RequirePermission>} />
            {/* Payments */}
            <Route path="payments" element={<RequirePermission module="Payments"><PaymentList /></RequirePermission>} />
            <Route path="payments/:id" element={<RequirePermission module="Payments"><PaymentDetail /></RequirePermission>} />
            {/* Invoices */}
            <Route path="invoices" element={<RequirePermission module="Invoices"><InvoiceList /></RequirePermission>} />
            <Route path="invoices/new" element={<RequirePermission module="Invoices"><InvoiceCreate /></RequirePermission>} />
            <Route path="invoices/:id" element={<RequirePermission module="Invoices"><InvoiceDetail /></RequirePermission>} />
            {/* Analytics */}
            <Route path="analytics" element={<RequirePermission module="Analytics"><AnalyticsDashboard /></RequirePermission>} />
            {/* Settings */}
            <Route path="settings" element={<RequirePermission module="Settings"><SettingsPage /></RequirePermission>} />
            <Route path="state-rules" element={<RequirePermission module="Settings"><StateRuleList /></RequirePermission>} />
            <Route path="state-rules/new" element={<RequirePermission module="Settings"><StateRuleForm /></RequirePermission>} />
            <Route path="state-rules/:id" element={<RequirePermission module="Settings"><StateRuleForm /></RequirePermission>} />
            <Route path="api-keys" element={<RequirePermission module="Settings"><ApiKeyList /></RequirePermission>} />
            <Route path="email-templates" element={<RequirePermission module="EmailTemplates"><EmailTemplateList /></RequirePermission>} />
            <Route path="email-templates/new" element={<RequirePermission module="EmailTemplates"><EmailTemplateForm /></RequirePermission>} />
            <Route path="email-templates/:id" element={<RequirePermission module="EmailTemplates"><EmailTemplateForm /></RequirePermission>} />
          </Route>
        </Route>

        {/* Customer Dashboard Routes (no public Header/Footer) */}
        <Route path="/dashboard" element={<CustomerProtectedRoute />}>
          <Route element={<CustomerLayout />}>
            <Route index element={<CustomerDashboard />} />
            <Route path="orders" element={<CustomerOrders />} />
            <Route path="orders/:id" element={<CustomerOrderDetail />} />
            <Route path="tasks" element={<CustomerTasks />} />
            <Route path="documents" element={<CustomerDocuments />} />
            <Route path="mailroom" element={<CustomerMailroom />} />
            <Route path="mailroom/:id" element={<CustomerMailDetail />} />
            <Route path="payments" element={<CustomerPayments />} />
            <Route path="invoices" element={<CustomerInvoices />} />
            <Route path="invoices/:id" element={<CustomerInvoiceDetail />} />
            <Route path="recommendations" element={<CustomerRecommendations />} />
            <Route path="marketplace" element={<CustomerMarketplace />} />
            <Route path="notifications" element={<CustomerNotifications />} />
            <Route path="settings" element={<CustomerSettings />} />
            <Route path="support" element={<CustomerSupport />} />
          </Route>
        </Route>

        {/* Public Auth Pages (no Header/Footer) */}

        {/* Public Routes (with Header/Footer) */}
        <Route path="/*" element={
          <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow">
              <PageWrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
              <Route path="/llc" element={<LLC />} />
              <Route path="/start-llc-steps" element={<StartLLCSteps />} />
              <Route path="/cpa" element={<CPA />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/after-forming-llc" element={<AfterFormingLLC />} />
              <Route path="/s-corporation" element={<SCorporation />} />
              <Route path="/what-is-s-corporation" element={<WhatIsScorporation />} />
              <Route path="/what-is-c-corporation" element={<WhatIsCCorporation />} />
              <Route path="/what-is-nonprofit-corporation" element={<WhatIsNonProfitCorporation />} />
              <Route path="/c-corporation" element={<CCorporation />} />
              <Route path="/nonprofit" element={<Nonprofit />} />
              <Route path="/company/future-perfect-global-pro-suite" element={<FuturePerfectGlobalProSuite />} />
              <Route path="/business-management/registered-agent" element={<RegAgent />} />
              <Route path="/business-formation" element={<BusinessFormation />} />
              <Route path="/virtual-address" element={<VirtualAddress />} />
              <Route path="/virtual-address/business" element={<BusinessVirtualAddress />} />
              <Route path="/virtual-address/personal" element={<PersonalVirtualAddress />} />
              <Route path="/business-management/virtual-mailbox" element={<VirtualMailboxx />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/business-name-generator" element={<BusinessNameGenerator />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
              <Route path="/" element={<States />} />
              <Route path="/state-llc-formation/:slug" element={<StateDetail />} />
              <Route path="/start" element={<Home />} />
              <Route path="/business-formation/tax-id-ein" element={<EIN />} />
              <Route path="/form-order-now" element={<FormOrderNow />} />
              <Route path="/process-coinfo" element={<OrderProcess />} />
              <Route path="/process-contact" element={<ProcessContact />} />
              <Route path="/process-company-address" element={<ProcessComAdd />} />
              <Route path="/process-members" element={<ProcessMember />} />
              <Route path="/process-agent" element={<ProcessAgent />} />
              <Route path="/process-ss4" element={<ProcesssFour />} />
              <Route path="/process-business-banking" element={<ProcessBusBank />} />
              <Route path="/process-tax-invite" element={<ProcessTax />} />
              <Route path="/process-licenses" element={<ProcessLicense />} />
              <Route path="/process-order-review" element={<ProcessOrderReview />} />
              <Route path="/process-payment" element={<ProcessPay />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/process-nonprofit" element={<ProcessNonprofit />} />
              <Route path="/process-expedite" element={<ProcessExpedite />} />
              <Route path="/business-formation/dba" element={<DBA />} />
              <Route path="/business-formation/trademark-registration" element={<Trademark />} />
              <Route path="/annual-report" element={<AnnualReport />} />
              <Route path="/business-management/registered-agent" element={<RegisteredAgent />} />
              <Route path="/business-management/amendment" element={<Amendment />} />
              <Route path="/business-management/foreign-qualification" element={<ForeignQualification />} />
              <Route path="/business-management/good-standing" element={<GoodStanding />} />
              <Route path="/business-management/form-2553" element={<Form2553 />} />
              <Route path="/business-management/dissolution" element={<Dissolution />} />
              <Route path="/business-name-search" element={<BusinessNameSearch />} />
              <Route path="/business-formation/business-license-research-package" element={<BusinessLicense />} />
              <Route path="/business-management/bookkeeping-consultation" element={<BookkeepingConsultation />} />
              <Route path="/states" element={<StateInfo />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/business-management/llc-s-corp-election" element={<LLCSCorpElection />} />
              <Route path="/contact-sales" element={<ContactSales />} />
              <Route path="/reviews" element={<About />} />
              <Route path="/blog" element={<Articles />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/terms" element={<Disclaimer />} />
              <Route path="/cancellation-policy" element={<CancellationPolicy />} />
              <Route path="/affiliates" element={<Affiliates />} />
              <Route path="/incfile-is-now-future-perfect-global" element={<IncFile />} />
              <Route path="/check-deadline" element={<CheckDeadline />} />
              <Route path="/state-formation-llc" element={<StateInfo />} />
              <Route path="/start-a-corporation-by-state" element={<StateCorp />} />
              <Route path="/form-an-llc" element={<FormAnLLC />} />
              <Route path="/partner-with-futureperfectglobal" element={<PartnerWithFuturePerfectGlobal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/what-is-registered-agent" element={<WhatIsRegisteredAgent />} />
              <Route path="/sales-tax-calculator" element={<SalesTaxCalculator />} />
              <Route path="/new-york-entity-search" element={<NewyorkEntitySearch />} />
              <Route path="/virginia-entity-search" element={<VirginiaEntitySearch />} />
              <Route path="/georgia-entity-search" element={<GeorgiaEntitySearch />} />
              <Route path="/delaware-entity-search" element={<DelawareEntitySearch />} />
              <Route path="/michigan-entity-search" element={<MichiganEntitySearch />} />
              <Route path="/texas-entity-search" element={<TexasEntitySearch />} />
              <Route path="/new-jersey-entity-search" element={<NewJerseyEntitySearch />} />
              <Route path="/florida-entity-search" element={<FloridaEntitySearch />} />

              {/* Company pages */}
              <Route path="/company/about" element={<CompanyAbout />} />
              
              <Route path="/company/how-we-works" element={<CompanyAbout />} />
              <Route path="/company/what-makes-us-different" element={<WhatMakesUsDifferent />} />

              {/* Business formation pages */}
              <Route path="/business-formation/form-a-business" element={<FormABusiness />} />
              <Route path="/manage-your-company" element={<ManageYourCompany />} />
              <Route path="/manage-your-company/filling-business-taxes" element={<FillingBusinessTaxes />} />
              <Route path="/form-a-business" element={<FormABusiness />} />
              <Route path="/business-formation/essential-services" element={<EssentialServices />} />
              <Route path="/essential-services" element={<EssentialServices />} />
              <Route path="/business-formation/support" element={<Support />} />
              <Route path="/support" element={<Support />} />
              <Route path="/business-license-tool" element={<BusinessLicenseTool />} />
              <Route path="/business-formation/free-llc" element={<FreeLLC />} />
              <Route path="/business-formation/corporate-llc-kit" element={<CorporateLLCKit />} />
              <Route path="/business-formation/business-entity-comparison" element={<BusinessEntityComparison />} />
              <Route path="/business-formation/comparison" element={<BusinessEntityComparison />} />
              <Route path="/business-entity-comparison" element={<BusinessEntityComparison />} />
 
              {/* Business management pages */} 
              <Route path="/business-management" element={<BusinessManagement />} />
              <Route path="/business-management/certificate-of-good-standing" element={<CertificateOfGoodStanding />} />
              <Route path="/business-management/reinstatement" element={<Reinstatement />} />
              <Route path="/business-management/registered-agent-change" element={<RegisteredAgentChange />} />
              <Route path="/business-management/state-filing-fees" element={<StateFilingFees />} />
              <Route path="/business-management/state-filing-times" element={<StateFilingTimes />} />
              <Route path="/state-filing-times" element={<StateFilingTimes />} />
              <Route path="/start-a-business/handyman" element={<Handyman />} />
              <Route path="/start-a-business/digital-nomad-business" element={<DigitalNomadBusiness />} />
              <Route path="/start-a-business/laundromat-business" element={<LaundromatBusiness />} />
              <Route path="/start-a-business/landscaping-business" element={<LandscapingBusiness />} />
              <Route path="/start-a-business/real-estate-business" element={<RealEstateBusiness />} />
              <Route path="/start-a-business/shirt-business" element={<ShirtBusiness />} />
              <Route path="/start-a-business/catering-business" element={<CateringBusiness />} />
              <Route path="/start-a-business/cleaning-business" element={<CleaningBusiness />} />
              <Route path="/start-a-business/beauty-saloon-business" element={<BeautySaloonBusiness />} />
              <Route path="/start-a-business/consulting-business" element={<ConsultingBusiness />} />
              <Route path="/start-a-business/teen-business" element={<TeenBusiness />} />
              <Route path="/start-a-business/online-business" element={<OnlineBusiness />} />
              <Route path="/start-a-business/amazon-business" element={<AmazonBusiness />} />
              <Route path="/start-a-business/summer-business" element={<SummerBusiness />} />
              <Route path="/start-a-business/frenchise-business" element={<FrenchiseBusiness />} />
              <Route path="/start-a-business/bar-nightclub" element={<BarNightclub />} />
              <Route path="/start-a-business/dog-walking-business" element={<DogWalkingBusiness />} />
              <Route path="/start-a-business/with-no-money-business" element={<WithNoMoneyBusiness />} />
              <Route path="/start-a-business/restaurant-business" element={<RestaurantBusiness />} />
              <Route path="/start-a-business/photography-business" element={<PhotographyBusiness />} />
              <Route path="/start-a-business/home-business" element={<HomeBusiness />} />
              <Route path="/start-a-business/construction-company" element={<ConstructionCompany />} />
              <Route path="/start-a-business/side-hustle" element={<SideHustle />} />
              <Route path="/start-a-business/women-business" element={<WomenBusiness />} />
              <Route path="/start-a-business/daycare-business" element={<DaycareBusiness />} />
              <Route path="/start-a-business/brewery-business" element={<BreweryBusiness />} />
              <Route path="/start-a-business/coach-business" element={<CoachBusiness />} />
              <Route path="/start-a-business/airbnb" element={<Airbnb />} />
              <Route path="/start-a-business/travel-agency" element={<TravelAgency />} />
              <Route path="/start-a-business/gym-personal-training" element={<GymPersonalTraining />} />
              <Route path="/start-a-business/event-planning" element={<EventPlanning />} />
              <Route path="/start-a-business/bookstore" element={<Bookstore />} />
              <Route path="/start-a-business/publishing-company-business" element={<PublishingCompanyBusiness />} />
              <Route path="/start-a-business/food-truck" element={<FoodTruck />} />
              <Route path="/start-a-business/blockchain" element={<Blockchain />} />
              <Route path="/start-a-business/bed-and-breakfast" element={<BedBreakfast />} />
              <Route path="/start-a-business/bakery" element={<Bakery />} />
              <Route path="/start-a-business/record-label" element={<RecordLabel />} />
              <Route path="/start-a-business/moving-company" element={<MovingCompany />} />
              <Route path="/start-a-business/social-media-influencer" element={<SocialMediaInfluencer />} />

              {/* Calculator tools */} 
              <Route path="/taxes/s-corporation-tax-calculator" element={<SCorpTaxCalculator />} />
              <Route path="/s-corp-calculator" element={<SCorpTaxCalculator />} />
              <Route path="/employer-payroll-tax-calculator" element={<EmployerPayrollTaxCalculator />} />

              <Route path="outsourcing-services/business-process-outsourcing" element={<BusinessProcessOutsourcing />} />
              <Route path="outsourcing-services/reverse-mortgage-process-outsourcing" element={<ReverseMortgageAssistanceServices />} />
              <Route path="outsourcing-services/application-outsourcing" element={<ApplicationOutsourcing />} />
              <Route path="outsourcing-services/infrastructure-outsourcing" element={<InfrastructureOutsourcing />} />
              <Route path="outsourcing-services/e-commerce-e-store-management-amazon-ebay" element={<EcomManagement />} />
              <Route path="outsourcing-services/customer-service" element={<CustomerService />} />
              <Route path="outsourcing-services/human-resources" element={<HumanResources />} />
              <Route path="outsourcing-services/sourcing-and-procurement" element={<SouNPro />} />
              <Route path="outsourcing-services/finance-accounting" element={<FinanceAc />} />
              <Route path="outsourcing-services/claims-management" element={<ClaimsManagement />} />
              <Route path="bpo-bps-services" element={<BPOBPS />} />
              <Route path="bpo-bps-services/contingent-workforce-solution" element={<ContingentWorkforceSolution />} />
              <Route path="bpo-bps-services/data-service" element={<DataService />} />
              <Route path="bpo-bps-services/data-entry" element={<DataEntry />} />
              <Route path="bpo-bps-services/data-management" element={<DataManagement />} /> 
              <Route path="bpo-bps-services/data-processing" element={<DataProcessing />} />
              <Route path="bpo-bps-services/specialized-data" element={<SpecializedData />} />
              <Route path="bpo-bps-services/e-commerce" element={<EComBPO />} />
              <Route path="bpo-bps-services/backend-support" element={<BackendSupport />} />
              <Route path="bpo-bps-services/catalog-management" element={<CatalogManagement />} />
              <Route path="bpo-bps-services/product-data-entry" element={<ProductDataEntry />} />
              <Route path="bpo-bps-services/photo-editing" element={<PhotoEditing />} />
              <Route path="bpo-bps-services/content-writing" element={<ContentWriting />} />
              <Route path="bpo-bps-services/e-publishing" element={<Epublishing />} />
              <Route path="bpo-bps-services/seo-and-sem" element={<SeoSem />} />
              <Route path="bpo-bps-services/digital-marketing" element={<DigitalMarketing />} />
              
              {/* Industry-specific pages - 45 pages */}
              {industries.map(industry => (
                <Route key={industry.slug} path={`/start-a-business/${industry.slug}`} element={<IndustryGuide />} />
              ))}

              {/* Contract templates - 25 pages */}
              {contractTemplates.map(contract => (
                <Route key={contract.slug} path={`/contract-template/${contract.slug}`} element={<ContractTemplate />} />
              ))}

              {/* State-specific LLC pages - 350+ pages (50 states × 7 sub-pages each) */}
              {states.map(state => (
                <>
                  <Route key={`${state.slug}-llc`} path={`/llc-formation-by-state/${state.slug}`} element={<StateLLC />} />
                  <Route key={`${state.slug}-names`} path={`/llc-formation-by-state/${state.slug}/business-names`} element={<StateBusinessNames />} />
                  <Route key={`${state.slug}-agent`} path={`/llc-formation-by-state/${state.slug}/registered-agent`} element={<RegisteredAgent />} />
                  <Route key={`${state.slug}-fees`} path={`/llc-formation-by-state/${state.slug}/filing-fees`} element={<StateCosts />} />
                  <Route key={`${state.slug}-costs`} path={`/llc-formation-by-state/${state.slug}/costs`} element={<StateCosts />} />
                  <Route key={`${state.slug}-taxes`} path={`/llc-formation-by-state/${state.slug}/taxes`} element={<StateInfo />} />
                  <Route key={`${state.slug}-faqs`} path={`/llc-formation-by-state/${state.slug}/faqs`} element={<StateInfo />} />
                </>
              ))}

              {/* Virtual Mailbox by state - 50 pages */}
              {states.map(() => (
                <Route
          path="/business-management/virtual-mailbox/:stateSlug"
          element={<VirtualMailbox />}
        />
              ))}

              {/* State Corporation pages with subpages - 300 pages (50 states × 6 subpages) */} 
              {states.map(state => (
                <>
                  <Route key={`${state.slug}-corp`} path={`/${state.slug}-corporation`} element={<StateCorporation />} />
                  <Route key={`${state.slug}-corp-names`} path={`/${state.slug}-corporation/business-names`} element={<StateBusinessNames />} />
                  <Route key={`${state.slug}-corp-agents`} path={`/${state.slug}-corporation/registered-agents`} element={<RegisteredAgent />} />
                  <Route key={`${state.slug}-corp-fees`} path={`/${state.slug}-corporation/fees-filing-requirements`} element={<StateCosts />} />
                  <Route key={`${state.slug}-corp-taxes`} path={`/${state.slug}-corporation/business-taxes`} element={<StateTax />} />
                  <Route key={`${state.slug}-corp-faq`} path={`/${state.slug}-corporation/faq`} element={<StateFaq />} />
                  <Route key={`${state.slug}-llc-short`} path={`/${state.slug}-llc`} element={<StateLLC />} />
                </>
              ))}
                </Routes>

              </PageWrapper>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>

  );
}

export default App;
