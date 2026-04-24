import { useState } from 'react';
import { createContact } from '../services/contactService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {

  const [showThankYou, setShowThankYou] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

    setShowThankYou(true); // show thank you modal
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">

        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>

        {/* CONTACT FORM MODAL */}
        {!showThankYou && (
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 transform transition-all">

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>

            <div className="mb-8">
              <h2 className="text-4xl font-bold text-bizee-dark mb-3">Get in Touch</h2>
              <p className="text-gray-600 text-lg">Have questions? We're here to help!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-bizee-dark mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-bizee-cyan focus:border-bizee-cyan transition-all text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-bizee-dark mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-bizee-cyan focus:border-bizee-cyan transition-all text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-bizee-dark mb-2">
                    Phone
                  </label>

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-bizee-cyan focus:border-bizee-cyan transition-all text-lg"
                    placeholder="(555) 123-4567"
                  />
                </div>

              </div>

              <div>
                <label className="block text-sm font-semibold text-bizee-dark mb-2">
                  Message
                </label>

                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-bizee-cyan focus:border-bizee-cyan transition-all text-lg resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <div className="flex gap-4">

                <button
                  type="submit"
                  className="flex-1 bg-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>

              </div>

            </form>

            <div className="mt-8 pt-8 border-t border-gray-200"> <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"> <div> <div className="text-3xl mb-2">📞</div> <p className="text-sm text-gray-600">Phone</p> <p className="font-bold text-bizee-dark">+858-952-4549</p> </div> <div> <div className="text-3xl mb-2">✉️</div> <p className="text-sm text-gray-600">Email</p> <p className="font-bold text-bizee-dark">support@fpgllc.us</p> </div> <div> <div className="text-3xl mb-2">🕐</div> <p className="text-sm text-gray-600">Hours</p> <p className="font-bold text-bizee-dark">Mon-Fri 9am-6pm CST</p> </div> </div></div>
          </div>
        )}

        {/* THANK YOU MODAL */}
        {showThankYou && (
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center">

            <div className="text-6xl mb-4">🎉</div>

            <h2 className="text-3xl font-bold mb-4">
              Thank You!
            </h2>

            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. Our team will contact you shortly.
            </p>

            <button
              onClick={() => {
                setShowThankYou(false);
                onClose();
              }}
              className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition"
            >
              Close
            </button>

          </div>
        )}

      </div>
    </div>
  );
}