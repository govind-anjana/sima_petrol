import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    privacyAgreed: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-[#070D1B] text-white py-20 px-4 md:px-8 font-sans relative overflow-hidden">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Split Contact Card Container */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Dark Navy Card (Details) */}
          <div className="lg:col-span-5 bg-[#0B172E] p-8 md:p-12 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Get in touch with us
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  Our friendly team would love to hear from you.
                </p>
              </div>

              {/* Contact Info Items */}
              <div className="space-y-4 pt-4">
                <a href="tel:+971544130427" className="flex items-center gap-3 text-xs md:text-sm text-gray-200 hover:text-[#D4AF37] transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+971 54 413 0427</span>
                </a>

                <a href="mailto:info@simapetrol.com" className="flex items-center gap-3 text-xs md:text-sm text-gray-200 hover:text-[#D4AF37] transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@simapetrol.com</span>
                </a>
              </div>
            </div>

            {/* Social Icons at Bottom of Left Panel */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-gray-900 flex items-center justify-center text-gray-300 transition-all" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-gray-900 flex items-center justify-center text-gray-300 transition-all" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-gray-900 flex items-center justify-center text-gray-300 transition-all" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right White Card (Form) */}
          <div className="lg:col-span-7 bg-white text-gray-900 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: First name & Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 text-left">
                  <label className="text-xs font-semibold text-gray-700 block">First name</label>
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-xs font-semibold text-gray-700 block">Last name</label>
                  <input
                    type="text"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-gray-700 block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-gray-700 block">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Leave us a message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Row 4: Privacy Policy Checkbox */}
              <div className="flex items-center gap-2 pt-1 text-left">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formData.privacyAgreed}
                  onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="privacy" className="text-xs text-gray-600 cursor-pointer">
                  You agree to our friendly <a href="#" className="underline font-medium text-gray-900">privacy policy</a>.
                </label>
              </div>

              {/* Submission Notification Toast */}
              {isSubmitted && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md text-xs font-semibold">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 text-xs md:text-sm font-semibold text-white bg-[#0B172E] hover:bg-[#16294C] rounded-md shadow-lg transition-all"
              >
                Send message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;
