'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function ContactClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <>
      {/* ========================================
          CONTACT PAGE - MODERN PROFESSIONAL DESIGN
      ======================================== */}
      <div className={`contact-page bg-gradient-to-br from-gray-950 via-black to-gray-950 min-h-screen px-4 sm:px-6 lg:px-8 pt-32 py-24 relative overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Page Header */}
          <div className="text-center mb-16 space-y-6 transform transition-all duration-700">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              I&apos;m always open to discussing new opportunities, collaborations, or answering questions about nephrology and medical education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Contact Information Section */}
            <div className="space-y-8 transform transition-all duration-700 delay-200">
              
              {/* Contact Cards */}
              <div className="space-y-6">
                
                {/* Email Card */}
                <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-6 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-200 mb-2">Email Me</h3>
                      <div className="space-y-2">
                        <a href="mailto:mahesh.sigdel@mmc.tu.edu.np" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300 break-all">
                          mahesh.sigdel@mmc.tu.edu.np
                        </a>
                        <a href="mailto:maheshsigdel@iom.edu.np" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300 break-all">
                          maheshsigdel@iom.edu.np
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Location Card */}
                <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-6 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-200 mb-2">Visit Me</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Tribhuvan University Teaching Hospital<br />
                        Maharajgunj Medical Campus<br />
                        Institute of Medicine<br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Social Media Card */}
                <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-6 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-200 mb-3">Connect With Me</h3>
                      <div className="flex gap-3">
                        <a
                          href="https://linkedin.com/in/mahesh-raj-sigdel-27643b166  "
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/social p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 hover:scale-110 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/20"
                        >
                          <FaLinkedinIn
                            className="w-6 h-6 text-gray-400 group-hover/social:text-transparent group-hover/social:bg-clip-text group-hover/social:bg-gradient-to-r group-hover/social:from-orange-400 group-hover/social:to-red-400 transition-colors duration-300"
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/maheshrajsigdel/  "
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/social p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 hover:scale-110 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/20"
                        >
                          <FaInstagram
                            className="w-6 h-6 text-gray-400 group-hover/social:text-transparent group-hover/social:bg-clip-text group-hover/social:bg-gradient-to-r group-hover/social:from-orange-400 group-hover/social:to-red-400 transition-colors duration-300"
                          />
                        </a>
                        <a
                          href="https://x.com/maheshsigdel2  "
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/social p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 hover:scale-110 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/20"
                        >
                          <FaXTwitter
                            className="w-6 h-6 text-gray-400 group-hover/social:text-transparent group-hover/social:bg-clip-text group-hover/social:bg-gradient-to-r group-hover/social:from-orange-400 group-hover/social:to-red-400 transition-colors duration-300"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Doctors helping patients image */}
              <div className="hidden lg:block relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-40 group-hover:opacity-60"></div>
                <div className="relative w-full h-64 bg-gray-800/50 rounded-3xl border border-gray-700/50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Doctors helping patients"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="transform transition-all duration-700 delay-300">
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10">
                
                <h2 className="text-2xl font-bold text-gray-200 mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                      placeholder="Research Collaboration Inquiry"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </form>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-red-500/0 hover:from-orange-500/5 hover:to-red-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Office Hours Section */}
          <div className="mt-16 transform transition-all duration-700 delay-400">
            <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="text-center space-y-6">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-200 mb-3">Office Hours</h2>
                  <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    Available for consultations and meetings by appointment.<br />
                    Please email to schedule a suitable time.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-red-500/0 hover:from-orange-500/5 hover:to-red-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 8px;
        }

        textarea::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }

        textarea::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 10px;
        }

        textarea::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.7);
        }
      `}</style>
    </>
  );
}