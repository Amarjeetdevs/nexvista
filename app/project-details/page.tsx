"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Brain,
  Database,
  Cloud,
  Terminal,
  Network,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer3 } from "@/components/Footer/footer3";

// Import your images from data file
import { 
  ProjectDetailImageRul1,
  ProjectDetailImageRul2,
  ProjectDetailImageRul3,
  ProjectDetailImageRul4,
  projectsDetailImageUrl
} from "@/data/Image";

const techStack = [
  { icon: Brain, label: "TensorFlow" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Cloud, label: "AWS Sovereign" },
  { icon: Terminal, label: "Rust/Core" },
  { icon: Network, label: "Kubernetes" }
];

const missionObjectives = [
  {
    icon: Shield,
    title: "Data Sovereignty",
    description: "Complete isolation from third-party peering points through proprietary cryptographic tunnels."
  },
  {
    icon: Zap,
    title: "Latency Reduction",
    description: "Edge-first computation reducing round-trip times by 84% compared to standard cloud providers."
  }
];

const galleryItems = [
  {
    title: "Custom Silicon Integration",
    category: "Hardware Layer",
    image: ProjectDetailImageRul1,
    colSpan: "md:col-span-8"
  },
  {
    title: "Nexus Control System",
    category: "Interface",
    image: ProjectDetailImageRul2,
    colSpan: "md:col-span-4"
  },
  {
    title: "The Vault Cluster",
    category: "Infrastructure",
    image: ProjectDetailImageRul3,
    colSpan: "md:col-span-4"
  },
  {
    title: "Mission Command Center",
    category: "Deployment",
    image: ProjectDetailImageRul4,
    colSpan: "md:col-span-8"
  }
];

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
      <Navbar />

      {/* Immersive Hero Section */}
      <header className="relative h-[500px] md:h-[700px] lg:h-[870px] w-full flex items-end overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={projectsDetailImageUrl} 
            alt="Neural Grid sovereign infrastructure background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-2 md:px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 mb-4 md:mb-6">
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
              <span className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase">
                AMRUT CORE SYSTEMS
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-4 md:mb-6 max-w-4xl">
              Neural Grid: Sovereign Infrastructure
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl font-medium leading-relaxed">
              Re-engineering national digital sovereignty through autonomous server nodes 
              and decentralized neural computation architectures.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Split-Column Specs */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 md:mb-6">
                Mission Objectives
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                The Neural Grid project was commissioned to address the critical need for localized 
                high-performance computing clusters that operate independently of global cloud monopolies. 
                By integrating deep-learning optimization at the hardware level, we've established a 
                self-healing infrastructure capable of processing petabytes of encrypted data per millisecond.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {missionObjectives.map((obj, index) => (
                  <motion.div
                    key={obj.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <obj.icon className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                    <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                      {obj.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {obj.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                <CardContent className="p-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                    Technical Brief
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Client Type
                      </span>
                      <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                        Institutional / Gov
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Trust Tier
                      </span>
                      <span className="text-xs md:text-sm font-bold text-amber-600 dark:text-amber-400">
                        Level 5 (Sovereign)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Completion
                      </span>
                      <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                        October 2023
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Location
                      </span>
                      <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                        Global Decentralized
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-8 md:mt-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-sm font-bold tracking-tight hover:bg-gray-800 dark:hover:bg-gray-100 transition-all">
                    Request Documentation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Horizontal Tech Stack */}
        <section className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-[10px] font-black tracking-[0.2em] text-amber-500 uppercase">
              Architecture Core
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl  font-extrabold tracking-tight text-gray-900 dark:text-white mt-2">
              Technology Ecosystem
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 grayscale opacity-70 hover:grayscale-0 transition-all duration-500">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 md:gap-3 bg-gray-200 dark:bg-gray-900/50 px-4 md:px-6 py-2 md:py-4 rounded-md"
              >
                <tech.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
                <span className="font-bold text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Multi-Column Gallery */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.colSpan} group relative overflow-hidden rounded-xl md:rounded-lg h-[250px] md:h-[400px]`}
              >
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <span className="text-amber-400 text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-1 md:mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold text-sm md:text-xl">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative overflow-hidden rounded-xl md:rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 lg:p-20 text-center">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-amber-500/10 rounded-lg -translate-y-1/2 translate-x-1/2 blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-lg translate-y-1/2 -translate-x-1/2 blur-2xl md:blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 md:mb-6">
                Ready to secure your digital sovereignty?
              </h2>
              <p className="text-white/60 text-base md:text-lg mb-6 md:mb-10">
                Join the ranks of institutions leveraging Amrut Core's Neural Grid architecture 
                for unparalleled performance and security.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Button className="bg-amber-500 text-gray-900 px-6 md:px-10 py-4 md:py-6 rounded-sm font-bold tracking-tight hover:bg-amber-400 transition-all w-full sm:w-auto">
                  Deploy Similar Solution
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-6 md:px-10 py-4 md:py-6 rounded-sm font-bold tracking-tight hover:bg-white/20 transition-all w-full sm:w-auto">
                  Consult an Expert
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer3 />
    </div>
  );
}