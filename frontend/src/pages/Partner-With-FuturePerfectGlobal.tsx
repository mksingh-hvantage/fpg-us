import { useState } from 'react';
import GetStartedModal from '../components/GetStartedModal';
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Star
} from 'lucide-react';

export default function PartnerWithFuturePerfectGlobal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('');
  return (
    <div className="min-h-screen bg-white">
     
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-amber-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Partner to Power Growth
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                FuturePerfect Global has helped over 1 million entrepreneurs start and grow their businesses.
                We're always exploring new ways to help assist with business partnerships and bring value to
                business owners—let's talk.
              </p>
              <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }} className="bg-cyan-600 text-white px-8 py-4 rounded-md hover:bg-cyan-700 transition inline-flex items-center space-x-2 font-semibold">
                <span>START THE CONVERSATION</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business Partnership"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
            Why Partner With FuturePerfect Global?
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-cyan-50 to-amber-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Nationwide Reach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Engage with thousands of new business owners every month across all 50 states.
                Our platform connects you with entrepreneurs at the perfect moment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-cyan-50 to-amber-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Built for Entrepreneurs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our platform is designed to support and grow small businesses. Partner with us to
                provide valuable services that entrepreneurs actually need.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-cyan-50 to-amber-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Data-Driven Growth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We connect with business owners at every stage of their journey. Leverage our insights
                and data to create meaningful partnerships that drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-cyan-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
            A Growing Community of Entrepreneurs
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-600 mb-2">1M+</div>
              <div className="text-xl text-gray-700">Entrepreneurs Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-600 mb-2">1000s</div>
              <div className="text-xl text-gray-700">New Businesses Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-600 mb-2">50</div>
              <div className="text-xl text-gray-700">States Covered</div>
            </div>
          </div>

          {/* Trustpilot Rating */}
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.7 out of 5</div>
            <div className="text-gray-600">Based on thousands of reviews</div>
            <div className="mt-4">
              <span className="text-sm font-semibold text-gray-700">Trustpilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Great Together
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            We're always looking to collaborate with forward-thinking companies. Let's explore new
            ways to bring value to entrepreneurs.
          </p>
          <button onClick={() => {
                  setSelectedBusinessType('');
                  setIsModalOpen(true);
                }} className="bg-white text-cyan-600 px-8 py-4 rounded-md hover:bg-gray-100 transition inline-flex items-center space-x-2 font-semibold text-lg">
            <span>LET'S TALK</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      <GetStartedModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              selectedBusinessType={selectedBusinessType}
            />
    </div>
  );
}
