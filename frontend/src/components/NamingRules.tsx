export default function NamingRules() {
  const rules = [
    {
      number: '01',
      title: 'Licensed Profession Consent',
      description: 'If your business name includes terms related to licensed professions (attorney, doctor, engineer, etc.), you must obtain written consent from the appropriate state licensing body.',
      icon: '⚖️'
    },
    {
      number: '02',
      title: 'Clean Language Policy',
      description: 'Your business name cannot contain obscene, derogatory language, or language that states or implies unlawful or illegal activities.',
      icon: '🛑'
    },
    {
      number: '03',
      title: 'Name Similarity Check',
      description: 'The name must not be similar to or easily confused with other registered business entities in New York, protecting your brand identity and avoiding legal conflicts.',
      icon: '🔍'
    },
    {
      number: '04',
      title: 'Entity Type Designation',
      description: 'Your name must clearly indicate your business structure—use "LLC" or "Limited Liability Company" for LLCs, and "Inc", "Corporation" or similar for corporations.',
      icon: '📋'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {rules.map((rule) => (
        <div key={rule.number} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
          <div className="flex items-start gap-4">
            <div className="text-3xl">{rule.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 font-bold text-lg">{rule.number}</span>
                <h3 className="font-semibold text-gray-900">{rule.title}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{rule.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}