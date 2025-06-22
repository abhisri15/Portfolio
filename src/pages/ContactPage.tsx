import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="pt-0">
      {/* Contact Header */}
      <section className="bg-white dark:bg-gray-800 py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-1">
            Get in Touch<span className="text-accent-500">.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl text-xs mb-2">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>
      </section>
      {/* Contact Section Only, no header */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;