import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-brand-purple">APT</span>
              <span className="text-white"> OPS</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Turn Bottlenecks Into Breakthroughs with AI Automation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/free-audit" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Free Audit
                </Link>
              </li>
              <li>
                <a href="mailto:info@aptops.com" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-brand-purple" />
                <a href="mailto:info@aptops.com" className="hover:text-brand-purple transition-colors">
                  info@aptops.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-brand-purple" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} APT OPS. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
