import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './components/Layout/ThemeContext';
import Scene from './components/Hero/Scene';
import Konami from './components/EasterEgg/Konami';
import { RESUME_CONTENT, GIGS, LINKS } from './constants';
import { Github, Linkedin, FileText, Mail, ExternalLink, Moon, Sun, Code, Terminal, Cpu, Download } from 'lucide-react';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3' 
      : 'bg-transparent py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
           <Cpu className="w-6 h-6 text-primary" />
           <span className="hidden sm:inline">Hirendra.dev</span>
        </a>
        
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-medium text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#resume" className="hover:text-primary transition-colors">Resume</a></li>
            <li><a href="#gigs" className="hover:text-primary transition-colors">Services</a></li>
          </ul>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-2xl text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = ["Hi, I am Hirendra", "a Full Stack Engineer"];
  
  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <Scene />
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-4 flex flex-wrap gap-3">
             <span>Web & Systems Engineer</span>
             <span className="text-primary">•</span>
             <span>AI-Enabled Developer</span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Designing systems and full-stack applications with modern web technologies
          </p>
          
          <div className="flex flex-wrap gap-4">
             <a href={LINKS.resume} download className="flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 rounded-2xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
               <FileText size={18} /> View Resume (PDF)
             </a>
             <a href="#gigs" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-blue-600 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
               Hire Me / Gigs
             </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://avatars.githubusercontent.com/u/144937273?v=4" 
                alt="Hirendra Profile" 
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
              />
            </div>
          </div>
          
          {/* Bio & Facts */}
          <div className="md:w-2/3 space-y-6">
             <h2 className="text-3xl font-bold">About Me</h2>
             <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-primary pl-6 py-1 italic">
             "I craft clean, fast, and modern web experiences — the kind that occasionally make people pause and ask, ‘Bro, how did you do that?’
