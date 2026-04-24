import { useState, useEffect } from 'react';
import { Loader2, HelpCircle, ChevronDown, Send } from 'lucide-react';
import { getCustomerFaqs, submitSupportMessage } from '../../services/customerService';
import { useCustomerAuth } from '../../contexts/CustomerAuthContext';

interface Faq {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export default function CustomerSupport() {
  const { customer } = useCustomerAuth();
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getCustomerFaqs()
      .then((res) => setFaqs(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await submitSupportMessage({
        source: 'support',
        name: customer ? `${customer.firstName} ${customer.lastName}` : '',
        email: customer?.email || '',
        phone: customer?.phone || undefined,
        subject: contactForm.subject,
        message: contactForm.message,
      });
      setSent(true);
      setContactForm({ subject: '', message: '' });
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Support</h1>
        <p className="text-gray-500 mt-1">Browse FAQs or contact our team</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* FAQ */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-orange-500" /> Frequently Asked Questions
          </h2>
          {loading ? (
            <div className="flex justify-center py-8"><Loader2 className="w-6 h-6 animate-spin text-orange-500" /></div>
          ) : faqs.length === 0 ? (
            <p className="text-sm text-gray-500">No FAQs available at this time.</p>
          ) : (
            <div className="space-y-2">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition"
                  >
                    <span className="text-sm font-medium pr-4">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-4 pb-3 text-sm text-gray-600 border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Send className="w-5 h-5 text-orange-500" /> Contact Us
          </h2>

          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">Your message has been sent! We'll get back to you shortly.</p>
              <button onClick={() => setSent(false)} className="text-sm text-green-700 underline mt-2">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleContact} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input type="text" required value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="What do you need help with?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea required rows={5} value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  placeholder="Describe your issue or question..." />
              </div>
              <button type="submit" disabled={submitting}
                className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition disabled:opacity-50">
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">Need immediate assistance?</p>
            <p className="text-sm font-medium mt-1">Email: <a href="mailto:support@thefutureperfectglobal.com" className="text-orange-600 hover:underline">support@thefutureperfectglobal.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
