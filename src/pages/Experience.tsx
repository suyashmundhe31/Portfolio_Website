import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      school: 'K.J. Somaiya College of Engineering',
      location: 'Mumbai, India',
      period: '2022 - 2026',
      gpa: '8.3/10',
      description: 'Specialized in Software Engineering and Human-Computer Interaction. Thesis on "Modern Web Development Patterns".',
      courses: ['Advanced Algorithms', 'Software Architecture', 'UI/UX Design', 'Database Systems']
    },
    {
      degree: 'Higher Secondary School Certificate (HSC)',
      school: 'Siddharth College of Arts, Science and Commerce',
      location: 'Mumbai, India',
      period: '2020 - 2022',
      gpa: '61.33%',
      description: 'Graduated Magna Cum Laude. Focus on web development and software engineering fundamentals.',
      courses: ['HSE']
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'Antonio De souza High School',
      location: 'Mumbai, India',
      period: '2008 - 2020',
      gpa: '76.00%',
      description: 'Graduated Magna Cum Laude. Focus on web development and software engineering fundamentals.',
      courses: ['SSC']
    }
  ];

  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'WebSolutions Ltd.',
      location: 'Palo Alto, CA',
      period: 'Jun 2019 - Aug 2019',
      type: 'Internship',
      description: 'Developed interactive web components and assisted in redesigning company website. Gained experience in modern frontend frameworks.',
      achievements: [
        'Created reusable component library used across 3 projects',
        'Improved website accessibility score to 95%',
        'Contributed to open-source projects',
        'Presented final project to executive team'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'React', 'Git', 'Figma']
    },
    {
      title: 'Web Developer and UI/UX Developer Intern',
      company: 'Pragati.TSP',
      location: ' K.J. Somaiya College of Engineering, Mumbai, India',
      period: '20 May, 2025 - Present',
      type: 'Full-time',
      description: 'working on cutting-edge AI-driven solutions aimed at empowering startups and entrepreneurs. ',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers to mid-level positions'
      ],
      technologies: ['Langchain', 'Groq', 'Hugging Face', 'Neural Networks', 'Python']
    },
    {
      title: 'Jt. Social Head',
      company: 'KJSCE Students Council',
      location: 'K.J. Somaiya College of Engineering, Mumbai, India',
      period: 'July 2023 - July 2021',
      type: 'Full-time',
      description: ': Led and organized multiple social events such as education drives, beach cleanup drives,and food donation drives, fostering community engagement and social responsibility.',
      achievements: [
        'Built 5 production applications from scratch',
        'Reduced page load times by 50% through optimization',
        'Implemented responsive design for mobile-first approach',
        'Collaborated with designers on 10+ UI/UX projects'
      ],
      technologies: ['', '', '', '', '']
    }
  ];

  const certifications = [
    { name: 'The Blockchain System', issuer: 'University of California, Irvine(UCI)', year: '2025' },
    { name: 'Introduction to TensorFlow for AI, ML, and DL', issuer: 'DeepLearning.AI', year: '2025' },
    { name: 'Introduction to DevOps', issuer: 'IBM', year: '2025' },
    { name: 'Django Web Framework', issuer: 'Meta', year: '2024' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 font-mono">Experience</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 lg:mb-16 font-mono max-w-2xl">
          My educational background and professional journey in software development.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Education Section */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            <div className="bg-white border border-gray-300 p-4 sm:p-6 lg:p-8 shadow-sm">
              <div className="flex items-center mb-4 sm:mb-6">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-gray-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-black font-mono">Education</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-gray-400 pl-4 sm:pl-6 pb-4 sm:pb-6">
                    <div className="bg-gray-50 border border-gray-300 p-3 sm:p-4 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-black text-black font-mono mb-1">{edu.degree}</h3>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm font-mono text-gray-700">
                        <span className="font-bold">{edu.school}</span>
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{edu.location}</span>
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{edu.period}</span>
                        <span className="bg-black text-white px-2 py-1 text-xs inline-block w-fit">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 font-mono text-sm mb-3 sm:mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span key={course} className="bg-gray-100 border border-gray-300 px-2 py-1 text-xs font-mono">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white border border-gray-300 p-4 sm:p-6 lg:p-8 shadow-sm">
              <div className="flex items-center mb-4 sm:mb-6">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-gray-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-black font-mono">Work Experience</h2>
              </div>
              
              <div className="space-y-6 lg:space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-gray-400 pl-4 sm:pl-6 pb-4 sm:pb-6">
                    <div className="bg-gray-50 border border-gray-300 p-3 sm:p-4 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-black text-black font-mono mb-1">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm font-mono text-gray-700">
                        <span className="font-bold">{exp.company}</span>
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{exp.location}</span>
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{exp.period}</span>
                        <span className="bg-black text-white px-2 py-1 text-xs inline-block w-fit">{exp.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 font-mono text-sm mb-3 sm:mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-3 sm:mb-4">
                      <h4 className="font-mono text-sm font-bold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 font-mono text-xs flex items-start">
                            <span className="text-gray-400 mr-2">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 border border-gray-300 px-2 py-1 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            {/* Quick Stats */}
            <div className="bg-white border border-gray-300 p-4 sm:p-6 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-black text-black mb-3 sm:mb-4 font-mono">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="text-center bg-gray-50 border border-gray-300 p-2 sm:p-3">
                  <div className="text-xl sm:text-2xl font-black text-black">3+</div>
                  <div className="text-xs font-mono text-gray-600">Years Experience</div>
                </div>
                <div className="text-center bg-gray-50 border border-gray-300 p-2 sm:p-3">
                  <div className="text-xl sm:text-2xl font-black text-black">5+</div>
                  <div className="text-xs font-mono text-gray-600">Projects</div>
                </div>
                <div className="text-center bg-gray-50 border border-gray-300 p-2 sm:p-3">
                  <div className="text-xl sm:text-2xl font-black text-black">2</div>
                  <div className="text-xs font-mono text-gray-600">Companies</div>
                </div>
                <div className="text-center bg-gray-50 border border-gray-300 p-2 sm:p-3">
                  <div className="text-xl sm:text-2xl font-black text-black">2</div>
                  <div className="text-xs font-mono text-gray-600">Degrees</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-gray-300 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center mb-3 sm:mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-gray-600" />
                <h3 className="text-lg sm:text-xl font-black text-black font-mono">Certifications</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-gray-300 p-2 sm:p-3 bg-gray-50">
                    <div className="font-mono text-sm font-bold text-black">{cert.name}</div>
                    <div className="font-mono text-xs text-gray-600">{cert.issuer}</div>
                    <div className="font-mono text-xs text-gray-500">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;