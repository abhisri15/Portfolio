import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, MapPin, Phone } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-6">
      {/* About Header */}
      <section className="bg-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">
                About Me<span className="text-accent-500">.</span>
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm Abhikalp Srivastava, a Computer Science student at IIIT Bhubaneswar passionate about building intelligent systems.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I enjoy working on AI/ML, data, and automation projects, and love learning new tech.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent-500 mr-3" />
                  <a 
                    href="mailto:abhikalp15092003@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  >
                    abhikalp15092003@gmail.com
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent-500 mr-3" />
                  <a 
                    href="tel:+919483855063" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                  >
                    +91 9483855063
                  </a>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent-500 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Bangalore, India
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="w-full h-[500px] bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl overflow-hidden shadow-2xl flex flex-col items-center justify-start pt-8">
                <div className="z-10 mt-8 mb-2">
                  <div className="mx-auto w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-accent-500 transition-all duration-300 bg-white">
                    <img
                      src={'/1.jpeg'}
                      alt="Abhikalp Srivastava"
                      className="object-cover w-full h-full transition-all duration-300"
                      onMouseOver={e => (e.currentTarget.src = '/2.jpeg')}
                      onMouseOut={e => (e.currentTarget.src = '/1.jpeg')}
                    />
                  </div>
                </div>
                <div className="text-center pt-2 pb-0">
                  <div className="text-white text-6xl font-bold mb-2">AS</div>
                  <div className="text-white text-xl mb-1">Abhikalp Srivastava</div>
                  <div className="text-white/70">Software Developer & ML Engineer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;