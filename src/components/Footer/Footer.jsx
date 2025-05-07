import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../../assets/log2-removebg-preview.png'

const Footer = () => {
    return (
        <>
         <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div>
            <img className='w-[300px]' src={logo} alt="" srcset="" />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Delivering excellence in every digital experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/developers" className="hover:text-white transition">Developer Resources</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" className="hover:text-white"><FaFacebook /></a>
            <a href="https://twitter.com" className="hover:text-white"><FaTwitter /></a>
            <a href="https://github.com" className="hover:text-white"><FaGithub /></a>
            <a href="https://linkedin.com" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>

        {/* Newsletter or Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter.</p>
          <form className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-gray-800 text-sm text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ZestApps. All rights reserved.
      </div>
    </footer>
        </>
    );
};

export default Footer;
