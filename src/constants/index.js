import taskManagerImg from "../assets/projects/project-1.jpg";
import financeTrackerImg from "../assets/projects/project-2.jpg";
import eventPlatformImg from "../assets/projects/project-3.jpg";
import schoolWebsiteImg from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Mar 2024",
    role: "SOFTWARE TRAINEE",
    company: "Himank Soft Solution",
    description: `My responsibilities during the internship included designing and developing smooth, responsive components. I collaborated on front-end designs and optimized the website to enhance user experience and performance. Additionally, I improved website loading speed by optimizing ReactJS and JavaScript performance.`,
    technologies: ["ReactJS", "JavaScript", "HTML", "CSS", "MongoDB"],
},
{
  year: "Apr 2024 - Jun 2024",
  role: "CLOUD ENGINEER (Remote)",
  company: "GTrusty Cloud Private Limited",
  description: `Managed DNS and MX configurations for over 25 domains, reducing email delivery issues by 50%. Configured Google Workspace for 10+ clients, enhancing team productivity by 30%. Administered 500+ user accounts through the G Suite Admin Console, maintaining full compliance with access policies. Successfully migrated over 100GB of data to Google Workspace with less than 2 hours of downtime.`,
  technologies: ["GAM", "GAMMO", "GASMO", "GWMME", "SysTool"],
},
];

export const PROJECTS = [
  {
    title: "Task Manager App",
    image: taskManagerImg,
    description:
      "A modern todo application with priority management, due dates, and local storage persistence. Features task filtering by status and priority with a beautiful dark theme UI.",
    technologies: ["React", "Vite", "Tailwind CSS", "Context API", "Local Storage"],
  },
  {
    title: "Personal Finance Tracker Plus",
    image: financeTrackerImg,
    description:
      "A full-stack web application for tracking daily expenses, setting monthly budgets, and viewing financial reports to understand spending patterns.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
  },
  {
    title: "Event Platform",
    image: eventPlatformImg,
    description:
      "A comprehensive event management platform for creating, organizing, and managing events. Features event registration, attendee management, and real-time updates.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Genius School Website",
    image: schoolWebsiteImg,
    description:
      "A modern educational institution website with responsive design, featuring school information, departments, faculty, and contact management system.",
    technologies: ["Node.js", "Express", "Handlebars", "MongoDB", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Sec-3, Ballabgarh, Faridabad, Haryana (Pincode - 121004)",
  phoneNo: "+91 8375988026",
  email: "nikhil.developer03@gmail.com",
};
