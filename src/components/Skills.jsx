import React from "react";
import { motion } from "framer-motion";
import { 
  RiReactjsLine, 
  RiNodejsLine, 
  RiJavascriptLine,
  RiHtml5Line,
  RiCss3Line 
} from "react-icons/ri";
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiGit, 
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiVercel,
  SiFirebase,
  SiGithub
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: RiReactjsLine, color: "text-cyan-400", level: 90 },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white", level: 85 },
        { name: "JavaScript", icon: RiJavascriptLine, color: "text-yellow-400", level: 95 },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", level: 80 },
        { name: "HTML5", icon: RiHtml5Line, color: "text-orange-500", level: 95 },
        { name: "CSS3", icon: RiCss3Line, color: "text-blue-500", level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300", level: 88 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: RiNodejsLine, color: "text-green-500", level: 85 },
        { name: "Express.js", icon: SiExpress, color: "text-gray-300", level: 82 },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400", level: 80 },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600", level: 75 },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", level: 70 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-500", level: 90 },
        { name: "GitHub", icon: SiGithub, color: "text-white", level: 88 },
        { name: "Vercel", icon: SiVercel, color: "text-white", level: 85 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-8 sm:my-12 md:my-16 lg:my-20 text-center text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold"
      >
        Skills & Technologies
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="space-y-8 sm:space-y-12 md:space-y-16"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-purple-300">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-6">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-3 xs:p-4 sm:p-6 flex flex-col items-center space-y-2 sm:space-y-3 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:h-2"
                         style={{ width: `${skill.level}%` }} />
                    
                    <IconComponent className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                    <span className="text-xs sm:text-sm font-medium text-neutral-300 text-center leading-tight">
                      {skill.name}
                    </span>
                    
                    <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.level}%
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 sm:mt-16 md:mt-20 text-center"
      >
        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
          Always Learning & Growing
        </h3>
        <p className="text-neutral-400 text-xs xs:text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
          I'm passionate about staying up-to-date with the latest technologies and best practices. 
          Currently exploring AI/ML integration, advanced cloud architectures, and modern DevOps practices.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-4">
          {["AI/ML", "DevOps", "Microservices", "GraphQL", "Docker"].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 px-2 xs:px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              📚 {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
