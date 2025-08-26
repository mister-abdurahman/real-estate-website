import Link from "next/link";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2">
          {/* Company Info */}
          <div className="space-y-4 -ml-2">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BlueInk Homes</span>
            </div>
            <p className="text-gray-300 text-sm pl-8">
              Your trusted partner in finding the perfect property. We
              specialize in residential and commercial real estate.
            </p>
            <div className="flex space-x-4 pl-8">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/properties"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 ml-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Buy Property</li>
              <li className="text-gray-300">Sell Property</li>
              <li className="text-gray-300">Rent Property</li>
              <li className="text-gray-300">Property Management</li>
              <li className="text-gray-300">Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 ml-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-gray-300">
                  Eti-Osa, Lagos 100283, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-gray-300">08106953620</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-gray-300">info@blueinkhomes.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BlueInk Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
