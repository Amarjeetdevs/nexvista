// "use client";

// import { 
//   Brain, 
//   Cloud, 
//   Landmark, 
//   Wifi, 
//   ArrowRight,
//   Layout,
//   Heart,
//   Code,
//   Network,
//   Shield,
//   LineChart,
//   Server,
//   Database,
//   Monitor,
//   Activity,
//   Clock,
//   FileCode,
//   Lock,
//   GitBranch,
//   BarChart
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// const expertise = [
//   {
//     icon: Brain,
//     title: "Artificial Intelligence",
//     description: "Deploying neural architectures and predictive modeling to solve complex industrial bottlenecks with surgical precision.",
//     tags: ["NLP", "Computer Vision", "Deep Learning", "Predictive Analytics"],
//     variant: "highlight",
//   },
//   {
//     icon: Cloud,
//     title: "Cloud Computing",
//     description: "Scalable, sovereign infrastructure designed for high-availability government and enterprise workloads.",
//     tags: ["AWS", "Azure", "Hybrid Cloud", "DevOps"],
//     variant: "default",
//   },
//   {
//     icon: Landmark,
//     title: "Fintech Solutions",
//     description: "Secure transaction processing and automated financial governance systems built on immutable ledgers.",
//     tags: ["Blockchain", "Payment Gateway", "Compliance", "Fraud Detection"],
//     variant: "highlight",
//   },
//   {
//     icon: Wifi,
//     title: "Internet of Things",
//     description: "Connecting the physical world with intelligent telemetry, creating smart cities and industrial ecosystems.",
//     tags: ["Sensors", "Real-time Monitoring", "Edge Computing", "MQTT"],
//     variant: "default",
//     cta: "View Case Study",
//   },
//   {
//     icon: Layout,
//     title: "ERP Solutions",
//     description: "Integrated enterprise resource planning systems for healthcare, manufacturing, and e-commerce operations.",
//     tags: ["EHR", "HMS", "Inventory Management", "HRMS", "Supply Chain"],
//     variant: "accent",
//   },
//   {
//     icon: Heart,
//     title: "Healthcare IT",
//     description: "Complete electronic health records system with patient portal, online appointments, and automated billing for multi-location clinic networks.",
//     tags: ["EHR", "HMS", "Patient Portal", "Telemedicine", "Automated Billing"],
//     variant: "default",
//   },
//   // New Services from Image
//   {
//     icon: Code,
//     title: "Software Development",
//     description: "Custom software development tailored to your business needs with modern tech stacks and best practices.",
//     tags: ["Web Development", "App Development", "Custom Solutions", "Agile Methodology"],
//     variant: "default",
//   },
//   // {
//   //   icon: Network,
//   //   title: "IT Consulting & Strategy",
//   //   description: "Strategic IT consulting to align technology with your business goals and drive digital transformation.",
//   //   tags: ["IT Strategy", "Digital Roadmap", "Tech Advisory", "Digital Transformation"],
//   //   variant: "highlight",
//   // },
//   {
//     icon: Server,
//     title: "Network & Infrastructure",
//     description: "Robust network architecture and infrastructure solutions for enterprise-grade reliability and security.",
//     tags: ["Network Security", "Infrastructure Setup", "Enterprise Networking", "Network Monitoring"],
//     variant: "default",
//   },
//   {
//     icon: BarChart,
//     title: "Data & Analytics Services",
//     description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
//     tags: ["Data Analytics", "BI Dashboards", "Data Visualization", "Predictive Analytics"],
//     variant: "accent",
//   },
//   {
//     icon: Shield,
//     title: "IT Security Audits",
//     description: "Comprehensive security assessments and audits to identify vulnerabilities and ensure compliance.",
//     tags: ["Security Audits", "Vulnerability Assessment", "Compliance Check", "Penetration Testing"],
//     variant: "highlight",
//   },
//   {
//     icon: Database,
//     title: "Data Migration & Integration",
//     description: "Seamless data migration from legacy systems and integration with modern cloud platforms.",
//     tags: ["Legacy Migration", "Cloud Integration", "ETL Processes", "Data Sync"],
//     variant: "default",
//   },
//   {
//     icon: Monitor,
//     title: "Digital Transformation Planning",
//     description: "Strategic planning and execution of digital transformation initiatives for business growth.",
//     tags: ["Digital Strategy", "Process Automation", "Change Management", "Tech Modernization"],
//     variant: "default",
//   },
//   {
//     icon: Activity,
//     title: "24/7 IT Monitoring",
//     description: "Round-the-clock monitoring and proactive maintenance of your IT infrastructure.",
//     tags: ["24/7 Monitoring", "Proactive Alerts", "Incident Response", "System Health"],
//     variant: "accent",
//   },
//   {
//     icon: Lock,
//     title: "Network Security Architecture",
//     description: "Design and implementation of secure network architectures with zero-trust principles.",
//     tags: ["Zero Trust", "Firewall Security", "VPN Solutions", "Threat Protection"],
//     variant: "highlight",
//   },
//   {
//     icon: FileCode,
//     title: "Legacy System Data Migration",
//     description: "Specialized migration of data from legacy systems to modern, scalable platforms.",
//     tags: ["Legacy Systems", "Data Transfer", "System Modernization", "Zero Downtime"],
//     variant: "default",
//   },
//   {
//     icon: GitBranch,
//     title: "Workflow Optimization",
//     description: "Streamline business processes with automated workflows and intelligent process optimization.",
//     tags: ["Process Automation", "Workflow Design", "Efficiency Improvement", "BPM"],
//     variant: "default",
//   },
//   // {
//   //   icon: Clock,
//   //   title: "Managed IT Services",
//   //   description: "Comprehensive managed IT services including support, maintenance, and strategic guidance.",
//   //   tags: ["IT Support", "Help Desk", "System Maintenance", "Vendor Management"],
//   //   variant: "accent",
//   // }
// ];


