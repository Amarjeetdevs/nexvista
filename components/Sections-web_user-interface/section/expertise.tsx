"use client";

import { 
  Brain, 
  Cloud, 
  Landmark, 
  Wifi, 
  Database,
  ArrowRight,
  Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const expertise = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Deploying neural architectures and predictive modeling to solve complex industrial bottlenecks with surgical precision.",
    longDescription: "Our AI solutions help enterprises automate decision-making, reduce operational costs, and uncover hidden patterns in data. From predictive maintenance to intelligent process automation, we build models that learn and adapt to your business environment.",
    tags: ["NLP", "Computer Vision", "Deep Learning", "Predictive Analytics"],
    metrics: [
      { label: "Efficiency Gain", value: "30-45%" },
      { label: "Accuracy", value: "95%+" },
    ],
    caseStudy: "AI Demand Forecasting for E-commerce",
    variant: "highlight",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable, sovereign infrastructure designed for high-availability government and enterprise workloads.",
    longDescription: "We architect cloud-native solutions that scale with your business. Whether public, private, or hybrid cloud, our infrastructure ensures 99.9% uptime, data sovereignty, and cost optimization.",
    tags: ["AWS", "Azure", "Hybrid Cloud", "DevOps"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Cost Reduction", value: "20-35%" },
    ],
    caseStudy: "Healthcare Infrastructure Migration",
    variant: "default",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Landmark,
    title: "Fintech Solutions",
    description: "Secure transaction processing and automated financial governance systems built on immutable ledgers.",
    longDescription: "We build compliant, audit-ready financial systems that handle high-volume transactions, automate reconciliation, and ensure regulatory compliance across payment gateways, lending platforms, and digital banking.",
    tags: ["Blockchain", "Payment Gateway", "Compliance", "Fraud Detection"],
    metrics: [
      { label: "Transaction Speed", value: "< 2 seconds" },
      { label: "Security Standard", value: "PCI-DSS" },
    ],
    variant: "highlight",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Wifi,
    title: "Internet of Things",
    description: "Connecting the physical world with intelligent telemetry, creating smart cities and industrial ecosystems.",
    longDescription: "Our IoT solutions bridge the gap between physical assets and digital intelligence. Real-time monitoring, predictive maintenance, and automated control systems for manufacturing, logistics, and smart infrastructure.",
    tags: ["Sensors", "Real-time Monitoring", "Edge Computing", "MQTT"],
    metrics: [
      { label: "Data Points/Day", value: "1M+" },
      { label: "Latency", value: "< 100ms" },
    ],
    caseStudy: "Wine Manufacturing Tracking System",
    variant: "default",
    gradient: "from-purple-500 to-pink-500",
    cta: "View Case Study",
  },
  {
    icon: Layout,
    title: "ERP Solutions",
    description: "Integrated enterprise resource planning systems for healthcare, manufacturing, and e-commerce operations.",
    longDescription: "We build custom ERP solutions that unify your core business processes — finance, HR, inventory, procurement, and compliance. Our EHR and HMS products are specialized ERPs for healthcare, while our operations tools serve manufacturing and retail.",
    tags: ["EHR", "HMS", "Inventory Management", "HRMS", "Supply Chain"],
    metrics: [
      { label: "Process Efficiency", value: "40-60%" },
      { label: "Deployment Time", value: "8-12 weeks" },
    ],
    caseStudy: "Clinic Management System (EHR) Implementation",
    variant: "accent",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Transforming raw data into actionable intelligence through high-throughput processing and visualized insights.",
    longDescription: "We help you make sense of massive datasets with real-time processing, interactive dashboards, and predictive modeling. From ETL pipelines to ML-powered insights, we turn data into your competitive advantage.",
    tags: ["ETL", "Real-time Pipelines", "Visualization", "ML Ops"],
    metrics: [
      { label: "Processing Speed", value: "1M rows/sec" },
      { label: "Query Response", value: "< 500ms" },
    ],
    caseStudy: "Healthcare Equipment Analytics Dashboard",
    variant: "highlight",
    gradient: "from-yellow-500 to-orange-500",
    hasProgress: true,
  },
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
                ? "bg-slate-50/70 text-secondary-foreground" 
                : item.variant === "accent"
                ? "bg-primary/70 border border-secondary/10"
                : "bg-[#000410] border border-border/15 dark:border-white/5"
              }
            `}
          >
            <div>
              <item.icon className={`
                w-10 h-10 md:w-12 md:h-12 mb-6 md:mb-4
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
                  : "text-white"
                }
              `}>
                {item.title}
              </h3>
              
              <p className={`
                text-base md:text-md leading-relaxed
                ${item.variant === "highlight" 
                  ? "text-black/80" 
                  : "text-gray-300"
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
                    className={`
                      px-3 md:px-5 py-1 md:py-1.5 text-xs font-bold rounded-full border
                      ${item.variant === "highlight" 
                        ? "bg-black/5 text-black/70 border-black/10" 
                        : item.variant === "accent"
                        ? "bg-secondary/20 text-secondary border-secondary/20"
                        : "bg-white/10 text-gray-200 border-white/10"
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