import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { CalendarDays, ExternalLink } from 'lucide-react';
import axios from 'axios';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  url: string;
  image: string;
}

const BlogPage = () => {
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
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="pt-6 pb-10">
      {/* Blog Header */}
      <section className="bg-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="My Blog"
          />
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-accent-50 dark:bg-accent-900/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-accent-200 dark:border-accent-800"
                >
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 hover:text-accent-500 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.summary}
                      </p>
                      
                      <div className="flex items-center text-accent-500 hover:text-accent-600 transition-colors">
                        Read Article <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;