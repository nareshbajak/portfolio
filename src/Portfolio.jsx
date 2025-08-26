import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Smartphone,
} from "lucide-react";

import yummy from "./images/yummy.png";
import gym from "./images/gym.jpg";
import html from "./images/html.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Html Css Project",
      description:
        "A pixel-perfect Figma to HTML conversion project built using only HTML and CSS. The design has been carefully replicated from Figma and made fully responsive with clean layout structuring, modern CSS techniques, and mobile-friendly responsiveness — without using any frameworks or JavaScript.",
      technologies: ["HTML5", "CSS3", "Responsive Design"],
      image: html,
      demo: "http://figma-to-html-tau.vercel.app/",
      code: "https://github.com/nareshbajak/First-Html-css-Project",
    },
    {
      title: "Bootstrap Yummy Project",
      description:
        "A modern and fully responsive website designed using HTML, CSS, and Bootstrap. This project highlights the use of Bootstrap components, grid system, and utilities to create a clean layout that works seamlessly across all devices.",
      technologies: ["HTML5", "CSS3", "Responsive Design", "Bootstrap"],
      image: yummy,
      demo: "https://first-bootstrap-project-orcin.vercel.app/",
      code: "https://github.com/nareshbajak/First-Bootstrap-Project",
    },
    {
      title: "Wordpress Project",
      description:
        "A fully responsive website built with WordPress, focusing on modern design and mobile-friendly layout. The project showcases customization with themes, plugins, and a clean UI that adapts seamlessly across all devices.",
      technologies: ["WordPress", "Responsive Design", "Themes", "Plugins"],
      image: gym,
      demo: "http://fitner.wuaze.com/blog/",
      code: "http://fitner.wuaze.com/blog/",
    },
  ];

  const skills = [
    { name: "HTML5", level: 90, icon: Code },
    { name: "CSS3", level: 85, icon: Palette },
    { name: "JavaScript", level: 78, icon: Code },
    { name: "Wordpress", level: 62, icon: Code },
    { name: "Bootstrap", level: 80, icon: Smartphone },
    { name: "Responsive Design", level: 90, icon: Smartphone },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-300 ${
                      activeSection === section
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-3 capitalize text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Naresh Bajak
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              a Frontend Developer in the making, focused on learning and
              creating clean, responsive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://www.webskittersacademy.in/wp-content/uploads/2015/08/The-Various-Shades-of-The-Job-Profile-Of-A-Web-Developer.jpg"
                alt="About"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frontend Developer !
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hi, I’m Naresh, a passionate Frontend Developer who loves
                crafting beautiful and responsive websites. 🚀
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I have expertise in HTML, CSS, JavaScript, React.js, Bootstrap,
                and can efficiently convert Figma designs into pixel-perfect
                websites. Along with frontend development, I also work on
                WordPress and Shopify, helping businesses build modern and
                functional online stores.
                <br />
                <br />
                🌱 My focus is always on clean code, user-friendly design, and
                performance optimization. I enjoy learning new technologies and
                turning creative ideas into reality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">10+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fresher</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm text-gray-600 mt-2">
                    {skill.level}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.demo}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} className="text-blue-600" />
                      </a>
                      <a
                        href={project.code}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} className="text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">
                      nareshbajakmanabhai@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300">+91 93237 32642</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-300">
                      Tharad, Banaskantha, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/nmb1232"
                  className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nareshbajak/"
                  className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Naresh Bajak. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Made with ❤️ using React, HTML5, CSS3, JavaScript & Bootstrap
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
