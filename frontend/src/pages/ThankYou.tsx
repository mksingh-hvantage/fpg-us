import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/login');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
        <p className="text-gray-600 text-lg">
          Your order has been placed successfully. We'll start processing it right away.
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
          <p className="text-sm text-gray-500">
            You'll receive a confirmation email shortly with your order details.
          </p>
          <p className="text-sm text-gray-500">
            Log in to your dashboard to track your order progress.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          Redirecting to login in <span className="font-semibold text-gray-600">{seconds}</span> seconds...
        </p>

        <button
          onClick={() => navigate('/login')}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
