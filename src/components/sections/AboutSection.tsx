import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  Target,
  Heart,
  Zap
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: "Projects Completed", value: "15+", icon: Target },
    { label: "Technologies", value: "20+", icon: Zap },
    { label: "Awards Won", value: "4", icon: Award },
  ];

  const interests = [
    "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
    "Cloud Computing", "Data Science", "Automation", "Problem Solving", "System Design", "MLOps"
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A passionate Computer Science student who loves building AI tools and creating solutions that help people in meaningful ways.
        </p>
      </motion.div>

      {/* Stats - Fixed alignment */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-3 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="p-8 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Heart className="w-6 h-6 text-red-500 mr-3" />
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm Abhikalp Srivastava, a Computer Science student at IIIT Bhubaneswar with an insatiable curiosity for artificial intelligence and machine learning. My journey began with a simple fascination for how computers could learn and make decisions.
              </p>
              <p>
                Over the years, I've had the privilege of working with amazing teams at NXP India and MyParticipants, where I've contributed to projects ranging from speech analytics platforms to automated classification systems. Each experience has shaped my understanding of how technology can be leveraged to solve real-world problems.
              </p>
              <p>
                When I'm not coding, I enjoy hitting the gym or playing a game of badminton. Sometimes, I even teach my AI bots to be better at games than me!🤖
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-6 bg-gradient-to-br from-accent-50/80 to-accent-100/40 dark:from-accent-900/30 dark:to-accent-800/20 backdrop-blur-sm rounded-2xl border border-accent-200/50 dark:border-accent-700/50">
            <h3 className="text-xl font-bold mb-4 text-accent-700 dark:text-accent-300">Get In Touch</h3>
            <div className="space-y-3">
              {[
                { icon: Mail, label: "abhikalp15092003@gmail.com", href: "mailto:abhikalp15092003@gmail.com" },
                { icon: Phone, label: "+91 9483855063", href: "tel:+919483855063" },
                { icon: MapPin, label: "Bangalore, India", href: null },
              ].map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                    </div>
                    <span className="font-medium">{contact.label}</span>
                  </div>
                );

                return contact.href ? (
                  <a key={index} href={contact.href} className="block hover:bg-white/50 dark:hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
                    {content}
                  </a>
                ) : (
                  <div key={index} className="p-2">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Interests */}
          <div className="p-8 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Areas of Interest</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-accent-500/10 to-accent-600/10 text-accent-700 dark:text-accent-300 rounded-full border border-accent-500/20 font-medium text-sm hover:from-accent-500/20 hover:to-accent-600/20 transition-all duration-300"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="p-8 bg-gradient-to-br from-purple-50/80 to-pink-50/40 dark:from-purple-900/30 dark:to-pink-900/20 backdrop-blur-sm rounded-2xl border border-purple-200/50 dark:border-purple-700/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">My Philosophy</h3>
            <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed">
              "Technology should be a force for good, making complex problems simple and impossible things possible. Every line of code I write moves us closer to a smarter, more connected future."
            </blockquote>
          </div>

          {/* Fun Fact */}
          <div className="p-6 bg-gradient-to-br from-yellow-50/80 to-orange-50/40 dark:from-yellow-900/30 dark:to-orange-900/20 backdrop-blur-sm rounded-2xl border border-yellow-200/50 dark:border-yellow-700/50 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-yellow-700 dark:text-yellow-300">Fun Fact</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Built an AI that understands human language better than I do on Monday mornings. ☕🤖
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;