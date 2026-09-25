import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Calendar, Code, Activity, Loader2 } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const GITHUB_USERNAME = "hirendra84";

const FEATURED_ORDER = [
  { 
    match: 'docfixer', 
    demoUrl: 'https://docfixer.in', 
    description: 'Fast, secure, and easy-to-use tools for all your document and image processing needs. Convert, compress, merge, and edit files online for free.',
    subtitle: 'SaaS App',
    overrideImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKeh0NBA7DXOc43uhS-G565KcAYQ_EuxL1zvc15l7LCfao5R_SaAZNCWHidnDrGZCa1JBiEXYVhpPfLjbSt3JJcSs8i_62IPHN7hVYwHFHsLapoGOkfIyd9_QKeluWkhW0SrRdjV0nhxq-Y5-nCzPa74rKLEH8YoNJp7sOVzsRKF2Im-GI6nGHcorkeAu4WC5Gq8RGajMM1ZIqzPZyoFiy8Z2hzeJdB8BZnSw6DDzNZYOyrxouPbi-'
  },
  { 
    match: 'ats', 
    demoUrl: 'https://atsrank.vercel.app', 
    description: 'ATS Resume Checker - Rank and optimize your resume against job descriptions using AI.' 
  },
  { 
    match: 'course_recommender', 
    demoUrl: 'https://smartcourse-chooser.streamlit.app/', 
    description: 'A Machine Learning based course recommendation system.' 
  },
  { 
    match: 'free_for_student', 
    demoUrl: 'https://free-for-students.vercel.app', 
    description: 'A curated list of free tools and resources for students.' 
  },
  {
    match: '90dayprep',
    demoUrl: 'https://90dayprep.vercel.app',
    description: 'Build the consistency you need to crack your next placement.'
  }
];

