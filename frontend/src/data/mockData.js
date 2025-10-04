export const personalInfo = {
  name: "Vitta Hem Kumar",
  title: "Aspiring Software Engineer",
  tagline: "I create innovative software solutions that bridge technology with real-world problem-solving, from AI-powered applications to secure cloud platforms.",
  email: "hemkumarvitta@gmail.com",
  phone: "+91 90807 69609",
  location: "Chennai, India",
  github: "Hemkumar247",
  linkedin: "hemkumar-vitta",
  profileImage: "/001img.jpg",
  aboutImage: "https://customer-assets.emergentagent.com/job_craft-presence-1/artifacts/fdnst72k_002img.jpg"
};

export const skills = {
  "Programming Languages": ["Java", "Python", "C", "JavaScript", "SQL", "HTML/CSS", "Dart"],
  "Frameworks & Libraries": ["Flutter", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "React", "Node.js"],
  "Developer Tools": ["Git", "Docker", "Unity", "C#", "Firebase", "AWS", "GCP"],
  "Core Concepts": ["REST APIs", "Agile Methodologies", "SDLC", "Object-Oriented Design", "Data Structures & Algorithms", "Database Management", "Computer Networks"]
};

export const experience = [
  {
    year: "2024",
    title: "Cybersecurity Intern at Mastercard",
    description: "Engineered automated web scraping pipeline using Python and Selenium to extract and parse over 1,000 customer reviews from Skytrax for sentiment analysis. Applied NLP techniques to identify key themes and sentiment drivers, providing actionable insights for service improvement strategies."
  },
  {
    year: "2024",
    title: "Data Analyst Virtual Intern at Accenture",
    description: "Predicted student percentage scores by developing Simple Linear Regression model using Python, Pandas, and Scikit-learn, achieving 95.29% predictive accuracy. Performed exploratory data analysis and data visualization to understand patterns and correlations within datasets."
  },
  {
    year: "2023",
    title: "Started Bachelor of Engineering - Computer Science",
    description: "Enrolled at Rajalakshmi Institute of Technology, Chennai. Focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Mobile Application Development."
  },
  {
    year: "2021",
    title: "Journey into Software Engineering Begins",
    description: "Started exploring programming with Java and Python, discovering passion for creating technology solutions that solve real-world problems and make a positive impact."
  }
];

