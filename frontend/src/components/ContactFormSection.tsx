import { useState } from 'react';
import { createContact } from '../services/contactService';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save contact to backend
    createContact({
      source: 'contact_form',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }).catch((err) => console.error('Failed to save contact:', err));

    setShowPopup(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
  <div className="inline-block bg-cyan-100 text-cyan-600 px-6 py-3 rounded-full font-bold mb-6">
    💬 Get in Touch
  </div>

  <h2 className="text-5xl font-black text-gray-900 mb-6">
    <span className='text-cyan-600'>Have Questions?</span><br />We're Here to Help!
  </h2>

  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
    Our expert team is ready to answer your questions and guide you through the business formation process.
  </p>

  <div className="space-y-6">

    {/* Phone */}
    <div className="flex items-start gap-4">
      <div className="bg-cyan-100 p-4 rounded-xl">
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <div>
        <div className="font-bold text-gray-900 text-lg">Phone</div>
        <a href="tel:+858-952-4549" className="text-cyan-600 hover:text-cyan-700 text-xl font-bold">
          +858-952-4549
        </a>
        <div className="text-gray-600 text-sm">Mon-Fri, 9am-6pm CST</div>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="bg-cyan-100 p-4 rounded-xl">
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <div className="font-bold text-gray-900 text-lg">Email</div>
        <a href="mailto:enquiry@thefutureperfectglobal.us" className="text-cyan-600 hover:text-cyan-700 text-xl font-bold">
          enquiry@thefutureperfectglobal.us
        </a>
        <div className="text-gray-600 text-sm">We respond within 24 hours</div>
      </div>
    </div>

    {/* Website */}
    <div className="flex items-start gap-4">
      <div className="bg-cyan-100 p-4 rounded-xl">
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 0c2.5 2.5 2.5 15 0 18m0-18c-2.5 2.5-2.5 15 0 18m-9-9h18" />
        </svg>
      </div>
      <div>
        <div className="font-bold text-gray-900 text-lg">Website</div>
        <a href="https://www.thefutureperfectglobal.us" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 text-xl font-bold">
          www.thefutureperfectglobal.us
        </a>
        <div className="text-gray-600 text-sm">Visit our official website</div>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="bg-cyan-100 p-4 rounded-xl">
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      </div>
      <div>
        <div className="font-bold text-gray-900 text-lg">Office Address</div>
        <div className="text-gray-700 text-lg font-semibold">
          3594 Eugene Street
        </div>
        <div className="text-gray-600 text-sm">
          Fremont, CA 94538, United States
        </div>
      </div>
    </div>

  </div>
</div>

          <div className="flex justify-center items-center min-h-screen bg-gray-100 p-2">

      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 lg:p-12 shadow-2xl border-4 border-cyan-200 max-w-xl w-full">

        <h3 className="text-3xl font-black text-gray-900 mb-6">
          Send Us a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Full Name *
            </label>

            <input
              type="text"
              required
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all text-lg"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Email Address *
            </label>

            <input
              type="email"
              required
              value={formData.email}
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all text-lg"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              value={formData.phone}
              onChange={(e)=>setFormData({...formData,phone:e.target.value})}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all text-lg"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Message *
            </label>

            <textarea
              required
              rows={3}
              value={formData.message}
              onChange={(e)=>setFormData({...formData,message:e.target.value})}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all text-lg resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-5 rounded-xl font-black text-xl hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-xl transform hover:scale-105"
          >
            SEND MESSAGE
          </button>

        </form>
      </div>
        </div>
        </div>
      </div>
    </section>
      {/* POPUP */}

      {showPopup && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50">

          <div className="bg-white rounded-2xl p-10 max-w-md text-center shadow-2xl">

            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Thank You!
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              Thank you for contacting us. Our executive will contact you very soon.
              <br/><br/>
              Thank you for choosing <strong>Future Perfect Global LLC</strong>.
            </p>

            <button
              onClick={()=>setShowPopup(false)}
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              Close
            </button>

          </div>

        </div>

      )}
      </>
  );
}
