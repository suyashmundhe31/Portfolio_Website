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
      description: 'Pursuing a comprehensive undergraduate program in Information Technology, combining theoretical foundations with practical applications. The curriculum emphasizes core computer science subjects and modern industry practices, enabling strong problem-solving and development skills.".',
      courses: ['Data Structures & Algorithms (DSA)', 'Operating Systems (OS)', 'UI/UX Design', 'Database Systems', 'Web Development', 'Software Engineering', 'Machine Learning', 'AI', 'Deep Learning']
    },
    {
      degree: 'Higher Secondary School Certificate (HSC)',
      school: 'Siddharth College of Arts, Science and Commerce',
      location: 'Mumbai, India',
      period: '2020 - 2022',
      gpa: '61.33%',
      description: 'Completed Higher Secondary education with a focus on Science stream under the Maharashtra State Board. Gained foundational knowledge in core subjects and skills essential for further studies in engineering and technology.',
      courses: ['HSE']
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'Antonio De souza High School',
      location: 'Mumbai, India',
      period: '2008 - 2020',
      gpa: '76.00%',
      description: 'Completed primary and secondary schooling with consistent academic performance and active participation in school activities. The SSC curriculum helped cultivate discipline, curiosity, and a balanced foundation in sciences, mathematics, and languages—setting the stage for future academic and personal growth.',
      courses: ['SSC']
    }
  ];

  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'Pragati.TSP',
      location: 'Remote',
      period: 'Jun 2019 - Aug 2019',
      type: 'Internship',
      description: 'Contributed as a Machine Learning Intern on innovative AI-driven projects focused on real-world applications in market research and synthetic media. Developed a custom neural network chatbot capable of Database-Augmented Generation (DAG), allowing dynamic, data-backed responses from MongoDB. Additionally, explored the deepfake domain by building a pipeline that clones user voices from video inputs and generates lip-synced videos from custom prompts. Also collaborated directly with clients to understand project needs, deliver demos, and gather feedback.',
      achievements: [
        'Built a custom neural network-based chatbot for market research, integrated with a dynamic MongoDB backend to serve real-time insights without model retraining.',
        'Enabled Database-Augmented Generation (DAG) to allow the chatbot to blend AI-generated responses with structured data',
        'Researched and prototyped a deepfake pipeline involving voice cloning and video synthesis aligned with user prompts.',
        'Engaged with company clients to discuss use cases, deliver technical walkthroughs, and ensure AI solutions aligned with business needs.',
        'Contributed to model fine-tuning and evaluation, improving chatbot response accuracy and voice synthesis quality.'
      ],
      technologies: ['Langchain', 'Groq', 'Hugging Face', 'Neural Networks', 'Python', 'Transformers', 'MongoDB', 'Torchaudio', 'FFmpeg', 'Voice Cloning Libraries', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Web Developer and UI/UX Developer Intern',
      company: 'Software Development Cell',
      location: ' K.J. Somaiya College of Engineering, Mumbai, India',
      period: '20 May, 2025 - Present',
      type: 'Full-time',
      description: 'Worked as a Web Developer and UI/UX Intern at the Software Development Cell, where I contributed to a complete redesign of the college’s official website. The project aimed to modernize the user interface and integrate backend systems to streamline digital interactions for faculty and students. I led UI revamp efforts and implemented dynamic features powered by PHP Laravel. ',
      achievements: [
        'Led the redesign of the website’s front-end, creating a responsive and user-friendly interface using ReactJS and Bootstrap.',
        'Developed backend modules for faculty and student dashboards, enabling real-time data management and improved user workflows.',
        'Implemented dynamic content handling, reducing manual updates and improving system efficiency.',
        'Participated in design validation and user testing to ensure an intuitive user experience.',
        'Collaborated with designers, developers, and faculty to ensure the project met both technical and user experience goals.'
      ],
      technologies: ['ReactJS', 'Bootstrap', 'PHP Laravel,', 'Figma', 'MySQL']
    },
    {
      title: 'Jt. Social Head',
      company: 'KJSCE Students Council',
      location: 'K.J. Somaiya College of Engineering, Mumbai, India',
      period: 'July 2023 - July 2021',
      type: 'Full-time',
      description: 'Served as the Joint Social Head of the KJSCE Students’ Council, where I led the college’s flagship social initiative, Parvaah. Focused on fostering student involvement in socially responsible activities, I helped conceptualize and execute impactful community campaigns including education drives, beach cleanups, and food donation efforts. Additionally, played an active role in the Event Organization Team, contributing to the successful planning and execution of several large-scale technical, Sports and cultural events at the college.',
      achievements: [
        'Led the execution of over 10+ social impact events under the Parvaah initiative, increasing student participation and social outreach.',
        'Organized successful campaigns such as beach clean-up drives, community education sessions, and food donation events, collaborating with NGOs and local authorities.',
        'Mobilized and managed volunteer teams of 30+ students to ensure smooth operations during large-scale events.',
        'Contributed to the planning of major college fests by coordinating logistics, sponsorships, and crowd management.',
        'Enhanced student and community engagement by promoting socially conscious programs and encouraging active involvement in civic initiatives.'
      ],
      technologies: ['Event Management', 'Team Leadership', 'Communication & Public Speaking', 'Marketing']
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