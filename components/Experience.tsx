import React from 'react';
import { Building2, CloudCog, Terminal, Calendar, Folder } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    role: 'Data Engineering Senior Analyst',
    company: 'Accenture India',
    period: 'Jun 2024 - Present',
    description: [
      'Leading cloud modernization initiatives and implementing robust DevOps practices for enterprise-scale data systems.',
    ],
    technologies: ['AWS', 'Terraform', 'Python', 'DevOps', 'Github'],
    projects: [
      {
        name: 'Study Document verification',
        contributions: [
         'Led CI/CD Migration from Jenkins to GitHub Actions, completing the transition in under a week and incorporating best practices like OIDC role-based authentication, improving security and maintainability of the deployment process',
        'Accelerated Backend Deployment by 57% by introducing Docker image-based workflows into the CI/CD pipeline, improving environment consistency and reducing build-related delays',
        'Built a Fully Automated CI/CD Pipeline for frontend deployments using GitHub Actions, reducing deployment time by over 70% (from ~20 minutes to under 5 minutes), eliminating manual steps and minimizing human error',
        'Optimized AWS Lambda Performance by consolidating 20+ Lambda layers into a single reusable layer, resulting in a 20–40% reduction in cold start latency and improved runtime efficiency across production environments',
      'Enhanced AWS Storage Architecture by implementing a robust solution for transferring large files (up to 5GB) from on-premise infrastructure to Amazon EFS, significantly improving data accessibility and storage scalability']
      }
    ]
  },
  {
    id: '2',
    role: 'Data Engineering Analyst',
    company: 'Accenture India',
    period: 'Aug 2021 - May 2024',
    description: [
      'Engineered high-throughput event-driven applications using AWS Serverless architecture, optimizing for cost and performance.',
      'Designed processing pipelines using Amazon Kinesis, SQS, and SNS handling millions of daily events reliably with 99.9% uptime.',
      'Orchestrated microservices deployments with Kubernetes (EKS) and standardized Helm charts for consistent application deployment.'
    ],
    technologies: ['Python', 'AWS Lambda', 'Docker', 'Kinesis', 'PostgreSQL']
  },
  {
    id: '3',
    role: 'Programming Analyst',
    company: 'Cognizant - Full Time',
    period: 'May 2019 - Aug 2021',
    description: [
     'Designed and Developed NLP-Based Solutions as part of an internal R&D innovation team, creating multiple Proofs of Concept (POCs) for text classification, information extraction, and semantic analysis using Python and advanced NLP libraries',
'Implemented Custom Information Extraction Pipelines to identify user-defined entities from biomedical research papers, significantly increasing data processing speed and reducing manual review time',
'Enhanced Performance of Pre-Trained Models, optimizing a PageRank-based summarization algorithm and refining transformer-based abstractive models, leading to improved text coherence and model accuracy',
'Built Scalable Backend Services using Python, Flask, and FastAPI, designing clean, modular architecture that improved API response times and simplified integration with machine learning pipelines',
'Trained Custom Named Entity Recognition (NER) Models using Stanford NLP and spaCy, boosting extraction accuracy and enabling precise identification of domain-specific terms in unstructured text'],
    technologies: ['Django', 'Flask', 'MongoDB', 'Redis', 'Nginx'],
 
  }
];

const icons = [
  <CloudCog className="text-white" size={20} />,
  <Building2 className="text-white" size={20} />,
  <Terminal className="text-white" size={20} />
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

export const Experience: React.FC = () => {
  return (
    <SectionContainer id="experience">
      <div className="flex flex-col gap-4 mb-16 px-4">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
          Professional Journey
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          A timeline of my career growth, key projects, and technical milestones.
        </p>
      </div>

      <div className="relative px-4">
        {/* Continuous Gradient Line */}
        <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-emerald-500 to-transparent md:left-8 opacity-30"></div>

        <motion.div 
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Timeline Node */}
              <div className="absolute left-[14px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-[0_0_0_4px_rgba(16,185,129,0.2)] ring-4 ring-background-light dark:ring-background-dark z-10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(16,185,129,0.4)]">
                {icons[index]}
              </div>

              {/* Connector Line (Horizontal) */}
              <div className="absolute left-[3.2rem] top-5 h-0.5 w-8 bg-gradient-to-r from-primary/50 to-transparent hidden md:block"></div>

              {/* Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative flex flex-col gap-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark/60 p-6 shadow-sm dark:shadow-none backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-base font-medium text-gray-600 dark:text-gray-300">
                      <span>{item.company}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary ring-1 ring-inset ring-primary/20 sm:mt-0">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                {item.description && item.description.length > 0 && (
                  <ul className="flex flex-col gap-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        <span className="mt-1.5 min-w-[6px] max-w-[6px] h-1.5 rounded-full bg-primary/60"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Projects Section */}
                {item.projects && item.projects.length > 0 && (
                  <div className="mt-4 flex flex-col gap-4">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-white/5 pb-2">
                      <Folder size={14} className="text-primary" /> Key Projects
                    </h4>
                    <div className="flex flex-col gap-4">
                      {item.projects.map((project, idx) => (
                        <div 
                          key={idx} 
                          className="flex flex-col gap-2 rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 p-4 transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
                        >
                          <h5 className="text-sm font-bold text-primary">
                            {project.name}
                          </h5>
                          <ul className="flex flex-col gap-1.5 pl-3">
                            {project.contributions.map((contribution, cIdx) => (
                               <li key={cIdx} className="list-disc text-xs leading-relaxed text-gray-600 dark:text-gray-400 marker:text-gray-400 dark:marker:text-gray-600">
                                  {contribution}
                               </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {item.technologies && (
                  <div className="mt-2 flex flex-wrap gap-2 border-t border-gray-100 dark:border-white/5 pt-4">
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="rounded-md bg-gray-100 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};