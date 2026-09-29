import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Brand Section */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            DevSpace<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Building things. Learning things.
          </p>
        </div>

        {/* Links Container */}
        <div className="flex flex-wrap gap-12 sm:gap-20">
          
          {/* Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Explore
            </h3>
            <Link to="/" className="text-sm hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-sm hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-sm hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h3>
            <Link to="/Github" className ="text-sm hover:text-white transition-colors duration-200">
              Github
            </Link>
            <a
              href="https://www.linkedin.com/in/vaibhav-gawade-742296376/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DevSpace. All rights reserved.
      </div>
    </footer>
  );
}