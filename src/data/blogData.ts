export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  url: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
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
];