import { useState } from "react";
import { Mail, KeyRound, Loader2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCustomerAuth } from "../contexts/CustomerAuthContext";
import { sendOtp, verifyOtp } from "../services/customerService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useCustomerAuth();

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await sendOtp(email);
      setMessage(res.data.message);
      setStep("otp");
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { error?: string } } };
      setError(axiosErr.response?.data?.error || "Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await verifyOtp(email, otp);
      login(res.data.token, res.data.customer);
      navigate("/dashboard");
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { error?: string } } };
      setError(axiosErr.response?.data?.error || "Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await sendOtp(email);
      setMessage(res.data.message);
      setOtp("");
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { error?: string } } };
      setError(axiosErr.response?.data?.error || "Failed to resend OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 bg-gray-50 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center bg-slate-900 text-white p-12">
          <h2 className="text-4xl font-bold mb-4">
            Start your journey
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Manage your compliance, finances, taxes, and marketing
            all in one place.
          </p>
          <p className="text-sm text-gray-400">
            Your Business Dashboard — everything you need,
            when you need it.
          </p>
        </div>

        {/* RIGHT SIDE LOGIN */}
        <div className="flex flex-col justify-center p-10">
          {step === "email" ? (
            <>
              <h1 className="text-3xl font-bold mb-2">Sign in</h1>
              <p className="text-gray-500 mb-8">Enter your email to receive a verification code</p>

              <form onSubmit={handleSendOtp} className="space-y-5">
                <div>
                  <label className="block text-sm mb-2 font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Verification Code"
                  )}
                </button>

                {error && <p className="text-sm text-red-600 text-center">{error}</p>}
              </form>
            </>
          ) : (
            <>
              <button
                onClick={() => { setStep("email"); setOtp(""); setError(""); setMessage(""); }}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Change email
              </button>

              <h1 className="text-3xl font-bold mb-2">Enter Code</h1>
              <p className="text-gray-500 mb-2">We sent a 6-digit code to</p>
              <p className="text-gray-900 font-medium mb-6">{email}</p>

              {message && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800 mb-4">
                  {message}
                </div>
              )}

              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div>
                  <label className="block text-sm mb-2 font-medium">Verification Code</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-lg tracking-widest focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="000000"
                      maxLength={6}
                      autoFocus
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || otp.length !== 6}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify & Sign In"
                  )}
                </button>

                {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={isLoading}
                    className="text-sm text-orange-600 hover:underline"
                  >
                    Didn't receive the code? Resend
                  </button>
                </div>
              </form>
            </>
          )}

          {/* FOOTER LINKS */}
          <div className="mt-6 text-center space-y-2">
            <a href="/form-order-now" className="text-sm text-gray-500 hover:underline block">
              New here? Start your business journey today.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
