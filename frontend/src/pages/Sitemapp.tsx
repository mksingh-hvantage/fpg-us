import { FileText, Building2, FolderKanban, Wrench, HelpCircle, MapPin, Tag, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";

interface LinkItem {
  text: string;
  href: string;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  links?: LinkItem[];
  subsections?: { title: string; links: LinkItem[] }[];
  columns?: number;
}

function Section({ title, icon, links, subsections, columns = 3 }: SectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 mb-6 group w-full text-left"
      >
        <div className="text-cyan-600">{icon}</div>
        <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
        <div className="text-gray-400 ml-auto">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      {isOpen && (
        <div>
          {links && (
            <div className={`grid gap-4 ${columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-cyan-600 hover:text-slate-700 hover:underline transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}

          {subsections && (
            <div className="space-y-8">
              {subsections.map((subsection, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{subsection.title}</h3>
                  <div className={`grid gap-4 ${columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                    {subsection.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="text-cyan-600 hover:text-slate-700 hover:underline transition-colors"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Sitemap() {
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
    'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
  <title>
    XML Sitemap – Website Structure & Page Index | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Explore the complete sitemap of The Future Perfect Global USA website. Easily find business setup, corporation formation, compliance, and management pages from our organized site structure."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/sitemap"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="website sitemap, XML sitemap, The Future Perfect Global sitemap, business setup sitemap USA, corporation pages sitemap"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/sitemap"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/sitemap"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Website Sitemap – The Future Perfect Global"
  />
  <meta
    property="og:description"
    content="View the full sitemap of The Future Perfect Global USA website to quickly access business setup, registration, and compliance pages."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/sitemap"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Business Setup"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="The Future Perfect Global Website Sitemap"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Website Sitemap – The Future Perfect Global"
  />
  <meta
    name="twitter:description"
    content="Browse the complete sitemap of The Future Perfect Global USA website."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Website Sitemap",
      "url": "https://us.thefutureperfectglobal.com/sitemap",
      "description": "A structured sitemap page listing all important sections and pages of The Future Perfect Global USA website.",
      "publisher": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        }
      }
    }`}
  </script>
</Helmet>

      <div className="bg-slate-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-teal-50">Find everything you need to start and manage your business</p>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-6xl mx-auto">
        <Section
          title="Pages"
          icon={<FileText size={28} />}
          links={[
            { text: 'Cancellation Policy', href: '/cancellation-policy' },
            { text: 'Affiliates', href: '/affiliates' },
            { text: 'Learning Center', href: '/learning-center' },
            { text: 'Privacy Policy', href: '/privacy-policy' },
            { text: 'Terms of Service', href: '/terms-of-service' },
            { text: 'Contact Us - New Clients', href: '/contact' },
            { text: 'Contact Us - Existing Clients', href: '/support' },
            { text: 'About Us', href: '/about' },
            { text: 'Careers', href: '/careers' },
            { text: 'Form an LLC', href: '/llc' },
            { text: 'Form a Corporation', href: '/corporation' },
            { text: 'Form a Nonprofit', href: '/nonprofit' },
            { text: 'Registered Agent Service', href: '/registered-agent' },
            { text: 'Amendment Service', href: '/amendment' },
            { text: 'Dissolution Service', href: '/dissolution' },
            { text: 'Annual Report Service', href: '/annual-report' },
            { text: 'Business Name Search', href: '/business-name-search' },
            { text: 'Compare Entity Types', href: '/compare' },
          ]}
        />

        <Section
          title="Review Entity Types"
          icon={<Building2 size={28} />}
          links={[
            { text: 'Limited Liability Company (LLC)', href: '/entity-types/llc' },
            { text: 'S-Corporation', href: '/entity-types/s-corporation' },
            { text: 'C-Corporation', href: '/entity-types/c-corporation' },
            { text: 'Nonprofit Corporation', href: '/entity-types/nonprofit' },
          ]}
          columns={2}
        />

        <Section
          title="Manage Your Company"
          icon={<FolderKanban size={28} />}
          subsections={[
            {
              title: 'Corporate Filings',
              links: [
                { text: 'Annual Report Filing', href: '/services/annual-report' },
                { text: 'Certificate of Good Standing', href: '/services/certificate-good-standing' },
                { text: 'Amendments', href: '/services/amendments' },
                { text: 'DBA / Fictitious Name', href: '/services/dba' },
                { text: 'Dissolution', href: '/services/dissolution' },
                { text: 'Foreign Qualification', href: '/services/foreign-qualification' },
                { text: 'Conversion', href: '/services/conversion' },
              ],
            },
            {
              title: 'Corporate Services',
              links: [
                { text: 'Registered Agent Service', href: '/services/registered-agent' },
                { text: 'Business License Research', href: '/services/business-license' },
                { text: 'Operating Agreement', href: '/services/operating-agreement' },
                { text: 'Corporate Bylaws', href: '/services/bylaws' },
                { text: 'Trademark Search & Registration', href: '/services/trademark' },
                { text: 'Business Tax Filing', href: '/services/tax-filing' },
                { text: 'Virtual Mailbox', href: '/services/virtual-mailbox' },
                { text: 'Business Banking', href: '/services/banking' },
              ],
            },
            {
              title: 'IRS Filings',
              links: [
                { text: 'EIN / Tax ID Number', href: '/services/ein' },
                { text: 'S-Corp Tax Election (Form 2553)', href: '/services/s-corp-election' },
                { text: '501(c)(3) Application', href: '/services/501c3' },
              ],
            },
          ]}
        />

        <Section
          title="Resource Tools"
          icon={<Wrench size={28} />}
          links={[
            { text: 'S Corporation Tax Calculator', href: '/tools/s-corp-calculator' },
            { text: 'State Sales Tax Calculator', href: '/tools/sales-tax-calculator' },
            { text: 'Business Name Generator', href: '/tools/business-name-generator' },
            { text: 'LLC Name Search', href: '/tools/llc-name-search' },
            { text: 'Annual Report Due Date Tool', href: '/tools/annual-report-due-dates' },
            { text: 'Franchise Tax Calculator', href: '/tools/franchise-tax-calculator' },
            { text: 'Business Startup Checklist', href: '/tools/startup-checklist' },
            { text: 'Business Plan Template', href: '/tools/business-plan-template' },
            { text: 'State Information Database', href: '/tools/state-information' },
            { text: 'Entity Comparison Tool', href: '/tools/entity-comparison' },
            { text: 'Compliance Calendar', href: '/tools/compliance-calendar' },
            { text: 'Business Formation Guide', href: '/tools/formation-guide' },
            { text: 'LLC vs Corporation', href: '/tools/llc-vs-corporation' },
            { text: 'S-Corp vs C-Corp', href: '/tools/s-corp-vs-c-corp' },
            { text: 'Business Structure Quiz', href: '/tools/structure-quiz' },
            { text: 'Registered Agent Requirements', href: '/tools/registered-agent-requirements' },
            { text: 'Operating Agreement Generator', href: '/tools/operating-agreement-generator' },
            { text: 'Articles of Organization Template', href: '/tools/articles-template' },
          ]}
        />

        <Section
          title="Help Center"
          icon={<HelpCircle size={28} />}
          subsections={[
            {
              title: 'General Information',
              links: [
                { text: 'What is a Business Entity?', href: '/help/what-is-business-entity' },
                { text: 'How to Choose a Business Structure', href: '/help/choose-business-structure' },
                { text: 'What is a Registered Agent?', href: '/help/what-is-registered-agent' },
                { text: 'What is an EIN?', href: '/help/what-is-ein' },
                { text: 'What are Articles of Organization?', href: '/help/articles-of-organization' },
                { text: 'What is an Annual Report?', href: '/help/what-is-annual-report' },
                { text: 'What is a DBA?', href: '/help/what-is-dba' },
                { text: 'What is Foreign Qualification?', href: '/help/foreign-qualification' },
                { text: 'What is Dissolution?', href: '/help/what-is-dissolution' },
                { text: 'What is an Amendment?', href: '/help/what-is-amendment' },
                { text: 'Business License Requirements', href: '/help/business-license-requirements' },
                { text: 'Certificate of Good Standing', href: '/help/certificate-good-standing' },
                { text: 'Business Bank Account Requirements', href: '/help/bank-account' },
                { text: 'How to Get a Business Credit Card', href: '/help/business-credit-card' },
                { text: 'Trademark vs Copyright', href: '/help/trademark-vs-copyright' },
                { text: 'Business Insurance Guide', href: '/help/business-insurance' },
                { text: 'Home Business Setup', href: '/help/home-business' },
              ],
            },
            {
              title: 'LLC Information',
              links: [
                { text: 'What is an LLC?', href: '/help/what-is-llc' },
                { text: 'How to Start an LLC', href: '/help/start-llc' },
                { text: 'LLC vs Sole Proprietorship', href: '/help/llc-vs-sole-proprietorship' },
                { text: 'LLC Operating Agreement', href: '/help/llc-operating-agreement' },
                { text: 'LLC Taxes', href: '/help/llc-taxes' },
                { text: 'Single Member LLC', href: '/help/single-member-llc' },
                { text: 'Multi-Member LLC', href: '/help/multi-member-llc' },
                { text: 'LLC Formation Cost', href: '/help/llc-cost' },
                { text: 'LLC Name Requirements', href: '/help/llc-name-requirements' },
                { text: 'LLC Benefits', href: '/help/llc-benefits' },
                { text: 'LLC Disadvantages', href: '/help/llc-disadvantages' },
                { text: 'How to Dissolve an LLC', href: '/help/dissolve-llc' },
                { text: 'LLC Annual Requirements', href: '/help/llc-annual-requirements' },
                { text: 'LLC Ownership Transfer', href: '/help/llc-ownership-transfer' },
                { text: 'Can an LLC Own Another LLC?', href: '/help/llc-own-llc' },
                { text: 'LLC for Real Estate', href: '/help/llc-real-estate' },
                { text: 'Professional LLC', href: '/help/professional-llc' },
              ],
            },
            {
              title: 'C Corporation Information',
              links: [
                { text: 'What is a C Corporation?', href: '/help/what-is-c-corporation' },
                { text: 'How to Form a C Corporation', href: '/help/form-c-corporation' },
                { text: 'C Corp vs S Corp', href: '/help/c-corp-vs-s-corp' },
                { text: 'C Corporation Taxes', href: '/help/c-corp-taxes' },
                { text: 'Corporate Bylaws', href: '/help/corporate-bylaws' },
                { text: 'Board of Directors', href: '/help/board-of-directors' },
                { text: 'Corporate Stock', href: '/help/corporate-stock' },
                { text: 'Corporate Minutes', href: '/help/corporate-minutes' },
                { text: 'Shareholders Agreement', href: '/help/shareholders-agreement' },
                { text: 'Double Taxation Explained', href: '/help/double-taxation' },
                { text: 'Corporate Compliance', href: '/help/corporate-compliance' },
                { text: 'Close Corporation', href: '/help/close-corporation' },
                { text: 'Public vs Private Corporation', href: '/help/public-vs-private' },
              ],
            },
            {
              title: 'S Corporation Information',
              links: [
                { text: 'What is an S Corporation?', href: '/help/what-is-s-corporation' },
                { text: 'How to Elect S-Corp Status', href: '/help/elect-s-corp' },
                { text: 'S-Corp Eligibility Requirements', href: '/help/s-corp-eligibility' },
                { text: 'S-Corp Tax Benefits', href: '/help/s-corp-tax-benefits' },
                { text: 'S-Corp vs LLC', href: '/help/s-corp-vs-llc' },
                { text: 'S-Corp Shareholder Requirements', href: '/help/s-corp-shareholders' },
                { text: 'S-Corp Salary Requirements', href: '/help/s-corp-salary' },
                { text: 'When to Elect S-Corp Status', href: '/help/when-elect-s-corp' },
                { text: 'S-Corp Distribution Rules', href: '/help/s-corp-distributions' },
                { text: 'S-Corp Quarterly Taxes', href: '/help/s-corp-quarterly-taxes' },
                { text: 'S-Corp Accounting Requirements', href: '/help/s-corp-accounting' },
                { text: 'Converting LLC to S-Corp', href: '/help/llc-to-s-corp' },
                { text: 'S-Corp Health Insurance Deduction', href: '/help/s-corp-health-insurance' },
                { text: 'S-Corp Ownership Transfer', href: '/help/s-corp-ownership-transfer' },
                { text: 'S-Corp Meeting Requirements', href: '/help/s-corp-meetings' },
                { text: 'Revoking S-Corp Election', href: '/help/revoke-s-corp' },
                { text: 'S-Corp for Real Estate', href: '/help/s-corp-real-estate' },
                { text: 'S-Corp Reasonable Compensation', href: '/help/s-corp-compensation' },
                { text: 'S-Corp vs Sole Proprietorship', href: '/help/s-corp-vs-sole-prop' },
                { text: 'S-Corp Formation Timeline', href: '/help/s-corp-timeline' },
              ],
            },
            {
              title: 'Nonprofit Information',
              links: [
                { text: 'What is a Nonprofit?', href: '/help/what-is-nonprofit' },
                { text: 'How to Start a Nonprofit', href: '/help/start-nonprofit' },
                { text: '501(c)(3) vs 501(c)(4)', href: '/help/501c3-vs-501c4' },
                { text: 'Nonprofit vs For-Profit', href: '/help/nonprofit-vs-for-profit' },
                { text: 'Nonprofit Tax Exemption', href: '/help/nonprofit-tax-exemption' },
                { text: 'Nonprofit Board Requirements', href: '/help/nonprofit-board' },
                { text: 'Nonprofit Bylaws', href: '/help/nonprofit-bylaws' },
                { text: 'Nonprofit Fundraising Rules', href: '/help/nonprofit-fundraising' },
                { text: 'Form 1023 vs 1023-EZ', href: '/help/form-1023' },
                { text: 'Nonprofit Annual Requirements', href: '/help/nonprofit-annual-requirements' },
                { text: 'Nonprofit Dissolution', href: '/help/nonprofit-dissolution' },
                { text: 'Charitable Solicitation Registration', href: '/help/charitable-solicitation' },
                { text: 'Nonprofit Conflict of Interest', href: '/help/nonprofit-conflict-interest' },
                { text: 'Church vs 501(c)(3)', href: '/help/church-vs-501c3' },
                { text: 'Nonprofit Director Compensation', href: '/help/nonprofit-compensation' },
              ],
            },
            {
              title: 'Registered Agent Information',
              links: [
                { text: 'What Does a Registered Agent Do?', href: '/help/registered-agent-duties' },
                { text: 'Can I Be My Own Registered Agent?', href: '/help/own-registered-agent' },
                { text: 'Registered Agent Requirements by State', href: '/help/registered-agent-by-state' },
                { text: 'How to Change Registered Agent', href: '/help/change-registered-agent' },
                { text: 'Registered Agent vs Registered Office', href: '/help/agent-vs-office' },
                { text: 'Consequences of No Registered Agent', href: '/help/no-registered-agent' },
                { text: 'Commercial Registered Agent', href: '/help/commercial-registered-agent' },
                { text: 'Registered Agent Service Cost', href: '/help/registered-agent-cost' },
                { text: 'Registered Agent Resignation', href: '/help/registered-agent-resignation' },
                { text: 'Virtual Office vs Registered Agent', href: '/help/virtual-office-vs-agent' },
                { text: 'Registered Agent for Multiple LLCs', href: '/help/agent-multiple-llcs' },
              ],
            },
          ]}
        />

        <Section
          title="LLC State Information"
          icon={<MapPin size={28} />}
          links={states.map(state => ({
            text: `${state} LLC`,
            href: `/state/${state.toLowerCase().replace(/\s+/g, '-')}`
          }))}
        />

        <Section
          title="Corporation State Information"
          icon={<MapPin size={28} />}
          links={states.map(state => ({
            text: `${state} Corporation`,
            href: `${state.toLowerCase().replace(/\s+/g, '-')}-corporation`
          }))}
        />

        <Section
          title="Virtual Mailbox Services"
          icon={<MapPin size={28} />}
          links={[
            'California', 'Texas', 'Florida', 'New York', 'Illinois', 'Pennsylvania',
            'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia',
            'Washington', 'Arizona', 'Massachusetts', 'Tennessee', 'Indiana', 'Missouri',
            'Maryland', 'Wisconsin', 'Colorado', 'Minnesota', 'South Carolina', 'Alabama'
          ].map(state => ({
            text: `${state} Virtual Mailbox`,
            target: `_blank`,
            href: `/business-management/virtual-mailbox/${state.toLowerCase().replace(/\s+/g, '-')}`
          }))}
        />

        <Section
          title="Business Categories"
          icon={<Tag size={28} />}
          links={[
            { text: 'Amazon Business', href: '/category/amazon-business' },
            { text: 'Automotive Business', href: '/category/automotive' },
            { text: 'Beauty Business', href: '/category/beauty' },
            { text: 'Cannabis Business', href: '/category/cannabis' },
            { text: 'Childcare Business', href: '/category/childcare' },
            { text: 'Cleaning Business', href: '/category/cleaning' },
            { text: 'Construction Business', href: '/category/construction' },
            { text: 'Consulting Business', href: '/category/consulting' },
            { text: 'E-commerce Business', href: '/category/ecommerce' },
            { text: 'Event Planning', href: '/category/event-planning' },
            { text: 'Fashion Business', href: '/category/fashion' },
            { text: 'Fitness Business', href: '/category/fitness' },
            { text: 'Food Business', href: '/category/food' },
            { text: 'Franchise Business', href: '/category/franchise' },
            { text: 'Freelancing', href: '/category/freelancing' },
            { text: 'Healthcare Business', href: '/category/healthcare' },
            { text: 'Home Business', href: '/category/home-business' },
            { text: 'Import Export', href: '/category/import-export' },
            { text: 'Internet Business', href: '/category/internet' },
            { text: 'Landscaping Business', href: '/category/landscaping' },
            { text: 'Legal Services', href: '/category/legal' },
            { text: 'Manufacturing', href: '/category/manufacturing' },
            { text: 'Marketing Agency', href: '/category/marketing' },
            { text: 'Mobile Business', href: '/category/mobile' },
            { text: 'Online Business', href: '/category/online' },
            { text: 'Pet Business', href: '/category/pet' },
            { text: 'Photography Business', href: '/category/photography' },
            { text: 'Real Estate', href: '/category/real-estate' },
            { text: 'Restaurant Business', href: '/category/restaurant' },
            { text: 'Retail Business', href: '/category/retail' },
            { text: 'Service Business', href: '/category/service' },
            { text: 'Small Business', href: '/category/small-business' },
            { text: 'Startup Business', href: '/category/startup' },
            { text: 'Technology Business', href: '/category/technology' },
            { text: 'Transportation Business', href: '/category/transportation' },
            { text: 'Vending Machine Business', href: '/category/vending-machine' },
            { text: 'Wedding Business', href: '/category/wedding' },
            { text: 'Women in Business', href: '/category/women-in-business' },
            { text: 'Writing Business', href: '/category/writing' },
          ]}
        />

        <Section
          title="Start A Business Guides"
          icon={<Briefcase size={28} />}
          links={[
            { text: 'Start a Food Truck Business', href: '/start-a-business/food-truck' },
            { text: 'Start a Laundromat Business', href: '/start-a-business/laundromat' },
            { text: 'Start a Cleaning Business', href: '/start-a-business/cleaning' },
            { text: 'Start a Photography Business', href: '/start-a-business/photography' },
            { text: 'Start an E-commerce Business', href: '/start-a-business/ecommerce' },
            { text: 'Start a Consulting Business', href: '/start-a-business/consulting' },
            { text: 'Start a Clothing Line', href: '/start-a-business/clothing-line' },
            { text: 'Start a Coffee Shop', href: '/start-a-business/coffee-shop' },
            { text: 'Start a Bakery', href: '/start-a-business/bakery' },
            { text: 'Start a Salon', href: '/start-a-business/salon' },
            { text: 'Start a Gym', href: '/start-a-business/gym' },
            { text: 'Start a Daycare', href: '/start-a-business/daycare' },
            { text: 'Start a Restaurant', href: '/start-a-business/restaurant' },
            { text: 'Start a Bar', href: '/start-a-business/bar' },
            { text: 'Start a Brewery', href: '/start-a-business/brewery' },
            { text: 'Start a Landscaping Business', href: '/start-a-business/landscaping' },
            { text: 'Start a Car Wash', href: '/start-a-business/car-wash' },
            { text: 'Start a Trucking Company', href: '/start-a-business/trucking' },
            { text: 'Start a Moving Company', href: '/start-a-business/moving' },
            { text: 'Start a Catering Business', href: '/start-a-business/catering' },
            { text: 'Start a Pet Grooming Business', href: '/start-a-business/pet-grooming' },
            { text: 'Start a Dog Walking Business', href: '/start-a-business/dog-walking' },
            { text: 'Start a Handyman Business', href: '/start-a-business/handyman' },
            { text: 'Start a Painting Business', href: '/start-a-business/painting' },
            { text: 'Start a Plumbing Business', href: '/start-a-business/plumbing' },
            { text: 'Start an HVAC Business', href: '/start-a-business/hvac' },
            { text: 'Start a Roofing Business', href: '/start-a-business/roofing' },
            { text: 'Start an Electrical Business', href: '/start-a-business/electrical' },
            { text: 'Start a Pressure Washing Business', href: '/start-a-business/pressure-washing' },
            { text: 'Start a Window Cleaning Business', href: '/start-a-business/window-cleaning' },
            { text: 'Start a Pest Control Business', href: '/start-a-business/pest-control' },
            { text: 'Start a Junk Removal Business', href: '/start-a-business/junk-removal' },
            { text: 'Start a Storage Unit Business', href: '/start-a-business/storage-unit' },
            { text: 'Start a Vending Machine Business', href: '/start-a-business/vending-machine' },
            { text: 'Start an ATM Business', href: '/start-a-business/atm' },
            { text: 'Start a Real Estate Business', href: '/start-a-business/real-estate' },
            { text: 'Start a Property Management Business', href: '/start-a-business/property-management' },
            { text: 'Start an Airbnb Business', href: '/start-a-business/airbnb' },
            { text: 'Start a Dropshipping Business', href: '/start-a-business/dropshipping' },
            { text: 'Start a Print on Demand Business', href: '/start-a-business/print-on-demand' },
            { text: 'Start an Amazon FBA Business', href: '/start-a-business/amazon-fba' },
            { text: 'Start a Digital Marketing Agency', href: '/start-a-business/digital-marketing' },
            { text: 'Start a Digital Nomad Business', href: '/start-a-business/digital-nomad-business' },
            { text: 'Start a Social Media Marketing Business', href: '/start-a-business/social-media-marketing' },
            { text: 'Start a Web Design Business', href: '/start-a-business/web-design' },
            { text: 'Start an App Development Business', href: '/start-a-business/app-development' },
            { text: 'Start a Bookkeeping Business', href: '/start-a-business/bookkeeping' },
            { text: 'Start a Tax Preparation Business', href: '/start-a-business/tax-preparation' },
            { text: 'Start a Life Coaching Business', href: '/start-a-business/life-coaching' },
            { text: 'Start a Personal Training Business', href: '/start-a-business/personal-training' },
            { text: 'Start a Yoga Studio', href: '/start-a-business/yoga-studio' },
          ]}
        />
        </div>
      </div>

      
    </div>
  );
}
