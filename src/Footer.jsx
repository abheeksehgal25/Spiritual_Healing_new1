import React from 'react';
import logo from './assets/logo.png';

const Footer = () => (
  <footer className="bg-[#EAF1F8] border-t border-[#C7D3E0] w-full mt-12">
    <div className="w-full mx-auto px-4 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-20 justify-between text-left md:text-center">
      {/* Logo */}
      <div className="flex justify-start items-center ">
        <img src={logo} alt="Spiritual Bliss Logo" className="w-[152px] h-[170px] object-contain rounded-lg border border-[#C7D3E0] bg-white p-2" />
      </div>
      {/* Spiritual */}
      <div>
        <h4 className="text-[#0655A0] text-xl font-semibold mb-4 font-lato">Spiritual</h4>
        <ul className="space-y-2 text-[#0655A0] font-lato text-base">
          <li><a href="#about" className="hover:underline">About us</a></li>
          <li><a href="#" className="hover:underline">Join us</a></li>
          <li><a href="#services" className="hover:underline">Offers</a></li>
          <li><a href="#" className="hover:underline">Awards</a></li>
          
        </ul>
      </div>
      {/* Explore */}
      <div>
        <h4 className="text-[#0655A0] text-xl font-semibold mb-4 font-lato">Explore</h4>
        <ul className="space-y-2 text-[#0655A0] font-lato text-base">
        <li><a href="#blogs" className="hover:underline">Blogs</a></li>
          <li><a href="#events" className="hover:underline">Events</a></li>
          <li><a href="#numerology" className="hover:underline">Numerology</a></li>
          
          
        </ul>
      </div>
      {/* Resources */}
      <div>
        <h4 className="text-[#0655A0] text-xl font-semibold mb-4 font-lato">Resources</h4>
        <ul className="space-y-2 text-[#0655A0] font-lato text-base">
        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          
        </ul>
      </div>
    </div>
    <div className="border-t border-[#C7D3E0] py-4 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="text-[#0655A0] text-sm font-lato mb-4 md:mb-0 text-left md:text-left">
        Developed by House of Marktech<br />
        © 2025 Nyouta. All rights reserved.
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[#0655A0] text-sm font-lato mr-2">Find us on</span>
        {/* Social icons */}
        <a href="#" aria-label="Facebook" className="hover:opacity-80"><svg className="w-6 h-6 fill-[#1877F3]" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
        <a href="https://www.instagram.com/spiritualhealing.mk/" aria-label="Instagram" className="hover:opacity-80"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="#fff"/><rect width="20" height="20" x="2" y="2" rx="6" stroke="#222" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#222" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="#222"/></svg></a>
        <a href="#" aria-label="YouTube" className="hover:opacity-80"><svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.116C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.386.57A2.994 2.994 0 0 0 .502 6.186C0 8.147 0 12 0 12s0 3.853.502 5.814a2.994 2.994 0 0 0 2.112 2.116C4.575 20.5 12 20.5 12 20.5s7.425 0 9.386-.57a2.994 2.994 0 0 0 2.112-2.116C24 15.853 24 12 24 12s0-3.853-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
      </div>
    </div>
  </footer>
);

export default Footer; 