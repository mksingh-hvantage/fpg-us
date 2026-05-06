import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import GetStartedModal from '../components/GetStartedModal';
import {
  Shield, Clock, Bell, FileCheck, Lock, MapPin,
  CheckCircle2, ChevronDown, ArrowRight, Play
} from 'lucide-react';

type FAQItem = { title: string; content: string; };

/* ── Utility: colour last N words cyan-600 ─────────────────────────────── */
function ColorLastWords({ text, count = 2 }: { text: string; count?: number }) {
  const words = text.trim().split(' ');
  const main = words.slice(0, words.length - count).join(' ');
  const tail = words.slice(words.length - count).join(' ');
  return (
    <>
      {main}{main ? ' ' : ''}
      <span style={{ color: '#0891b2' }}>{tail}</span>
    </>
  );
}

export default function RegAgent() {
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  const [open, setOpen]             = useState<number | null>(null);
  const [videoOpen, setVideoOpen]   = useState(false);

  const toggle    = (i: number) => setOpen(open === i ? null : i);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const faq: FAQItem[] = [
    { title: "Does my company actually need a registered agent?", content: "In most U.S. states every LLC or corporation must appoint a registered agent. This person or service receives legal notices, government mail, and official compliance documents on behalf of your company." },
    { title: "What advantages come with using a professional registered agent?", content: "A professional registered agent ensures that critical documents reach you quickly and safely while also helping you stay organized with state compliance reminders." },
    { title: "Why do some providers include a free registered agent service?", content: "Many formation providers include the first year of registered agent service without extra cost when you register your business with them." },
    { title: "How can a registered agent reduce my administrative workload?", content: "Instead of constantly monitoring state correspondence yourself, the agent receives documents and sends you notifications so you can focus on running your business." },
    { title: "What happens if my business doesn't maintain a registered agent?", content: "Failing to maintain one may result in penalties, loss of good standing with the state, or missing important legal notices." },
  ];

  const benefits = [
    { icon: Shield,    title: "Privacy Protection",      description: "Keep your personal address off public records and maintain your privacy with our registered agent service.", color: '#0891b2', bg: '#ecfeff' },
    { icon: Clock,     title: "Available Business Hours", description: "We're available during standard business hours to receive important legal and compliance documents on your behalf.", color: '#7c3aed', bg: '#f5f3ff' },
    { icon: Bell,      title: "Instant Notifications",   description: "Get immediate alerts via email and text when important documents arrive, so you're always in the loop.", color: '#0369a1', bg: '#eff6ff' },
    { icon: FileCheck, title: "Document Management",     description: "Professional handling and secure delivery of all service of process and compliance documents.", color: '#059669', bg: '#ecfdf5' },
    { icon: Lock,      title: "Compliance Assurance",    description: "Stay compliant with state requirements and never miss critical filing deadlines or legal notices.", color: '#d97706', bg: '#fffbeb' },
    { icon: MapPin,    title: "Nationwide Coverage",     description: "Physical presence in all 50 states, ensuring reliable service no matter where you operate.", color: '#dc2626', bg: '#fef2f2' },
  ];

  const features = [
    "Free first year when bundled with LLC formation",
    "Professional acceptance of legal documents",
    "Instant email and SMS notifications",
    "Secure online document access portal",
    "Annual report reminders and compliance alerts",
    "No long-term contracts required",
    "Easy change of agent process",
    "Privacy protection for business owners",
  ];

  const faqs = [
    { question: "What is a registered agent and why is it required?", answer: "A registered agent is a legally designated person or company responsible for receiving official state correspondence, legal notices, and service of process on behalf of your business. Most U.S. states require every LLC and corporation to maintain an active registered agent to remain compliant." },
    { question: "Do LLCs and corporations need a registered agent?", answer: "Yes. All LLCs, corporations, and most formal business entities are legally required to appoint a registered agent in the state where they are formed or registered to do business." },
    { question: "Can I be my own registered agent?", answer: "You can act as your own registered agent in most states if you have a physical address in the state and are available during normal business hours. However, using a professional registered agent service offers privacy, reliability, and compliance benefits." },
    { question: "What happens if I don't have a registered agent?", answer: "Failing to maintain a registered agent can lead to penalties, loss of good standing, missed legal notices, fines, or even administrative dissolution of your business by the state." },
    { question: "How much does a registered agent service cost?", answer: "Registered agent service costs typically range from $99 to $300 per year, depending on the provider and state. Professional services often include compliance reminders, document scanning, and online access." },
    { question: "What documents does a registered agent receive?", answer: "A registered agent receives legal documents such as lawsuits (service of process), state notices, tax correspondence, annual report reminders, and other official government communications." },
    { question: "Does a registered agent protect my privacy?", answer: "Yes. Using a registered agent service keeps your personal or business address off public records, helping protect your privacy and reduce unsolicited mail." },
    { question: "Can I change my registered agent later?", answer: "Yes. You can change your registered agent at any time by filing the appropriate form with the state and paying a small filing fee. Many businesses switch to professional agents as they grow." },
    { question: "Do I need a registered agent in every state?", answer: "If your business is registered to operate in multiple states (foreign qualification), you must maintain a registered agent in each state where you do business." },
    { question: "What is service of process?", answer: "Service of process refers to the formal delivery of legal documents such as lawsuits or subpoenas. A registered agent ensures these documents are received promptly and handled correctly." },
    { question: "Is a registered agent address required to be physical?", answer: "Yes. A registered agent must have a physical street address in the state of registration. P.O. boxes and virtual addresses are not accepted by state authorities." },
    { question: "How quickly will I receive documents from my registered agent?", answer: "Professional registered agent services typically provide same-day or next-business-day document scanning and digital notifications once documents are received." },
    { question: "Does hiring a registered agent help with compliance?", answer: "Yes. Most registered agent services offer compliance support such as annual report reminders, deadline alerts, and centralized document management to help keep your business in good standing." },
    { question: "Is a registered agent service worth it for small businesses?", answer: "Absolutely. For small businesses and startups, a registered agent service reduces administrative burden, ensures legal reliability, and provides peace of mind at a relatively low annual cost." },
  ];

  return (
    <div className="flex flex-col min-h-screen antialiased bg-white">
      <style>{`
        @keyframes floatOrb {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-22px) scale(1.04); }
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseDot {
          0%,100% { transform:scale(1); opacity:1; }
          50%      { transform:scale(1.7); opacity:.45; }
        }
        @keyframes rotateSlow {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        .h-badge   { animation: slideUp .55s ease both; }
        .h-h1      { animation: slideUp .65s .08s ease both; }
        .h-sub     { animation: slideUp .65s .16s ease both; }
        .h-btns    { animation: slideUp .65s .24s ease both; }
        .h-trust   { animation: slideUp .65s .32s ease both; }
        .h-card    { animation: slideUp .65s .12s ease both; }
        .ring-spin { animation: rotateSlow 22s linear infinite; }
        .ring-rev  { animation: rotateSlow 34s linear reverse infinite; }
        .card-hover {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(8,145,178,.1);
          border-color: #06b6d4;
        }
        .faq-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height .38s ease;
        }
        .faq-body.open { max-height: 360px; }
        .shimmer-text {
          background: linear-gradient(90deg,#67e8f9,#a5f3fc,#67e8f9);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <Helmet>
        <title>Registered Agent Services in USA – Business Management Support | The Future Perfect Global</title>
        <meta name="description" content="Learn about registered agent services in the USA, including requirements, benefits, duties, and how The Future Perfect Global can help you stay compliant with state regulations." />
        <link rel="canonical" href="https://us.thefutureperfectglobal.com/business-management/registered-agent" />
        <meta name="keywords" content="registered agent services USA, registered agent requirements, business registered agent, corporate registered agent service, compliance support USA" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/registered-agent" hrefLang="en-us" />
        <link rel="alternate" href="https://us.thefutureperfectglobal.com/business-management/registered-agent" hrefLang="x-default" />
        <meta name="ROBOTS" content="INDEX, FOLLOW" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Registered Agent Services in USA – Business Management Support" />
        <meta property="og:description" content="Get expert registered agent services for your business in the USA." />
        <meta property="og:url" content="https://us.thefutureperfectglobal.com/business-management/registered-agent" />
        <meta property="og:site_name" content="The Future Perfect Global – USA Business Setup" />
        <meta property="og:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FPGCompanySetup" />
        <meta name="twitter:title" content="Registered Agent Services in USA – Business Compliance" />
        <meta name="twitter:image" content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Service","name":"Registered Agent Services in USA","url":"https://us.thefutureperfectglobal.com/business-management/registered-agent","provider":{"@type":"Organization","name":"The Future Perfect Global","logo":"https://thefutureperfectglobal.ae/uploads/images/logo1.webp"},"description":"Professional registered agent support for U.S. businesses.","areaServed":["United States"],"serviceType":["Registered Agent Services","Business Compliance Support","State Filing Assistance"]}`}</script>
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg,#0c4a6e 0%,#0369a1 35%,#0891b2 65%,#0e7490 100%)',
        padding: '50px 0 50px',
      }}>
        {/* Animated grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Rings */}
        <div className="ring-spin" style={{
          position:'absolute',top:'50%',left:'50%',
          width:700,height:700,marginLeft:-350,marginTop:-350,
          border:'1px solid rgba(255,255,255,.07)',borderRadius:'50%',
          pointerEvents:'none',
        }}/>
        <div className="ring-rev" style={{
          position:'absolute',top:'50%',left:'50%',
          width:980,height:980,marginLeft:-490,marginTop:-490,
          border:'1px solid rgba(255,255,255,.04)',borderRadius:'50%',
          pointerEvents:'none',
        }}/>

        {/* Orbs */}
        {[
          {l:'6%',t:'12%',w:100,d:'0s'},{l:'82%',t:'8%',w:130,d:'1.4s'},
          {l:'78%',t:'68%',w:75,d:'2.8s'},{l:'2%',t:'72%',w:65,d:'1.8s'},
        ].map((o,i)=>(
          <div key={i} style={{
            position:'absolute',left:o.l,top:o.t,
            width:o.w,height:o.w,borderRadius:'50%',
            background:'radial-gradient(circle at 30% 30%,rgba(255,255,255,.14),rgba(255,255,255,.02))',
            border:'1px solid rgba(255,255,255,.1)',
            animation:`floatOrb 8s ease-in-out ${o.d} infinite`,
            pointerEvents:'none',
          }}/>
        ))}

        {/* Glow blobs */}
        <div style={{ position:'absolute',top:'-10%',right:'-4%',width:500,height:500,
          background:'radial-gradient(circle,rgba(6,182,212,.22) 0%,transparent 70%)',borderRadius:'50%',pointerEvents:'none' }}/>
        <div style={{ position:'absolute',bottom:'-14%',left:'-6%',width:580,height:580,
          background:'radial-gradient(circle,rgba(14,116,144,.28) 0%,transparent 70%)',borderRadius:'50%',pointerEvents:'none' }}/>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position:'relative',zIndex:10 }}>

          {/* Two-column layout using flexbox for reliability */}
          <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap:48,
            alignItems:'center',
            justifyContent:'space-between',
          }}>

            {/* ── Left Column ── */}
            <div style={{ flex:'1 1 420px', maxWidth:600 }}>

              {/* Badge */}
              <div className="h-badge" style={{ marginBottom:24 }}>
                <span style={{
                  display:'inline-flex',alignItems:'center',gap:8,
                  background:'rgba(255,255,255,.12)',backdropFilter:'blur(10px)',
                  border:'1px solid rgba(255,255,255,.2)',
                  borderRadius:50,padding:'8px 20px',color:'white',
                  fontWeight:600,fontSize:14,letterSpacing:'0.05em',
                }}>
                  <span style={{
                    width:8,height:8,borderRadius:'50%',background:'#4ade80',display:'inline-block',
                    animation:'pulseDot 2s ease-in-out infinite',flexShrink:0,
                  }}/>
                  Trusted by 500,000+ Businesses
                </span>
              </div>

              {/* H1 */}
              <h1 className="h-h1" style={{
                fontSize:'clamp(2.2rem,4.5vw,3.6rem)',fontWeight:900,lineHeight:1.1,
                color:'white',marginBottom:20,
              }}>
                Professional{' '}
                <span className="shimmer-text">Registered Agent</span>
                {' '}Service
              </h1>

              {/* Sub */}
              <p className="h-sub" style={{
                fontSize:'clamp(.95rem,1.8vw,1.15rem)',lineHeight:1.75,
                color:'rgba(186,230,253,.92)',marginBottom:32,
              }}>
                Protect your privacy, ensure compliance, and never miss important legal documents. Get reliable registered agent service with instant notifications.
              </p>

              {/* Buttons */}
              <div className="h-btns" style={{ display:'flex',flexWrap:'wrap',gap:14,marginBottom:28 }}>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  style={{
                    display:'inline-flex',alignItems:'center',gap:10,
                    background:'white',color:'#0369a1',
                    padding:'14px 30px',borderRadius:50,border:'none',cursor:'pointer',
                    fontWeight:700,fontSize:'1rem',
                    boxShadow:'0 8px 32px rgba(0,0,0,.2)',
                    transition:'transform .2s',
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.05)')}
                  onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
                >
                  Get Started Free <ArrowRight size={18}/>
                </button>
                <button style={{
                  display:'inline-flex',alignItems:'center',gap:8,
                  background:'rgba(255,255,255,.1)',backdropFilter:'blur(8px)',
                  border:'2px solid rgba(255,255,255,.45)',
                  color:'white',padding:'14px 30px',borderRadius:50,
                  cursor:'pointer',fontWeight:700,fontSize:'1rem',
                  transition:'background .2s',
                }}
                  onMouseEnter={e=>(e.currentTarget.style.background='rgba(255,255,255,.18)')}
                  onMouseLeave={e=>(e.currentTarget.style.background='rgba(255,255,255,.1)')}
                >
                  Learn More
                </button>
              </div>

              {/* Trust strip */}
              <div className="h-trust" style={{
                display:'inline-flex',alignItems:'flex-start',gap:12,
                background:'rgba(255,255,255,.12)',backdropFilter:'blur(10px)',
                border:'1px solid rgba(255,255,255,.18)',
                borderRadius:14,padding:'14px 20px',
              }}>
                <CheckCircle2 size={22} style={{ color:'#4ade80',flexShrink:0,marginTop:2 }}/>
                <div>
                  <p style={{ fontWeight:800,color:'white',margin:0,fontSize:'1rem' }}>FREE First Year</p>
                  <p style={{ color:'rgba(186,230,253,.85)',margin:0,fontSize:'0.875rem' }}>When bundled with LLC or corporation formation</p>
                </div>
              </div>
            </div>

            {/* ── Right Column — Pricing card ── */}
            <div style={{ flex:'0 1 360px' }}>
              <div style={{
                background:'rgba(255,255,255,.1)',backdropFilter:'blur(16px)',
                border:'1px solid rgba(255,255,255,.2)',
                borderRadius:24,padding:28,color:'white',
              }}>
                <div style={{
                  borderRadius:16,overflow:'hidden',marginBottom:20,
                  boxShadow:'0 8px 32px rgba(0,0,0,.3)',
                }}>
                  <img
                    src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional business services"
                    style={{ width:'100%',display:'block',opacity:.85 }}
                  />
                </div>

                <div style={{ display:'flex',alignItems:'flex-end',gap:6,marginBottom:16 }}>
                  <span style={{ fontSize:'2.6rem',fontWeight:900,lineHeight:1,color:'#67e8f9' }}>$119</span>
                  <span style={{ fontSize:'0.9rem',color:'rgba(186,230,253,.8)',paddingBottom:4 }}>/year after first year</span>
                </div>

                {['All 50 states covered','Same-day document notifications','Compliance reminders included'].map((f,i)=>(
                  <div key={i} style={{ display:'flex',alignItems:'center',gap:10,marginBottom:10 }}>
                    <CheckCircle2 size={16} style={{ color:'#4ade80',flexShrink:0 }}/>
                    <span style={{ fontSize:'0.875rem',color:'rgba(186,230,253,.9)' }}>{f}</span>
                  </div>
                ))}

                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  style={{
                    marginTop:18,width:'100%',background:'white',color:'#0369a1',
                    border:'none',borderRadius:50,padding:'13px 0',
                    fontWeight:800,fontSize:'1rem',cursor:'pointer',
                    transition:'transform .2s',
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.03)')}
                  onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
                >
                  Start Free →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section style={{ background:'linear-gradient(135deg,#0c4a6e,#0e7490)',padding:'48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:28 }}>
            {[
              { n:'500K+', label:'Businesses Served' },
              { n:'50',    label:'States Covered' },
              { n:'$119',  label:'Per Year (After Free Year)' },
              { n:'24hr',  label:'Document Turnaround' },
            ].map((s,i)=>(
              <div key={i} style={{ textAlign:'center',color:'white' }}>
                <div style={{ fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:900,color:'#67e8f9',lineHeight:1,marginBottom:6 }}>{s.n}</div>
                <div style={{ fontSize:'0.9rem',color:'rgba(186,230,253,.85)',fontWeight:600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section style={{ padding:'96px 0',background:'#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign:'center',marginBottom:60 }}>
            <span style={{
              display:'inline-block',background:'#ecfeff',color:'#0891b2',
              borderRadius:50,padding:'6px 18px',fontSize:13,fontWeight:700,
              letterSpacing:'0.08em',marginBottom:16,
            }}>WHY CHOOSE US</span>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,color:'#0f172a',marginBottom:16 }}>
              <ColorLastWords text="Why Choose Our Registered Agent Service" count={2}/>
            </h2>
            <p style={{ fontSize:'1.1rem',color:'#475569',maxWidth:640,margin:'0 auto' }}>
              Professional, reliable registered agent services that keep your business compliant and your personal information private.
            </p>
          </div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:24 }}>
            {benefits.map((b,idx)=>(
              <div key={idx} className="card-hover" style={{
                background:'#fff',border:'1.5px solid #e2e8f0',borderRadius:20,padding:32,
                display:'flex',flexDirection:'column',gap:14,
              }}>
                <div style={{
                  width:52,height:52,borderRadius:14,background:b.bg,
                  display:'flex',alignItems:'center',justifyContent:'center',
                }}>
                  <b.icon size={26} style={{ color:b.color }}/>
                </div>
                <h3 style={{ fontSize:'1.05rem',fontWeight:800,color:'#0f172a',margin:0 }}>{b.title}</h3>
                <p style={{ fontSize:'0.95rem',color:'#64748b',lineHeight:1.7,margin:0 }}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DO YOU NEED A REGISTERED AGENT ────────────────────────────────── */}
      <section style={{ padding:'96px 0',background:'#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign:'center',marginBottom:56 }}>
            <span style={{
              display:'inline-block',background:'#ecfeff',color:'#0891b2',
              borderRadius:50,padding:'6px 18px',fontSize:13,fontWeight:700,
              letterSpacing:'0.08em',marginBottom:16,
            }}>COMPLIANCE ESSENTIALS</span>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,color:'#0f172a',marginBottom:16 }}>
              <ColorLastWords text="Do You Need a Registered Agent? Here's Why" count={2}/>
            </h2>
            <p style={{ fontSize:'1.1rem',color:'#475569',maxWidth:640,margin:'0 auto' }}>
              A registered agent ensures your company receives important legal documents and compliance notices so you never miss critical deadlines.
            </p>
          </div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))',gap:40,alignItems:'start' }}>

            {/* Mini FAQ */}
            <div>
              <p style={{ color:'#0891b2',fontWeight:700,marginBottom:6,fontSize:'0.9rem',letterSpacing:'0.06em' }}>IMPORTANT THINGS TO UNDERSTAND</p>
              <h3 style={{ fontSize:'1.4rem',fontWeight:800,color:'#0f172a',marginBottom:24 }}>
                Common Questions About <span style={{ color:'#0891b2' }}>Registered Agents</span>
              </h3>
              <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
                {faq.map((item,i)=>(
                  <div key={i} style={{
                    background:'#fff',border:`1.5px solid ${open===i?'#0891b2':'#e2e8f0'}`,
                    borderRadius:16,overflow:'hidden',
                    boxShadow:open===i?'0 4px 16px rgba(8,145,178,.1)':'none',
                    transition:'border-color .3s,box-shadow .3s',
                  }}>
                    <button onClick={()=>toggle(i)} style={{
                      width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',
                      padding:'16px 20px',background:'none',border:'none',cursor:'pointer',textAlign:'left',gap:12,
                    }}>
                      <span style={{ fontWeight:700,color:'#0f172a',fontSize:'0.95rem',flex:1 }}>{item.title}</span>
                      <span style={{
                        color:'#0891b2',fontSize:'1.3rem',fontWeight:700,
                        transform:open===i?'rotate(45deg)':'rotate(0deg)',
                        transition:'transform .3s',display:'inline-block',flexShrink:0,
                      }}>+</span>
                    </button>
                    <div className={`faq-body${open===i?' open':''}`}>
                      <p style={{ padding:'0 20px 16px',color:'#475569',lineHeight:1.7,margin:0 }}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            <div>
              <div style={{
                position:'relative',borderRadius:24,overflow:'hidden',
                boxShadow:'0 24px 56px rgba(0,0,0,.18)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                  alt="Registered Agent Overview"
                  style={{ width:'100%',display:'block',opacity:.65,filter:'brightness(.9)' }}
                />
                <div style={{
                  position:'absolute',inset:0,
                  background:'linear-gradient(135deg,rgba(3,105,161,.5),rgba(14,116,144,.4))',
                }}/>
                <button
                  onClick={()=>setVideoOpen(true)}
                  style={{
                    position:'absolute',inset:0,display:'flex',
                    alignItems:'center',justifyContent:'center',
                    background:'none',border:'none',cursor:'pointer',
                  }}
                >
                  <div style={{
                    width:80,height:80,borderRadius:'50%',
                    background:'rgba(255,255,255,.2)',backdropFilter:'blur(8px)',
                    border:'2px solid rgba(255,255,255,.5)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    transition:'transform .25s,background .25s',
                  }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform='scale(1.12)';(e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,.3)';}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform='scale(1)';(e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,.2)';}}
                  >
                    <Play size={32} style={{ color:'white',marginLeft:4 }} fill="white"/>
                  </div>
                </button>
                <div style={{ position:'absolute',bottom:24,left:24,color:'white' }}>
                  <p style={{ fontWeight:800,fontSize:'1.1rem',margin:0 }}>Watch: What is a Registered Agent?</p>
                  <p style={{ color:'rgba(186,230,253,.85)',margin:'4px 0 0',fontSize:'0.85rem' }}>2 min overview</p>
                </div>
              </div>

              <div style={{ textAlign:'center',marginTop:32 }}>
                <button
                  onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
                  style={{
                    background:'linear-gradient(135deg,#0369a1,#0891b2)',
                    color:'white',padding:'14px 40px',borderRadius:50,
                    border:'none',cursor:'pointer',fontWeight:700,fontSize:'1rem',
                    display:'inline-flex',alignItems:'center',gap:8,
                    boxShadow:'0 4px 16px rgba(8,145,178,.35)',
                    transition:'transform .2s',
                  }}
                  onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.04)')}
                  onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
                >
                  Get Started Today <ArrowRight size={18}/>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {videoOpen && (
          <div style={{
            position:'fixed',inset:0,background:'rgba(0,0,0,.85)',
            display:'flex',alignItems:'center',justifyContent:'center',zIndex:50,
            animation:'fadeIn .2s ease',
          }}>
            <div style={{ position:'relative',width:'100%',maxWidth:860,padding:'0 16px' }}>
              <button onClick={()=>setVideoOpen(false)} style={{
                position:'absolute',top:-40,right:16,
                background:'none',border:'none',color:'white',fontSize:'2rem',cursor:'pointer',lineHeight:1,
              }}>×</button>
              <iframe
                style={{ width:'100%',height:500,borderRadius:16,border:'none' }}
                src="https://www.youtube.com/embed/8jPQjjsBbIc"
                title="Registered Agent"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────────── */}
      <section style={{ padding:'96px 0',background:'#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign:'center',marginBottom:60 }}>
            <span style={{
              display:'inline-block',background:'#ecfeff',color:'#0891b2',
              borderRadius:50,padding:'6px 18px',fontSize:13,fontWeight:700,
              letterSpacing:'0.08em',marginBottom:16,
            }}>WHAT YOU GET</span>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,color:'#0f172a',marginBottom:16 }}>
              <ColorLastWords text="What's Included in Our Service" count={2}/>
            </h2>
            <p style={{ fontSize:'1.1rem',color:'#475569',maxWidth:580,margin:'0 auto' }}>
              Everything you need for reliable, professional registered agent representation.
            </p>
          </div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:18,maxWidth:900,margin:'0 auto' }}>
            {features.map((f,i)=>(
              <div key={i} className="card-hover" style={{
                display:'flex',alignItems:'center',gap:14,
                background:'#fff',border:'1.5px solid #e2e8f0',
                borderRadius:16,padding:'18px 22px',
              }}>
                <div style={{
                  width:36,height:36,borderRadius:10,background:'#ecfeff',flexShrink:0,
                  display:'flex',alignItems:'center',justifyContent:'center',
                }}>
                  <CheckCircle2 size={18} style={{ color:'#0891b2' }}/>
                </div>
                <span style={{ fontWeight:600,color:'#0f172a',fontSize:'0.95rem' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ padding:'96px 0',background:'#f8fafc' }}>
        <div style={{ maxWidth:820,margin:'0 auto',padding:'0 24px' }}>
          <div style={{ textAlign:'center',marginBottom:56 }}>
            <span style={{
              display:'inline-block',background:'#ecfeff',color:'#0891b2',
              borderRadius:50,padding:'6px 18px',fontSize:13,fontWeight:700,
              letterSpacing:'0.08em',marginBottom:16,
            }}>FAQ</span>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,color:'#0f172a',marginBottom:16 }}>
              <ColorLastWords text="Frequently Asked Questions" count={2}/>
            </h2>
            <p style={{ fontSize:'1.1rem',color:'#475569' }}>
              Everything you need to know about registered agent services.
            </p>
          </div>

          <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
            {faqs.map((faq,idx)=>(
              <div key={idx} style={{
                background:'#fff',borderRadius:16,
                border:`1.5px solid ${openFaq===idx?'#0891b2':'#e2e8f0'}`,
                overflow:'hidden',
                boxShadow:openFaq===idx?'0 4px 16px rgba(8,145,178,.1)':'none',
                transition:'border-color .3s,box-shadow .3s',
              }}>
                <button onClick={()=>toggleFaq(idx)} style={{
                  width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',
                  padding:'18px 24px',background:'none',border:'none',cursor:'pointer',textAlign:'left',gap:16,
                }}>
                  <span style={{ fontWeight:700,color:'#0f172a',fontSize:'1rem',flex:1 }}>{faq.question}</span>
                  <ChevronDown size={20} style={{
                    color:'#0891b2',flexShrink:0,
                    transform:openFaq===idx?'rotate(180deg)':'rotate(0deg)',
                    transition:'transform .3s',
                  }}/>
                </button>
                <div className={`faq-body${openFaq===idx?' open':''}`}>
                  <p style={{ padding:'0 24px 18px',color:'#475569',lineHeight:1.7,margin:0 }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{
        padding:'96px 0',
        background:'linear-gradient(135deg,#0c4a6e 0%,#0369a1 40%,#0e7490 100%)',
        position:'relative',overflow:'hidden',
      }}>
        <div style={{
          position:'absolute',top:'50%',left:'50%',width:900,height:900,
          marginLeft:-450,marginTop:-450,borderRadius:'50%',
          background:'radial-gradient(circle,rgba(6,182,212,.15) 0%,transparent 70%)',
          pointerEvents:'none',
        }}/>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ textAlign:'center',position:'relative',zIndex:10 }}>
          <h2 style={{ fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:900,color:'white',marginBottom:16 }}>
            Ready to Get Professional{' '}
            <span style={{ color:'#67e8f9' }}>Registered Agent Service?</span>
          </h2>
          <p style={{ fontSize:'1.15rem',color:'rgba(186,230,253,.9)',maxWidth:560,margin:'0 auto 44px' }}>
            Protect your privacy, ensure compliance, and focus on growing your business. Get started today with our reliable registered agent service.
          </p>

          <div style={{ display:'flex',flexWrap:'wrap',gap:16,justifyContent:'center',marginBottom:40 }}>
            <button
              onClick={() => { setSelectedBusinessType(''); setIsModalOpen(true); }}
              style={{
                background:'white',color:'#0369a1',
                padding:'15px 40px',borderRadius:50,border:'none',cursor:'pointer',
                fontWeight:800,fontSize:'1.05rem',
                display:'inline-flex',alignItems:'center',gap:10,
                boxShadow:'0 8px 32px rgba(0,0,0,.2)',
                transition:'transform .2s',
              }}
              onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.05)')}
              onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
            >
              Start Free First Year <ArrowRight size={18}/>
            </button>
            <a href="/contact" style={{
              display:'inline-flex',alignItems:'center',gap:8,
              background:'rgba(255,255,255,.1)',backdropFilter:'blur(8px)',
              border:'2px solid rgba(255,255,255,.4)',
              color:'white',padding:'15px 40px',borderRadius:50,
              fontWeight:700,fontSize:'1.05rem',textDecoration:'none',
              transition:'background .2s',
            }}
              onMouseEnter={e=>(e.currentTarget.style.background='rgba(255,255,255,.18)')}
              onMouseLeave={e=>(e.currentTarget.style.background='rgba(255,255,255,.1)')}
            >
              Contact Us
            </a>
          </div>

          <div style={{ display:'flex',flexWrap:'wrap',gap:24,justifyContent:'center' }}>
            {['No long-term contracts','Cancel anytime','50-state coverage'].map((s,i)=>(
              <div key={i} style={{ display:'flex',alignItems:'center',gap:8,color:'rgba(186,230,253,.85)',fontWeight:600,fontSize:'0.9rem' }}>
                <CheckCircle2 size={16} style={{ color:'#4ade80' }}/>
                {s}
              </div>
            ))}
          </div>
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