import React, { useState } from 'react';
import { ArrowUpRight, Github, Youtube, Linkedin, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import MoneyMindImg from '../assets/img/MoneyMindLogo.svg';
import SimpleSwasthaLogo from '../assets/img/SimpleSwasthaLogo.svg';
import Chatbot from "../assets/img/chatbot.png"

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Simple स्वस्थ (SIH 24 Winner)',
      excerpt: 'A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product management, shopping cart functionality, and secure payment processing.',
      fullDescription: 'A comprehensive healthcare management solution that won the Smart India Hackathon 2024. This project tackles hospital management through smart technology, featuring an OPD Queuing Algorithm with triage-based priority system and load balancing, Smart Inventory Management with automated stock monitoring and waste disposal alerts, Government Schemes Integration for seamless access to healthcare benefits, WhatsApp Integration for OPD booking, reminders, and follow-ups, and a Disaster Casualty Management system for efficient patient relocation during emergencies. The solution integrates seamlessly with a city-wide healthcare module, improving patient flow, inventory management, and accessibility to government schemes. Built with modern web technologies including React for the frontend, Django REST for backend APIs, LangChain for AI chatbot functionality, and Twilio for communication services.',
      image: SimpleSwasthaLogo,
      url: '🏆Smart India Hackathon 2024',
      tech: ['React', 'Django REST', 'LangChain', 'Twilio'],
      links: {
        github: '#',
        youtube: 'https://www.youtube.com/watch?v=ttbf5Ho5iUw',
        linkedin: 'https://www.linkedin.com/posts/suyash-mundhe-91b62a25a_sih2024-hackathonwinner-teamvoid-activity-7290721579716505600-80Yd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_PEqcBfMna14p1T09Y_R0lulH8iLacgL4'
      },
      hasAchievement: true
    },
    {
      title: 'MoneyMind - GenAI based financial assistance',
      excerpt: 'A modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      fullDescription: 'MoneyMind is an innovative GenAI-based financial assistance application developed for the Google Solution Challenge 2025 Hackathon. This comprehensive financial management solution leverages artificial intelligence to provide personalized financial advice, budget tracking, expense categorization, and investment recommendations. The application features a modern, intuitive interface built with Flutter for cross-platform compatibility, ensuring users can access their financial data seamlessly across devices. The backend is powered by Python and FastAPI, providing robust API endpoints for real-time financial data processing. Integration with Google Gemini API enables advanced AI-powered financial insights and recommendations tailored to individual user needs. Twilio integration facilitates SMS notifications and alerts for important financial events, budget limits, and investment opportunities. The application also includes features like expense tracking with receipt scanning, automated categorization of transactions, financial goal setting and progress tracking, and comprehensive financial analytics and reporting.',
      image: MoneyMindImg,
      url: 'Google Solution Challenge 2025 Hackathon',
      tech: ['Python', 'FastAPI', 'Google Gemini API', 'Flutter',  'Twilio'],
      links: {
        github: '#',
        youtube: 'https://youtu.be/SCxn1KRzeg0',
        linkedin: 'https://www.linkedin.com/posts/suyash-mundhe-91b62a25a_googlesolutionchallenge-genai-activity-7332454978894069760-AhxI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_PEqcBfMna14p1T09Y_R0lulH8iLacgL4'
      },
      hasAchievement: false
    },
    {
      title: 'Crypture',
      excerpt: 'Crypture is a modern Web 3.0 blockchain app using Solidity, Smart Contracts, Ethereum, and React. It enables secure ETH transactions, wallet integration via MetaMask, and real-time blockchain interactions with a sleek UI.',
      fullDescription: 'Crypture is a comprehensive Web 3.0 blockchain application that demonstrates the power of decentralized technology through practical implementation. Built as a learning project, this application showcases modern blockchain development practices using Solidity for smart contract development, Ethereum blockchain for decentralized transaction processing, and React.js for a responsive user interface. The application enables users to perform secure ETH transactions with full transparency and immutability provided by the Ethereum blockchain. MetaMask integration allows seamless wallet connectivity, enabling users to interact with the blockchain directly from their browser. The application features real-time blockchain interactions, displaying transaction status, gas fees, and confirmation times. The user interface is designed with modern web standards, providing an intuitive experience for both blockchain newcomers and experienced users. Key features include secure wallet connectivity, real-time transaction tracking, smart contract interaction capabilities, and comprehensive transaction history. The project serves as an excellent example of how traditional web development skills can be applied to blockchain technology.',
      image: 'https://ideausher.com/wp-content/uploads/2022/09/web-3.0-blockchain.webp',
      url: 'Learning Project',
      tech: ['React.js', 'Solidity', 'Ethereum', 'MetaMask', 'Ethers.js'],
      links: {
        github: 'https://github.com/suyashmundhe31/Crypture'
      },
      hasAchievement: false
    },
    {
      title: 'Custom Neural Network Architecture',
      excerpt: 'A Learning Journey: Building Custom Neural Network Architecture from Scratch. This project represents my hands-on exploration of creating a custom neural network chatbot using my own database.',
      fullDescription: 'A Learning Journey: Building Custom Neural Network Architecture from Scratch. This project represents my hands-on exploration of creating a custom neural network chatbot using my own database. Built entirely from scratch using TensorFlow/Keras, this chatbot is trained on a proprietary dataset of 751 market research Q&A pairs and demonstrates the complete process of designing, implementing, and training a domain-specific conversational AI system. The project involved extensive research into neural network architectures, optimization techniques, and training methodologies. Key components include custom data preprocessing pipelines, implementation of attention mechanisms, development of custom loss functions, and comprehensive model evaluation frameworks. The neural network architecture features multiple layers with carefully tuned hyperparameters, dropout regularization for preventing overfitting, and custom activation functions optimized for conversational AI tasks. The training process involved extensive experimentation with different learning rates, batch sizes, and optimization algorithms to achieve optimal performance. This project provided valuable insights into the complexities of building AI systems from the ground up and demonstrated the importance of quality data in training effective machine learning models.',
      image: 'https://img.freepik.com/premium-vector/deep-learning-artificial-neural-networks-that-form-shape-as-human-brain_250841-143.jpg',
      url: 'Learning Project',
      tech: ['Python', 'TensorFlow'],
      links: {
        github: 'https://github.com/suyashmundhe31/Custom-Neural-Network-Architecture'
      },
      hasAchievement: false
    },
    {
      title: 'Startup Market Research Chatbot',
      excerpt: 'This project is an experimental implementation of Database-Augmented Generation (DAG) - a technique that combines the power of Large Language Models with structured database queries to provide accurate, data-driven responses.',
      fullDescription: 'This project is an experimental implementation of Database-Augmented Generation (DAG) - a technique that combines the power of Large Language Models with structured database queries to provide accurate, data-driven responses. Built as a learning exercise, this chatbot demonstrates how to create intelligent systems that ground AI responses in real data. The system architecture integrates LangChain for orchestrating complex AI workflows, Groq for high-performance language model inference, Streamlit for creating an intuitive web interface, and SQLite for efficient data storage and retrieval. The chatbot specializes in startup market research, providing entrepreneurs and researchers with data-driven insights about market trends, competitor analysis, and business opportunities. Key features include natural language query processing, intelligent database query generation, real-time data retrieval and synthesis, and comprehensive market analysis reports. The DAG approach ensures that all responses are grounded in factual data from the database, reducing hallucinations and improving the reliability of AI-generated insights. This experimental project explores the intersection of traditional database systems and modern AI technologies, demonstrating how structured data can enhance the capabilities of large language models.',
      image: Chatbot,
      url: 'Experimental Project',
      tech: ['LangChain', 'Groq', 'Streamlit', 'SQLite'],
      links: {
        github: 'https://github.com/suyashmundhe31/Startup-Market-Research-Chatbot'
      },
      hasAchievement: false
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAchievementClick = () => {
    // Navigate to achievements/blog page
    window.location.href = '/blog';
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-black mb-6 sm:mb-8 font-mono">Projects</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 lg:mb-16 font-mono max-w-2xl">
          A collection of my work spanning web development, mobile applications, and creative projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border-2 border-black hover:shadow-lg transition-all duration-200">
              {/* Browser header */}
              <div className="bg-gray-300 border-b-2 border-black p-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs font-mono text-gray-700 ml-4 truncate">{project.url}</div>
              </div>
              
              {/* Project content */}
              <div className="aspect-video bg-gray-100 border-b-2 border-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover bg-white"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-black mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-700 mb-4 font-mono text-sm leading-relaxed">
                  {expandedProject === index ? project.fullDescription : project.excerpt}
                </p>

                {/* Read More/Less Button */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center text-sm font-mono text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
                >
                  {expandedProject === index ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Read Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Read More
                    </>
                  )}
                </button>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="border border-black px-2 py-1 text-xs font-mono bg-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {/* View Achievement Button - only for first project */}
                  {project.hasAchievement && (
                    <button
                      onClick={handleAchievementClick}
                      className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                    >
                      <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">View Achievement</span>
                      <span className="sm:hidden">Achievement</span>
                    </button>
                  )}

                  {/* GitHub button for all projects */}
                  <button
                    onClick={() => handleLinkClick(project.links.github)}
                    className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">GitHub</span>
                    <span className="sm:hidden">Git</span>
                  </button>

                  {/* YouTube button - only for first 2 projects */}
                  {project.links.youtube && index < 2 && (
                    <button
                      onClick={() => handleLinkClick(project.links.youtube)}
                      className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                    >
                      <Youtube className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">YouTube</span>
                      <span className="sm:hidden">YT</span>
                    </button>
                  )}

                  {/* LinkedIn button - only for first 2 projects */}
                  {project.links.linkedin && index < 2 && (
                    <button
                      onClick={() => handleLinkClick(project.links.linkedin)}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                    >
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">LinkedIn</span>
                      <span className="sm:hidden">LI</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;