"use client";

import { 
  Brain, 
  Cloud, 
  Landmark, 
  Wifi, 
  Shield, 
  Database,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const expertise = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Deploying neural architectures and predictive modeling to solve complex industrial bottlenecks with surgical precision.",
    tags: ["NLP", "Computer Vision", "Deep Learning"],
    variant: "highlight",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable, sovereign infrastructure designed for high-availability government and enterprise workloads.",
    tags: [],
    variant: "default",
  },
  {
    icon: Landmark,
    title: "Fintech Solutions",
    description: "Secure transaction processing and automated financial governance systems built on immutable ledgers.",
    tags: [],
    variant: "highlight",
  },
  {
    icon: Wifi,
    title: "Internet of Things",
    description: "Connecting the physical world with intelligent telemetry, creating smart cities and industrial ecosystems.",
    tags: [],
    variant: "default",
    cta: "Case Studies",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Fortifying digital assets with advanced threat detection, zero-trust architectures, and robust encryption protocols.",
    tags: ["Pentesting", "Compliance"],
    variant: "accent",
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Transforming raw data into actionable intelligence through high-throughput processing and visualized insights.",
    tags: [],
    variant: "highlight",
    hasProgress: true,
  },
];

export function Expertise() {
  return (
    <section className="  mx-auto  px-4 md:px-20  py-16 md:py-24">
      <div className="mb-12 md:mb-20 text-center lg:text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-secondary font-bold tracking-[0.25em] uppercase text-sm block mb-4"
        >
          Domain Authority
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter"
        >
          Core Expertise
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {expertise.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
              p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between min-h-[400px] md:min-h-[450px]
              transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/5
              ${item.variant === "highlight" 
                ? "bg-white text-secondary-foreground" 
                : item.variant === "accent"
                ? "bg-secondary/40 border border-secondary/10"
                : "bg-[#000410] border border-border/15 dark:border-white/5"
              }
            `}
          >
            <div>
              <item.icon className={`
                w-10 h-10 md:w-12 md:h-12 mb-6 md:mb-8
                ${item.variant === "highlight" 
                  ? "text-black/80" 
                  : "text-secondary"
                }
                transition-transform group-hover:scale-110
              `} />
              
              <h3 className={`
                text-2xl md:text-3xl font-bold mb-4 md:mb-6
                ${item.variant === "highlight" 
                  ? "text-black" 
                  : " text-secondary"
                }
              `}>
                {item.title}
              </h3>
              
              <p className={`
                text-base md:text-lg leading-relaxed
                ${item.variant === "highlight" 
                  ? "text-black/80" 
                  : "text-muted-foreground"
                }
              `}>
                {item.description}
              </p>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 md:px-5 py-1 md:py-1.5 bg-surface-container text-xs font-bold rounded-full text-foreground/70 border border-border/15 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {item.cta && (
              <Button
                variant="default"
                className="w-fit mt-6 md:mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                {item.cta}
              </Button>
            )}

            {item.hasProgress && (
              <div className="mt-6 md:mt-8">
                <div className="w-full h-1.5 bg-border/30 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-secondary" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-secondary border-2 border-background" />
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-foreground border-2 border-background" />
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-slate-400 border-2 border-background" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Real-time Pipelines
                  </span>
                </div>
              </div>
            )}

            {item.variant === "highlight" && (
              <div className="mt-6 md:mt-8 flex justify-end">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}