// export function Expertise() {
//   return (
//     <section className="mx-auto px-4 md:px-20 py-16 md:py-24">
//       <div className="mb-12 md:mb-20 text-center lg:text-left">
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-secondary font-bold tracking-[0.25em] uppercase text-sm block mb-4"
//         >
//           Our Services
//         </motion.span>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter"
//         >
//           What We Offer
//         </motion.h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//         {expertise.map((item, index) => (
//           <motion.div
//             key={item.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.05 }}
//             viewport={{ once: true }}
//             className={`
//               p-6 md:p-8 rounded-2xl flex flex-col justify-between min-h-[320px]
//               transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/5
//               ${item.variant === "highlight" 
//                 ? "bg-slate-50/70 text-secondary-foreground" 
//                 : item.variant === "accent"
//                 ? "bg-primary/70 border border-secondary/10"
//                 : "bg-[#000410] border border-border/15 dark:border-white/5"
//               }
//             `}
//           >
//             <div>
//               <item.icon className={`
//                 w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6
//                 ${item.variant === "highlight" 
//                   ? "text-black/80" 
//                   : "text-secondary"
//                 }
//               `} />
              
//               <h3 className={`
//                 text-xl md:text-2xl font-bold mb-3 md:mb-4
//                 ${item.variant === "highlight" 
//                   ? "text-black" 
//                   : "text-white"
//                 }
//               `}>
//                 {item.title}
//               </h3>
              
//               <p className={`
//                 text-sm md:text-base leading-relaxed
//                 ${item.variant === "highlight" 
//                   ? "text-black/70" 
//                   : "text-gray-300"
//                 }
//               `}>
//                 {item.description}
//               </p>
//             </div>

//             {item.tags && item.tags.length > 0 && (
//               <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
//                 {item.tags.slice(0, 4).map((tag) => (
//                   <span
//                     key={tag}
//                     className={`
//                       px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium rounded-full border
//                       ${item.variant === "highlight" 
//                         ? "bg-black/5 text-black/60 border-black/10" 
//                         : item.variant === "accent"
//                         ? "bg-secondary/20 text-secondary border-secondary/20"
//                         : "bg-white/10 text-gray-300 border-white/10"
//                       }
//                     `}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {item.cta && (
//               <Button
//                 variant="default"
//                 className="w-fit mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
//               >
//                 {item.cta}
//               </Button>
//             )}

