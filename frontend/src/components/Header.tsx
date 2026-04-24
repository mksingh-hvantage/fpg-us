import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, LogIn, Rocket } from 'lucide-react';
import ContactModal from './ContactModal';
import logoFpgus from '../assets/logo-fpgus.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFormationOpen, setMobileFormationOpen] = useState(false);
  const [mobileManagementOpen, setMobileManagementOpen] = useState(false);
  const [mobileOutsourcingOpen, setMobileOutsourcingOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    {/* STICKY BUTTON */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed font-bold right-0 top-1/2 -translate-y-1/2 z-50 bg-cyan-500 text-white px-4 py-4 rounded-l-xl shadow-2xl hover:bg-cyan-700 transition-all"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Contact Us
      </button>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex justify-between items-center text-sm">
              <a
                href="tel:+85265537375"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+852 6553 7375</span>
                <span className="hidden md:inline text-slate-400 ml-2">• Mon-Fri, 9am-6pm CST</span>
              </a>
              <div className="flex items-center gap-6">
                <a
                  href="/login"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Log in</span>
                </a>
                <a
                  href="/start"
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <a href="/" className="flex items-center">
              <img
                src={logoFpgus}
                alt="Logo"
                className="h-12"
              />
            </a>

            <div className="hidden lg:flex items-center gap-2">
              <div className="relative group">
                <button className="flex items-center gap-2 px-5 py-3 text-slate-700 hover:text-cyan-600 font-semibold transition-all rounded-lg hover:bg-slate-50">
                  Business Incorporation
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-2/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 w-screen max-w-5xl">
                    <div className="grid grid-cols-3 gap-10">
                      <div>
                        <a href="/business-formation/form-a-business" className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 px-2">
                          Start a Business
                        </a>
                        <div className="space-y-1">
                          <a
                            href="/llc"
                            className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                          >
                            <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                              LLC Formation
                            </div>
                            <div className="text-sm text-slate-500">Most popular choice</div>
                          </a>
                          <a
                            href="/s-corporation"
                            className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                          >
                            <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                              S Corporation Formation
                            </div>
                            <div className="text-sm text-slate-500">Tax benefits</div>
                          </a>
                          <a
                            href="/c-corporation"
                            className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                          >
                            <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                              C Corporation Formation
                            </div>
                            <div className="text-sm text-slate-500">For investors</div>
                          </a>
                          <a
                            href="/nonprofit"
                            className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item"
                          >
                            <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                              Forming a Nonprofit
                            </div>
                            <div className="text-sm text-slate-500">Tax-exempt status</div>
                          </a>
                        </div>
                      </div>

                      <div>
                        <a href="/essential-services" className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 block px-2 hover:text-cyan-700 transition-colors">
                          Reliable Services
                        </a>
                        <div className="space-y-1">
                          <a href="/virtual-address" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Business Virtual Address
                          </a>
                          <a href="/business-formation/tax-id-ein" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Business EIN / Tax ID
                          </a>
                          <a href="/business-formation/dba" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            DBA (Doing Business As)
                          </a>
                          <a href="/business-formation/business-license-research-package" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Business License Lookup
                          </a>
                          <a href="/business-formation/trademark-registration" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Register Trademark
                          </a>
                          <a href="/business-formation/corporate-llc-kit" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Business LLC Kit
                          </a>
                        </div>
                      </div>

                      <div>
                        <a href="/business-formation/support" className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 block px-2 hover:text-cyan-700 transition-colors">
                          Help Center
                        </a>
                        <div className="space-y-1">
                          <a href="/business-name-generator" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Company Name Generator
                          </a>
                          <a href="/business-name-search" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Business Name Lookup
                          </a>
                          <a href="/state-formation-llc" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            LLC State Guide
                          </a>
                          <a href="/start-a-corporation-by-state" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            State Corporation Formation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-2 px-5 py-3 text-slate-700 hover:text-cyan-600 font-semibold transition-all rounded-lg hover:bg-slate-50">
                  Business Operations
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 w-screen max-w-3xl">
                    <div className="grid grid-cols-2 gap-10">
                      <div>
                        <a href="/business-management" className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 block px-2 hover:text-cyan-700 transition-colors">
                          Reliable Services
                        </a>
                        <div className="space-y-1">
                          <a href="/annual-report" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Annual Return Filing
                          </a>
                          <a href="/business-management/registered-agent" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Business Agent Services
                          </a>
                          <a href="/business-management/registered-agent-change" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Replace Registered Agent
                          </a>
                          <a href="/business-management/amendment" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Corporate Amendment
                          </a>
                          <a href="/business-management/reinstatement" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Account Reinstatement
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 px-2">
                          More Services
                        </div>
                        <div className="space-y-1">
                          <a href="/business-management/foreign-qualification" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Abroad Qualification
                          </a>
                          <a href="/business-management/Certificate-Of-Good-Standing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Compliance Certificate
                          </a>
                          <a href="/business-management/form-2553" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Form 2553 Filing
                          </a>
                          <a href="/business-management/dissolution" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Business Dissolution
                          </a>
                          <a href="/business-management/bookkeeping-consultation" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Accounting & Consulting
                          </a>
                          <a href="/business-management/virtual-mailbox" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
                            Virtual Mail Service
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-2 px-5 py-3 text-slate-700 hover:text-cyan-600 font-semibold transition-all rounded-lg hover:bg-slate-50">
                  Professional Outsourcing
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 w-screen max-w-2xl max-h-[500px] overflow-y-auto">
    
    <div className="grid grid-cols-2 gap-8">
      
      <div>
        <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 px-2">
          Core Outsourcing
        </div>
        <div className="">
          <a href="/outsourcing-services/business-process-outsourcing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Business Process Solutions
          </a>
          <a href="/outsourcing-services/application-outsourcing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Application Management
          </a>
          <a href="/outsourcing-services/infrastructure-outsourcing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Infrastructure Services
          </a>
          <a href="/outsourcing-services/e-commerce-e-store-management-amazon-ebay" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            E-Commerce Management
          </a>
          <a href="/outsourcing-services/customer-service" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Customer Service
          </a>
        </div>
      </div>

      <div>
        <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 px-2">
          Business Support
        </div>
        <div className="">
          <a href="/outsourcing-services/human-resources" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Human Resources
          </a>
          <a href="/outsourcing-services/sourcing-and-procurement" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Sourcing & Procurement
          </a>
          <a href="/outsourcing-services/finance-accounting" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Finance & Accounting
          </a>
          <a href="/outsourcing-services/claims-management" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Claims Management
          </a>
          <a href="/outsourcing-services/reverse-mortgage-process-outsourcing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Mortgage Processing
          </a>
        </div>
      </div>

      <div>
        <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 px-2">
          Digital Solutions
        </div>
        <div className="">
          <a href="/bpo-bps-services" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            BPO/BPS Services
          </a>
          <a href="/bpo-bps-services/data-service" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Data Services
          </a>
          <a href="/bpo-bps-services/data-entry" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Data Entry Services
          </a>
          <a href="/bpo-bps-services/data-management" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Data Management
          </a>
          <a href="/bpo-bps-services/catalog-management" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Catalog Management
          </a>
          <a href="/bpo-bps-services/e-commerce" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            E-Commerce
          </a>
          <a href="/bpo-bps-services/product-data-entry" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Product Data Entry
          </a>
          <a href="/bpo-bps-services/backend-support" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Backend Support
          </a>
        </div> 
      </div>

      <div>
        <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider mb-4 px-2">
          Creative & Marketing
        </div>
        <div className="">
          <a href="/bpo-bps-services/photo-editing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Photo Editing
          </a>
          <a href="/bpo-bps-services/content-writing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Content Writing
          </a>
          <a href="/bpo-bps-services/e-publishing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            E-Publishing
          </a>
          <a href="/bpo-bps-services/seo-and-sem" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            SEO & SEM Services
          </a>
          <a href="/bpo-bps-services/digital-marketing" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Digital Marketing 
          </a>
          <a href="/bpo-bps-services/contingent-workforce-solution" className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-all font-medium">
            Contingent Workforce Solution
          </a>
        </div>
      </div>

    </div>
  </div>
</div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-2 px-5 py-3 text-slate-700 hover:text-cyan-600 font-semibold transition-all rounded-lg hover:bg-slate-50">
                  About Company
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 w-72">
                    <div className="space-y-1">
                      <a href="/about" className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item">
                        <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                          About Company
                        </div>
                        <div className="text-sm text-slate-500">Our story and mission</div>
                      </a>
                      <a href="/company/about" className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item">
                        <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                          How We Works
                        </div>
                        <div className="text-sm text-slate-500">Our process and values</div>
                      </a>
                      <a href="/company/what-makes-us-different" className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item">
                        <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                          Why Choose Us
                        </div>
                        <div className="text-sm text-slate-500">Our unique approach</div>
                      </a>
                      <a href="/articles" className="block px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group/item">
                        <div className="font-bold text-slate-900 mb-0.5 group-hover/item:text-cyan-600 transition-colors">
                          Latest Blogs Articles
                        </div>
                        <div className="text-sm text-slate-500">Guides and articles</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="lg:hidden text-slate-700 hover:text-cyan-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-slate-200">
              <div className="pt-4 space-y-2">

                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setMobileFormationOpen(!mobileFormationOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-slate-900 hover:text-cyan-600 hover:bg-slate-50 rounded-xl font-semibold transition-all"
                  >
                    <span>Business Incorporation</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileFormationOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileFormationOpen && (
                    <div className="mt-2 bg-slate-50 rounded-xl p-3 space-y-2 max-h-[70vh] overflow-y-auto">
                      
                      {/* Start a Business */}
                      <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2">
                        Start a Business
                      </div>

                      <a href="/llc" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        LLC Formation
                      </a>
                      <a href="/s-corporation" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        S Corporation Formation
                      </a>
                      <a href="/c-corporation" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        C Corporation Formation
                      </a>
                      <a href="/nonprofit" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Forming a Nonprofit
                      </a>

                      {/* Reliable Services */}
                      <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2 mt-4">
                        Reliable Services
                      </div>

                      <a href="/virtual-address" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Business Virtual Address
                      </a>
                      <a href="/business-formation/tax-id-ein" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Business EIN / Tax ID
                      </a>
                      <a href="/business-formation/dba" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        DBA (Doing Business As)
                      </a>
                      <a href="/business-formation/business-license-research-package" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Business License Lookup
                      </a>
                      <a href="/business-formation/trademark-registration" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Register Trademark
                      </a>
                      <a href="/business-formation/corporate-llc-kit" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Business LLC Kit
                      </a>

                      {/* Help Center */}
                      <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2 mt-4">
                        Help Center
                      </div>

                      <a href="/business-name-generator" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Company Name Generator
                      </a>
                      <a href="/business-name-search" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Business Name Lookup
                      </a>
                      <a href="/state-formation-llc" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        LLC State Guide
                      </a>
                      <a href="/start-a-corporation-by-state" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        State Corporation Formation
                      </a>

                    </div>
                  )}
                </div>

                <div className="border-b border-slate-100 pb-2">
                    <button
                      onClick={() => setMobileManagementOpen(!mobileManagementOpen)}
                      className="w-full flex items-center justify-between px-4 py-2 text-slate-900 hover:text-cyan-600 hover:bg-slate-50 rounded-xl font-semibold transition-all"
                    >
                      <span>Business Operations</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileManagementOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileManagementOpen && (
                      <div className="mt-2 bg-slate-50 rounded-xl p-3 space-y-2 max-h-[70vh] overflow-y-auto">
                        
                        {/* Reliable Services */}
                        <a href="/business-management" className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2">
                          Reliable Services
                        </a>

                        <a href="/annual-report" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Annual Return Filing
                        </a>
                        <a href="/business-management/registered-agent" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Business Agent Services
                        </a>
                        <a href="/business-management/registered-agent-change" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Replace Registered Agent
                        </a>
                        <a href="/business-management/amendment" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Corporate Amendment
                        </a>
                        <a href="/business-management/reinstatement" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Account Reinstatement
                        </a>

                        {/* More Services */}
                        <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2 mt-4">
                          More Services
                        </div>

                        <a href="/business-management/foreign-qualification" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Abroad Qualification
                        </a>
                        <a href="/business-management/Certificate-Of-Good-Standing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Compliance Certificate
                        </a>
                        <a href="/business-management/form-2553" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Form 2553 Filing
                        </a>
                        <a href="/business-management/dissolution" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Business Dissolution
                        </a>
                        <a href="/business-management/bookkeeping-consultation" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Accounting & Consulting
                        </a>
                        <a href="/business-management/virtual-mailbox" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                          Virtual Mail Service
                        </a>

                      </div>
                    )}
                  </div>

                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setMobileOutsourcingOpen(!mobileOutsourcingOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-slate-900 hover:text-cyan-600 hover:bg-slate-50 rounded-xl font-semibold transition-all"
                  >
                    <span>Professional Outsourcing</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileOutsourcingOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileOutsourcingOpen && (
                    <div className="mt-2 bg-slate-50 rounded-xl p-3 max-h-[70vh] overflow-y-auto space-y-2">
                      
                      {/* Core Outsourcing */}
                      <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2">
                        Core Outsourcing
                      </div>
                      <a href="/outsourcing-services/business-process-outsourcing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Business Process Solutions</a>
                      <a href="/outsourcing-services/application-outsourcing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Application Management</a>
                      <a href="/outsourcing-services/infrastructure-outsourcing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Infrastructure Services</a>
                      <a href="/outsourcing-services/e-commerce-e-store-management-amazon-ebay" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>E-Commerce Management</a>
                      <a href="/outsourcing-services/customer-service" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Customer Service</a>

                      {/* Business Support */}
                      <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2 mt-4">
                        Business Support
                      </div>
                      <a href="/outsourcing-services/human-resources" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Human Resources</a>
                      <a href="/outsourcing-services/sourcing-and-procurement" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Sourcing & Procurement</a>
                      <a href="/outsourcing-services/finance-accounting" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Finance & Accounting</a>
                      <a href="/outsourcing-services/claims-management" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Claims Management</a>
                      <a href="/outsourcing-services/reverse-mortgage-process-outsourcing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Mortgage Processing</a>

                      {/* Digital Solutions */}
                      <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2 mt-4">
                        Digital Solutions
                      </div>
                      <a href="/bpo-bps-services" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>BPO/BPS Services</a>
                      <a href="/bpo-bps-services/data-service" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Data Services</a>
                      <a href="/bpo-bps-services/data-entry" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Data Entry Services</a>
                      <a href="/bpo-bps-services/data-management" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Data Management</a>
                      <a href="/bpo-bps-services/catalog-management" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Catalog Management</a>
                      <a href="/bpo-bps-services/e-commerce" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>E-Commerce</a>
                      <a href="/bpo-bps-services/product-data" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Product Data Entry</a>
                      <a href="/bpo-bps-services/backend-support" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Backend Support</a>

                      {/* Creative & Marketing */}
                      <div className="text-lg font-bold text-cyan-600 uppercase tracking-wider px-3 py-2 mt-4">
                        Creative & Marketing
                      </div>
                      <a href="/bpo-bps-services/photo-editing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Photo Editing</a>
                      <a href="/bpo-bps-services/content-writing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Content Writing</a>
                      <a href="/bpo-bps-services/e-publishing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>E-Publishing</a>
                      <a href="/bpo-bps-services/seo-and-sem" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>SEO & SEM Services</a>
                      <a href="/bpo-bps-services/digital-marketing" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</a>
                      <a href="/bpo-bps-services/contingent-workforce-solution" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>Contingent Workforce Solution</a>
                    </div>
                  )}
                </div>

                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-slate-900 hover:text-cyan-600 hover:bg-slate-50 rounded-xl font-semibold transition-all"
                  >
                    <span>About Company</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileAboutOpen && (
                    <div className="mt-2 space-y-1 bg-slate-50 rounded-xl p-3">
                      <a href="/about" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        About Company
                      </a>
                      <a href="/company/about" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        How We Works
                      </a>
                      <a href="/company/what-makes-us-different" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Why Choose Us
                      </a>
                      <a href="/articles" className="block px-3 py-2 text-slate-700 hover:text-cyan-600 hover:bg-white rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                        Latest Blogs Articles
                      </a>
                    </div>
                  )}
                </div>


              </div>
            </div>
          )}
        </nav>
      </header>
          <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
    </>
  );
}
