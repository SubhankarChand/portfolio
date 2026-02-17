import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Database, Cpu, Send, BarChart3, LineChart, Brain } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [typedText, setTypedText] = useState('');
  const form = useRef();
  
  // 1. UPDATED HEADLINE FOR DATA ANALYST ROLE
  const fullText = "I transform data into actionable business insights.";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // 2. NEW EMAILJS LOGIC (Replaces Python Backend)
  const sendEmail = (e) => {
    e.preventDefault();

    // You need to get these 3 strings from emailjs.com (It's free)
    // Service ID, Template ID, Public Key
    emailjs.sendForm('service_ivhwv3g', 'template_7yfltxj', form.current, 'ehHOs4mjasVtnI70X')
      .then((result) => {
          alert("Message Sent Successfully! 🚀");
          e.target.reset();
      }, (error) => {
          alert("Failed to send. Please try again.");
          console.log(error.text);
      });
  };

  const projects = [
    {
      title: "Forest Fire Prediction",
      category: "ml",
      description: "Machine learning pipeline using Random Forest to predict forest fires with 90% accuracy based on meteorological data. Includes robust EDA and feature engineering.",
      tags: ["Python", "Scikit-learn", "Pandas", "Random Forest"],
      links: { demo: "#", code: "https://github.com/SubhankarChand" } 
    },
    {
      title: "AI Video Analytics",
      category: "ai",
      description: "Real-time Customer Experience Analytics System for retail. Leverages computer vision to track visitor footfall and analyze customer sentiment (emotion) from live video feeds.",
      tags: ["OpenCV", "Intel OpenVINO™", "YOLOv8", "Flask"],
      links: { demo: "#", code: "https://github.com/SubhankarChand/AI-Powered-Video-Analytics-with-OpenVINO" }
    },
    {
      title: "Library Management System",
      category: "web",
      description: "KitabGhar is a full-featured, web-based library management system built with Python (Flask). It provides a clean interface for managing digital and physical libraries.",
      tags: ["Python 3", "Flask", "MySQL"],
      links: { demo: "#", code: "https://github.com/SubhankarChand/Library-Management-System" }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* UPDATED LOGO: Initials instead of <Dev/> */}
          <div className="text-xl font-bold text-cyan-400 font-mono">SC.</div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-all">Contact Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - UPDATED FOR DATA ROLE */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
        <p className="text-cyan-400 font-mono mb-4">Hi, my name is</p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Subhankar Chand.
        </h1>
        
        <div className="min-h-[120px] md:min-h-[160px] mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 leading-tight">
            {typedText}<span className="animate-pulse text-cyan-400">|</span>
            </h2>
        </div>

        <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
          I'm a final-year B.Tech student specializing in <span className="text-cyan-400">Data Science & ML</span>. 
          I bridge the gap between technical data and business strategy using <span className="text-cyan-400">Python, SQL, and Predictive Modeling</span>.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/25">
            Check my Work
          </a>
          <a 
            href="/resume.pdf" 
            download="Subhankar_Chand_Resume.pdf"
            className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-bold hover:border-cyan-400 transition-all flex items-center justify-center"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Skills Section - UPDATED ICONS FOR DATA */}
      <section id="skills" className="py-10 bg-slate-900 border-y border-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-mono text-slate-500 mb-8">CORE COMPETENCIES</p>
          <div className="flex justify-center gap-12 flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-2"><BarChart3 size={40} /><span className="text-xs">Data Analysis</span></div>
            <div className="flex flex-col items-center gap-2"><Database size={40} /><span className="text-xs">SQL / Python</span></div>
            <div className="flex flex-col items-center gap-2"><Brain size={40} /><span className="text-xs">Machine Learning</span></div>
            <div className="flex flex-col items-center gap-2"><LineChart size={40} /><span className="text-xs">Business Intel</span></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white"><span className="text-cyan-400 font-mono">01.</span> Featured Projects</h2>
          <div className="h-px bg-slate-800 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  {project.category === 'ai' || project.category === 'ml' ? <Brain size={24} /> : <Database size={24} />}
                </div>
                <div className="flex gap-4 text-slate-400">
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                    <Github size={20} className="hover:text-cyan-400 cursor-pointer" />
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="hover:text-cyan-400 cursor-pointer" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - WIRED TO EMAILJS */}
      <section id="contact" className="py-24 max-w-2xl mx-auto px-6 text-center">
        <p className="text-cyan-400 font-mono mb-4">02. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-10">
            I'm currently looking for new opportunities in <span className="text-cyan-400">Data Analytics & AI</span>. 
            Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <form ref={form} onSubmit={sendEmail} className="text-left bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-10">
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
            <input type="text" name="user_name" required className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John Doe" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input type="email" name="user_email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@example.com" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea name="message" required className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white h-32 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Hello..." />
          </div>
          <button type="submit" className="w-full py-4 bg-cyan-500 text-white rounded-lg font-bold hover:bg-cyan-600 transition-all flex items-center justify-center gap-2">
            <Send size={20} /> Send Message
          </button>
        </form>

        <p className="text-slate-500 font-mono text-sm">Designed & Built by Subhankar Chand</p>
      </section>

    </div>
  );
};

export default Portfolio;