import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { createContact } from '../services/contactService';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBusinessType?: string;
}

export default function GetStartedModal({ isOpen, onClose, selectedBusinessType }: GetStartedModalProps) {

  const [formData, setFormData] = useState({
    businessType: selectedBusinessType || '',
    name: '',
    email: '',
    phone: '',
    state: '',
    businessName: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      // ADMIN EMAIL
      await emailjs.send(
        "service_4p4ycnm",
        "template_38fdigo",
        formData,
        "pggGn4-wVQgh_q_lJ"
      );

      // USER THANK YOU EMAIL
      await emailjs.send(
        "service_4p4ycnm",
        "template_nud1bya",
        formData,
        "pggGn4-wVQgh_q_lJ"
      );

      // Save contact to backend
      createContact({
        source: 'get_started',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessType: formData.businessType,
        businessName: formData.businessName,
        state: formData.state,
      }).catch((err) => console.error('Failed to save contact:', err));

      setShowThankYou(true);

      setFormData({
        businessType: '',
        name: '',
        email: '',
        phone: '',
        state: '',
        businessName: ''
      });

    } catch (error) {
      console.error("Email Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {!showThankYou && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">

            <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

            <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8">

              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <div className="mb-8">
                <h2 className="text-4xl font-black text-gray-900 mb-3">
                  Get Started Today
                </h2>
                <p className="text-gray-600 text-lg">
                  Let's start your business journey! Fill out this form and we'll guide you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Type
                  </label>

                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                  >
                    <option value="">Select a business type</option>
                    <option value="LLC">LLC</option>
                    <option value="S Corporation">S Corporation</option>
                    <option value="C Corporation">C Corporation</option>
                    <option value="Nonprofit">Nonprofit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                    placeholder="john@example.com"
                  />

                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                    placeholder="(555) 123-4567"
                  />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                    placeholder="California"
                  />

                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                    placeholder="My Business LLC"
                  />

                </div>

                <div className="flex gap-4">

                  <button
                    type="submit"
                    className="flex-1 bg-cyan-500 text-white py-4 rounded-xl font-bold"
                  >
                    Submit Application
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-8 py-4 border-2 border-gray-300 rounded-xl"
                  >
                    Cancel
                  </button>

                </div>

              </form>
<div className="mt-8 pt-8 border-t border-gray-200"> <div className="text-center"> <p className="text-sm text-gray-600 mb-4">Need help? Our experts are available to assist you</p> <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> <div> <div className="text-3xl mb-2">📞</div> <p className="text-sm text-gray-600">Phone</p> <p className="font-bold text-gray-900">+858-952-4549</p> </div> <div> <div className="text-3xl mb-2">✉️</div> <p className="text-sm text-gray-600">Email</p> <p className="font-bold text-gray-900">enquiry@futureperfectglobal.us</p> </div> </div></div></div>
            </div>
          </div>
        </div>
      )}

      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-md w-full">

            <div className="text-6xl mb-4">🎉</div>

            <h2 className="text-3xl font-bold mb-3">
              Thank You!
            </h2>

            <p className="text-gray-600 mb-6">
              Your application has been submitted successfully.  
              Our team will contact you shortly.
            </p>

            <button
              onClick={handleCloseThankYou}
              className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
}