import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react'; 

export default function CheckDeadline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-black text-gray-900">Check Your Due Date</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Find out when your annual report is due based on your state and entity type.
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <p className="text-gray-700">
              This is a placeholder for the deadline checker tool. In a production application, this would include:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>State selection dropdown</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Business entity type selector</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Formation date input</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Due date calculator and display</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
