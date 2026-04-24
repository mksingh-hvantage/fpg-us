import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { STATES } from '../data/statesTaxRates';
import { Helmet } from "react-helmet-async";

export default function SalesTaxCalculator() {
  const [purchaseAmount, setPurchaseAmount] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('CA');

  const currentState = STATES[selectedState as keyof typeof STATES];
  const amount = parseFloat(purchaseAmount) || 0;
  const taxRate = currentState.taxRate;
  const taxAmount = amount * (taxRate / 100);
  const totalAmount = amount + taxAmount;

  const handlePurchaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPurchaseAmount(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-16">
      <Helmet>
  <title>
    Sales Tax Calculator USA – Calculate State & Local Sales Tax | The Future Perfect Global
  </title>

  <meta
    name="description"
    content="Use our Sales Tax Calculator to estimate state and local sales tax in the USA. Get accurate tax calculations for your business transactions with expert guidance from The Future Perfect Global."
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://us.thefutureperfectglobal.com/sales-tax-calculator"
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="sales tax calculator USA, state sales tax calculator, local sales tax estimate, calculate sales tax USA, business sales tax tool"
  />

  {/* Hreflang */}
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/sales-tax-calculator"
    hrefLang="en-us"
  />
  <link
    rel="alternate"
    href="https://us.thefutureperfectglobal.com/sales-tax-calculator"
    hrefLang="x-default"
  />

  <meta name="ROBOTS" content="INDEX, FOLLOW" />

  {/* Open Graph */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Sales Tax Calculator USA – State & Local Sales Tax Tool"
  />
  <meta
    property="og:description"
    content="Estimate state and local sales tax across the USA with our Sales Tax Calculator. Easy, accurate and designed for business tax planning."
  />
  <meta
    property="og:url"
    content="https://us.thefutureperfectglobal.com/sales-tax-calculator"
  />
  <meta
    property="og:site_name"
    content="The Future Perfect Global – USA Tax Tools"
  />
  <meta
    property="og:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />
  <meta
    property="og:image:alt"
    content="Sales Tax Calculator USA – The Future Perfect Global"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@FPGCompanySetup" />
  <meta
    name="twitter:title"
    content="Sales Tax Calculator USA – Sales Tax Tool"
  />
  <meta
    name="twitter:description"
    content="Use our Sales Tax Calculator to estimate state and local sales tax in the USA for your business."
  />
  <meta
    name="twitter:image"
    content="https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebTool",
      "name": "Sales Tax Calculator USA",
      "url": "https://us.thefutureperfectglobal.com/sales-tax-calculator",
      "description": "An interactive sales tax calculator to estimate state and local sales tax across the USA for businesses and consumers.",
      "applicationCategory": "FinancialTaxTool",
      "provider": {
        "@type": "Organization",
        "name": "The Future Perfect Global",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thefutureperfectglobal.ae/uploads/images/logo1.webp"
        }
      }
    }`}
  </script>
</Helmet>

      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-blue-400" strokeWidth={2} />
            <h1 className="text-5xl font-extrabold text-white">Sales Tax Calculator</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Calculate sales tax by state instantly
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 mb-8 border border-slate-700">
          {/* State Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-200 mb-3">
              Select State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            >
              {Object.entries(STATES).map(([code, state]) => (
                <option key={code} value={code}>
                  {state.name} ({state.taxRate}%)
                </option>
              ))}
            </select>
          </div>

          {/* Purchase Amount Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-200 mb-3">
              Purchase Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl">
                $
              </span>
              <input
                type="text"
                value={purchaseAmount}
                onChange={handlePurchaseChange}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-lg"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4 bg-slate-700 rounded-lg p-6 border border-slate-600">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Subtotal:</span>
              <span className="text-lg font-semibold text-white">
                ${amount.toFixed(2)}
              </span>
            </div>
            <div className="border-t border-slate-600 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-300">
                  Sales Tax ({taxRate}%):
                </span>
                <span className="text-lg font-semibold text-blue-400">
                  ${taxAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-600">
                <span className="text-slate-100 font-semibold">Total:</span>
                <span className="text-2xl font-bold text-white">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* State Info */}
          <div className="mt-8 p-4 bg-blue-950 rounded-lg border border-blue-900">
            <p className="text-sm text-blue-200">
              <span className="font-semibold">{currentState.name}</span> has a{' '}
              <span className="font-semibold">{taxRate}%</span> state sales tax rate.
              {currentState.note && (
                <>
                  {' '}
                  <span className="text-blue-300">{currentState.note}</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-blue-400 font-semibold mb-2">How It Works</h3>
            <p className="text-sm text-slate-400">
              Enter your purchase amount and select your state to see the exact sales tax and total cost instantly.
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-blue-400 font-semibold mb-2">Tax Rates</h3>
            <p className="text-sm text-slate-400">
              Sales tax rates vary by state, ranging from 0% to over 10% depending on location.
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-blue-400 font-semibold mb-2">Accuracy</h3>
            <p className="text-sm text-slate-400">
              This calculator uses current state tax rates. Local taxes are not included in the calculation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}