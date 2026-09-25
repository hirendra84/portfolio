import React, { useState } from 'react';
import { Award, ChevronDown, ExternalLink, Calendar, Link as LinkIcon } from 'lucide-react';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  description: string;
  skills: string[];
}

const SAMPLE_CERTIFICATIONS: Certification[] = [
  {
    id: "28af2340-ba87-4966-8dcd-54cb9dfb8e2d",
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Training and Certification",
    platform: "Credly",
    date: "2026",
    credentialUrl: "https://www.credly.com/badges/28af2340-ba87-4966-8dcd-54cb9dfb8e2d",
    image: "https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
    description: "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    skills: ["AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"]
  },
  {
    id: "ibm-ml-2026",
    title: "IBM Machine Learning Professional Certificate",
    issuer: "IBM",
    platform: "Coursera",
    date: "2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/1PGMI1KXHJXY",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~1PGMI1KXHJXY/CERTIFICATE_LANDING_PAGE~1PGMI1KXHJXY.jpeg",
    description: "Comprehensive program covering supervised and unsupervised learning, deep learning, and reinforcement learning using Python and TensorFlow. Applied predictive models to real-world business datasets.",
    skills: ["Machine Learning", "Python", "TensorFlow", "Data Analysis", "Recommendation Systems"]
  },
  {
    id: "c41a4d8c-c718-4f62-810c-b305da43b12f",
    title: "Fortinet Cybersecurity and Cloud Fundamentals 1.0",
    issuer: "Fortinet",
    platform: "Credly",
    date: "2026",
    credentialUrl: "https://www.credly.com/badges/c41a4d8c-c718-4f62-810c-b305da43b12f",
    image: "https://images.credly.com/images/86f2702d-4c21-4d3a-af71-f581a9e62e12/blob",
    description: "Mastered technical skills required for an entry-level role in cybersecurity, covering Cloud Infrastructure, Network Security, and Threat Intelligence.",
    skills: ["Cloud Infrastructure", "Cybersecurity", "Network Security", "Threat Detection"]
  },
  {
    id: "164b73b0-bf41-4644-a9e8-be2bc7d29713",
    title: "Fortinet NSE 1 Certified in Cybersecurity",
    issuer: "Fortinet",
    platform: "Credly",
    date: "2026",
    credentialUrl: "https://www.credly.com/badges/164b73b0-bf41-4644-a9e8-be2bc7d29713",
    image: "https://images.credly.com/images/0dc7965b-8507-4312-9c12-1add6c50fa49/blob",
    description: "The NSE 1 certification validates mastery of technical skills and knowledge required for an entry-level role in cybersecurity.",
    skills: ["Cybersecurity", "Fortinet", "Information Security", "Network Security"]
  },
  {
    id: "8b97f8ab-9c6a-4e5f-abe5-c2501e7fa016",
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    platform: "Credly",
    date: "2026",
    credentialUrl: "https://www.credly.com/badges/8b97f8ab-9c6a-4e5f-abe5-c2501e7fa016",
    image: "https://images.credly.com/images/7615dc83-74f0-45ca-a9c0-a01d16dc7bb7/blob",
    description: "Verifies the attendance of the Red Hat System Administration I course through Red Hat Academy.",
    skills: ["Linux", "RHCSA", "Red Hat Enterprise Linux", "System Administration"]
  },
  {
    id: "e6c90ca9-d574-47a7-9c6c-6a254bdaef0c",
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "AWS Training and Certification",
    platform: "Credly",
    date: "2025",
    credentialUrl: "https://www.credly.com/badges/e6c90ca9-d574-47a7-9c6c-6a254bdaef0c",
    image: "https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob",
    description: "Completed the Cloud Computing 101 training and demonstrated the ability to create simple cloud applications.",
    skills: ["AWS Cloud", "Cloud Computing", "Cloud Foundations"]
  }
];

const CertificationCard = ({ cert }: { cert: Certification }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white dark:bg-slate-900 border transition-all duration-500 overflow-hidden rounded-2xl ${
      isExpanded 
        ? 'border-primary/50 shadow-lg shadow-primary/10' 
        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
    }`}>
      {/* Header - Always visible */}
      <div 
        className="p-6 md:p-8 cursor-pointer flex items-center justify-between group"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <div className="flex gap-4 items-start md:items-center">
          <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
            isExpanded ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
          }`}>
            <Award size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
              <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
              <span>{cert.platform}</span>
              <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1"><Calendar size={14}/> {cert.date}</span>
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0 ml-4">
          <ChevronDown 
            size={24} 
            className={`text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : 'group-hover:text-slate-600 dark:group-hover:text-slate-200'}`} 
          />
        </div>
      </div>

      {/* Expanded Content */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-slate-100 dark:border-slate-800/50 mt-2">
          <div className="pt-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Description</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Skills Assessed</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="pt-2">
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white font-medium rounded-xl transition-all duration-300"
                    onClick={(e) => e.stopPropagation()} // Prevent closing accordion when clicking link
                  >
                    <LinkIcon size={16} /> Verify Credential
                  </a>
                </div>
              )}
            </div>
            
            {/* Lazy loaded image - only mounts/loads if expanded */}
            {cert.image && isExpanded && (
              <div className="relative group/img rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-video flex items-center justify-center">
                {/* Fallback while loading or if it fails */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <Award size={48} className="opacity-20" />
                </div>
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="relative z-10 w-full h-full object-contain p-4 shadow-sm transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CertificationsSection = () => {
  // If no certifications exist yet, we can choose to hide the section or show a placeholder
  if (SAMPLE_CERTIFICATIONS.length === 0) {
    return null; // Hidden until populated
  }

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Award className="text-primary" size={32} />
            Licenses & Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional qualifications and specialized training.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {SAMPLE_CERTIFICATIONS.map(cert => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
