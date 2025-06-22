import { ProjectProps } from '../components/ui/ProjectCard';

// Project data
export const projectsData: ProjectProps[] = [
  {
    title: 'CropStop (AgroTech Platform)',
    description: '🌾 Smart AgroTech platform using ML for crop price prediction, disease detection (CNN), and crop recommendations based on soil & weather data. Built with Flask, React & Scikit-learn.',
    image: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'Scikit-learn', 'CNN', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/abhisri15/CropStop',
    demo: 'https://example.com',
    video: 'https://drive.google.com/file/d/1Q3CF1kXaNLk1Q0Il5qsizlCl-fk7CLFW/view'
  },
  {
    title: 'AI Self-Driving Car',
    description: 'Dive into the realm of deep Q-learning, neural network architectures, and experience replay as our AI-infused car cruises through custom-designed maps.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    technologies: ['Python', 'PyTorch', 'Deep Q-Learning', 'Neural Networks'],
    github: 'https://github.com/abhisri15/AI-Self-Driving-Car',
    demo: 'https://example.com'
  },
  {
    title: 'Secure Apple Leaf Disease Detection',
    description: 'Developed an advanced apple leaf disease classification pipeline by fusing ResNet50 and MobileNetV2, achieving high accuracy of 92.48% across multiple disease categories and ensuring robust performance on diverse datasets.',
    image: 'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
    paper: 'https://ieeexplore.ieee.org/document/10481567'
  },
  {
    title: 'mediBOX',
    description: '🏥 mediBOX: A virtual hospital platform with ML-based disease prediction, medicine reminders, health updates & nearby hospital locator. Built for better healthcare access.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg',
    technologies: ['Python', 'Flask', 'Machine Learning', 'Healthcare'],
    github: 'https://github.com/abhisri15/mediBOX__healthcare_website'
  },
  {
    title: 'Book Recommender System',
    description: '📚 Personalized book recommendation system using collaborative filtering and popularity-based methods. Built with Python, Streamlit & Flask.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    technologies: ['Python', 'Streamlit', 'Flask', 'Collaborative Filtering', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/abhisri15/Book-Recommender-System'
  },
  {
    title: 'Friend Store',
    description: 'Friend Store is a web app built with Flask and React, allowing users to manage friends with full CRUD functionality. It features responsive design, light/dark modes, and secure data handling via SQLite.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    technologies: ['Flask', 'React', 'SQLite', 'CRUD'],
    github: 'https://github.com/abhisri15/Friend-Store-using-Flask'
  },
  {
    title: 'E-Commerce Website',
    description: 'This project is a fully functional e-commerce platform built with Flask. It features user authentication (login, registration, logout), product management (buying, selling), and utilizes Flask forms with validation.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    technologies: ['Flask', 'SQLite', 'Authentication', 'E-commerce'],
    github: 'https://github.com/abhisri15/E-Commerce-Website-Using-Flask'
  },
  {
    title: 'Painting Style Transfer using GAN',
    description: 'CycleGAN‑powered image style transfer: convert photos to Monet‑style paintings and back, complete with evaluation metrics, report, and presentation (April 2024).',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
    technologies: ['Python', 'GAN', 'CycleGAN', 'Style Transfer', 'Data Science'],
    github: 'https://github.com/abhisri15/Painting_Style_Transfer_using_GAN'
  },
  {
    title: 'ECHO AI – Your Personal Voice Assistant',
    description: 'ECHO AI is a voice-controlled personal assistant built with Python and OpenAI\'s GPT model. It can understand voice commands, chat intelligently, open websites, play music, tell time, and more — all through natural voice interaction.',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg',
    technologies: ['Python', 'OpenAI GPT', 'Voice Recognition', 'AI Assistant'],
    github: 'https://github.com/abhisri15/ECHO-AI'
  },
  {
    title: 'Movie Recommendation System',
    description: 'A Streamlit‑based Movie Recommendation System using a pretrained similarity matrix and TMDB API to deliver instant movie suggestions with posters.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    technologies: ['Python', 'Streamlit', 'TMDB API', 'Recommendation System', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/abhisri15/Movie_Recommender_System'
  },
  {
    title: 'Medical Chatbot (End-to-End) using Llama2',
    description: 'Engineered an end-to-end medical chatbot using Flask and LangChain, integrating Hugging Face embeddings with a Pinecone vector store and Llama-2-7B via CTransformers, to deliver accurate, context-aware medical Q&A with real-time source retrieval.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    technologies: ['Python', 'Flask', 'LangChain', 'Llama2', 'Pinecone', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/abhisri15/Medical-Chatbot--End-to-End--using-Llama2'
  },
  {
    title: 'Food Tracker',
    description: 'Built a Flask-powered Food Tracker App with SQLite, enabling users to log meals by date, automatically compute calories and macronutrients from inputs, and view dynamic daily summaries and historical intake through intuitive templates.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    technologies: ['Flask', 'SQLite', 'Nutrition Tracking', 'Web App'],
    github: 'https://github.com/abhisri15/FoodTrackerApp'
  },
  {
    title: 'QnA App',
    description: 'Created a full-featured Q&A platform with Flask and SQLite, enabling role-based user registration, expert-driven question answering, and secure session management, complete with admin controls for promoting experts and dynamic routing.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
    technologies: ['Flask', 'SQLite', 'Authentication', 'Q&A Platform'],
    github: 'https://github.com/abhisri15/QnA-App'
  }
];