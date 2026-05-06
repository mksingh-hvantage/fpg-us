import { useState, useEffect, useRef } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { ChevronDown, ChevronUp } from 'lucide-react';

/* ── Colour last two words cyan ── */
function ColorHeading({ text, className }: { text: string; className?: string }) {
  const words = text.trim().split(' ');
  const last = words.slice(-2).join(' ');
  const rest = words.slice(0, -2).join(' ');
  return (
    <span className={className}>
      {rest && <>{rest} </>}
      <span className="text-cyan-600">{last}</span>
    </span>
  );
}

/* ── Scroll-triggered fade-in ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Form2553() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    { step: '01', title: 'Business Earns Revenue', desc: 'Your LLC generates business income from sales, services, or other revenue streams during the financial year.' },
    { step: '02', title: 'Deduct Business Expenses', desc: 'Subtract allowable business expenses such as rent, marketing, salaries, and operational costs from your total revenue.' },
    { step: '03', title: 'Determine Net Business Profit', desc: 'The remaining amount becomes your LLC net profit, which is usually distributed to the owner or members.' },
    { step: '04', title: 'Pay Self-Employment Tax', desc: 'LLC owners typically pay around 15.3% self-employment tax, covering Social Security and Medicare contributions.' },
    { step: '05', title: 'Federal Income Tax', desc: 'After self-employment tax, the remaining earnings are taxed according to U.S. federal income tax brackets.' },
    { step: '06', title: 'State Income Tax', desc: 'Depending on where your company operates, you may also pay state income tax on LLC profits.' },
  ];

  const adminCards = [
    { icon: '$', title: 'Set Up a Monthly Payroll System', desc: 'When your LLC elects S corporation taxation, you must run a formal payroll and pay yourself a reasonable salary. This includes withholding payroll taxes and submitting them to the IRS.' },
    { icon: '📄', title: 'File Payroll and Tax Reports', desc: 'Businesses must regularly file payroll tax forms such as quarterly reports and annual filings. Accurate documentation helps ensure your S corp tax election remains compliant with IRS rules.' },
    { icon: '🧾', title: 'Maintain Proper Accounting Records', desc: 'Accurate bookkeeping is essential when managing an LLC taxed as an S corporation. Tracking salaries, distributions, and expenses ensures correct tax reporting and supports your financial compliance strategy.' },
  ];

  const filingSteps = [
    { title: 'Visit the Official IRS Website', desc: 'Start the process by going to the official Internal Revenue Service website where you can access resources related to the S Corporation tax election and download the required tax forms.' },
    { title: 'Locate the S Corporation Election Section', desc: 'Navigate to the section dedicated to S Corp tax election filing. This area provides details about eligibility requirements, filing deadlines, and instructions for submitting IRS Form 2553.' },
    { title: 'Download IRS Form 2553', desc: 'Download Form 2553 – Election by a Small Business Corporation. This is the official form used by LLCs and corporations to elect S-Corp taxation with the IRS.' },
    { title: 'Complete the Required Business Information', desc: 'Fill out Form 2553 with essential information including your business name, EIN, shareholder details, ownership percentages, and the effective date for your S-Corp tax election.' },
    { title: 'Submit the Form to the IRS', desc: 'After completing the form, submit it to the IRS using the approved submission method, typically by mail or fax. Make sure the form is filed within the required deadline to ensure eligibility.' },
    { title: 'Wait for IRS Approval Notification', desc: 'Once your form has been processed, the IRS will send an official confirmation letter notifying you that your S Corporation election has been approved.' },
  ];

  const faqs = [
    { q: 'What is an S-Corp election for an LLC?', a: 'An S-Corp election allows an LLC to be taxed as an S Corporation by the IRS. This can help reduce self-employment taxes while keeping the LLC\'s legal structure intact.' },
    { q: 'Why would an LLC choose S-Corp tax status?', a: 'Many LLCs elect S-Corp status to save on payroll and self-employment taxes. Owners can pay themselves a reasonable salary and take remaining profits as distributions.' },
    { q: 'How do I file an S-Corp election?', a: 'To elect S-Corp status, your LLC must file IRS Form 2553. The form must be completed accurately and submitted within IRS deadlines.' },
    { q: 'When is the deadline to file Form 2553?', a: 'Generally, Form 2553 must be filed within 75 days of forming your LLC or within 75 days of the start of the tax year you want the election to take effect.' },
    { q: 'Can an existing LLC elect S-Corp status?', a: 'Yes. Both newly formed and existing LLCs can elect S-Corp tax treatment, provided they meet IRS eligibility requirements.' },
    { q: 'Does an S-Corp election change my LLC legally?', a: 'No. The election only changes how your business is taxed. Your LLC structure, liability protection, and state registration remain the same.' },
    { q: 'What are the IRS requirements for S-Corp eligibility?', a: 'To qualify, your business must have no more than 100 shareholders, only allowable owners (U.S. individuals or certain trusts), and only one class of stock.' },
    { q: 'Will an S-Corp election reduce my taxes?', a: 'It can. Many business owners save money by reducing self-employment taxes, but tax savings depend on income level and reasonable salary rules.' },
    { q: 'What is a reasonable salary for an S-Corp owner?', a: 'The IRS requires S-Corp owners to pay themselves a reasonable salary based on industry standards, role, experience, and business income.' },
    { q: 'Do I need payroll after electing S-Corp status?', a: 'Yes. Once your LLC is taxed as an S-Corp, you must run payroll, withhold taxes, and file payroll tax reports.' },
    { q: 'Can I revoke S-Corp status later?', a: 'Yes. An S-Corp election can be revoked, but IRS rules may limit when you can re-elect S-Corp status in the future.' },
    { q: 'Does my state recognize S-Corp election?', a: 'Most states recognize the federal S-Corp election, but some states have additional tax or filing requirements.' },
    { q: 'Will my EIN change after S-Corp election?', a: 'No. Your EIN typically stays the same when your LLC elects S-Corp tax treatment.' },
    { q: 'What happens if Form 2553 is filed late?', a: 'Late filings may still be accepted if you qualify for IRS late election relief. We help ensure proper filing and compliance.' },
    { q: 'Should I consult a professional before choosing S-Corp status?', a: 'Yes. S-Corp election is not ideal for every business. Consulting a tax professional helps determine if it\'s the right move for your situation.' },
  ];

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gray-950">

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Radial glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.11) 0%, transparent 70%)',
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full opacity-[0.08]" style={{
          background: 'radial-gradient(circle, #06b6d4, transparent 70%)',
          animation: 'orb1 9s ease-in-out infinite',
        }} />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full opacity-[0.06]" style={{
          background: 'radial-gradient(circle, #0891b2, transparent 70%)',
          animation: 'orb2 13s ease-in-out infinite',
        }} />

        {/* Photo overlay */}
        <div className="absolute inset-0 opacity-[0.05]">
          <img src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-16">

          {/* Badge */}
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(18px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
              style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67e8f9' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: 'pulse 2s infinite' }} />
              IRS S-Corporation Tax Election
            </span>
          </div>

          {/* H1 */}
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.75s ease 0.25s, transform 0.75s ease 0.25s' }}>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
              <span style={{ color: '#f1f5f9' }}>File IRS Form 2553</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 55%, #0e7490 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Elect S-Corp Status
              </span>
            </h1>
          </div>

          {/* Sub */}
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(22px)', transition: 'opacity 0.75s ease 0.4s, transform 0.75s ease 0.4s' }}>
            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto" style={{ color: '#94a3b8' }}>
              Prepare and submit your S Corporation tax election with IRS Form 2553. This popular tax strategy can help business owners reduce self-employment taxes, maximize tax savings, and maintain the liability protection and flexibility of an LLC.
            </p>
          </div>

          {/* CTA */}
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)', transition: 'opacity 0.75s ease 0.52s, transform 0.75s ease 0.52s' }}>
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow: '0 0 40px rgba(6,182,212,0.35)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(6,182,212,0.55)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(6,182,212,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
            >
              Get Started Today
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-10"
            style={{ opacity: heroVisible ? 1 : 0, transition: 'opacity 0.75s ease 0.7s' }}>
            {[['15.3%', 'SE Tax Rate'], ['$5,661+', 'Avg. Annual Savings'], ['75 Days', 'Filing Deadline']].map(([val, label]) => (
              <div key={label} className="text-center px-6" style={{ borderRight: '1px solid rgba(6,182,212,0.2)' }}>
                <div className="text-2xl font-black text-cyan-400">{val}</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: '#64748b' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll dot */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: heroVisible ? 1 : 0, transition: 'opacity 1s ease 1s', animation: heroVisible ? 'bounce 2s ease-in-out 1.5s infinite' : 'none' }}>
          <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'rgba(6,182,212,0.4)' }}>
            <div className="w-1 h-2 rounded-full bg-cyan-500" style={{ animation: 'scrolldot 2s ease-in-out infinite' }} />
          </div>
        </div>

        <style>{`
          @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(22px,-26px) scale(1.06)} 70%{transform:translate(-14px,18px) scale(0.96)} }
          @keyframes orb2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-26px,22px)} }
          @keyframes scrolldot { 0%,100%{opacity:1;transform:translateY(0)} 50%{opacity:0.3;transform:translateY(6px)} }
          @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        `}</style>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-5 border-y border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-gray-500">
            {['Serving Businesses Since 2018', 'Bootstrapped & Founder-Led', 'Independently Owned', '500+ Entrepreneurs Worldwide'].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW LLCs ARE TAXED ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Default Tax Structure
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
              <ColorHeading text="How LLCs Are Normally Taxed in the U.S." />
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              In most cases, <strong className="text-gray-700">Limited Liability Companies (LLCs)</strong> are taxed under a <strong className="text-gray-700">pass-through taxation system</strong>. This means business profits pass directly to the owner's personal tax return instead of being taxed separately at the company level.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-xs font-black tracking-widest text-cyan-600 mb-4 uppercase">Step {s.step}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LLC vs S-CORP COMPARISON ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Tax Strategy
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
              <ColorHeading text="LLC Tax vs S-Corporation Tax Strategy" />
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Understanding how <strong className="text-gray-700">LLC taxes work in the United States</strong> can help business owners reduce tax liability. By default, LLC profits are subject to <strong className="text-gray-700">self-employment tax</strong>. However, choosing S Corporation taxation may reduce payroll taxes significantly.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <FadeIn>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#ecfeff,#cffafe)', border: '1px solid #a5f3fc' }}>
                      <span className="text-cyan-600 font-black text-sm">LLC</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-600">Self-Employment Tax for a Standard LLC</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    Under the standard <strong className="text-gray-700">LLC pass-through taxation model</strong>, all business profits flow directly to the owner's personal tax return. These earnings are typically subject to <strong className="text-gray-700">self-employment tax</strong>, which covers Social Security and Medicare contributions.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    For example, if your LLC generates <strong className="text-gray-700">$90,000 in net profit</strong>, the entire amount is subject to approximately <strong className="text-gray-700">15.3% self-employment tax</strong>, plus federal and state income taxes.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#ecfeff,#cffafe)', border: '1px solid #a5f3fc' }}>
                      <span className="text-cyan-600 font-black text-xs">S-Corp</span>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-600">LLC Taxed as an S Corporation</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    Many business owners choose to elect <strong className="text-gray-700">S Corporation taxation</strong> for their LLC because it can significantly reduce <strong className="text-gray-700">self-employment taxes</strong>. Instead of paying payroll taxes on all profits, owners split income between a reasonable salary and distributions.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    For instance, if the owner pays themselves a <strong className="text-gray-700">$50,000 salary</strong>, payroll taxes apply only to that amount. The remaining <strong className="text-gray-700">$40,000 can be taken as a distribution</strong>, which is generally not subject to self-employment tax.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Revenue card */}
            <FadeIn delay={150}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-10 flex flex-col items-center justify-center h-full">
                <div className="relative w-52 h-52 flex items-center justify-center mb-6">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#06b6d4" strokeWidth="10"
                      strokeDasharray="263.9" strokeDashoffset="66" strokeLinecap="round" />
                  </svg>
                  <span className="text-3xl font-extrabold text-gray-900">$120K</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Example Annual Business Revenue</h4>
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-cyan-500 flex-shrink-0" />
                      <span className="text-sm">Net Profit</span>
                    </div>
                    <span className="font-bold text-gray-900">$90,000</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-cyan-200 flex-shrink-0" />
                      <span className="text-sm">Business Expenses</span>
                    </div>
                    <span className="font-bold text-gray-900">$30,000</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TAX SAVINGS ESTIMATOR ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Tax Card */}
            <FadeIn>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-5">
                    Live Estimate
                  </div>
                  <h4 className="text-sm text-gray-400 mb-1">Estimated Annual Business Income</h4>
                  <div className="text-4xl font-extrabold text-gray-900 mb-4">$63,000</div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[63%] rounded-full" style={{ background: 'linear-gradient(90deg,#06b6d4,#0891b2)' }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>$0</span><span>$50K</span><span>$100K+</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm text-gray-400 mb-1">Suggested Owner Salary (If Taxed as S-Corp)</h4>
                  <div className="text-4xl font-extrabold text-gray-900 mb-4">$26,000</div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[41%] rounded-full" style={{ background: 'linear-gradient(90deg,#06b6d4,#0891b2)' }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>$0</span><span>$31.5K</span><span>$63K</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-gray-900">Standard LLC Taxes</h5>
                      <p className="text-xs text-gray-400 mt-0.5">Self-employment tax on full profit</p>
                    </div>
                    <span className="bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full font-semibold text-sm border border-cyan-100">$9,639</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-gray-900">LLC Taxed as S-Corp</h5>
                      <p className="text-xs text-gray-400 mt-0.5">Payroll tax only on owner salary</p>
                    </div>
                    <span className="bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full font-semibold text-sm border border-cyan-100">$3,978</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <h5 className="font-bold text-lg text-gray-900">Estimated Tax Savings</h5>
                    <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full font-bold text-sm border border-emerald-100">$5,661</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right content */}
            <FadeIn delay={150}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-6">
                  Tax Savings Calculator
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  <ColorHeading text="Estimate Your LLC Tax Savings With an S-Corporation Election" />
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-5">
                  Many entrepreneurs operating a <strong className="text-gray-700">Limited Liability Company (LLC)</strong> pay unnecessary taxes because they remain under the default <strong className="text-gray-700">self-employment tax structure</strong>. By electing to have your LLC taxed as an <strong className="text-gray-700">S Corporation</strong>, you may legally reduce payroll taxes.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  Our <strong className="text-gray-700">S Corporation tax savings calculator</strong> helps business owners estimate how much money they could potentially save by splitting income between a reasonable salary and business distributions.
                </p>
                <a
                  href="/taxes/s-corporation-tax-calculator"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow: '0 0 24px rgba(6,182,212,0.3)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                >
                  Try the S-Corp Tax Calculator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── REASONABLE SALARY ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">S Corporation Tax Strategy</span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                  <ColorHeading text="How to Set a Reasonable Salary for an S Corporation Owner" />
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-5">
                  When a <strong className="text-gray-700">Limited Liability Company (LLC)</strong> elects to be taxed as an <strong className="text-gray-700">S Corporation</strong>, business owners must pay themselves a <strong className="text-gray-700">reasonable salary</strong>. The IRS requires this compensation because it ensures payroll taxes are properly paid before owners take additional income as distributions.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  A reasonable salary is generally based on what someone with similar skills, experience, and job responsibilities would earn in the same industry. Paying yourself an unrealistically low salary while taking large distributions could trigger <strong className="text-gray-700">IRS audits or penalties</strong>.
                </p>

                <div className="rounded-2xl p-6 mb-6 border border-cyan-200" style={{ background: 'linear-gradient(135deg,#ecfeff,#f0fdff)' }}>
                  <h4 className="font-bold text-gray-900 mb-2">Example Scenario</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    If your business earns <strong className="text-gray-700">$90,000 in profit</strong>, the IRS may expect you to pay yourself a reasonable salary such as <strong className="text-gray-700">$45,000–$60,000</strong>. The remaining income can often be taken as a distribution, which may reduce overall <strong className="text-gray-700">self-employment tax liability</strong>.
                  </p>
                </div>

                <p className="text-lg text-gray-500 leading-relaxed">
                  To determine the right salary level, review industry compensation benchmarks, job roles, and local market rates. Many business owners also consult with a <strong className="text-gray-700">CPA or tax advisor</strong> to ensure their compensation strategy meets IRS requirements.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=1200&auto=format&fit=crop"
                    alt="S Corporation salary strategy"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                </div>
                <div className="absolute -bottom-6 left-8 right-8 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#ecfeff,#cffafe)', border: '1px solid #a5f3fc' }}>
                      <span className="text-cyan-600 font-black text-xs">IRS</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">IRS Requirement</p>
                      <p className="font-bold text-gray-900">Reasonable Owner Salary</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── ADMIN RESPONSIBILITIES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              What It Requires
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              <ColorHeading text="Administrative Responsibilities of Choosing S Corporation Tax Status" />
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Electing to have your <strong className="text-gray-700">LLC taxed as an S Corporation</strong> can significantly reduce <strong className="text-gray-700">self-employment taxes</strong>, but it also introduces additional administrative tasks you must follow to remain compliant with IRS regulations.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {adminCards.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,#ecfeff,#cffafe)', border: '1px solid #a5f3fc' }}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP FILING GUIDE ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Filing Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
              <ColorHeading text="Step-by-Step Guide to Filing an S Corporation Tax Election" />
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              If you want your LLC or business to be taxed as an <strong className="text-gray-700">S Corporation</strong>, you must submit <strong className="text-gray-700">IRS Form 2553</strong>. Follow the steps below to successfully complete your S-Corp tax election.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {filingSteps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="group flex items-start gap-6 bg-white p-8 rounded-2xl border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)' }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 mb-4">
              Common Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              <ColorHeading text="Common Questions About LLC S-Corp Election" />
            </h2>
            <p className="text-xl text-gray-500">Everything you need to know about electing S-Corporation tax status</p>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={Math.min(idx * 25, 280)}>
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${openFaq === idx ? 'border-cyan-300 shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    style={{ background: openFaq === idx ? '#f0fdfe' : '#fff' }}
                  >
                    <span className="text-base font-bold text-gray-900 pr-6">{faq.q}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {openFaq === idx
                        ? <ChevronUp className="w-4 h-4" />
                        : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 bg-cyan-50/30">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.09) 0%, transparent 70%)' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67e8f9' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: 'pulse 2s infinite' }} />
              <span className="text-sm font-semibold">Start saving on taxes today</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Ready to Elect <span className="text-cyan-400">S-Corp Status?</span>
            </h2>
            <p className="text-xl mb-10" style={{ color: '#94a3b8' }}>
              File IRS Form 2553 and start reducing your self-employment taxes today
            </p>

            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow: '0 0 40px rgba(6,182,212,0.35)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(6,182,212,0.55)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(6,182,212,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-2 mt-10 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 text-white font-bold text-sm">4.7/5 on Trustpilot</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedBusinessType={selectedBusinessType}
      />
    </div>
  );
}