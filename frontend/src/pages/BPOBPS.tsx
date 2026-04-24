import GetStartedModal from "../components/GetStartedModal";
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Database,
  PhoneCall,
  Globe,
  Image,
  BarChart3,
  Layers
} from "lucide-react";
import { useState } from "react";

export default function BpoServices() {

const [isModalOpen,setIsModalOpen] = useState(false);
const [selectedBusinessType,setSelectedBusinessType] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

const challenges = [
"Many organizations struggle with managing large volumes of administrative tasks while still maintaining excellent customer service standards.",
"Handling customer communication across phone, email, and digital channels requires dedicated support teams and operational systems.",
"Managing large datasets, documents, and transaction records internally can increase operational costs and reduce efficiency.",
"Businesses expanding globally often require scalable support systems capable of handling customer interactions and operational processes across multiple regions."
];

const services = [
{
title:"Inbound Customer Support",
desc:"Professional call center teams handle customer inquiries, product support requests, service issues, and order tracking while maintaining consistent communication quality.",
icon:PhoneCall
},
{
title:"Outbound Customer Engagement",
desc:"Outbound communication services support lead generation, appointment scheduling, customer follow-ups, surveys, and market outreach campaigns.",
icon:Globe
},
{
title:"Back Office Operations",
desc:"Administrative services including document processing, transaction handling, record management, and operational workflow support.",
icon:Layers
},
{
title:"Data Processing Services",
desc:"High-volume data entry, data conversion, form processing, document digitization, and structured database management solutions.",
icon:Database
},
{
title:"Digital Marketing & SEO Support",
desc:"Online visibility improvement through search engine optimization, digital marketing campaigns, content development, and website optimization.",
icon:BarChart3
},
{
title:"Image Editing & Digital Media Services",
desc:"Professional photo editing, background removal, color correction, and graphic optimization for marketing, e-commerce, and media businesses.",
icon:Image
}
];

const benefits = [
"Reduce operational overhead while maintaining consistent service quality across customer and administrative processes.",
"Allow internal teams to focus on product innovation, strategic planning, and market expansion.",
"Improve service efficiency with structured operational workflows and dedicated outsourcing teams.",
"Access experienced professionals trained in customer service operations, data management, and digital business support.",
"Enhance customer satisfaction through faster response times and professional communication.",
"Create scalable operational frameworks that support business growth and increased service demand.",
"Improve data accuracy and operational transparency through structured data management processes.",
"Expand global service capabilities with multilingual support teams and extended service coverage."
];

const industries = [
"Automotive and transportation companies",
"E-commerce retailers and online marketplaces",
"Financial institutions and insurance providers",
"Technology companies and software providers",
"Retail brands and consumer product companies",
"Professional services firms and consulting businesses"
];

const faqs = [
{
q:"What is Business Process Outsourcing (BPO)?",
a:"Business Process Outsourcing (BPO) is the practice of delegating specific business operations to specialized third-party service providers. These processes may include customer service, call center support, administrative tasks, data processing, digital marketing, and technical assistance. By outsourcing these operational responsibilities, companies can reduce internal workload, lower operational costs, and focus on strategic initiatives such as product development, innovation, and business growth."
},
{
q:"Which business functions can be outsourced through BPO services?",
a:"A wide range of business functions can be outsourced depending on operational needs. Commonly outsourced services include inbound and outbound call center operations, customer support, technical support, data entry, document processing, back-office administration, accounting assistance, digital marketing, and e-commerce store management. Many organizations also outsource specialized processes such as research, data analytics, and content management."
},
{
q:"How does outsourcing improve operational efficiency for businesses?",
a:"Outsourcing improves efficiency by allowing experienced service providers to manage repetitive or time-consuming tasks using structured workflows and specialized tools. Dedicated outsourcing teams focus entirely on operational processes, which leads to faster task completion, improved accuracy, and better resource utilization. As a result, businesses can streamline operations while maintaining consistent service quality."
},
{
q:"Are BPO services suitable for startups and growing businesses?",
a:"Yes, outsourcing services are highly beneficial for startups and growing companies. Instead of investing heavily in infrastructure, hiring large teams, and managing operational systems, businesses can leverage outsourcing partners to handle operational tasks efficiently. This allows startups to scale quickly, control operational costs, and focus on expanding their products, services, and market presence."
},
{
q:"Can outsourcing support international or global business operations?",
a:"Many BPO providers operate globally and offer multilingual support teams capable of handling customer interactions across multiple time zones and geographic regions. This enables businesses to deliver consistent customer support and operational services to international markets without establishing physical offices in every location. Global outsourcing support helps organizations expand their reach and serve customers more effectively."
},
{
q:"How do companies maintain service quality when outsourcing processes?",
a:"Organizations maintain service quality through clearly defined service level agreements (SLAs), performance monitoring systems, and detailed reporting frameworks. Regular communication between the client company and outsourcing provider ensures that operational standards are maintained. Many outsourcing providers also use quality assurance teams, training programs, and continuous process improvement strategies to maintain high service standards."
},
{
q:"Do BPO services support e-commerce and online businesses?",
a:"Yes, outsourcing services are widely used in the e-commerce industry to manage daily operational activities. These services may include product catalog management, product description writing, order processing support, inventory monitoring, customer service handling, and marketplace account management. By outsourcing these tasks, online businesses can maintain efficient operations while focusing on marketing, product expansion, and customer acquisition."
},
{
q:"What industries benefit the most from Business Process Outsourcing?",
a:"Business Process Outsourcing is used across a wide range of industries including technology, finance, healthcare, retail, e-commerce, telecommunications, and automotive sectors. Organizations in these industries often deal with large volumes of customer interactions, operational processes, and data management tasks. Outsourcing helps these businesses improve efficiency, reduce operational complexity, and maintain consistent service quality."
}
];

return (

<div className="bg-white text-slate-800">

{/* HERO */}

<section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 text-white">

<div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">

<div>

<span className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-sm">
<Cloud className="h-4 w-4 mr-2"/>
Business Process Outsourcing Services
</span>

<h1 className="mt-6 text-5xl font-extrabold">
Scalable BPO & Business Process Services for Modern Enterprises
</h1>

<p className="mt-6 text-slate-300 text-lg leading-8">
Businesses today require efficient operational support to remain competitive in fast-moving digital markets. Our outsourcing services help organizations streamline customer support operations, administrative processes, data management, and digital workflows while reducing operational complexity.
</p>

<button
onClick={() => {
              setSelectedBusinessType("");
              setIsModalOpen(true);
            }}
className="mt-8 inline-flex items-center bg-cyan-400 px-6 py-3 rounded-xl font-semibold text-slate-900 hover:bg-cyan-300"
>
Request Consultation
<ArrowRight className="ml-2 h-4 w-4"/>
</button>

</div>

<img
src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
className="rounded-3xl shadow-2xl"
/>

</div>

</section>

{/* INTRO */}

<section className="max-w-6xl mx-auto px-4 py-20 text-center">

<h2 className="text-5xl font-extrabold">
Comprehensive Outsourcing Solutions for Efficient Business Operations
</h2>

<p className="mt-6 text-lg text-slate-600 leading-8">
Business Process Outsourcing enables organizations to improve efficiency by delegating operational responsibilities to experienced service providers. These services allow companies to focus on strategic priorities such as innovation, growth planning, and customer experience development.
</p>

</section>

<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 text-white py-20">

<div className="max-w-7xl mx-auto px-4">

<div className="text-center mb-16">
<h2 className="text-5xl font-extrabold">
Operational Challenges & Industries We Support
</h2>

<p className="text-slate-300 mt-4 max-w-5xl mx-auto">
Modern organizations often face operational complexities while trying to deliver
consistent customer service and maintain efficient business workflows. Our
BPO solutions help businesses across multiple industries streamline processes,
improve operational performance, and deliver better customer experiences.
</p>
</div>

<div className="grid lg:grid-cols-2 gap-10">

{/* Challenges */}

<div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">

<h3 className="text-2xl font-bold mb-6 text-cyan-300">
Common Operational Challenges
</h3>

{challenges.map((item,i)=>(
<div key={i} className="flex gap-3 mb-4">
<CheckCircle2 className="text-cyan-400 mt-1"/>
<p className="text-slate-200">{item}</p>
</div>
))}

</div>

{/* Industries */}

<div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">

<h3 className="text-2xl font-bold mb-6 text-cyan-300">
Industries Supported by Our BPO Services
</h3>

{industries.map((item,i)=>(
<div key={i} className="flex gap-3 mb-4">
<CheckCircle2 className="text-cyan-400 mt-1"/>
<p className="text-slate-200">{item}</p>
</div>
))}

</div>

</div>

</div>

</section>
{/* SERVICES */}

<section className="max-w-7xl mx-auto px-4 py-20">

<h2 className="text-5xl font-extrabold mb-12 text-center">
Core Business Process Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{services.map((item,i)=>{
const Icon=item.icon;
return(

<div key={i} className="bg-white border rounded-3xl p-6 shadow">

<Icon className="h-8 w-8 text-cyan-600"/>

<h3 className="mt-4 font-bold text-lg">
{item.title}
</h3>

<p className="mt-2 text-slate-600">
{item.desc}
</p>

</div>

)
})}

</div>

</section>

{/* INDUSTRIES */}


{/* BENEFITS */}

<section className="bg-cyan-100/40 py-20">

<div className="max-w-7xl mx-auto px-4">

<div className="text-center mb-16">

<h2 className="text-5xl font-extrabold text-slate-900">
Business Benefits of Outsourcing
</h2>

<p className="mt-4 text-lg text-slate-600 max-w-5xl mx-auto">
Outsourcing operational processes allows organizations to improve efficiency,
reduce costs, and scale business operations without expanding internal teams.
Professional BPO services provide structured workflows and experienced support
teams that help businesses operate more efficiently.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{benefits.map((item,i)=>(
<div
key={i}
className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
>

<div className="flex items-start gap-4">

<div className="bg-cyan-100 p-3 rounded-xl">
<CheckCircle2 className="text-cyan-600 h-6 w-6"/>
</div>

<p className="text-slate-700 leading-relaxed">
{item}
</p>

</div>

</div>
))}

</div>

</div>

</section>

{/* FAQ */}

<section className="max-w-5xl mx-auto px-4 py-20">

<h2 className="text-5xl font-extrabold text-center">
Business Process Outsourcing FAQs
</h2>

<div className="mt-10 space-y-4">
{faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="border-t border-slate-100 px-6 py-5">
                  <p className="leading-8 text-slate-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
</div>

</section>

<GetStartedModal
isOpen={isModalOpen}
onClose={()=>setIsModalOpen(false)}
selectedBusinessType={selectedBusinessType}
/>

</div>
);
}