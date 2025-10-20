import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { personalInfo, socialLinks } from "../data/personal";
import {
  Mail,
  MapPin,
  Download,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_ld1xwpz", 
        "template_fkirqgi", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
        },
        "TreYpeg7bQLyJ5a0D" 
      );

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "hover:text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "hover:text-red-400",
    },
  ];

  const socialIcons = [
    { icon: Github, url: socialLinks[0].url, color: "hover:text-gray-300" },
    { icon: Linkedin, url: socialLinks[1].url, color: "hover:text-blue-400" },
    { icon: Twitter, url: socialLinks[2].url, color: "hover:text-blue-400" },
    { icon: Mail, url: socialLinks[3].url, color: "hover:text-green-400" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Ready to bring your ideas to life? Let&apos;s discuss your next
              project and create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Get In <span className="gradient-text">Touch</span>
                </h3>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <div
                        className={`p-3 rounded-full bg-primary-900/30 group-hover:bg-primary-500/20 transition-all duration-300 ${method.color}`}
                      >
                        <method.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{method.label}</p>
                        <p className="text-white font-semibold">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {socialIcons.map(({ icon: Icon, url, color }, index) => (
                      <motion.a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 glass rounded-full text-gray-500 transition-all duration-300 ${color}`}
                        variants={iconVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <motion.div className="mt-8" variants={itemVariants}>
                  <motion.a
                    href={personalInfo.resumeUrl}
                    download
                    className="btn-primary w-full flex items-center justify-center gap-3 py-4 rounded-xl text-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-6 h-6" />
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>

              {/* Fun Facts */}
              <motion.div
                variants={itemVariants}
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-lg font-bold mb-4 text-white">
                  Quick Stats
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold gradient-text">24h</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-gray-400">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send Me a <span className="gradient-text">Message</span>
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
                  Thank you for your message! I&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:border-primary-500 focus:ring-primary-500"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:border-primary-500 focus:ring-primary-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:border-primary-500 focus:ring-primary-500"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-4 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Start Your{" "}
                <span className="gradient-text">Project?</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Let&apos;s discuss how we can work together to bring your vision
                to life.
              </p>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary px-8 py-3 rounded-full text-lg font-semibold text-white inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me Now
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-primary-500/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-purple-500/20 rounded-full animate-bounce-slow" />
    </section>
  );
};

export default Contact;
