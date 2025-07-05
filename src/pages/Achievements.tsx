import React, { useState } from 'react';
import { Youtube, Github, Linkedin, Trophy, FileText, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import achievement1Image from '../assets/img/achievement1_post_img 1.png';
import achievement1Tropfy from '../assets/img/achievement1_post_trophy.jpg';
import achievement2paper from '../assets/docs/Suyash_Mundhe_ResearchPaper.pdf';
import achievement2Image from '../assets/img/achievement2_post_img 1.png';
import achievement2Certificate from '../assets/docs/Suyash_Mundhe_ResearchPaperCertificate.pdf';

const Achievements: React.FC = () => {
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);

  const achievements = [
    {
      title: 'Research Paper Published in SPIRAL',
      date: '5th June 2025',
      excerpt: 'Published and presented my first research paper at the 9th ICICCT 2025.',
      fullDescription: 'Published and presented my first research paper at the 9th International Conference on Inventive Communication and Computational Technologies [ICICCT 2025] alongside my co-author and teammate Aastha Kataria. This milestone represents my entry into academic research and marks a significant achievement in my journey toward understanding advanced machine learning concepts.Our research paper, titled "Comparative Analysis of Standard vs. Curriculum-Based Proximal Policy Optimization in High-Dimensional Quadrupedal Locomotion: An Empirical Investigation of Negative Transfer Effects," challenges conventional assumptions about curriculum learning in reinforcement learning. Through rigorous experimentation using the Ant-v5 environment from the Gymnasium suite, we discovered that standard reinforcement learning consistently outperforms curriculum learning approaches in complex locomotion tasks, contrary to theoretical expectations.Key Research Findings: Our study revealed that while curriculum learning theoretically should improve performance by gradually increasing task difficulty, it actually led to negative transfer effects in quadrupedal locomotion. Standard PPO achieved superior performance across all difficulty levels (0.2-1.0), maintaining 83.7% performance versus curriculums 62.4% at shifted difficulties. We identified that curriculum learnings simplified early stages limited exposure to critical edge cases, hindering robust strategy development and requiring agents to unlearn suboptimal behaviors when transitioning to full complexity.Technical Contributions: We implemented three approaches using Proximal Policy Optimization (PPO) as the base algorithm - standard reinforcement learning, basic adaptive curriculum, and optimized stage-based curriculum. Our evaluation framework included comprehensive analysis of training dynamics, agent behavior, performance consistency, and negative transfer mechanisms. The research utilized cutting-edge tools including MuJoCo physics engine, Stable Baselines3, and custom curriculum implementations with 300,000 timestep training budgets. This achievement wouldnt have been possible without the exceptional collaboration with Aastha Kataria, whose dedication and expertise made this research impactful. Together, we contributed valuable insights to the reinforcement learning community by providing empirical evidence that challenges existing paradigms and establishes new guidelines for curriculum learning application in complex continuous control tasks.Conference: 9th International Conference on Inventive Communication and Computational Technologies (ICICCT 2025) • First-author research paper • International publication',
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
      fullDescription: 'Team Void achieved 1st Place among 500+ teams across India at Smart India Hackathon 2024. This was my very first hackathon, and our incredible journey progressed from 2nd place in our college round to winning the national finale. Our winning solution, Simple स्वस्थ, tackled the problem statement ID 1620 of " Queuing models in OPDs / availability of beds / admission of patients, focused on optimizing hospital management through smart technology. Our hospital-based solution integrates seamlessly with a city-wide healthcare module, improving patient flow, inventory management, and accessibility to government schemes." We developed a comprehensive hospital management solution that optimizes patient flow, inventory management, and integrates government healthcare schemes for better accessibility. Key features that set us apart included an OPD Queuing Algorithm with triage-based priority system and load balancing, Smart Inventory Management with automated stock monitoring and waste disposal alerts, Government Schemes Integration for seamless access to healthcare benefits, WhatsApp Integration for OPD booking, reminders, and follow-ups, and a Disaster Casualty Management system for efficient patient relocation during emergencies. My contributions to this victory included developing the entire frontend in ReactJS, building a Medical AI Chatbot using LangChain, integrating the Disaster Casualty Management System, and implementing Government Healthcare Schemes with Django APIs. This achievement was made possible by the incredible Team Void: Aastha Kataria, Ashwin Prajapati, Diya Parelkar, Kaveri Chawhan, and Tanishtha Ghosh.',
      image: achievement1Image,
      hasProject: true,
      links: {
        youtube: 'https://www.youtube.com/watch?v=ttbf5Ho5iUw',
        github: '#',
        linkedin: 'https://www.linkedin.com/posts/suyash-mundhe-91b62a25a_sih2024-hackathonwinner-teamvoid-activity-7290721579716505600-80Yd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_PEqcBfMna14p1T09Y_R0lulH8iLacgL4',
        trophy: achievement1Tropfy 
      }
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedAchievement(expandedAchievement === index ? null : index);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFileClick = (url: string) => {
    // Open in same tab for PDFs and certificates
    window.location.href = url;
  };

  const handleProjectClick = () => {
    // Navigate to projects page - you can update this path as needed
    window.location.href = '/projects';
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-black mb-6 sm:mb-8 font-mono">Achievements</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 lg:mb-16 font-mono max-w-2xl">
          Milestones, recognitions, and accomplishments that showcase my journey in technology and research.
        </p>

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
                    onClick={() => toggleExpanded(index)}
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
                    {/* View Project Button - only for first achievement */}
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
                        {/* YouTube button - only show for first achievement */}
                        {achievement.links.youtube && index === 0 && (
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
    </div>
  );
};

export default Achievements;