import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="relative bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            {/* Subtle background blur / glow effect */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/10 via-purple-900/10 to-gray-900/10 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    
                    {/* Column 1: Logo & Description */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center space-x-2">
                            <Logo width="120px" />
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Your content goes here. Build, share, and manage your blogs seamlessly with our modern application.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex space-x-4 pt-2">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <span className="text-sm font-semibold">GitHub</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <span className="text-sm font-semibold">LinkedIn</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <span className="text-sm font-semibold">Twitter</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Resources */}
                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Business Resources</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Press Release</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Partners</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Affiliate Program</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Terms */}
                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Terms</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Terms</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Copyrights</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Fees and Charges</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Offices */}
                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Offices</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-400">Los Angeles</li>
                            <li className="text-gray-400">New York</li>
                            <li className="text-gray-400">Manchester</li>
                            <li className="text-gray-400">San Francisco</li>
                        </ul>
                    </div>

                    {/* Column 5: Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Team</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Testimonials</Link></li>
                            <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Sokupu App. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;