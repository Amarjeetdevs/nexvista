"use client";

import { Terminal, Handshake, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Terminal,
    value: "6+",
    label: "Major Projects",
    iconBg: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Handshake,
    value: "4+",
    label: "Strategic Partners",
    iconBg: "bg-surface-container-high",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    value: "6",
    label: "Advisory Members",
    iconBg: "bg-primary-container",
    iconColor: "text-secondary",
  },
   {
    icon: Handshake,
    value: "4+",
    label: "Strategic Partners",
    iconBg: "bg-surface-container-high",
    iconColor: "text-secondary",
  },
];

export function Stats() {
  return (
    <section className="max-w-full mx-auto bg-[#ECEEF0] dark:bg-secondary/0 px-4 md:px-20 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-2 bg-white p-6 md:p-12 rounded-[2rem] border border-border/15 dark:border-white/5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 md:gap-8"
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}