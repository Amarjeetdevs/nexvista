"use client";

import { Verified, Rocket, ShoppingCart, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const recognitions = [
  { icon: Verified, label: "MSME India" },
  { icon: Rocket, label: "Startup India" },
  { icon: ShoppingCart, label: "GeM Portal" },
  { icon: Wallet, label: "PSU Partner" },
];

export function Recognition() {
  return (
    <section className="bg-surface-container-lowest py-12 md:py-24 border-y border-border/15 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">
            Accredited & Recognized By
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {recognitions.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <item.icon className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4 text-secondary" />
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}