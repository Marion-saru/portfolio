import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  personalInfo,
  skills,
  achievements,
  certifications,
} from "../data/personal";
import { Code, Users, Award, Coffee, X } from "lucide-react";

const About = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [selectedCert, setSelectedCert] = React.useState(null);

  // Close modal on Escape key and prevent body scroll
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedCert) {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const achievementIcons = [Code, Users, Award, Coffee];

  return (
    <>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            className={`${hasIntersected ? "fade-in visible" : "fade-in"}`}
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Bio */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="glass p-8 rounded-2xl">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {personalInfo.bio}
                  </p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Available for new opportunities</span>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievementIcons[index];
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
                      >
                        <Icon className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                        <h4 className="font-bold text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {achievement.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Column - Skills */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Technical <span className="gradient-text">Skills</span>
                  </h3>

                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full relative"
                            variants={skillVariants}
                            initial="hidden"
                            animate={isIntersecting ? "visible" : "hidden"}
                            style={{
                              width: isIntersecting ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 0.1}s`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <motion.div
                  variants={itemVariants}
                  className="glass p-6 rounded-xl"
                >
                  <h4 className="font-bold text-white mb-4">What I Do</h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      <span>Backend development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span>Currently learning to train AI and ML models</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      <span>
                        DevOps: Creating workflows using GitHub Actions for
                        automated testing
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      <span>Deployment using Vercel, Render and Netlify</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary-500/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full animate-bounce-slow" />
      </section>

      {/* Certifications Section - Separate from About */}
      <section
        id="certifications"
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mt-0">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Certifications &{" "}
                  <span className="gradient-text">Achievements</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    {cert.image && (
                      <div
                        className="mb-4 overflow-hidden rounded-lg cursor-pointer relative group"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            Click to view full size
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {cert.title}
                      </h4>
                      {cert.issuer && (
                        <p className="text-sm text-gray-400 mb-1">
                          {cert.issuer}
                        </p>
                      )}
                      {cert.date && (
                        <p className="text-xs text-primary-400">{cert.date}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary-500/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full animate-bounce-slow" />
      </section>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-primary-400 transition-colors duration-300"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Certificate Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Certificate Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
              {selectedCert.issuer && (
                <p className="text-gray-300">{selectedCert.issuer}</p>
              )}
              {selectedCert.date && (
                <p className="text-primary-400 mt-1">{selectedCert.date}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default About;
