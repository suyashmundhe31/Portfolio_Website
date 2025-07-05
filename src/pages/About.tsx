import React from 'react';
import { Link, Monitor, Brain, RectangleVertical } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'AI/ML', level: 88 },
    { name: 'Web Development', level: 95 },
    { name: 'Application Development', level: 82 },
    { name: 'Web3 Blockchain', level: 15 },
    { name: 'UI/UX', level: 65 },
    { name: 'Database', level: 40 }
  ];
  
   const techStack = [
    { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'REST API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Langchain', logo: 'https://python.langchain.com/img/brand/wordmark.png' },
    { name: 'Groq', logo: 'https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg' },
    { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo.svg' },
    { name: 'Gemini API', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 font-mono">A glimpse into my work</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-12 sm:mb-16 font-mono max-w-2xl">
          Get to know more about me, my skills, and my journey.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* About Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-4 sm:mb-6 font-mono">About Me</h2>
              <div className="space-y-4 font-mono text-sm leading-relaxed text-gray-700">
                <p>
                  I'm a B.Tech IT student with Honors in AI, driven by an insatiable curiosity for emerging technologies. My learning philosophy revolves around hands-on exploration—I've built projects spanning web development, application development, AI/ML, and deep learning, while currently diving into the Web3 and blockchain ecosystem.
                </p>
                <p>
                  I firmly believe that being a "jack of all trades" opens doors to innovative cross-domain solutions and provides the flexibility to master any field when the right opportunity arises.
                </p>
                <p>
                  Beyond coding, I'm passionate about the startup ecosystem and business strategy. When I'm not immersed in technology, you'll find me channeling my competitive spirit through cricket (where I played professionally for over three years), strumming my guitar, or getting lost in the world of cinema
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-4 sm:mb-6 font-mono">Skills</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm font-bold">{skill.name}</span>
                      <span className="font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 border border-black h-3 sm:h-4">
                      <div
                        className="bg-black h-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack & Services */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-black mb-2 font-mono">Tech Stack</h3>
              <p className="text-gray-700 font-mono text-sm mb-4 sm:mb-6">And many more exploring....</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center sm:justify-start">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="group relative"
                    title={tech.name}
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter hover:scale-110 transition-all duration-200"
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-black mb-4 sm:mb-6 font-mono">Services</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Monitor, name: 'Web Dev' },
                  { icon: RectangleVertical, name: 'App Dev' },
                  { icon: Brain, name: 'AI/ML' },
                  { icon: Link, name: 'Web3 Blockchain' }
                ].map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.name} className="text-center p-3 sm:p-4 border border-black hover:bg-gray-50 transition-colors duration-200">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                      <span className="font-mono text-xs sm:text-sm font-bold block">{service.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;