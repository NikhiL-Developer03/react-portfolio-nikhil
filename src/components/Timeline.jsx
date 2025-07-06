import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaCertificate, FaCalendarAlt } from "react-icons/fa";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      year: "Apr 2024 - Jun 2024",
      role: "Cloud Engineer",
      company: "GTrusty Cloud Private Limited",
      description: "Led cloud infrastructure management for enterprise clients, managing DNS and MX configurations across 25+ domains while reducing email delivery issues by 50%.",
      technologies: ["Google Workspace", "DNS Management", "GAM", "GAMMO"],
      type: "work",
      achievements: [
        "Reduced email delivery issues by 50%",
        "Managed 25+ enterprise domains",
        "Improved team productivity by 30%",
        "Migrated 100GB+ data with minimal downtime"
      ]
    },
    {
      year: "Jan 2024 - Mar 2024",
      role: "Software Development Trainee",
      company: "Himank Soft Solution",
      description: "Developed responsive web components using modern React patterns and gained hands-on experience with full-stack development.",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "MongoDB"],
      type: "work",
      achievements: [
        "Improved loading speeds by 25%",
        "Built responsive web components",
        "Collaborated with senior developers",
        "Gained full-stack development experience"
      ]
    }
  ];

  const education = [
    {
      year: "2021 - 2024",
      role: "Bachelor of Computer Applications",
      company: "Manav Rachna University",
      description: "Comprehensive study of computer science fundamentals, programming languages, and software development methodologies.",
      technologies: ["Java", "Python", "Database Management", "Software Engineering"],
      type: "education",
      achievements: [
        "Graduated with distinction",
        "Led multiple academic projects",
        "Active in coding competitions",
        "Strong foundation in algorithms"
      ]
    },
    {
      year: "2019 - 2021",
      role: "Senior Secondary",
      company: "Kendriya Vidyalaya",
      description: "Completed higher secondary education with focus on Science and Mathematics.",
      technologies: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      type: "education",
      achievements: [
        "Scored 85% overall",
        "Excellent in Mathematics",
        "Computer Science topper",
        "Active in technical clubs"
      ]
    }
  ];

  const certifications = [
    {
      year: "2024",
      role: "React.js Certification",
      company: "Meta (Facebook)",
      description: "Advanced React development including hooks, context, and modern patterns.",
      technologies: ["React", "Hooks", "Context API", "Redux"],
      type: "certification",
      achievements: [
        "Component lifecycle mastery",
        "State management expertise",
        "Performance optimization",
        "Modern React patterns"
      ]
    },
    {
      year: "2024",
      role: "Node.js Developer",
      company: "IBM",
      description: "Backend development with Node.js, Express, and database integration.",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
      type: "certification",
      achievements: [
        "RESTful API development",
        "Database design and optimization",
        "Authentication and security",
        "Scalable backend architecture"
      ]
    },
    {
      year: "2023",
      role: "Google Cloud Associate",
      company: "Google Cloud",
      description: "Cloud platform fundamentals and Google Workspace administration.",
      technologies: ["Google Cloud", "Workspace Admin", "Cloud Storage", "IAM"],
      type: "certification",
      achievements: [
        "Cloud infrastructure management",
        "Identity and access management",
        "Storage and networking",
        "Security best practices"
      ]
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "experience":
        return experiences;
      case "education":
        return education;
      case "certifications":
        return certifications;
      default:
        return experiences;
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "work":
        return <FaCode className="text-purple-500" />;
      case "education":
        return <FaGraduationCap className="text-blue-500" />;
      case "certification":
        return <FaCertificate className="text-green-500" />;
      default:
        return <FaCalendarAlt className="text-gray-500" />;
    }
  };

  const tabs = [
    { id: "experience", label: "Experience", icon: FaCode },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "certifications", label: "Certifications", icon: FaCertificate }
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Professional Journey
      </motion.h1>


      <div className="flex justify-center mb-12">
        <div className="bg-neutral-900/50 rounded-lg p-1 border border-neutral-700">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>


      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >

          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>

          {getCurrentData().map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start mb-12"
            >

              <div className="flex-shrink-0 w-16 h-16 bg-neutral-800 border-2 border-neutral-700 rounded-full flex items-center justify-center mr-6 z-10">
                {getIcon(item.type)}
              </div>


              <div className="flex-1 bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-purple-400 font-medium">{item.company}</p>
                  </div>
                  <span className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm">
                    {item.year}
                  </span>
                </div>

                <p className="text-neutral-300 mb-4 leading-relaxed">
                  {item.description}
                </p>


                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-400 mb-2">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-neutral-800 text-purple-300 rounded text-xs border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>


                <div>
                  <h4 className="text-sm font-semibold text-neutral-400 mb-2">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-neutral-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
