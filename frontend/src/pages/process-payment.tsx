import { useNavigate } from "react-router-dom"
import { Country, State } from "country-state-city";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";
import api from "../services/api";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

/* ── Inner checkout form (must be inside <Elements>) ── */

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { order, getTotal, resetOrder } = useOrder();

  const [open, setOpen] = useState<number | null>(0);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const countries = Country.getAllCountries();
  const states = country ? State.getStatesOfCountry(country) : [];

  const [billingStreet, setBillingStreet] = useState("");
  const [billingStreet2, setBillingStreet2] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleCityChange = (value: string) => {
    setCity(value.replace(/[^a-zA-Z\s]/g, ""));
  };

  const toggle = (i: number) => setOpen(open === i ? null : i);

  const total = getTotal();

  const companyName = order.companyInfo.llcName
    ? `${order.companyInfo.llcName} ${order.companyInfo.designator}`
    : '';

  /* SUBMIT ORDER */
  const handleSubmit = async () => {
    if (!agree || submitting || !stripe || !elements) return;
    setSubmitting(true);
    setError("");

    try {
      // Confirm the Stripe payment
      const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + '/process-payment',
        },
        redirect: 'if_required',
      });

      if (stripeError) {
        setError(stripeError.message || 'Payment failed. Please try again.');
        setSubmitting(false);
        return;
      }

      if (!paymentIntent || paymentIntent.status !== 'succeeded') {
        setError('Payment was not completed. Please try again.');
        setSubmitting(false);
        return;
      }

      // Payment succeeded — now create the order with paymentIntentId
      await api.post('/orders', {
        packageType: order.selectedPackage?.name,
        llcName: order.companyInfo.llcName,
        designator: order.companyInfo.designator,
        managementMethod: order.companyInfo.managementMethod,
        state: order.selectedState?.name,
        filingFee: String(parseInt(String(order.selectedState?.filingFee || '0').replace(/[^0-9]/g, '')) || 0),
        packagePrice: String(order.selectedPackage?.price || 0),
        contactFirstName: order.contactInfo.firstName,
        contactLastName: order.contactInfo.lastName,
        contactEmail: order.contactInfo.email,
        contactPhone: order.contactInfo.phone,
        companyAddress: {
          addressType: order.companyAddress.addressType,
          country: order.companyAddress.country,
          street: order.companyAddress.street,
          city: order.companyAddress.city,
          state: order.companyAddress.state,
          zip: order.companyAddress.zip,
        },
        members: order.members,
        agentOption: order.agentInfo.option,
        agentDetails: order.agentInfo.option === 'self' ? {
          type: order.agentInfo.agentType,
          firstName: order.agentInfo.firstName,
          lastName: order.agentInfo.lastName,
          companyName: order.agentInfo.companyName,
          street: order.agentInfo.street,
          city: order.agentInfo.city,
          state: order.agentInfo.state,
          zip: order.agentInfo.zip,
        } : undefined,
        taxInfo: {
          foreign: order.taxIdInfo.foreign,
          idType: order.taxIdInfo.idType,
          firstName: order.taxIdInfo.firstName,
          lastName: order.taxIdInfo.lastName,
          ssn: order.taxIdInfo.ssn,
          itin: order.taxIdInfo.itin,
          country: order.taxIdInfo.country,
          street: order.taxIdInfo.street,
          city: order.taxIdInfo.city,
          state: order.taxIdInfo.state,
          zip: order.taxIdInfo.zip,
        },
        expeditedFiling: order.expeditedFiling,
        wantsBanking: order.wantsBanking,
        taxConsultation: order.taxConsultation.selection,
        licenseInfo: order.licenseInfo.selection === 'yes' ? order.licenseInfo : undefined,
        addons: order.addons,
        total,
        paymentIntentId: paymentIntent.id,
      });

      resetOrder();
      navigate('/thank-you');
    } catch (err) {
      console.error('Order submission failed:', err);
      setError('Order submission failed. Your payment was processed — please contact support.');
      setSubmitting(false);
    }
  };

  return (
    <ProcessLayout progress={95} title="Payment">
      <div className="space-y-6">

        <div className="bg-white border rounded-xl p-6 space-y-6">
          <h2 className="text-lg font-semibold">Payment Information</h2>

          {/* STRIPE PAYMENT ELEMENT */}
          <div className="space-y-4">
            <h3 className="font-semibold">Credit Card</h3>
            <div className="border rounded-lg p-4">
              <PaymentElement />
            </div>
          </div>

          <hr />

          {/* BILLING ADDRESS */}
          <div className="space-y-4">
            <h3 className="font-semibold">Billing Address</h3>

            {order.companyAddress.street && (
              <div className="border rounded-lg p-3 flex gap-2 items-center">
                <input type="checkbox" />
                <span className="text-sm">
                  {order.companyAddress.street}, {order.companyAddress.city} {order.companyAddress.state} {order.companyAddress.zip} {order.companyAddress.country}
                </span>
              </div>
            )}

            <div>
              <label className="text-sm">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Street Address</label>
                <input value={billingStreet} onChange={(e) => setBillingStreet(e.target.value)} className="w-full border rounded-lg p-3" />
              </div>
              <div>
                <label className="text-sm">
                  Address (Cont) <span className="text-gray-400">(Optional)</span>
                </label>
                <input value={billingStreet2} onChange={(e) => setBillingStreet2(e.target.value)} className="w-full border rounded-lg p-3" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm">City</label>
                <input value={city} onChange={(e) => handleCityChange(e.target.value)} className="w-full border rounded-lg p-3" />
              </div>
              <div>
                <label className="text-sm">State</label>
                <select value={state} onChange={(e) => setState(e.target.value)} className="w-full border rounded-lg p-3">
                  <option value="">State</option>
                  {states.map((s) => (
                    <option key={s.isoCode} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm">ZIP Code</label>
                <input value={billingZip} onChange={(e) => setBillingZip(e.target.value)} className="w-full border rounded-lg p-3" />
              </div>
            </div>

            {/* INFO BOX */}
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 text-sm text-cyan-800">
              <b>Billing Information</b>
              <p className="mt-1">
                In order to avoid delays or cancellation of your order, ensure that
                the billing address matches the payment card.
              </p>
            </div>
          </div>
        </div>

        {/* ADDITIONAL EXPLANATION */}
        <div className="bg-white border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold">Additional Explanation</h3>

          {[
            "What is the cancellation policy for my order?",
            "Can I edit my order after it's been placed?",
            "What happens after I pay?",
            "How can I track my order?"
          ].map((item, i) => (
            <div key={i} className="border rounded-lg">
              <button onClick={() => toggle(i)} className="w-full flex justify-between items-center p-4">
                <span className="text-sm font-medium">{item}</span>
                <ChevronDown size={18} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  Orders are processed quickly. If you need to cancel or edit
                  your order, please contact support before the filing process begins.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* AGREE + SUBMIT */}
        <div className="bg-white border rounded-xl p-6 space-y-4">
          <div className="text-sm">
            <label className="flex gap-2 items-start">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span>
                I agree to the <b>Legal Statement</b> and <b>Cancellation Policy</b>.
              </span>
            </label>
          </div>

          {companyName && (
            <div className="bg-cyan-50 border border-cyan-200 text-center py-2 rounded-lg font-medium">
              {companyName}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={!agree || submitting || !stripe || !elements}
            className={`w-full py-3 rounded-lg font-semibold ${
              agree && !submitting && stripe ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {submitting ? 'Processing Payment...' : `Complete & Pay — $${total}`}
          </button>
        </div>

        {/* BACK BUTTON */}
        <button onClick={() => navigate("/process-order-review")} className="border px-6 py-3 rounded-lg flex items-center gap-2">
          <ChevronLeft size={16} />
          Back
        </button>
      </div>
    </ProcessLayout>
  );
}

/* ── Outer wrapper: creates PaymentIntent + loads <Elements> ── */

export default function ProcessPay() {
  const { getTotal } = useOrder();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const total = getTotal();

  useEffect(() => {
    if (total <= 0) {
      setError("Invalid order total.");
      setLoading(false);
      return;
    }

    api.post('/orders/create-payment-intent', { amount: total })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to create payment intent:', err);
        setError('Failed to initialize payment. Please try again.');
        setLoading(false);
      });
  }, [total]);

  if (loading) {
    return (
      <ProcessLayout progress={95} title="Payment">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" />
          <span className="ml-3 text-gray-500">Initializing payment...</span>
        </div>
      </ProcessLayout>
    );
  }

  if (error || !clientSecret) {
    return (
      <ProcessLayout progress={95} title="Payment">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center text-red-700">
          {error || 'Unable to initialize payment.'}
        </div>
      </ProcessLayout>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
