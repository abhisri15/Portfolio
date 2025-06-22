import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, BookOpen, Clock, ArrowRight } from 'lucide-react';
import axios from 'axios';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  url: string;
  image: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Fallback data
        setPosts([
          {
            id: 1,
            title: "Gradient Checkpointing in Deep Learning",
            summary: "A comprehensive guide to implementing gradient checkpointing for memory-efficient training of deep neural networks.",
            date: "2024-03-15",
            url: "https://iq.opengenus.org/gradient-checkpointing/",
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
          },
          {
            id: 2,
            title: "Multi-Head Attention in Deep Learning",
            summary: "Detailed exploration of multi-head attention mechanisms and their implementation in deep learning models.",
            date: "2024-02-20",
            url: "https://iq.opengenus.org/multi-head-attention-in-deep-learning/",
            image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
          },
          {
            id: 3,
            title: "Multi-Label Classification Guide",
            summary: "Complete guide to implementing multi-label classification with practical examples and best practices.",
            date: "2024-01-25",
            url: "https://iq.opengenus.org/multi-label-classification/",
            image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          },
          {
            id: 4,
            title: "Understanding Backpropagation Algorithm",
            summary: "In-depth explanation of the backpropagation algorithm with step-by-step implementation details.",
            date: "2024-01-10",
            url: "https://iq.opengenus.org/backpropagation-algorithm/",
            image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
          }
        ]);
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getReadingTime = (summary: string) => {
    const wordsPerMinute = 200;
    const wordCount = summary.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

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
          My Blog
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Sharing insights, tutorials, and thoughts on machine learning, software development, and technology.
        </p>
      </motion.div>

      {/* Blog Posts */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-accent-200 dark:border-accent-800 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <a 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Read More Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-6 py-3 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {getReadingTime(post.summary)} min read
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-accent-600 dark:text-accent-400 font-medium group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                    <span>Read Full Article</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;