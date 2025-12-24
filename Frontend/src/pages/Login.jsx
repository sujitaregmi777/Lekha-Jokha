import { useState } from "react";
import { User, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert(`Logged in as ${email}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50    p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200  rounded-full mix-blend-multiply -light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200  rounded-full mix-blend-multiply -light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-white  rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-90 ">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
            <div className="w-20 h-20 bg-white  rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-blue-100">Sign in to continue to your account</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <div className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700  pl-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200  bg-gray-50  text-gray--gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700  pl-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={ "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-gray-200  bg-gray-50  text-gray focus:border-blue-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 ">Remember me</span>
                </label>
                <Link to = "/password" className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full "></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 "></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white  text-gray-500 ">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className=" gap-3 ">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-200 bg-white  hover:bg-gray-50  transition-all hover:shadow-md"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className=" w-5 h-5"
                  />
                  <span className="font-medium text-gray-700  text-sm">
                    Google
                  </span>
                </button>
                {/* <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-200  bg-white  hover:bg-gray-50 -800 transition-all hover:shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" className="text-gray-700 "/>
                  </svg>
                  <span className="font-medium text-gray-700  text-sm">
                    GitHub
                  </span>
                </button> */}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50  border-t border-gray-200  text-center">
            <p className="text-sm text-gray-600 ">
              Don't have an account?{" "}
              <Link to ="/register" className="font-semibold text-blue-600 hover:text-blue-700  -300 transition-colors">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Trust Indicators
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 ">
            🔒 Your data is secure and encrypted
          </p>
        </div> */}
      </div>
    </div>
  );
}