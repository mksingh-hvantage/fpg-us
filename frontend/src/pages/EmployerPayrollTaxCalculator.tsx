import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import { DollarSign, Users, MapPin, Calculator as CalcIcon, CheckCircle, FileText, Shield, TrendingUp, Calculator, Briefcase, Building, AlertCircle, FileCheck, Clock, TrendingDown, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { US_STATES } from '../data/usStates';

export default function EmployerPayrollTaxCalculator() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');

const STATE_SUTA_RATES: Record<string, number> = {
  'California': 3.4,
  'Texas': 2.7,
  'Florida': 2.7,
  'New York': 4.1,
  'Pennsylvania': 3.7,
  'Illinois': 3.95,
  'Ohio': 2.7,
  'Georgia': 2.7,
  'North Carolina': 2.7,
  'Michigan': 2.7,
};

  const [grossWages, setGrossWages] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [state, setState] = useState('California');
  const [payPeriod, setPayPeriod] = useState('annual');
  const [results, setResults] = useState<any>(null);

  const calculateTaxes = () => {
    const wages = parseFloat(grossWages);
    const employees = parseInt(numEmployees);

    if (!wages || !employees) return;

    const socialSecurityRate = 0.062;
    const medicareRate = 0.0145;
    const futaRate = 0.006;
    const futaWageBase = 7000;
    const socialSecurityWageBase = 168600;

    const sutaRate = (STATE_SUTA_RATES[state] || 2.7) / 100;
    const sutaWageBase = 7000;

    let periodMultiplier = 1;
    if (payPeriod === 'monthly') periodMultiplier = 12;
    if (payPeriod === 'biweekly') periodMultiplier = 26;
    if (payPeriod === 'weekly') periodMultiplier = 52;

    const annualWages = wages * periodMultiplier;
    const wagesPerEmployee = annualWages / employees;

    const socialSecurityWages = Math.min(wagesPerEmployee, socialSecurityWageBase) * employees;
    const socialSecurityTax = socialSecurityWages * socialSecurityRate;

    const medicareTax = annualWages * medicareRate;

    const additionalMedicareWages = Math.max(wagesPerEmployee - 200000, 0) * employees;
    const additionalMedicareTax = additionalMedicareWages * 0.009;

    const futaWages = Math.min(wagesPerEmployee, futaWageBase) * employees;
    const futaTax = futaWages * futaRate;

    const sutaWages = Math.min(wagesPerEmployee, sutaWageBase) * employees;
    const sutaTax = sutaWages * sutaRate;

    const totalTax = socialSecurityTax + medicareTax + additionalMedicareTax + futaTax + sutaTax;

    setResults({
      socialSecurityTax,
      medicareTax,
      additionalMedicareTax,
      futaTax,
      sutaTax,
      totalTax,
      effectiveRate: (totalTax / annualWages) * 100,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };



const steps = [
  {
    icon: FileText,
    title: 'Enter Payroll Data',
    description: 'Input your gross wages, number of employees, and state location to get started with accurate calculations.',
  },
  {
    icon: Calculator,
    title: 'Automatic Calculation',
    description: 'Our calculator automatically computes FICA, FUTA, SUTA, and additional Medicare taxes based on current rates.',
  },
  {
    icon: CheckCircle,
    title: 'Review Breakdown',
    description: 'See a detailed breakdown of each tax component and understand your total employer tax obligation.',
  },
  {
    icon: TrendingUp,
    title: 'Plan Your Budget',
    description: 'Use the results to accurately budget for payroll taxes and ensure compliance with federal and state requirements.',
  },
];


const taxes = [
  {
    icon: Users,
    name: 'Social Security Tax (FICA)',
    rate: '6.2%',
    cap: '$168,600 per employee (2024)',
    description: 'Employers must match the Social Security tax withheld from employee wages. This tax funds retirement, disability, and survivor benefits.',
    details: [
      'Wage base limit applies per employee',
      'Matched by employee contribution',
      'Funds Social Security benefits program',
    ],
  },
  {
    icon: Briefcase,
    name: 'Medicare Tax (FICA)',
    rate: '1.45%',
    cap: 'No wage limit',
    description: 'Employers match the Medicare tax withheld from employees. There is no wage cap for Medicare tax.',
    details: [
      'No maximum wage base',
      'Additional 0.9% for high earners (employee only)',
      'Funds Medicare healthcare program',
    ],
  },
  {
    icon: DollarSign,
    name: 'Federal Unemployment Tax (FUTA)',
    rate: '0.6%',
    cap: 'First $7,000 per employee',
    description: 'FUTA provides funds for state unemployment insurance programs and job service offices.',
    details: [
      'Employer-only tax (not withheld from employees)',
      'Credit available for state unemployment taxes paid',
      'Annual wage base of $7,000',
    ],
  },
  {
    icon: Building,
    name: 'State Unemployment Tax (SUTA)',
    rate: 'Varies by state',
    cap: 'Varies by state',
    description: 'SUTA rates and wage bases vary by state and employer experience rating. New employers typically receive a standard rate.',
    details: [
      'Rate based on employer claims history',
      'Wage base varies by state',
      'May affect FUTA credit',
    ],
  },
];


const stateHighlights = [
  {
    state: 'California',
    sutaRate: '3.4%',
    wageBase: '$7,000',
    highlights: [
      'Employment Training Tax (ETT) of 0.1%',
      'State Disability Insurance (SDI) requirements',
      'Paid Family Leave (PFL) contributions',
    ],
  },
  {
    state: 'New York',
    sutaRate: '4.1%',
    wageBase: '$12,500',
    highlights: [
      'Reemployment Service Fund contributions',
      'Paid Family Leave insurance required',
      'Higher wage base than federal',
    ],
  },
  {
    state: 'Texas',
    sutaRate: '2.7%',
    wageBase: '$9,000',
    highlights: [
      'No state income tax',
      'Obligation Assessment added to SUTA',
      'New employer rate available',
    ],
  },
  {
    state: 'Florida',
    sutaRate: '2.7%',
    wageBase: '$7,000',
    highlights: [
      'No state income tax',
      'Experience rating affects rate',
      'Online filing required',
    ],
  },
];


const benefits = [
  {
    icon: Shield,
    title: 'Stay Compliant',
    description: 'Avoid costly penalties and audits by accurately calculating and paying your payroll taxes on time.',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Quickly calculate your tax obligations without complex spreadsheets or manual calculations.',
  },
  {
    icon: TrendingDown,
    title: 'Budget Accurately',
    description: 'Know exactly how much to set aside for payroll taxes and plan your cash flow effectively.',
  },
  {
    icon: FileCheck,
    title: 'Reduce Errors',
    description: 'Minimize calculation mistakes that could lead to underpayment or overpayment of taxes.',
  },
  {
    icon: Users,
    title: 'Scale Confidently',
    description: 'Understand how payroll taxes change as you hire more employees and grow your business.',
  },
  {
    icon: CheckCircle,
    title: 'Peace of Mind',
    description: 'Feel confident that your payroll tax calculations are accurate and up to date.',
  },
];


const faqs = [
  {
    question: 'What are employer payroll taxes?',
    answer: 'Employer payroll taxes are taxes that employers must pay based on the wages paid to employees. These include Social Security tax (6.2%), Medicare tax (1.45%), Federal Unemployment Tax (FUTA at 0.6%), and State Unemployment Tax (SUTA, which varies by state). These are separate from the taxes withheld from employee paychecks.',
  },
  {
    question: 'How often do I need to pay payroll taxes?',
    answer: 'FICA taxes (Social Security and Medicare) are typically deposited either monthly or semi-weekly, depending on your total tax liability. FUTA taxes are paid quarterly if your liability exceeds $500. SUTA taxes are usually paid quarterly. The specific schedule depends on the size of your payroll and your payment history.',
  },
  {
    question: 'What is the difference between FUTA and SUTA?',
    answer: 'FUTA (Federal Unemployment Tax Act) is a federal tax of 0.6% on the first $7,000 of each employee\'s wages, funding federal unemployment programs. SUTA (State Unemployment Tax Act) is a state-level tax with rates and wage bases that vary by state, funding state unemployment benefits. Paying SUTA on time typically provides a credit against your FUTA liability.',
  },
  {
    question: 'Are payroll taxes the same in every state?',
    answer: 'No. While federal taxes (Social Security, Medicare, and FUTA) are the same nationwide, state unemployment taxes (SUTA) vary significantly. Each state sets its own rate, wage base, and may have additional state-specific payroll taxes such as disability insurance or workforce development taxes.',
  },
  {
    question: 'What happens if I pay payroll taxes late?',
    answer: 'Late payment of payroll taxes can result in penalties ranging from 2% to 15% of the unpaid amount, depending on how late the payment is. Interest charges also accrue. Repeated late payments can trigger IRS audits. In severe cases, business owners can be held personally liable for unpaid payroll taxes.',
  },
  {
    question: 'Do I have to pay payroll taxes for independent contractors?',
    answer: 'No. Employer payroll taxes only apply to employees, not independent contractors. However, it\'s crucial to correctly classify workers. Misclassifying employees as contractors to avoid payroll taxes can result in severe penalties, back taxes, and legal consequences.',
  },
  {
    question: 'What is the Social Security wage base limit?',
    answer: 'The Social Security wage base limit is $168,600 for 2024. This means you only pay the 6.2% Social Security tax on the first $168,600 of each employee\'s wages. Any wages above this amount are not subject to Social Security tax, though they are still subject to Medicare tax.',
  },
  {
    question: 'Can I deduct employer payroll taxes as a business expense?',
    answer: 'Yes. Employer payroll taxes are deductible business expenses. This includes your portion of FICA taxes (Social Security and Medicare), FUTA, and SUTA. However, the taxes you withhold from employee paychecks are not deductible since they aren\'t your expenses.',
  },
  {
    question: 'What is Additional Medicare Tax?',
    answer: 'Additional Medicare Tax is a 0.9% tax on wages exceeding $200,000 for individual filers ($250,000 for married filing jointly). This is withheld from the employee\'s wages only; employers do not match this additional amount.',
  },
  {
    question: 'How do I register to pay employer payroll taxes?',
    answer: 'To pay federal payroll taxes, you need an Employer Identification Number (EIN) from the IRS. You\'ll also need to register with your state\'s workforce agency for SUTA. Most employers use the Electronic Federal Tax Payment System (EFTPS) for federal tax deposits.',
  },
];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

	return (
		<div className="bg-white">
         <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

  {/* subtle background glow */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#22d3ee,_transparent_40%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-cyan-400 bg-cyan-400/10 rounded-full">
          Payroll Tax Calculator 2026
        </span>

        <h1 className="text-5xl font-extrabold leading-xl mb-6">
          Smart Employer Payroll <br />
          Tax Calculator for Accurate Compliance
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-6 leading-xl">
          Instantly calculate employer payroll taxes including 
          <span className="text-cyan-400 font-medium"> FICA, FUTA, and SUTA</span>. 
          Stay compliant with the latest payroll tax rates, reduce errors, and 
          simplify your business tax calculations with our advanced payroll tax tool.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => {
              setSelectedBusinessType('');
              setIsModalOpen(true);
            }}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full 
            bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 
            hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-xl"
          >
            Start Free Calculation
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full
            border border-slate-600 text-slate-300 hover:bg-slate-700/40 transition-all duration-300"
          >
            Talk to Expert
          </a>

        </div>
      </div>

      {/* RIGHT IMAGE CARD */}
      <div className="relative">
        
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-20 rounded-xl"></div>

        <img
          src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Employer payroll tax calculator dashboard"
          className="relative rounded-2xl shadow-2xl w-full object-cover border border-slate-700"
        />
      </div>

    </div>
  </div>
</section>

        <section className="py-16 bg-gray-50" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Calculate Your Payroll Tax Obligations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your payroll information below to get an instant breakdown of your employer tax responsibilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <CalcIcon className="w-6 h-6 text-cyan-600" />
              Payroll Information
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="inline w-4 h-4 mr-1" />
                  Gross Wages
                </label>
                <input
                  type="number"
                  value={grossWages}
                  onChange={(e) => setGrossWages(e.target.value)}
                  placeholder="Enter total gross wages"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pay Period
                </label>
                <select
                  value={payPeriod}
                  onChange={(e) => setPayPeriod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="annual">Annual</option>
                  <option value="monthly">Monthly</option>
                  <option value="biweekly">Biweekly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="inline w-4 h-4 mr-1" />
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={numEmployees}
                  onChange={(e) => setNumEmployees(e.target.value)}
                  placeholder="Enter number of employees"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  State
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={calculateTaxes}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200"
              >
                Calculate Taxes
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
              Tax Breakdown
            </h3>

            {results ? (
              <div className="space-y-6">
                <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg">
                  <div className="text-sm font-semibold text-cyan-900 mb-1">
                    Total Annual Employer Tax
                  </div>
                  <div className="text-3xl font-bold text-cyan-600">
                    {formatCurrency(results.totalTax)}
                  </div>
                  <div className="text-sm text-cyan-700 mt-1">
                    Effective Rate: {results.effectiveRate.toFixed(2)}%
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Social Security Tax</div>
                      <div className="text-sm text-gray-600">6.2% up to $168,600 per employee</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(results.socialSecurityTax)}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Medicare Tax</div>
                      <div className="text-sm text-gray-600">1.45% on all wages</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(results.medicareTax)}
                    </div>
                  </div>

                  {results.additionalMedicareTax > 0 && (
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">Additional Medicare Tax</div>
                        <div className="text-sm text-gray-600">0.9% over $200,000</div>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatCurrency(results.additionalMedicareTax)}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">FUTA Tax</div>
                      <div className="text-sm text-gray-600">0.6% on first $7,000 per employee</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(results.futaTax)}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">SUTA Tax ({state})</div>
                      <div className="text-sm text-gray-600">
                        {(STATE_SUTA_RATES[state] || 2.7)}% (varies by state)
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(results.sutaTax)}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CalcIcon className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">
                  Enter your payroll information and click "Calculate Taxes" to see your results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

            <section className="py-16 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your employer payroll taxes in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-cyan-200 -z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-5xl font-extrabold text-gray-900 mb-12">
                Why Use Our Calculator?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Accurate calculations based on current federal and state tax rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Instant results with detailed breakdowns of each tax component</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">State-specific SUTA tax calculations for all 50 states</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free to use with no registration or hidden fees</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business owner reviewing payroll taxes"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Understanding Employer Payroll Taxes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to the different types of employer payroll taxes and what they fund
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {taxes.map((tax, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-cyan-100 rounded-lg">
                  <tax.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                    {tax.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold">
                      Rate: {tax.rate}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                      {tax.cap}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {tax.description}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Details:</h4>
                <ul className="space-y-2">
                  {tax.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cyan-900 text-white rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-2">7.65%</div>
              <div className="text-cyan-200">Minimum FICA Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-2">$168,600</div>
              <div className="text-cyan-200">Social Security Wage Base</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-2">50+</div>
              <div className="text-cyan-200">Different State SUTA Rates</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-cyan-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            State-by-State Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Payroll tax requirements vary significantly by state. Here are some key examples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stateHighlights.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900">{item.state}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-sm font-semibold text-cyan-600">
                      SUTA: {item.sutaRate}
                    </span>
                    <span className="text-sm text-gray-600">
                      Wage Base: {item.wageBase}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Important State Considerations
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Experience Rating:</strong> Most states adjust SUTA rates based on your unemployment claims history. New employers typically receive a standard rate for 1-3 years.
                </p>
                <p>
                  <strong>Additional State Taxes:</strong> Some states require additional payroll taxes beyond SUTA, such as disability insurance, workforce development funds, or paid family leave contributions.
                </p>
                <p>
                  <strong>Wage Base Differences:</strong> Each state sets its own taxable wage base for unemployment insurance, ranging from $7,000 to over $50,000 per employee.
                </p>
                <p>
                  <strong>Filing Frequency:</strong> States have different requirements for filing frequency based on tax liability amount, typically quarterly or annually.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-5xl font-extrabold mb-4">
                  Multi-State Employers
                </h3>
                <p className="text-cyan-100 mb-4">
                  If you have employees in multiple states, you must register and pay unemployment taxes in each state where you have employees.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Register with each state's workforce agency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Track wages by state for proper tax allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>File separate returns for each state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Monitor different filing deadlines</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Map showing multi-state operations"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Benefits of Accurate Payroll Tax Calculation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding and calculating your payroll tax obligations correctly brings numerous advantages to your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-100 rounded-lg mb-6">
                <benefit.icon className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The Cost of Getting It Wrong
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Penalties and Interest</h4>
                  <p className="text-gray-600">
                    Late or incorrect payroll tax payments can result in penalties of 2-15% plus interest charges.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">IRS Audits</h4>
                  <p className="text-gray-600">
                    Payroll tax errors are a common trigger for IRS audits, which can be time-consuming and expensive.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Personal Liability</h4>
                  <p className="text-gray-600">
                    Business owners can be held personally liable for unpaid payroll taxes under the Trust Fund Recovery Penalty.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Cash Flow Problems</h4>
                  <p className="text-gray-600">
                    Underestimating payroll tax obligations can lead to unexpected expenses and cash flow shortages.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 p-12 text-white flex items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Best Practices for Payroll Tax Compliance
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Calculate payroll taxes with every payroll run</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Set aside funds in a separate account for tax payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>File and pay taxes on time, every time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Keep detailed records of all payroll and tax payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Stay updated on tax rate changes and wage base limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Consider using payroll software or working with a professional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-cyan-100/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-cyan-600" />
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about employer payroll taxes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cyan-50 border-l-4 border-cyan-600 rounded-r-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-4">
            Payroll taxes can be complex, and every business situation is unique. If you have specific questions about your payroll tax obligations, consider consulting with a:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
              <span>Certified Public Accountant (CPA)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
              <span>Payroll service provider</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
              <span>Tax attorney specializing in employment taxes</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Calculate Your Payroll Taxes?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Use our free calculator to get instant, accurate results and understand your employer tax obligations
          </p>
          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center gap-3 bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors shadow-lg"
          >
            <Calculator className="w-6 h-6" />
            Calculate Now
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-5xl font-extrabold mb-2">100%</div>
              <div className="text-cyan-100">Free to Use</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-5xl font-extrabold mb-2">50+</div>
              <div className="text-cyan-100">States Supported</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-5xl font-extrabold mb-2">Instant</div>
              <div className="text-cyan-100">Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
          <GetStartedModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  selectedBusinessType={selectedBusinessType}
                />
		</div>
	)
}