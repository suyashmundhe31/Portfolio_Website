import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Monitor, User, Briefcase, Mail, Github, Youtube, Linkedin, Trophy, FileText, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import MoneyMindImg from '../assets/img/MoneyMindLogo.svg';
import SimpleSwasthaLogo from '../assets/img/SimpleSwasthaLogo.svg';
import achievement1Image from '../assets/img/achievement1_post_img 1.png';
import achievement1Trophy from '../assets/img/achievement1_post_trophy.jpg';
import achievement2paper from '../assets/docs/Suyash_Mundhe_ResearchPaper.pdf';
import achievement2Image from '../assets/img/achievement2_post_img 1.png';
import achievement2Certificate from '../assets/docs/Suyash_Mundhe_ResearchPaperCertificate.pdf';

const Home: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);

  const handleDownload = () => {
    const pdfUrl = '/assets/docs/Suyash_Mundhe_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Suyash_Mundhe_Resume.pdf';
    link.click();
  };

  const projects = [
    {
      title: 'Simple स्वस्थ (SIH 24 Winner)',
      excerpt: 'A comprehensive healthcare management solution that won the Smart India Hackathon 2024.',
      fullDescription: 'A comprehensive healthcare management solution that won the Smart India Hackathon 2024. This project tackles hospital management through smart technology, featuring an OPD Queuing Algorithm with triage-based priority system and load balancing, Smart Inventory Management with automated stock monitoring and waste disposal alerts, Government Schemes Integration for seamless access to healthcare benefits, WhatsApp Integration for OPD booking, reminders, and follow-ups, and a Disaster Casualty Management system for efficient patient relocation during emergencies.',
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
      excerpt: 'A modern GenAI-based financial assistance application developed for the Google Solution Challenge 2025 Hackathon.',
      fullDescription: 'MoneyMind is an innovative GenAI-based financial assistance application developed for the Google Solution Challenge 2025 Hackathon. This comprehensive financial management solution leverages artificial intelligence to provide personalized financial advice, budget tracking, expense categorization, and investment recommendations. The application features a modern, intuitive interface built with Flutter for cross-platform compatibility, ensuring users can access their financial data seamlessly across devices.',
      image: MoneyMindImg,
      url: 'Google Solution Challenge 2025 Hackathon',
      tech: ['Python', 'FastAPI', 'Google Gemini API', 'Flutter', 'Twilio'],
      links: {
        github: '#',
        youtube: 'https://youtu.be/SCxn1KRzeg0',
        linkedin: 'https://www.linkedin.com/posts/suyash-mundhe-91b62a25a_googlesolutionchallenge-genai-activity-7332454978894069760-AhxI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_PEqcBfMna14p1T09Y_R0lulH8iLacgL4'
      },
      hasAchievement: false
    }
  ];

  const achievements = [
    {
      title: 'Research Paper Published in SPIRAL',
      date: '5th June 2025',
      excerpt: 'Published and presented my first research paper at the 9th ICICCT 2025.',
      fullDescription: 'Published and presented my first research paper at the 9th International Conference on Inventive Communication and Computational Technologies [ICICCT 2025] alongside my co-author and teammate Aastha Kataria. This milestone represents my entry into academic research and marks a significant achievement in my journey toward understanding advanced machine learning concepts.',
      image: achievement2Image,
      pdfLink: achievement2paper,
      hasProject: false,
      links: {
        github: '#',
        trophy: achievement2Certificate,
        linkedin: '#',
      }
    },
    {
      title: '🏆Smart India Hackathon 2024 - National Champions',
      date: '12th December 2024',
      excerpt: 'Team Void achieved 1st Place among 500+ teams across India at Smart India Hackathon 2024.',
      fullDescription: 'Team Void achieved 1st Place among 500+ teams across India at Smart India Hackathon 2024. This was my very first hackathon, and our incredible journey progressed from 2nd place in our college round to winning the national finale. Our winning solution, Simple स्वस्थ, tackled the problem statement ID 1620 of "Queuing models in OPDs / availability of beds / admission of patients, focused on optimizing hospital management through smart technology.',
      image: achievement1Image,
      hasProject: true,
      links: {
        youtube: 'https://www.youtube.com/watch?v=ttbf5Ho5iUw',
        github: '#',
        linkedin: 'https://www.linkedin.com/posts/suyash-mundhe-91b62a25a_sih2024-hackathonwinner-teamvoid-activity-7290721579716505600-80Yd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_PEqcBfMna14p1T09Y_R0lulH8iLacgL4',
        trophy: achievement1Trophy 
      }
    }
  ];

  const toggleProjectExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const toggleAchievementExpanded = (index: number) => {
    setExpandedAchievement(expandedAchievement === index ? null : index);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFileClick = (url: string) => {
    window.location.href = url;
  };

  const handleProjectClick = () => {
    window.location.href = '/projects';
  };

  const handleAchievementClick = () => {
    window.location.href = '/achievements';
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-black mb-4 font-mono leading-tight">
              Hello.
              <br />
              I'm Suyash.
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-mono max-w-md">
              I'm a B.Tech(IT) Software Engineer {' '} <br />
              <a href="/about" className='underline'>About Me</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleDownload} className="border-2 border-black px-4 sm:px-6 py-2 sm:py-3 bg-black hover:bg-white hover:text-black transition-all duration-200 font-mono text-sm text-white">
                Download CV
              </button>
              <Link to="/contact" className="border-2 border-black px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-black hover:text-white transition-all duration-200 font-mono text-sm text-center">
                Get in touch
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-4 h-4 border-2 border-black rounded-full"></div>
              <div className="absolute -top-4 left-8 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -top-12 left-16 w-3 h-3 border-2 border-black rounded-full"></div>
              
              {/* Main illustration */}
              <div className="relative bg-black rounded-3xl p-6 sm:p-8 transform rotate-3">
                <div className="bg-white rounded-2xl p-4 sm:p-6 w-48 sm:w-64 h-36 sm:h-48 flex items-center justify-center">
                  <div className="text-center">
                    {/* <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <User className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div> */}
                    <div>
                      
                    </div>
                    <div className="w-10 sm:w-12 h-2 bg-gray-300 rounded mx-auto mb-2"></div>
                    <div className="w-6 sm:w-8 h-2 bg-gray-300 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-black rounded-full"></div>
              <div className="absolute bottom-8 -right-8 w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white border-t-2 border-black">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl font-black text-black mb-4 sm:mb-6 font-mono">Quick links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: 'About', href: '/about', icon: User },
              { name: 'Projects', href: '/projects', icon: Briefcase },
              { name: 'Achievements', href: '/achievements', icon: Monitor },
              { name: 'Experience', href: '/experience', icon: Mail },
              { name: 'Contact', href: '/contact', icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group border-2 border-black bg-gray-100 hover:bg-black hover:text-white transition-all duration-200 p-3 sm:p-4 flex items-center justify-between"
                >
                  <span className="font-mono font-bold text-sm sm:text-base">{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-200 border-t-2 border-black">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black font-mono">Projects</h2>
            <Link to="/projects" className="font-mono text-sm underline hover:no-underline">
              more about projects
            </Link>
          </div>
          
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
                    onClick={() => toggleProjectExpanded(index)}
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

                    {/* GitHub button */}
                    <button
                      onClick={() => handleLinkClick(project.links.github)}
                      className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">GitHub</span>
                      <span className="sm:hidden">Git</span>
                    </button>

                    {/* YouTube button */}
                    <button
                      onClick={() => handleLinkClick(project.links.youtube)}
                      className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                    >
                      <Youtube className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">YouTube</span>
                      <span className="sm:hidden">YT</span>
                    </button>

                    {/* LinkedIn button */}
                    <button
                      onClick={() => handleLinkClick(project.links.linkedin)}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                    >
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">LinkedIn</span>
                      <span className="sm:hidden">LI</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white border-t-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black font-mono">Achievements</h2>
            <Link to="/achievements" className="font-mono text-sm underline hover:no-underline">
              more about achievements
            </Link>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="bg-white border-2 border-black hover:shadow-lg transition-all duration-200">
                  {/* Browser header */}
                  <div className="bg-gray-300 border-b-2 border-black p-2 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-700 ml-4 truncate">{achievement.title}</div>
                  </div>

                  {/* Image section at top */}
                  <div className="aspect-video bg-gray-100 border-b-2 border-black">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content section below image */}
                  <div className="p-4 sm:p-6">
                    <div className="text-xs font-mono text-gray-600 mb-3">{achievement.date}</div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-mono font-bold text-black mb-4">{achievement.title}</h2>
                    
                    <p className="text-sm sm:text-base font-mono text-gray-700 leading-relaxed mb-4">
                      {expandedAchievement === index ? achievement.fullDescription : achievement.excerpt}
                    </p>

                    {/* Read More/Less Button */}
                    <button
                      onClick={() => toggleAchievementExpanded(index)}
                      className="flex items-center text-sm font-mono text-blue-600 hover:text-blue-800 mb-4 sm:mb-6 transition-colors duration-200"
                    >
                      {expandedAchievement === index ? (
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

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {/* View Project Button - only for second achievement (index 1) */}
                      {achievement.hasProject && (
                        <button
                          onClick={handleProjectClick}
                          className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">View Project</span>
                          <span className="sm:hidden">Project</span>
                        </button>
                      )}

                      {achievement.links && (
                        <>
                          {/* YouTube button - only show for second achievement (index 1) */}
                          {achievement.links.youtube && index === 1 && (
                            <button
                              onClick={() => handleLinkClick(achievement.links.youtube)}
                              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                            >
                              <Youtube className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">YouTube</span>
                              <span className="sm:hidden">YT</span>
                            </button>
                          )}
                          
                          <button
                            onClick={() => handleLinkClick(achievement.links.github)}
                            className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                          >
                            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">GitHub</span>
                            <span className="sm:hidden">Git</span>
                          </button>
                          
                          {achievement.links.linkedin && (
                            <button
                              onClick={() => handleLinkClick(achievement.links.linkedin)}
                              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                            >
                              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">LinkedIn</span>
                              <span className="sm:hidden">LI</span>
                            </button>
                          )}
                          
                          {achievement.links.trophy && (
                            <button
                              onClick={() => handleFileClick(achievement.links.trophy)}
                              className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                            >
                              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">Certificate</span>
                              <span className="sm:hidden">Cert</span>
                            </button>
                          )}
                        </>
                      )}
                      
                      {achievement.pdfLink && (
                        <button
                          onClick={() => handleFileClick(achievement.pdfLink)}
                          className="flex items-center bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-2 border-black transition-colors duration-200"
                        >
                          <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">View Paper</span>
                          <span className="sm:hidden">PDF</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;