"use client";
import React, { useState } from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

const WeListening = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('https://prod-api.codework.ai/api/v1/marketing_site/add_contact_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact details.');
      }

      const data = await response.json();
      setResponseMessage(data.message || 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden flex items-center justify-center p-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full animate-blob"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-blob animation-delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 relative z-10">

        {/* Enhanced Left Text Section */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm w-fit">
            <span className="text-secondary text-sm font-medium">— Get Started —</span>
          </div>

          {/* Enhanced Quote Icon with Animation */}
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <RiDoubleQuotesL className="text-4xl sm:text-5xl md:text-6xl text-secondary font-bold relative z-10 transform hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Enhanced Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-white">Let's </span>
              <span className="bg-gradient-to-r from-secondary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
              <p className="text-lg sm:text-xl leading-relaxed text-white/90 pl-6">
                We empower businesses with <span className="text-secondary font-medium">cutting-edge technology</span>, 
                expert talent, and essential tools to thrive in the digital era. 
                <span className="text-secondary font-medium"> Reach out to us today!</span>
              </p>
            </div>

            {/* Contact Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1hr</div>
                <div className="text-white/80 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Right Form Section */}
        <div className="relative">
          {/* Glowing Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 via-secondary/30 to-secondary/50 rounded-3xl blur-sm"></div>
          
          {/* Form Container */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                We're <span className="text-secondary">Listening</span>
              </h2>
              <p className="text-white/80 text-sm">Share your ideas and let's make them reality</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Enhanced Input Fields */}
              <div className="space-y-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all duration-300 hover:bg-white/15"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all duration-300 hover:bg-white/15"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all duration-300 hover:bg-white/15"
                />
              </div>

              <div className="space-y-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all duration-300 hover:bg-white/15 resize-none"
                />
              </div>

              {/* Response Message */}
              {responseMessage && (
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
                  <p className="text-center text-sm text-secondary font-medium">{responseMessage}</p>
                </div>
              )}

              {/* Enhanced Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-secondary group px-8 py-4 w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 text-secondary group-hover:text-primary text-xl duration-500">
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                  <span className="absolute w-full h-full bg-secondary -left-96 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                  <span className="absolute w-full h-full bg-secondary -right-96 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default WeListening;
