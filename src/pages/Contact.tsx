import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleDownload = () => {
    const pdfUrl = '/assets/docs/Suyash_Mundhe_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Suyash_Mundhe_Resume.pdf';
    link.click();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 font-mono">Find me</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-12 sm:mb-16 font-mono max-w-2xl">
          Let's connect! Whether you have a project in mind or just want to say hello.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 pb-16 sm:pb-20 self-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 font-mono">Send Message</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block font-mono text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:bg-gray-50"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:bg-gray-50"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:bg-gray-50 resize-none"
                  required
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full border-2 border-black px-6 py-3 bg-yellow-500 hover:bg-yellow-600 transition-all duration-200 font-mono text-sm font-bold text-black"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 font-mono">Get in Touch</h2>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="break-all">mundhesuyash31@gmail.com</span>
                  </div>
                  <span className="hidden sm:block">|</span>
                  <span className="break-all sm:ml-0 ml-8">suyash.mundhe@somaiya.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <span>+91 9594339128</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📍</span>
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-black mb-6 font-mono">Social Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://github.com/suyashmundhe31"
                  className="flex items-center justify-center space-x-2 border-2 border-black p-3 bg-gray-800 hover:bg-gray-900 text-white transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-mono text-sm font-bold">GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/suyash-mundhe-91b62a25a/"
                  className="flex items-center justify-center space-x-2 border-2 border-black p-3 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-mono text-sm font-bold">LinkedIn</span>
                </a>
                
                <a
                  href="https://x.com/mundhe_suyash"
                  className="flex items-center justify-center space-x-2 border-2 border-black p-3 bg-blue-400 hover:bg-blue-500 text-white transition-all duration-200"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-mono text-sm font-bold">Twitter</span>
                </a>
                
                <a
                  href="mailto:suyash.mundhe@somaiya.edu"
                  className="flex items-center justify-center space-x-2 border-2 border-black p-3 bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-mono text-sm font-bold">Email</span>
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-black mb-4 font-mono">Resume</h3>
              <p className="font-mono text-sm text-gray-700 mb-4">
                Feel free to download my resume. If you believe my skills and experiences align with your goals, I'd love to connect and explore how I can contribute to your team or project.
              </p>
              <button 
                onClick={handleDownload} 
                className="w-full sm:w-auto border-2 border-black px-6 py-3 bg-black hover:bg-white hover:text-black transition-all duration-200 font-mono text-sm text-white"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;