//             {item.variant === "highlight" && !item.cta && (
//               <div className="mt-6 flex justify-end">
//                 <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { 
  Brain, 
  Cloud, 
  Landmark, 
  Wifi, 
  Layout,
  Heart,
  Code,
  Shield,
  Database,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const expertise = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description: "Deploying neural architectures and predictive modeling to solve complex industrial bottlenecks with surgical precision.",
    tags: ["NLP", "Computer Vision", "Deep Learning", "Predictive Analytics"],
    variant: "highlight",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Infrastructure",
    description: "Scalable, sovereign infrastructure designed for high-availability government and enterprise workloads.",
    tags: ["AWS", "Azure", "Hybrid Cloud", "DevOps", "Scalable Cloud Hosting"],
    variant: "default",
  },
  {
    icon: Landmark,
    title: "Fintech & Security Solutions",
    description: "Secure transaction processing and automated financial governance systems built on immutable ledgers.",
    tags: ["Blockchain", "Payment Gateway", "Compliance", "Fraud Detection", "IT Security Audits"],
    variant: "highlight",
  },
  {
    icon: Wifi,
    title: "Internet of Things (IoT)",
    description: "Connecting the physical world with intelligent telemetry, creating smart cities and industrial ecosystems.",
    tags: ["Sensors", "Real-time Monitoring", "Edge Computing", "MQTT"],
    variant: "default",
    cta: "View Case Study",
  },
  {
    icon: Layout,
    title: "ERP & Enterprise Solutions",
    description: "Integrated enterprise resource planning systems for healthcare, manufacturing, and e-commerce operations.",
    tags: ["EHR", "HMS", "Inventory Management", "HRMS", "Supply Chain"],
    variant: "accent",
  },
  {
    icon: Heart,
    title: "Healthcare IT Systems",
    description: "Complete electronic health records system with patient portal, online appointments, automated billing, and clinical data reporting.",
    tags: ["EHR", "HMS", "Patient Portal", "Telemedicine", "Automated Billing", "Clinical Data Reporting"],
    variant: "default",
  },
  {
    icon: Code,
    title: "Software Development & Legacy Migration",
    description: "Custom software development, web & app development, and seamless data migration from legacy systems.",
    tags: ["Web Development", "App Development", "Legacy Migration", "Custom Solutions", "Data Migration"],
    variant: "highlight",
  },
  {
    icon: Shield,
    title: "IT Consulting & Security",
    description: "Strategic IT consulting, digital transformation planning, workflow optimization, and network security architecture.",
    tags: ["IT Strategy", "Digital Transformation", "Workflow Optimization", "Network Security", "Zero Trust"],
    variant: "accent",
  },
  {
    icon: Database,
    title: "Data & Analytics Services",
    description: "Transforming raw data into actionable intelligence through advanced analytics, BI dashboards, and cloud integration.",
    tags: ["Data Analytics", "BI Dashboards", "Data Visualization", "Cloud Integration", "ETL", "24/7 Monitoring"],
    variant: "default",
  }
];

export function Expertise() {
  return (
    <section className="mx-auto px-4 md:px-20 py-16 md:py-24">
      <div className="mb-12 md:mb-20 text-center lg:text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-secondary font-bold tracking-[0.25em] uppercase text-sm block mb-4"
        >
          Our Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter"
        >
          What We Offer
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {expertise.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className={`
              p-6 md:p-8 rounded-2xl flex flex-col justify-between min-h-[360px]
              transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/5
              ${item.variant === "highlight" 
                ? "bg-slate-50/70 text-secondary-foreground" 
                : item.variant === "accent"
                ? "bg-primary/70 border border-secondary/10"
                : "bg-[#000410] border border-border/15 dark:border-white/5"
              }
            `}
          >
            <div>
              <item.icon className={`
                w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6
                ${item.variant === "highlight" 
                  ? "text-black/80" 
                  : "text-secondary"
                }
              `} />
              
              <h3 className={`
                text-xl md:text-2xl font-bold mb-3 md:mb-4
                ${item.variant === "highlight" 
                  ? "text-black" 
                  : "text-white"
                }
              `}>
                {item.title}
              </h3>
              
              <p className={`
                text-sm md:text-base leading-relaxed
                ${item.variant === "highlight" 
                  ? "text-black/70" 
                  : "text-gray-300"
                }
              `}>
                {item.description}
              </p>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`
                      px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium rounded-full border
                      ${item.variant === "highlight" 
                        ? "bg-black/5 text-black/60 border-black/10" 
                        : item.variant === "accent"
                        ? "bg-secondary/20 text-secondary border-secondary/20"
                        : "bg-white/10 text-gray-300 border-white/10"
                      }
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {item.cta && (
              <Button
                variant="default"
                className="w-fit mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                {item.cta}
              </Button>
            )}

            {item.variant === "highlight" && !item.cta && (
              <div className="mt-6 flex justify-end">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}