As a CSE pre-final year student, I spend my days learning, building, and occasionally breaking things (purely for educational purposes, of course).
<br /><br />
Cybersecurity enthusiast, data-science explorer, and firm believer that AI paired with caffeine can power most innovation.
If something looks smooth, scalable, and a little magical — I probably built it.
If it breaks… let's just say the AI and I are still discussing whose fault that was."
             </p>

             <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-6">
               <h3 className="text-sm font-bold flex items-center gap-2 mb-4 uppercase tracking-wider text-slate-400">
                 <Code size={16} /> Programming Languages
               </h3>
               <div className="flex flex-wrap gap-3">
                 {[
                   { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
                   { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                   { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                   { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                   { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                   { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                 ].map(lang => (
                   <div key={lang.name} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                     <img src={lang.icon} alt={lang.name} className="w-5 h-5" />
                     <span className="text-sm font-medium">{lang.name}</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
               <h3 className="text-sm font-bold flex items-center gap-2 mb-4 uppercase tracking-wider text-slate-400">
                 <Terminal size={16} /> System Info
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
                 <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="text-slate-500">Location_</span>
                    <span className="font-bold">India/Nepal (IST/NPT)</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="text-slate-500">Education_</span>
                    <span className="font-bold">B.Tech (CSE)</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="text-slate-500">Languages_</span>
                    <span className="font-bold">English, Hindi, Nepali</span>
                 </div>
                 <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="text-slate-500">Role_</span>
                    <span className="font-bold">  Full Stack & Data Analyst</span>
                 </div>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const TECH_STACK = [
  // Languages
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Languages' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Languages' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Languages' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Languages' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'Languages' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Languages' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Languages' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Languages' },
  
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg', category: 'Frontend' },
  
  // Backend & Database
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Backend' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Backend' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', category: 'Backend' },
  
  // Tools
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Tools' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Tools' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'Tools' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'Tools' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Tools' },
];

const TechStackSection = () => {
  const categories = ['Languages', 'Frontend', 'Backend', 'Tools'];
  
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {categories.map(category => (
            <div key={category}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Code size={16} className="text-primary" />
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {TECH_STACK.filter(tech => tech.category === category).map(tech => (
                  <div 
                    key={tech.name}
                    className="group flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeSection = () => {
    return (
      <section id="resume" className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Summary</h2>
                  <p className="text-slate-500">Engineering Approach & Outcomes</p>
                </div>
              </div>
              <a href={LINKS.resume} download className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-medium text-sm hover:border-primary transition-colors shadow-sm">
                  <Download size={16} /> Download PDF
              </a>
            </div>
  
            <div className="bg-white dark:bg-slate-950 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 font-mono text-sm md:text-base">
              {/* Terminal Header */}
              <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="text-xs text-slate-400 font-sans">resume_abstract.md</div>
                <div className="w-10"></div> {/* Spacer */}
              </div>
  
              {/* Code Content */}
              <div className="p-6 md:p-10 space-y-8">
                 <div className="grid md:grid-cols-1 gap-8">
                    
                    <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                        <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
                            <span className="text-slate-400 select-none">01</span> //SKILLS
                        </h3>
                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {RESUME_CONTENT.skills.map(section => (
                            <div key={section.category} className="mb-2">
                              <span className="font-bold">{section.category}:</span> {section.items.join(', ')}
                            </div>
                          ))}
                        </div>
                    </div>

                    <div className="relative pl-6 border-l-2 border-secondary/30 hover:border-secondary transition-colors">
                        <h3 className="text-secondary font-bold mb-2 flex items-center gap-2">
                            <span className="text-slate-400 select-none">02</span> // EDUCATION
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {RESUME_CONTENT.education}
                        </p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                        <h3 className="text-blue-500 font-bold mb-2 flex items-center gap-2">
                            <span className="text-slate-400 select-none">03</span> // PROJECTS
                        </h3>
                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {RESUME_CONTENT.projects.map(p => (
                            <div key={p.title} className="mb-2">
                              <span className="font-bold">{p.title}</span>: {p.description}
                            </div>
                          ))}
                        </div>
                    </div>

                    <div className="relative pl-6 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors">
                        <h3 className="text-purple-500 font-bold mb-2 flex items-center gap-2">
                            <span className="text-slate-400 select-none">04</span> // EXPERIENCE
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {RESUME_CONTENT.experience}
                        </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors">
                        <h3 className="text-purple-500 font-bold mb-2 flex items-center gap-2">
                            <span className="text-slate-400 select-none">05</span> // INTERESTS
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {RESUME_CONTENT.interests}
                        </p>
                    </div>

                 </div>
                 
                 <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-400 text-xs flex gap-4">
                    <span>Ln 42, Col 12</span>
                    <span>UTF-8</span>
                    <span>Markdown</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

const ServicesSection = () => {
  return (
    <section id="gigs" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Freelance Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
            {GIGS.map(gig => (
                <div key={gig.id} className="flex flex-col bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <Code size={100} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 z-10">{gig.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 z-10 flex-grow">{gig.description}</p>
                    
                    <div className="space-y-4 z-10 mt-auto">
                        <div className="flex justify-between items-center text-sm font-mono border-t border-slate-200 dark:border-slate-800 pt-4">
                            <span>Delivery:</span>
                            <span className="text-slate-900 dark:text-white">{gig.delivery}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold">
                            <span>Starting at</span>
                            <span className="text-secondary">{gig.price}</span>
                        </div>
                        <a href={gig.link} target="_blank" rel="noreferrer" className="block w-full text-center py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-opacity">
                            Hire on {gig.platform}
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "15c271d3-1cba-436f-aa82-04e455823357");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Success! I'll get back to you soon.");
            (event.target as HTMLFormElement).reset();
        } else {
            setResult("Error! Please try again.");
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-black text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Let's Build Something.</h2>
                            <p className="text-slate-300 mb-8">
                                Available for freelance projects and consulting. 
                                Whether it's a 3D web experience or an AI integration, let's talk code.
                            </p>
                            <div className="space-y-4">
                                <a href="mailto:contact@hirendra.dev" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" /> contact@hirendra.dev
                                </a>
                                <div className="flex gap-4 pt-4">
                                    <a href={LINKS.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
                                    <a href={LINKS.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Github size={20} /></a>
                                </div>
                            </div>
                        </div>
                        
                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">NAME</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" 
                                    placeholder="John Doe" 
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">EMAIL</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" 
                                    placeholder="john@example.com" 
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE</label>
                                <textarea 
                                    rows={4} 
                                    name="message"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" 
                                    placeholder="Project details..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-900/50"
                            >
                                Send Message
                            </button>
                            {result && (
                                <p className={`text-sm text-center mt-2 ${result.includes("Success") ? "text-green-400" : result.includes("Error") ? "text-red-400" : "text-slate-400"}`}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                    &copy; {new Date().getFullYear()} Hirendra Kumar Chaurasiya.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
                    <Code size={12} />
                    <span>Site created with Code + AI</span>
                </div>
            </div>
        </footer>
    );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Konami />
        <NavBar />
        <main>
            <HeroSection />
            <AboutSection />
            <TechStackSection />
            <ResumeSection />
            <ServicesSection />
            <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;