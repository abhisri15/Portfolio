import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  MessageCircle,
  User,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    message: '',
  });

  // TODO: Replace with your EmailJS credentials
  const SERVICE_ID = 'service_xp44d7b';
  const TEMPLATE_ID = 'template_k4xco85';
  const USER_ID = 'cTTL5rhvDIXphsefm';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: false, message: '' });
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        USER_ID
      );
      setStatus({
        submitted: true,
        submitting: false,
        error: false,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
    } catch (error: any) {
      console.error('EmailJS error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        error: true,
        message: 'Oops! Something went wrong. ' + (error?.text || error?.message || ''),
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhikalp15092003@gmail.com',
      href: 'mailto:abhikalp15092003@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9483855063',
      href: 'tel:+919483855063',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: null,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhikalp-srivastava-00ab4122a/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/abhisri15',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:abhikalp15092003@gmail.com',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? I'd love to hear from you. Let's create something amazing!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h3>
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <div className="p-4 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-150">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{contact.label}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{contact.value}</p>
                    </div>
                  </div>
                </div>
              );
              return contact.href ? (
                <a key={index} href={contact.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>
          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-br ${social.color} text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-150`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Availability Status */}
          <div className="p-4 bg-gradient-to-br from-green-50/80 to-emerald-50/40 dark:from-green-900/30 dark:to-emerald-900/20 backdrop-blur-sm rounded-lg border border-green-200/50 dark:border-green-700/50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-semibold text-green-700 dark:text-green-300 text-sm">Available for opportunities</span>
            </div>
            <p className="text-green-600 dark:text-green-400 text-xs mt-1">
              Currently open to full-time, freelance projects, and collaboration opportunities.
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50/80 to-accent-50/40 dark:from-blue-900/30 dark:to-accent-900/20 backdrop-blur-sm rounded-lg border border-blue-200/50 dark:border-accent-700/50 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <MessageCircle className="w-5 h-5 text-accent-500 mr-2" />
            Send Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <User className="w-3 h-3 inline mr-1" />
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-150 text-sm"
                placeholder="Your full name"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Mail className="w-3 h-3 inline mr-1" />
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-150 text-sm"
                placeholder="your.email@example.com"
              />
            </div>
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <FileText className="w-3 h-3 inline mr-1" />
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-150 text-sm"
                placeholder="What's this about?"
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <MessageCircle className="w-3 h-3 inline mr-1" />
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-150 resize-none text-sm"
                placeholder="Tell me about your project or question..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status.submitting}
              className="w-full px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-lg shadow-md shadow-accent-500/25 hover:shadow-accent-500/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center space-x-2 text-sm"
            >
              {status.submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            {/* Status Messages */}
            {status.submitted && !status.error && (
              <div className="p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg flex items-center space-x-2 mt-3">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300 text-sm">{status.message}</span>
              </div>
            )}
            {status.error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg flex items-center space-x-2 mt-3">
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span className="text-red-700 dark:text-red-300 text-sm">{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;