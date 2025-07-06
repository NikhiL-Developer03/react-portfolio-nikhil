import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Sec-3, Ballabgarh, Faridabad, Haryana (121004)",
      color: "text-red-400"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "nikhil.developer03@gmail.com",
      link: "mailto:nikhil.developer03@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+91 8375988026",
      link: "tel:+918375988026",
      color: "text-green-400"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/nikhil-web-developer/",
      color: "text-blue-600 hover:text-blue-500",
      label: "LinkedIn"
    },
    {
      icon: FaGithub,
      url: "https://github.com/NikhiL-Developer03",
      color: "text-gray-400 hover:text-white",
      label: "GitHub"
    },
    {
      icon: FaTwitter,
      url: "https://www.twitter.com",
      color: "text-blue-400 hover:text-blue-300",
      label: "Twitter"
    }
  ];

  return (
    <div className="pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Let's Work Together
      </motion.h1>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-neutral-300 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = info.link ? (
                  <a 
                    href={info.link} 
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {info.content}
                  </a>
                ) : (
                  <span className="text-neutral-300">{info.content}</span>
                );

                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 bg-neutral-900/50 rounded-lg border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className={`${info.color} text-xl mt-1`}>
                      <IconComponent />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      {content}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:border-purple-500/50`}
                      aria-label={social.label}
                    >
                      <IconComponent className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300 text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
