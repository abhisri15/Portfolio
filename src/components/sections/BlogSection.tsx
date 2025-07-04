import React from 'react';
import { CalendarDays, ExternalLink, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  url: string;
  image: string;
}

const BlogSection = () => {
  // Static data for instant loading
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Gradient Checkpointing in Deep Learning",
      summary: "A comprehensive guide to implementing gradient checkpointing for memory-efficient training of deep neural networks.",
      date: "2024-03-15",
      url: "https://iq.opengenus.org/gradient-checkpointing/",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      id: 2,
      title: "Multi-Head Attention in Deep Learning",
      summary: "Detailed exploration of multi-head attention mechanisms and their implementation in deep learning models.",
      date: "2024-02-20",
      url: "https://iq.opengenus.org/multi-head-attention-in-deep-learning/",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    },
    {
      id: 3,
      title: "Multi-Label Classification Guide",
      summary: "Complete guide to implementing multi-label classification with practical examples and best practices.",
      date: "2024-01-25",
      url: "https://iq.opengenus.org/multi-label-classification/",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      id: 4,
      title: "Understanding Backpropagation Algorithm",
      summary: "In-depth explanation of the backpropagation algorithm with step-by-step implementation details.",
      date: "2024-01-10",
      url: "https://iq.opengenus.org/backpropagation-algorithm/",
      image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg"
    }
  ];
  
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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Blog
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing insights, tutorials, and thoughts on machine learning, software development, and technology.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
          >
            <a 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* Featured Image */}
              <div className="h-40 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {getReadingTime(post.summary)} min
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-3">
                  {post.summary}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-accent-600 dark:text-accent-400 font-medium text-sm">
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3 ml-2" />
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;