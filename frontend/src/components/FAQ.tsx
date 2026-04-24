import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the New York business name search work?',
      answer: 'Simply enter your proposed business name into our search tool. We query the official New York Department of State business registry database and return results within seconds. The search checks for exact matches and similar variations to help you avoid naming conflicts.'
    },
    {
      question: 'Is this business name search tool free?',
      answer: 'Yes, our New York business name search tool is completely free to use. You can search unlimited names without any charges or hidden fees. We only charge when you decide to form your LLC or corporation and file documents with the state.'
    },
    {
      question: 'What naming rules apply to New York LLCs and corporations?',
      answer: 'New York businesses must follow specific rules: the name must be unique and distinguishable from other registered entities, must include the proper entity designation (LLC or Corporation), cannot contain prohibited words, and cannot use language related to licensed professions without consent. We cover all these rules in detail above.'
    },
    {
      question: 'Can I use a different name than my registered business name?',
      answer: 'Yes, you can operate under an assumed name, fictitious name, or DBA (Doing Business As) name in New York. This name must be filed separately with the New York Department of State. We can handle this filing for you if needed.'
    },
    {
      question: 'What if my preferred business name is already taken?',
      answer: 'If your desired name is unavailable, try variations or consider a completely different name. Our search results suggest why a name isn\'t available. Once you find an available name, we can help you immediately file for LLC or corporation formation.'
    },
    {
      question: 'How can I protect my business name in New York?',
      answer: 'The best protection is to formally incorporate your business as an LLC or corporation with the NY Department of State. Filing a DBA is not sufficient for legal protection. For additional protection, consider registering your business name as a federal trademark with the USPTO.'
    },
    {
      question: 'Can I change my business name after formation?',
      answer: 'Yes, you can change your New York business name by filing an amendment to your Articles of Organization (LLC) or Articles of Incorporation (Corporation). We can file this amendment with the state on your behalf for a reasonable fee.'
    },
    {
      question: 'What happens after I find an available name?',
      answer: 'Once you\'ve verified your business name is available, the next step is forming your LLC or corporation. We guide you through the entire formation process, handle all paperwork, file with the New York Department of State, and provide you with your official formation documents.'
    }
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}