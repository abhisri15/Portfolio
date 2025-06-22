import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SectionHeading from '../ui/SectionHeading';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

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
      // In development, you might not have the backend running, so we'll mock it
      await new Promise(resolve => setTimeout(resolve, 1000));
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
      
    } catch (error) {
      console.error(error);
      setStatus({
        submitted: false,
        submitting: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again later.',
      });
    }
  };
  
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Have a question or want to work together? Feel free to contact me."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-accent-100 dark:bg-accent-700/40 p-8 rounded-xl shadow-lg border border-accent-300 dark:border-accent-800"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent-500 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:abhikalp15092003@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  >
                    abhikalp15092003@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent-500 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+919483855063" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  >
                    +91 9483855063
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent-500 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/abhikalp-srivastava-00ab4122a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-accent-500 text-primary-500 p-3 rounded-full hover:bg-accent-600 transition-colors"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://leetcode.com/u/abhikalpsri/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-orange-500 text-primary-500 p-3 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7v13" />
                  </svg>
                </a>
                <a 
                  href="https://www.kaggle.com/abhikalpsrivastava15" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-500 text-primary-500 p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                  </svg>
                </a>
                <a 
                  href="https://drive.google.com/file/d/1fMzc-2nRgIr2Aqlw3ZVnuvgpKZ1TIGJd/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 text-primary-500 p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M8 2v4M16 2v4M4 10h16" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status.submitting}
                className="px-6 py-3 bg-accent-500 text-primary-500 font-medium rounded-md flex items-center hover:bg-accent-600 transition-colors disabled:opacity-70"
              >
                {status.submitting ? 'Sending...' : 'Send Message'} 
                <Send className="ml-2 h-5 w-5" />
              </button>
              
              {status.submitted && !status.error && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                  {status.message}
                </div>
              )}
              
              {status.error && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;