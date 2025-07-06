import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const detailedProjects = [
    {
      id: 1,
      title: "Task Manager Pro",
      subtitle: "Advanced Todo Application",
      description: "A sophisticated task management application with priority levels, due dates, and advanced filtering. Features dark theme, local storage persistence, and intuitive user interface.",
      longDescription: "Built with React and modern hooks, this application showcases advanced state management using Context API. Features include drag-and-drop functionality, priority-based color coding, due date notifications, and comprehensive filtering options. The application uses Tailwind CSS for responsive design and Framer Motion for smooth animations.",
      image: "/src/assets/projects/project-1.jpg",
      technologies: ["React", "Context API", "Tailwind CSS", "Local Storage", "Framer Motion"],
      features: [
        "Priority-based task management",
        "Due date tracking and notifications",
        "Advanced filtering and sorting",
        "Dark theme with modern UI",
        "Local storage persistence",
        "Responsive design"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/Task-Manger",
      liveUrl: "#",
      status: "Completed",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Personal Finance Tracker Plus",
      subtitle: "Smart Expense Management",
      description: "A comprehensive financial tracking application that helps users monitor expenses, set budgets, and analyze spending patterns with interactive charts and reports.",
      longDescription: "Full-stack application built with React frontend and Node.js backend. Features include expense categorization, budget planning, financial goal tracking, and detailed analytics. Uses Chart.js for data visualization and MongoDB for data persistence.",
      image: "/src/assets/projects/project-2.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
      features: [
        "Expense tracking and categorization",
        "Budget planning and monitoring",
        "Interactive financial charts",
        "Goal setting and tracking",
        "Monthly/yearly reports",
        "Secure user authentication"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/Personal-Finance-Tracker-Plus",
      liveUrl: "#",
      status: "In Development",
      category: "Full-Stack Application"
    },
    {
      id: 3,
      title: "Event Platform",
      subtitle: "Event Management System",
      description: "A comprehensive platform for creating, managing, and attending events. Features event registration, attendee management, and real-time updates.",
      longDescription: "Built with Next.js and TypeScript for type safety and performance. Integrates with external APIs for payment processing and email notifications. Features server-side rendering for optimal SEO and user experience.",
      image: "/src/assets/projects/project-3.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Event creation and management",
        "User registration system",
        "Payment integration",
        "Real-time notifications",
        "Advanced search and filtering",
        "Mobile-responsive design"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/event_platform",
      liveUrl: "https://event-platform-gamma-hazel.vercel.app/",
      status: "Completed",
      category: "Full-Stack Application"
    },
    {
      id: 4,
      title: "Genius School Website",
      subtitle: "Educational Institution Portal",
      description: "A modern educational website with responsive design, featuring school information, departments, faculty profiles, and administrative tools.",
      longDescription: "Server-side rendered application using Express.js and Handlebars. Features content management system for easy updates, contact forms, and dynamic routing for different school sections.",
      image: "/src/assets/projects/project-4.jpg",
      technologies: ["Node.js", "Express", "Handlebars", "MongoDB", "Bootstrap"],
      features: [
        "Responsive institutional design",
        "Faculty and department pages",
        "Contact and inquiry forms",
        "Content management system",
        "SEO optimized pages",
        "Admin dashboard"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/Genius",
      liveUrl: "#",
      status: "Completed",
      category: "Web Application"
    }
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % detailedProjects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + detailedProjects.length) % detailedProjects.length);
  };

  const currentProject = detailedProjects[selectedProject];

  return (
    <div className="border-b border-neutral-900 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-8 sm:my-12 md:my-16 lg:my-20 text-center text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold"
      >
        Featured Projects
      </motion.h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex space-x-2 xs:space-x-3">
            {detailedProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
                  selectedProject === index 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>
        </div>


        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center"
          >

            <div className="relative group order-2 lg:order-1">
              <div className="overflow-hidden rounded-lg border border-neutral-700">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-48 xs:h-56 sm:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  currentProject.status === 'Completed' 
                    ? 'bg-green-900/50 text-green-300 border border-green-700' 
                    : 'bg-yellow-900/50 text-yellow-300 border border-yellow-700'
                }`}>
                  {currentProject.status}
                </span>
              </div>
            </div>


            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-purple-400 text-xs sm:text-sm font-medium">
                  {currentProject.category}
                </span>
                <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mt-1">
                  {currentProject.title}
                </h2>
                <h3 className="text-base xs:text-lg sm:text-xl text-neutral-300 mt-1">
                  {currentProject.subtitle}
                </h3>
              </div>

              <p className="text-neutral-300 leading-relaxed text-sm xs:text-base">
                {currentProject.longDescription}
              </p>


              <div>
                <h4 className="text-base xs:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5 xs:gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 xs:px-3 py-1 bg-neutral-800 text-purple-300 rounded-full text-xs xs:text-sm border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div>
                <h4 className="text-base xs:text-lg font-semibold text-white mb-2 sm:mb-3">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 xs:gap-2">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-purple-500 rounded-full flex-shrink-0" />
                      <span className="text-neutral-300 text-xs xs:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>


              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-white px-3 xs:px-4 py-2 rounded-lg transition-colors duration-300 border border-neutral-600 text-sm xs:text-base"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-3 xs:px-4 py-2 rounded-lg transition-colors duration-300 text-sm xs:text-base"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        <div className="flex justify-between items-center mt-8 sm:mt-12">
          <button
            onClick={prevProject}
            className="flex items-center space-x-1 xs:space-x-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm xs:text-base"
          >
            <FaChevronLeft className="text-xs xs:text-sm" />
            <span className="hidden xs:inline">Previous</span>
            <span className="xs:hidden">Prev</span>
          </button>
          
          <span className="text-neutral-500 text-xs xs:text-sm">
            {selectedProject + 1} of {detailedProjects.length}
          </span>
          
          <button
            onClick={nextProject}
            className="flex items-center space-x-1 xs:space-x-2 text-neutral-400 hover:text-white transition-colors duration-300 text-sm xs:text-base"
          >
            <span className="hidden xs:inline">Next</span>
            <span className="xs:hidden">Next</span>
            <FaChevronRight className="text-xs xs:text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
