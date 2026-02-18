import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { 
  Github, ExternalLink, Database, Send, BarChart3, 
  Brain, Linkedin, Mail, Award, Terminal, Users, Search, 
  Download, ArrowRight, Menu, X 
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [typedText, setTypedText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const form = useRef();
  
  const fullText = "I transform data into actionable business insights.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ivhwv3g', 'template_7yfltxj', form.current, 'ehHOs4mjasVtnI70X')
      .then(() => {
          alert("Message Sent Successfully! 🚀");
          e.target.reset();
      }, (error) => {
          alert("Failed to send. Please try again.");
          console.log(error.text);
      });
  };

  // --- DATA SECTIONS ---

  const stats = [
    { num: "10+", label: "Projects Completed" },
    { num: "3+", label: "Years of Coding" },
    { num: "13+", label: "Tech Skills" },
  ];

  const certifications = [
    {
      title: "Intel Unnati Industrial Training 2025",
      issuer: "Intel",
      date: "April 2025",
      points: [
        "Built AI-powered sentiment analysis system using OpenVINO.",
        "Optimized deep learning models for Intel hardware acceleration.",
        "Analyzed customer behavior data to improve decision-making efficiency."
      ],
      link: "#"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "August 2025",
      points: [
        "Mastered core AI concepts: Neural Networks, Deep Learning, & ML.",
        "Explored ethical AI frameworks and real-world deployment strategies.",
        "Applied machine learning algorithms to modern software solutions."
      ],
      link: "https://www.credly.com/badges/3ec663c7-b1c0-4310-9271-5916f5b808a2/public_url" 
    },
    {
      title: "Journey to Cloud: Solution Envisioning",
      issuer: "IBM SkillsBuild",
      date: "August 2025",
      points: [
        "Designed scalable cloud architectures using IaaS, PaaS, and SaaS models.",
        "Deployed test pilot applications using IBM Code Engine.",
        "Implemented Agile & Enterprise Design Thinking for digital transformation."
      ],
      link: "https://www.credly.com/badges/05320164-a4ff-448f-88fb-a6e4c2f60438/public_url" 
    }
  ];

  const projects = [
    {
      title: "Forest Fire Prediction",
      category: "ml",
      description: "Machine learning pipeline using Random Forest to predict forest fires with 90% accuracy based on meteorological data.",
      tags: ["Python", "Scikit-learn", "Pandas"],
      links: { demo: "#", code: "https://github.com/SubhankarChand" } 
    },
    {
      title: "AI Video Analytics",
      category: "ai",
      description: "Real-time Customer Experience Analytics System for retail. Leverages computer vision to track visitor footfall and emotion.",
      tags: ["OpenCV", "YOLOv8", "Flask"],
      links: { demo: "#", code: "https://github.com/SubhankarChand/AI-Powered-Video-Analytics-with-OpenVINO" }
    },
    {
      title: "Library Management System",
      category: "web",
      description: "KitabGhar is a full-featured, web-based library management system built with Python (Flask) and MySQL.",
      tags: ["Python", "Flask", "MySQL"],
      links: { demo: "#", code: "https://github.com/SubhankarChand/Library-Management-System" }
    }
  ];

  return (
    // RESTORED PREFERRED BACKGROUND COLOR
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold text-white tracking-wide">
            Subhankar <span className="text-cyan-400">Chand</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Certifications</a>
            
            {/* Contact Pill Button */}
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all">
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
             <div className="md:hidden bg-[#0f172a] border-b border-slate-800 p-4 flex flex-col gap-4 text-center">
                <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-cyan-400 font-bold">Contact Me</a>
             </div>
        )}
      </nav>

      {/* Hero Section - RESTORED BACKGROUND, FIXED IMAGE COLOR */}
      <section id="hero" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium tracking-wider text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
              Data Analyst & ML Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Subhankar Chand.
            </h1>
            <div className="h-20 mb-6">
                <h2 className="text-xl md:text-3xl font-medium text-slate-400 leading-relaxed">
                {typedText}<span className="animate-pulse text-cyan-400">|</span>
                </h2>
            </div>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-400 mb-10 leading-relaxed">
              I bridge the gap between complex data and strategic business decisions using <span className="text-cyan-400 font-semibold">AI, Python, and Predictive Modeling.</span>
            </p>

            {/* PROFESSIONAL BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              
              {/* Button 1: Download Resume */}
              <a 
                href="/resume.pdf" 
                download="Subhankar_Chand_Resume.pdf"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all"
              >
                <Download size={20} />
                Download Resume
              </a>

              {/* Button 2: Let's Connect */}
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-bold hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all"
              >
                Let's Connect
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 border-t border-slate-800/50 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start">
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.num}</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile Image - FIXED COLOR */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            {/* Glowing Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500 blur-[120px] opacity-20 rounded-full"></div>
            
            {/* Image Container - FIXED: Removed grayscale class */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto bg-slate-900 rounded-full border-[6px] border-slate-800 overflow-hidden shadow-2xl group">
              <img 
                src="/profile.png" 
                onError={(e) => e.target.src = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Subhankar'}
                alt="Subhankar Chand" 
                // FIXED: Removed 'grayscale group-hover:grayscale-0'
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - ADJUSTED CARD COLORS FOR BETTER CONTRAST */}
      <section id="skills" className="py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
           <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-white"><span className="text-cyan-400 font-mono">01.</span> Technical Arsenal</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Programming */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                    <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                        <Terminal size={22}/> 
                    </div>
                    <h4 className="font-bold text-white text-lg">Programming</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "C++", "JavaScript", "HTML/CSS"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-xs font-semibold hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* AI & ML */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                     <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                        <Brain size={22}/> 
                    </div>
                    <h4 className="font-bold text-white text-lg">AI & ML</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["TensorFlow", "Scikit-Learn", "OpenCV", "YOLOv8", "Pandas", "NumPy"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-xs font-semibold hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Data Analytics */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                     <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                        <BarChart3 size={22}/> 
                    </div>
                    <h4 className="font-bold text-white text-lg">Data Analytics</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Power BI", "Excel", "Matplotlib", "Seaborn", "EDA", "Data Cleaning"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-xs font-semibold hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                     <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                        <Database size={22}/> 
                    </div>
                    <h4 className="font-bold text-white text-lg">Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Jupyter", "MySQL Workbench", "Google Colab"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-xs font-semibold hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

             {/* Soft Skills */}
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                     <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                        <Users size={22}/> 
                    </div>
                    <h4 className="font-bold text-white text-lg">Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Problem Solving", "Team Leadership", "Communication", "Time Management"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-xs font-semibold hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Core Concepts */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                     <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                        <Search size={22}/> 
                    </div>
                    <h4 className="font-bold text-white text-lg">Core Concepts</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "DBMS", "OOPs", "Statistics"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-xs font-semibold hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-white"><span className="text-cyan-400 font-mono">02.</span> Certifications</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link ? cert.link : "#"} 
                target={cert.link ? "_blank" : "_self"} 
                rel="noopener noreferrer" 
                // Adjusted card color to slate-800 to match theme better
                className={`block bg-slate-800 p-8 rounded-2xl border border-slate-700 transition-all group h-full flex flex-col ${cert.link ? 'hover:border-cyan-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-900/10 cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Award size={28} />
                  </div>
                  {cert.link && <ExternalLink size={20} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-cyan-500 font-bold">{cert.issuer}</p>
                    <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded-md">{cert.date}</span>
                </div>
                
                <ul className="space-y-3 flex-grow border-t border-slate-700/50 pt-4">
                  {cert.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-500/50 group-hover:bg-cyan-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-white"><span className="text-cyan-400 font-mono">03.</span> Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              // Adjusted card color to slate-800
              <div key={index} className="group bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all hover:-translate-y-2 duration-300 flex flex-col shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                    {project.category === 'ai' || project.category === 'ml' ? <Brain size={28} /> : <Database size={28} />}
                  </div>
                  <div className="flex gap-4 text-slate-400">
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                      <Github size={22} className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={22} className="hover:text-cyan-400 cursor-pointer transition-colors" />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-900/30 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 max-w-2xl mx-auto px-6 text-center">
        <p className="text-cyan-400 font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I'm actively looking for opportunities in <span className="text-cyan-400 font-semibold">Data Analytics & AI</span>. 
            Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        {/* Adjusted form background to match slate theme */}
        <form ref={form} onSubmit={sendEmail} className="text-left bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 mb-12 shadow-xl">
          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-300 mb-2">Your Name</label>
            <input type="text" name="user_name" required className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" placeholder="John Doe" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
            <input type="email" name="user_email" required className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" placeholder="john@example.com" />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-300 mb-2">Message</label>
            <textarea name="message" required className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white h-32 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none" placeholder="Hello, I'd like to discuss..." />
          </div>
          <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 text-lg">
            <Send size={20} /> Send Message
          </button>
        </form>

        <div className="flex justify-center gap-8 mb-12">
            <a href="https://github.com/SubhankarChand" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 transition-all hover:-translate-y-1">
                <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/subhankarchand/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 transition-all hover:-translate-y-1">
                <Linkedin size={24} />
            </a>
            <a href="mailto:subhankarchand66@gmail.com" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 transition-all hover:-translate-y-1">
                <Mail size={24} />
            </a>
        </div>

        <p className="text-slate-600 font-mono text-sm">Designed & Built by Subhankar Chand</p>
      </section>

    </div>
  );
};

export default Portfolio;