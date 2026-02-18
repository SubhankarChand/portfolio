import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Github, ExternalLink, Database, Send, BarChart3, LineChart, Brain, Linkedin, Mail, Award, BookOpen, Code } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [typedText, setTypedText] = useState('');
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
      issuer: "Intel ",
      date: "April 2025",
      desc: "AI-powered customer sentiment and feedback analysis using OpenVINO. Extract insights from customer behavior and engagement data to improve decision-making. Optimized for Intel hardware to ensure real-time performance and efficiency."
    },
    {
      title: "Getting started with Artificial Intelligence. ",
      issuer: "IBM SkillsBuild ",
      date: "August 2025",
      desc: "Developed a foundational understanding of AI concepts, including machine learning, deep learning, and neural networks.Explored ethical considerations and real-world applications of AI in modern software solutions."
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

  const skillData = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'ML/AI', level: 80 },
    { name: 'Data Viz', level: 75 },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-cyan-400 font-mono">SC.</div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - UPDATED LAYOUT (Profile + Stats) */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-cyan-400 font-mono mb-4">Hi, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Subhankar Chand.
            </h1>
            <div className="h-20 mb-6">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-400 leading-tight">
                {typedText}<span className="animate-pulse text-cyan-400">|</span>
                </h2>
            </div>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-400 mb-8 leading-relaxed">
              Aspiring <span className="text-cyan-400">AI & Data Analyst</span> bringing strong analytical expertise. 
              I build data-driven solutions and ML models to drive business innovation.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start mb-12">
              <a href="#projects" className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/25">
                Check Work
              </a>
              <a href="/resume.pdf" download className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-bold hover:border-cyan-400 transition-all">
                Download CV
              </a>
            </div>

            {/* Stats Row - Like the Reference */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 border-t border-slate-800 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold text-white">{stat.num}</h3>
                  <p className="text-sm text-slate-500 w-20 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile Image with Glow */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
             {/* Glowing Background Blob */}
            <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full"></div>
            
            {/* Image Container - Circular or Rounded Rect */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto bg-slate-800 rounded-full border-4 border-slate-700 overflow-hidden shadow-2xl">
              {/* REPLACE '/profile.png' WITH YOUR ACTUAL PHOTO in frontend/public/ folder */}
              {/* If no photo exists, this API generates a cool avatar based on your name */}
              <img 
                src="/profile.png" 
                onError={(e) => e.target.src = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Subhankar'}
                alt="Subhankar Chand" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section - NEW! */}
      <section id="certifications" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white"><span className="text-cyan-400 font-mono">01.</span> Certifications & Training</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded-full">{cert.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                <p className="text-sm text-cyan-500 mb-4">{cert.issuer}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - WITH CHART */}
      <section id="skills" className="py-20 bg-slate-900 border-y border-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
           <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white"><span className="text-cyan-400 font-mono">02.</span> Technical Arsenal</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             {/* Chart Side */}
            <div className="w-full lg:w-1/2 h-64">
                <p className="text-center text-sm font-mono text-slate-500 mb-6">PROFICIENCY LEVELS</p>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillData} layout="vertical" margin={{ left: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={80} stroke="#94a3b8" tick={{fontSize: 12}} />
                    <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', color: '#fff'}} />
                    <Bar dataKey="level" fill="#22d3ee" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Icons Grid Side - Like Reference "Arsenal" */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-2 text-cyan-400"><Code size={20}/> <h4 className="font-bold text-white">Programming</h4></div>
                    <p className="text-sm text-slate-400">Python, SQL, JavaScript, C++</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-2 text-cyan-400"><BarChart3 size={20}/> <h4 className="font-bold text-white">Analysis</h4></div>
                    <p className="text-sm text-slate-400">Pandas, NumPy, PowerBI, Excel</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-2 text-cyan-400"><Brain size={20}/> <h4 className="font-bold text-white">AI & ML</h4></div>
                    <p className="text-sm text-slate-400">Scikit-learn, TensorFlow, YOLO, OpenCV</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-2 text-cyan-400"><Database size={20}/> <h4 className="font-bold text-white">Tools</h4></div>
                    <p className="text-sm text-slate-400">Git, VS Code, Jupyter, MySQL</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white"><span className="text-cyan-400 font-mono">03.</span> Featured Projects</h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-2xl mx-auto px-6 text-center">
        <p className="text-cyan-400 font-mono mb-4">04. What's Next?</p>
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

        <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com/SubhankarChand" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={30} />
            </a>
            <a href="https://www.linkedin.com/in/subhankarchand/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={30} />
            </a>
            <a href="mailto:subhankarchand66@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={30} />
            </a>
        </div>

        <p className="text-slate-500 font-mono text-sm">Designed & Built by Subhankar Chand</p>
      </section>

    </div>
  );
};

export default Portfolio;