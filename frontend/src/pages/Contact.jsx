import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, CheckCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      github: Github,
      linkedin: Linkedin,
      mail: Mail,
      globe: Globe
    };
    const Icon = icons[iconName] || Globe;
    return <Icon size={24} />;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h1 className="text-5xl lg:text-6xl font-light text-[#222222] mb-6">
              Let's <span className="font-bold text-[#008080]">Connect</span>
            </h1>
            <p className="text-xl text-[#222222]/70 leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you. 
              Let's discuss how we can bring your vision to life with thoughtful design and innovative technology.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-5">
            <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
              <h2 className="text-3xl font-light text-[#222222] mb-8">
                Get in <span className="font-bold text-[#008080]">Touch</span>
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#008080]/10 p-3 rounded-full">
                    <Mail className="text-[#008080]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-2">Email</h3>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#008080] hover:text-[#006666] transition-colors text-lg"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#008080]/10 p-3 rounded-full">
                    <Phone className="text-[#008080]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-2">Phone</h3>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-[#008080] hover:text-[#006666] transition-colors text-lg"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#008080]/10 p-3 rounded-full">
                    <MapPin className="text-[#008080]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-2">Location</h3>
                    <p className="text-[#222222]/70 text-lg">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-[#222222] mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[#008080] hover:text-[#006666] group"
                      aria-label={link.name}
                    >
                      {getIcon(link.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Note */}
              <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-[#222222] mb-3">Quick Response</h3>
                <p className="text-[#222222]/70 leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via phone or connect with me on LinkedIn.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-7">
            <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <h2 className="text-3xl font-light text-[#222222] mb-2">
                  Send me a <span className="font-bold text-[#008080]">message</span>
                </h2>
                <p className="text-[#222222]/60 mb-8">
                  I'll get back to you as soon as possible.
                </p>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={24} />
                    <div>
                      <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-600">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#222222] mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#008080] focus:outline-none transition-colors text-[#222222] placeholder-gray-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#222222] mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#008080] focus:outline-none transition-colors text-[#222222] placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#222222] mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#008080] focus:outline-none transition-colors text-[#222222] placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#222222] mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#008080] focus:outline-none transition-colors text-[#222222] placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl font-medium text-lg transition-all duration-300 ${
                      isFormValid && !isSubmitting
                        ? 'bg-[#008080] text-[#F8F7F4] hover:bg-[#006666] hover:scale-105 shadow-lg hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#F8F7F4] border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-[#222222]/60 text-center">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-3xl lg:text-4xl font-light text-[#222222] mb-4">
              Prefer a quick chat?
            </h2>
            <p className="text-lg text-[#222222]/70 mb-8">
              Sometimes a conversation is more efficient than messages back and forth.
            </p>
            <a
              href={`mailto:${personalInfo.email}?subject=Quick Chat Request`}
              className="inline-flex items-center space-x-3 bg-[#008080] text-[#F8F7F4] px-8 py-4 rounded-full hover:bg-[#006666] transition-all duration-300 hover:scale-105 font-medium shadow-lg hover:shadow-xl"
            >
              <Mail size={18} />
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;