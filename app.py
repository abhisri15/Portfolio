from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
import requests

app = Flask(__name__, static_folder='dist')
CORS(app)  # Enable CORS for all routes

# Serve frontend static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# API route for contact form
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    
    # In a real application, you would:
    # 1. Validate the data
    # 2. Send an email
    # 3. Store in a database
    
    # For demo purposes, just print and return success
    print(f"Received contact form: {data}")
    
    return jsonify({"success": True, "message": "Message received!"})

# API route for blog posts from OpenGenus
@app.route('/api/blog', methods=['GET'])
def get_blog_posts():
    try:
        blog_posts = [
            {
                "id": 1,
                "title": "Gradient Checkpointing in Deep Learning",
                "summary": "A comprehensive guide on implementing gradient checkpointing for memory-efficient training of deep neural networks. Learn about the mathematical foundations, implementation strategies, and real-world applications of this powerful technique.",
                "date": "2024-03-15",
                "url": "https://iq.opengenus.org/gradient-checkpointing/",
                "image": "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg"
            },
            {
                "id": 2,
                "title": "Multi-Head Attention in Deep Learning",
                "summary": "Deep dive into the multi-head attention mechanism, a key component of transformer architectures. Explore its mathematical foundations, implementation details, and applications in various deep learning tasks.",
                "date": "2024-02-20",
                "url": "https://iq.opengenus.org/multi-head-attention-in-deep-learning/",
                "image": "https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg"
            },
            {
                "id": 3,
                "title": "Multi-Label Classification Techniques",
                "summary": "Comprehensive overview of multi-label classification approaches in machine learning. Covering various algorithms, evaluation metrics, and practical implementation strategies for handling multiple class labels.",
                "date": "2024-01-10",
                "url": "https://iq.opengenus.org/multi-label-classification/",
                "image": "https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg"
            },
            {
                "id": 4,
                "title": "Understanding Backpropagation Algorithm",
                "summary": "Detailed explanation of the backpropagation algorithm, the fundamental learning mechanism in neural networks. Includes mathematical derivations, implementation details, and practical considerations for training deep networks.",
                "date": "2024-01-05",
                "url": "https://iq.opengenus.org/backpropagation-algorithm/",
                "image": "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg"
            }
        ]
        
        return jsonify(blog_posts)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)