export const projects = [
  {
    id: 1,
    title: "SignLearn: Real-Time Indian Sign Language Translation App",
    category: "AI/ML",
    shortDescription: "Real-time Indian Sign Language translation app with 95% accuracy using CNN and TensorFlow",
    image: "https://images.unsplash.com/photo-1640550444366-b94e5752c479?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2V8ZW58MHx8fHwxNzU5NTc0ODQyfDA&ixlib=rb-4.1.0&q=85",
    featured: true,
    role: "Lead Developer & AI Engineer",
    timeline: "6 months",
    tools: "Flutter, TensorFlow, CNN, Mobile Development",
    challenge: "Creating an accurate real-time translation system for Indian Sign Language that can run efficiently on mobile devices while maintaining high accuracy.",
    process: ["Research & Data Collection", "CNN Model Architecture Design", "Training & Optimization", "Flutter App Development", "Mobile Deployment & Testing"],
    solution: "Architected a full-stack Flutter app with a custom CNN trained using TensorFlow, optimized for low-latency mobile deployment while maintaining 95% translation accuracy.",
    results: ["95% Accuracy Rate", "Government of India Copyright", "Real-time Mobile Performance", "Accessibility Impact"],
    gallery: [
      "https://images.unsplash.com/photo-1640550444366-b94e5752c479?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2V8ZW58MHx8fHwxNzU5NTc0ODQyfDA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/4061218/pexels-photo-4061218.jpeg",
      "https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg"
    ]
  },
  {
    id: 2,
    title: "Rakshak - Farmer Intelligence Platform",
    category: "Web Development",
    shortDescription: "Full-stack Agricultural Tech platform with AI-powered analytics for farmers",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
    featured: true,
    role: "Full-Stack Developer & AI Engineer",
    timeline: "4 months",
    tools: "React, Node.js, Firebase, AI/ML models, AWS/GCP",
    challenge: "Developing a comprehensive platform that provides farmers with real-time data-driven analytics for crop management, yield prediction, and pest detection.",
    process: ["Requirement Analysis", "AI Model Development", "Cloud Infrastructure Setup", "Frontend Development", "Data Pipeline Integration"],
    solution: "Developed a full-stack platform integrating AI/ML models for predictive yield forecasting, real-time pest detection, and automated crop recommendations with secure cloud data pipelines.",
    results: ["Real-time Analytics Dashboard", "Automated Crop Recommendations", "Secure Cloud Data Processing", "Farmer-Friendly Interface"],
    gallery: [
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    title: "VR-Extroverse: Educational Virtual Reality Experience",
    category: "VR/AR",
    shortDescription: "Interactive educational VR simulation exploring prehistoric island and extinct species",
    image: "https://images.unsplash.com/photo-1568586609245-50d3183d4aad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3NTk0MDMyNzF8MA&ixlib=rb-4.1.0&q=85",
    featured: true,
    role: "VR Developer & Game Designer",
    timeline: "3 months",
    tools: "Unity, C#, VR SDKs, 3D Modeling",
    challenge: "Creating an immersive educational VR experience that makes learning about prehistory and biology engaging and interactive for users of all ages.",
    process: ["Concept & Storyboard", "3D Environment Design", "Unity Development", "VR Optimization", "Educational Content Integration"],
    solution: "Developed an interactive educational VR simulation allowing users to explore a virtual prehistoric island and engage with extinct species to learn about their history and biology.",
    results: ["Immersive Learning Experience", "Educational VR Simulation", "Interactive Species Exploration", "Cross-Platform VR Support"],
    gallery: [
      "https://images.unsplash.com/photo-1568586609245-50d3183d4aad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3NTk0MDMyNzF8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3NTk0MDMyNzF8MA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/410858/pexels-photo-410858.jpeg"
    ]
  },
  {
    id: 4,
    title: "Student Performance Prediction Model",
    category: "AI/ML",
    shortDescription: "Machine learning model predicting student scores with 95.29% accuracy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    featured: false,
    role: "Data Analyst & ML Engineer",
    timeline: "2 months",
    tools: "Python, Pandas, Scikit-learn, Data Visualization",
    challenge: "Developing an accurate machine learning model to predict student percentage scores based on various input factors.",
    process: ["Data Collection", "Exploratory Data Analysis", "Feature Engineering", "Model Training", "Performance Optimization"],
    solution: "Built a Simple Linear Regression model using Python, Pandas, and Scikit-learn with comprehensive EDA and data visualization to understand patterns and correlations.",
    results: ["95.29% Predictive Accuracy", "Comprehensive EDA", "Key Insights Identification", "Model Performance Optimization"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Sentiment Analysis Pipeline - Mastercard",
    category: "Data Science",
    shortDescription: "Automated web scraping and sentiment analysis of customer reviews",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    featured: false,
    role: "Cybersecurity Intern & Data Analyst",
    timeline: "3 months",
    tools: "Python, Selenium, NLP, Data Processing",
    challenge: "Creating an automated system to extract, process, and analyze customer sentiment from large volumes of online reviews to inform service improvement strategies.",
    process: ["Web Scraping Setup", "Data Preprocessing", "NLP Implementation", "Sentiment Analysis", "Insights Generation"],
    solution: "Engineered an automated web scraping pipeline using Python and Selenium, applying NLP techniques to identify key themes and sentiment drivers from over 1,000 customer reviews.",
    results: ["1,000+ Reviews Processed", "Automated Data Pipeline", "Actionable Insights Generated", "Service Improvement Strategies"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Mobile Development Portfolio",
    category: "Mobile Development",
    shortDescription: "Collection of mobile applications showcasing Flutter and cross-platform development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    featured: false,
    role: "Mobile App Developer",
    timeline: "Ongoing",
    tools: "Flutter, Dart, Mobile Development, Cross-platform",
    challenge: "Mastering mobile application development with focus on cross-platform solutions and user experience optimization.",
    process: ["Flutter Learning", "Cross-platform Development", "UI/UX Optimization", "Performance Testing", "App Store Deployment"],
    solution: "Developed expertise in Flutter and Dart for creating high-performance cross-platform mobile applications with focus on user experience and performance.",
    results: ["Cross-platform Expertise", "Flutter Proficiency", "Mobile UI/UX Skills", "App Store Ready Applications"],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    ]
  }
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/hemkumarvitta", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/Hemkumar247", icon: "github" },
  { name: "Email", url: "mailto:hemkumarvitta@gmail.com", icon: "mail" }
];

export const categories = ["All", "AI/ML", "Web Development", "VR/AR", "Data Science", "Mobile Development"];

export const testimonials = [
  {
    name: "Project Supervisor, Mastercard",
    role: "Cybersecurity Team Lead",
    content: "Vitta demonstrated exceptional technical skills during his internship, particularly in developing automated data pipelines and applying NLP techniques. His analytical approach to sentiment analysis provided valuable insights for our service improvement initiatives.",
    image: "https://images.unsplash.com/photo-1562693313-2ef8cef483a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxhY2FkZW1pYyUyMHByb2Zlc3NvcnxlbnwwfHx8fDE3NTk0MDMzMDh8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "Academic Mentor",
    role: "Computer Science Faculty, Rajalakshmi Institute",
    content: "Vitta's dedication to learning and innovation is remarkable. His SignLearn project showcases not only technical excellence but also social impact, earning recognition with a Government of India Copyright. His passion for solving real-world problems through technology is inspiring.",
    image: "https://images.unsplash.com/photo-1552345387-67b2f85f25c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBtZW50b3J8ZW58MHx8fHwxNzU5NDAzMzEzfDA&ixlib=rb-4.1.0&q=85"
  }
];
