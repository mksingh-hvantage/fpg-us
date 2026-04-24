export default function CancellationPolicy() {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-600 text-white py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Cancellation Policy</h1>
          <p className="text-xl text-teal-50">Understand our refund and cancellation terms</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">General Cancellation Terms</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Orders are typically refundable until payment is forwarded to any government entity, such as a state or the U.S. federal government (typically within twenty-four hours after an order is placed), minus any expenses already incurred by The Future Perfect Global.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If your order qualifies for a refund, the refund will be issued to the original payment method used at the time of purchase.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">How to Cancel Your Order</h2>
          <div className="bg-blue-50 border-l-4 border-teal-600 p-6 mb-6">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              To cancel, your order must be in "Review" status.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              You must use the "Make Changes" button in your order confirmation email rather than contacting support by phone or email.
            </p>
          </div>
          <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
            <li>Check your order confirmation email for the "Make Changes" button</li>
            <li>Click the button to access your order details</li>
            <li>Follow the prompts to modify or cancel your order</li>
            <li>Confirm your cancellation request</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">When Cancellations Are Not Possible</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Once any of the following actions have occurred, The Future Perfect Global cannot accept cancellations or modifications to your order:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="text-teal-600 font-extrabold text-2xl">•</span>
              <span className="text-lg text-gray-700">Funds have been forwarded to government agencies or third parties</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-teal-600 font-extrabold text-2xl">•</span>
              <span className="text-lg text-gray-700">A trademark search has been conducted</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-teal-600 font-extrabold text-2xl">•</span>
              <span className="text-lg text-gray-700">Your order has left the "Review" status</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Chargeback Policy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Future Perfect Global distinguishes between legitimate and improper chargebacks.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Legitimate Chargebacks</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Legitimate chargebacks are those filed when unauthorized transactions or fraudulent charges occur. These will be investigated and resolved accordingly.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Improper Chargebacks</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Improper chargebacks—filed after payment to government entities or after trademark searches have been conducted—may result in serious consequences, including:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-extrabold">•</span>
                <span className="text-lg text-gray-700">Subscription cancellations on your The Future Perfect Global account</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-extrabold">•</span>
                <span className="text-lg text-gray-700">Dissolution of your formed business entity</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-extrabold">•</span>
                <span className="text-lg text-gray-700">Customer liability for all dissolution costs</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Fraud Policy</h2>
          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Those who fraudulently form business entities using unauthorized third-party names face serious legal and financial consequences, including:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-extrabold">•</span>
                <span className="text-lg text-gray-700 font-semibold">$10,000 in liquidated damages</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-600 font-extrabold">•</span>
                <span className="text-lg text-gray-700 font-semibold">All collection costs</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              The Future Perfect Global takes fraud seriously and will pursue all available legal remedies to protect itself and its customers.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Auto-Renewal Services</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Future Perfect Global offers certain auto-renewal services, including Registered Agent services, which automatically renew annually via the credit card on file.
          </p>

          <div className="bg-blue-50 border-l-4 border-teal-600 p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Cancel Auto-Renewal</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To cancel auto-renewal services, you must:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
              <li>Assign a new registered agent through your The Future Perfect Global account</li>
              <li>Notify The Future Perfect Global of the change before your current service expiration date</li>
              <li>Confirm the cancellation in writing if requested</li>
            </ol>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Failure to cancel before the renewal date will result in automatic billing for the next year of service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">State-Specific Considerations</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Certain states may have specific requirements regarding refunds and cancellations. The Future Perfect Global complies with all applicable state laws and regulations. If you believe your state has specific refund protections, please contact our support team with your state of incorporation or residence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Need Help?</h2>
          <div className="bg-teal-50 border-l-4 border-teal-600 p-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you have questions about this cancellation policy or need assistance with your order, please contact our customer support team:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Phone</p>
                <p className="text-xl text-teal-600 font-semibold">+852 6553 7375</p>
                <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM CST</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Email Support</p>
                <p className="text-lg text-gray-700">Visit our Help Center at <a href="#" className="text-teal-600 hover:text-teal-700 underline">fpgus.com/help</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">Last Updated:</span> This cancellation policy is current and reflects The Future Perfect Global's practices. The Future Perfect Global reserves the right to modify this policy at any time. Changes will be effective immediately upon posting to this page. Continued use of The Future Perfect Global's services after policy changes constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
}