const ProjectCard = ({ repo, isFeatured, customData }: { repo: Repo, isFeatured: boolean, customData?: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const demoUrl = customData?.demoUrl || repo.homepage;
  const description = customData?.description || repo.description;
  const subtitle = customData?.subtitle || `${repo.language || 'Code'} • ${isFeatured ? 'Featured' : 'Project'}`;
  const overrideImage = customData?.overrideImage;
  
  // Show live iframe preview for featured projects with demo URLs, unless an image is overridden
  const hasLivePreview = isFeatured && demoUrl && !overrideImage;

  return (
    <div 
      className="w-full bg-white dark:bg-slate-900 rounded-[34px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 ease-in-out relative flex flex-col group cursor-pointer border border-transparent dark:border-slate-700/50"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Thumbnail Section */}
      {overrideImage ? (
        <div className="relative w-full aspect-[4/3] overflow-hidden z-10 shrink-0">
          <img 
            alt={`${repo.name} Thumbnail`} 
            className="w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:scale-105" 
            src={overrideImage} 
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800';
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
          
          {/* Collapsed Content (Overlay) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end text-white z-20 bg-black/20 dark:bg-black/40 backdrop-blur-sm rounded-b-[34px]">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">{repo.name}</span>
              <span className="text-sm font-medium text-white/80">
                {subtitle}
              </span>
            </div>
            <button 
              aria-label="View Project" 
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 text-white transition-all duration-400 group-hover:bg-white/30 dark:group-hover:bg-white/20 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-400">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      ) : hasLivePreview ? (
        <div className="relative w-full aspect-[4/3] overflow-hidden z-10 shrink-0 bg-slate-900">
          <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none transition-transform duration-700 ease-in-out group-hover:scale-[0.52]">
            <iframe 
              src={demoUrl} 
              title={`${repo.name} preview`}
              className="w-full h-full border-0"
              scrolling="no"
              tabIndex={-1}
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
          
          {/* Collapsed Content (Overlay) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end text-white z-20 bg-black/20 dark:bg-black/40 backdrop-blur-sm rounded-b-[34px]">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">{repo.name}</span>
              <span className="text-sm font-medium text-white/80">
                {subtitle}
              </span>
            </div>
            <button 
              aria-label="View Project" 
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 text-white transition-all duration-400 group-hover:bg-white/30 dark:group-hover:bg-white/20 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-400">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full aspect-[4/3] overflow-hidden z-10 shrink-0 bg-gradient-to-br from-primary/80 to-slate-800 dark:to-slate-950 flex items-center justify-center">
          {/* Large Background Text Initial */}
          <span className="text-9xl font-black text-white/10 dark:text-white/5 select-none group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
            {repo.name.substring(0, 2).toUpperCase()}
          </span>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
          {/* Collapsed Content (Overlay) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end text-white z-20 bg-black/20 dark:bg-black/40 backdrop-blur-sm rounded-b-[34px]">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">{repo.name}</span>
              <span className="text-sm font-medium text-white/80">
                {subtitle}
              </span>
            </div>
            <button 
              aria-label="View Project" 
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 text-white transition-all duration-400 group-hover:bg-white/30 dark:group-hover:bg-white/20 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-400">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Expanded Details Section */}
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-out w-full relative z-0 bg-slate-50 dark:bg-slate-800/80 ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="px-6 pb-6 pt-4 flex flex-col gap-6">
            
            {/* Description */}
            <p className="text-base text-slate-700 dark:text-slate-300">
              {description || "No description provided for this repository."}
            </p>

            {/* Tech Stack */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono text-slate-500 tracking-wider uppercase">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map(topic => (
                    <span key={topic} className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-full text-xs font-mono lowercase border border-slate-200 dark:border-slate-700/50">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-700/50 pt-4">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-500 uppercase mb-1">Stars</span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <Star size={14} className="text-yellow-500"/> {repo.stargazers_count}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-500 uppercase mb-1">Forks</span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <GitFork size={14} className="text-slate-400"/> {repo.forks_count}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-500 uppercase mb-1">Updated</span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <Calendar size={14} className="text-slate-400"/> {new Date(repo.updated_at).getFullYear()}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-2">
              {/* Hide GitHub link only for docfixer since it is private */}
              {!repo.name.toLowerCase().includes('docfixer') && (
                <a 
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    isFeatured && !demoUrl
                      ? 'flex-1 bg-primary text-white hover:bg-blue-600'
                      : 'flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  href={repo.html_url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub <ExternalLink size={16} />
                </a>
              )}
              {demoUrl && (
                <a 
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    isFeatured 
                      ? 'flex-1 bg-primary text-white hover:bg-blue-600' // Main button for featured
                      : 'flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  href={demoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* Close Indicator */}
            <div className="flex justify-end pt-2">
              <button 
                aria-label="Close details" 
                className="flex items-center text-slate-500 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                <span className="text-sm font-medium mr-1">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSkeleton = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col h-64 animate-pulse">
    <div className="flex justify-between items-start mb-4">
      <div className="w-full">
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/2 mb-4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4 mb-6"></div>
      </div>
    </div>
    <div className="flex gap-2 mb-auto">
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-16"></div>
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-20"></div>
    </div>
  </div>
);

export const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const cacheKey = `github_repos_${GITHUB_USERNAME}`;
        const cachedData = sessionStorage.getItem(cacheKey);
        const cacheTime = sessionStorage.getItem(`${cacheKey}_time`);
        
        if (cachedData && cacheTime && (Date.now() - parseInt(cacheTime) < 3600000)) {
          setRepos(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) throw new Error('Failed to fetch repositories');
        
        const data: Repo[] = await response.json();
        const validRepos = data.filter(repo => !repo.fork && repo.name !== GITHUB_USERNAME);
        
        sessionStorage.setItem(cacheKey, JSON.stringify(validRepos));
        sessionStorage.setItem(`${cacheKey}_time`, Date.now().toString());
        
        setRepos(validRepos);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load projects from GitHub. Please try again later.');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getCategorizedRepos = () => {
    // Find featured repos exactly matching our order
    const featured: {repo: Repo, customData: any}[] = [];
    const nonFeatured: Repo[] = [];

    // Copy repos to avoid mutating state directly
    const availableRepos = [...repos];

    // 1. Extract featured in specific order
    FEATURED_ORDER.forEach(featuredData => {
      const index = availableRepos.findIndex(r => r.name.toLowerCase().includes(featuredData.match.toLowerCase()));
      if (index !== -1) {
        featured.push({
          repo: availableRepos[index],
          customData: featuredData
        });
        availableRepos.splice(index, 1);
      } else {
        // If the project is private (like docfixer) or not found, mock its repository data
        featured.push({
          repo: {
            id: Math.random(),
            name: featuredData.match === 'docfixer' ? 'DocFixer' : 
                  featuredData.match === '90dayprep' ? '90dayPrep' : featuredData.match,
            description: featuredData.description || '',
            html_url: '',
            homepage: featuredData.demoUrl || '',
            language: 'TypeScript',
            topics: ['react', 'next.js', 'tailwind'],
            stargazers_count: 0,
            forks_count: 0,
            updated_at: new Date().toISOString()
          },
          customData: featuredData
        });
      }
    });

    // 2. Remaining are non-featured, sorted by stars then date
    nonFeatured.push(...availableRepos.sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    }));

    return { featured, nonFeatured };
  };

  const { featured, nonFeatured } = getCategorizedRepos();

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-4">
              <Activity className="text-primary w-8 h-8" />
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              A collection of my most significant production builds and tools.
            </p>
          </div>
        </div>

        {error ? (
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-2xl p-8 text-center text-red-600 dark:text-red-400">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {loading ? (
              <>
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
              </>
            ) : (
              featured.map((item) => (
                <ProjectCard 
                  key={item.repo.id} 
                  repo={item.repo} 
                  isFeatured={true}
                  customData={item.customData}
                />
              ))
            )}
          </div>
        )}
        
        {/* Show More Section */}
        {!loading && nonFeatured.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {showMore ? 'Hide Other Projects' : `Show ${nonFeatured.length} More Projects`}
              </button>
            </div>
            
            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showMore ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {nonFeatured.map(repo => (
                  <ProjectCard 
                    key={repo.id} 
                    repo={repo} 
                    isFeatured={false}
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <a 
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                >
                  View All on GitHub <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
