import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
export default function StartLLCSteps() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');


  const steps = [
    {
      title: "Name Your LLC",
      content: (
        <>
          <p className="mb-3">
            Your LLC name is the foundation of your brand identity. It should be unique, memorable, and clearly reflect your business. You must also include a legal designator such as "LLC" or "Limited Liability Company" to comply with state requirements.
          </p>

          <p className="font-semibold mb-2">Tips:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Choose a unique name to avoid legal conflicts</li>
            <li>Review your state's naming rules carefully</li>
            <li>Check name availability before finalizing</li>
            <li>Use a business name generator if needed</li>
          </ul>
        </>
      ),
    },
    {
      title: "Provide an Address",
      content: (
        <>
          <p>
            Every LLC must have an official business address. This can be your home, office, or a virtual business address. Some states do not accept P.O. Box addresses, so always check your state guidelines before submitting.
          </p>

          <p className="mt-3 text-sm">
            <strong>Pro Tip:</strong> A virtual address helps protect your privacy and allows you to manage your business from anywhere.
          </p>
        </>
      ),
    },
    {
      title: "Assign a Registered Agent",
      content: (
        <>
          <p className="mb-3">
            A registered agent is responsible for receiving legal documents and official notices on behalf of your LLC. While you can act as your own agent, using a professional service ensures compliance and protects your personal information.
          </p>

          <p className="font-semibold mb-2">Why Choose Our Service?</p>
          <p className="text-sm">
            Our business formation packages include one year of registered agent service at no extra cost, helping you stay compliant without additional effort.
          </p>
        </>
      ),
    },
    {
      title: "Provide Names and Addresses of LLC Members",
      content: (
        <>
          <p>
            You are required to submit the names and addresses of all LLC members when registering your business. This step ensures transparency and keeps your LLC compliant with state regulations.
          </p>

          <p className="mt-3 text-sm">
            <strong>Note:</strong> Address requirements may vary by state, and some allow P.O. boxes for member details.
          </p>
        </>
      ),
    },
    {
      title: "State the Purpose of Your LLC",
      content: (
        <>
          <p>
            When forming your LLC, you must define your business purpose. This can be a specific description of your services or a general statement such as "any lawful business activity" for greater flexibility.
          </p>

          <p className="mt-3 text-sm">
            <strong>Quick Tip:</strong> Using a general purpose statement allows you to expand your business activities in the future without additional filings.
          </p>
        </>
      ),
    },
    {
      title: "File the Articles of Organization",
      content: (
        <>
          <p className="mb-3">
            This is the final step where your LLC becomes legally recognized. You must file the Articles of Organization with your state and pay the required filing fees. The process can usually be completed online or by mail.
          </p>

          <p className="font-semibold mb-2">Make It Easy:</p>
          <p className="text-sm">
            Our team handles the entire filing process for you, ensuring accuracy and faster approval so you can focus on growing your business.
          </p>
        </>
      ),
    },
  ];

const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggle = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  const benefits = [
    {
      title: "Personal Asset Protection",
      desc: "Keep your personal finances safe by separating them from your business liabilities.",
    },
    {
      title: "Simplified Legal Compliance",
      desc: "Operate with fewer regulations and easier compliance compared to corporations.",
    },
    {
      title: "Flexible Tax Options",
      desc: "Benefit from pass-through taxation and avoid double taxation on your earnings.",
    },
    {
      title: "Easy Business Management",
      desc: "Run your company with minimal paperwork and fewer administrative requirements.",
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-slate-800">
      <div className="max-w-6xl mx-auto text-center px-6 py-16">
        
        <div>
          <p className="text-sm text-gray-500 mb-2">
            ⭐ Rated 4.7/5 by thousands of business owners
          </p>

          <h1 className="text-5xl font-black text-white leading-tight mb-4">
            Start Your LLC the Right Way — <br />
            Build a Business, Not Just More Work
          </h1>

          <p className="text-gray-100 max-w-2xl mx-auto text-base mb-6">
            Many entrepreneurs get stuck handling everything themselves. Learn how to 
            launch your LLC efficiently, focus on growth, and avoid unnecessary workload from day one.
          </p>

          <button onClick={() => {
setSelectedBusinessType('');
setIsModalOpen(true);
}} className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-xl rounded-lg font-bold">
            Get Started Now
          </button>
        </div>
      </div>
        </section>

      {/* TRUST LINE */}
      <div className="text-center text-sm text-gray-600 py-4 border-t border-b border-gray-200">
        Trusted by entrepreneurs since 2004 • Over 1000+ Businesses Served
      </div>

      {/* STEPS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
      
      <h2 className="text-5xl font-black text-gray-900 mb-4">
        Complete Step-by-Step Process to Start an LLC
      </h2>

      <p className="text-gray-600 mb-8">
        Learn how to register your LLC with a simple, structured process designed to ensure compliance and help you launch your business quickly.
      </p>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* HEADER */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-semibold text-gray-900">
                {step.title}
              </span>
              <span className="text-xl">
                {activeIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* CONTENT */}
            {activeIndex === i && (
              <div className="p-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
                {step.content}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-2">
            Key Benefits of Starting an LLC
          </h2>
          <p className="text-gray-600">
            Discover why forming an LLC is one of the best decisions for your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border">
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <p className="text-cyan-500 font-semibold mb-2">
            Plan for Long-Term Success
          </p>

          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Stay Compliant with LLC Regulations
          </h2>

          <p className="text-gray-600">
            Maintaining compliance is essential for your LLC’s success. Stay on top of annual reports, 
            filing deadlines, and state requirements to keep your business running smoothly.
          </p>
        </div>

        <div className="bg-gray-200 h-72 rounded-xl"></div>
      </section>
<GetStartedModal
isOpen={isModalOpen}
onClose={() => setIsModalOpen(false)}
selectedBusinessType={selectedBusinessType}
/>
    </div>
  );
}