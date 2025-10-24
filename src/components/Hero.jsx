import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { personalInfo, socialLinks } from "../data/personal";
import profilePhoto from "../assets/images/profile-photo.jpg";

const titles = ["Backend Developer", "ML and AI Enthusiast", "Problem Solver"];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < titles[textIndex].length) {
        setCurrentText(titles[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(titles[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === titles[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-900/30 to-transparent" />

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="mb-8 mt-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={profilePhoto}
            alt={personalInfo.name}
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-[215px] lg:h-[215px] rounded-full object-cover mx-auto border-4 border-primary-500 shadow-2xl shadow-primary-500/50"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Animated Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="gradient-text">Hello, I&apos;m</span>
            <motion.span
              className="block text-white mt-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Animated Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-2">
            I&apos;m a{" "}
            <span className="gradient-text font-bold">
              {currentText}
              <motion.span
                className="inline-block w-0.5 h-8 bg-primary-400 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m an ambitious Software Engineering student and Backend
            Developer passionate about AI and Machine Learning. I specialize in
            Flask and have hands-on experience with Python, SQL, and RESTful
            APIs.{" "}
            <button
              onClick={scrollToNext}
              className="text-primary-400 hover:text-primary-300 font-semibold underline decoration-primary-400/50 hover:decoration-primary-300 transition-colors duration-300"
            >
              Read more
            </button>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#projects"
            className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-white flex items-center gap-2 hover:shadow-xl hover:shadow-primary-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View My Work
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>

          <motion.a
            href={personalInfo.resumeUrl}
            download
            className="glass px-8 py-4 rounded-full text-lg font-semibold text-white flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            {
              icon: Github,
              url: socialLinks[0].url,
              color: "hover:text-gray-300",
            },
            {
              icon: Linkedin,
              url: socialLinks[1].url,
              color: "hover:text-blue-400",
            },
            {
              icon: Twitter,
              url: socialLinks[2].url,
              color: "hover:text-blue-400",
            },
            {
              icon: Mail,
              url: socialLinks[3].url,
              color: "hover:text-green-400",
            },
          ].map(({ icon: Icon, url, color }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 text-2xl transition-all duration-300 ${color}`}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Icon className="w-8 h-8" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToNext}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary-500/30 rounded-full animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-16 h-16 border border-purple-500/30 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-teal-500/30 rounded-full animate-pulse-slow" />
    </section>
  );
};

export default Hero;
