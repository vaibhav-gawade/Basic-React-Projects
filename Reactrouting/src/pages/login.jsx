import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-6 relative selection:bg-blue-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <header className="absolute top-0 inset-x-0 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-200">
            &larr;
          </span>
          Back to Home
        </Link>
        
        {/* Subtle Brand Watermark */}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase select-none">
          DevSpace
        </span>
      </header>

      {/* Login Card Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 font-bold text-xl shadow-sm">
            D
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mt-1.5">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form Elements */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm shadow-sm"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider">
                Password
              </label>
              <Link 
                to="/forgot-password" 
                className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-xl transition-all duration-150 shadow hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}