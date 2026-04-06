"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = {
  featured: {
    id: 1,
    title: "Wine Manufacturing Tracking",
    category: "Manufacturing",
    description: "Real-time supply chain monitoring and quality control system for leading beverage producers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeVFp7slwmkmC8QSTSJBR8KO6j0SXLf4EiVPFcXk_XeXu3vcERC7wbvYu2SdI0NdIt4xNAfTm36ln7kFRXBJ8uCxb5lhRNkYl5AwIFmRzpbsvWuJ26Se4hH51P0E9-WA2RfyxocOru82C7dZBVXO-5lQxw2yo7A3Ctt8xWsXhlWyAKK7ExbqBmBlP4dan5S3RZOoNy_cPclds70VdviFxYExk3EDUs-UC2N0r1eXcTWwAMfN_ljHzZGEsQavJQyJsAjOWMm5ahop4",
    href: "/portfolio/wine-manufacturing",
  },
  small1: {
    id: 2,
    title: "Healthcare Equipment Tracking",
    category: "HITES",
    description: "Centralized asset management for large-scale medical infrastructure projects.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoQ0kwNXCmQBurwtIgohrnr8dgTC92tdvuBZapLK3mr8q1YkhN5PmuH_Cdtrvt-DLgRiXZhER2fId3TsKArBQwZ_nCh-FM7uDC4t9h9rA5e1KTRbgg8HO-zkw2nNhGWcaEANMA4t_p6lYUKszVqiHZh1VWAZG0CqrBfKvme9902cBrsl0jsjVvi9G9eH3tCqsvd5NRg-7gy1YgdsjN3zXTugibHeD1Cwut3FlBsSSFga6obpHHnx4IHOWTDwrByY8M2T6Q8Pr5abs",
    href: "/portfolio/healthcare-tracking",
  },
  banner: {
    id: 3,
    title: "AI Demand Forecasting",
    category: "E-commerce",
    description: "Predictive inventory management using machine learning to optimize multi-channel retail logistics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJPO1Bk0IPIoHHc7holOlBD6xsJZQIJuAYPB6Ja3D60qGBeNYBh2cjNmChMMPLUzqJGFmY9bIftqPOGG3-l0J4jbb4Mh7FleDUVAbu635Lk_qTbiwKtJ_ab95dCfwsA8DZjef-4M5BDLPWhJSGQW_upbB2AwbIy0mNhoqzyyxyO_H0iybM25cQuS6JJ5TmY9_ShA8YRyWOREiawbPbDvWacZv9TsaO_pbJi9IyfnwV-riwzrkEv21j0T9XVAM64zbuNZptGDn0S0E",
    href: "/portfolio/ai-demand-forecasting",
  },
};

export function Projects() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-20 ">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="text-secondary dark:text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Trusted by PSUs and enterprises across India
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Large Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px]"
          >
            <Image
              src={projects.featured.image}
              alt={projects.featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">
                {projects.featured.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                {projects.featured.title}
              </h3>
              <p className="text-slate-200 text-sm md:text-base max-w-xl mb-4 md:mb-6">
                {projects.featured.description}
              </p>
              <Link
                href={projects.featured.href}
                className="text-white font-bold flex items-center gap-2 group/link hover:gap-3 transition-all"
              >
                Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px]"
          >
            <Image
              src={projects.small1.image}
              alt={projects.small1.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-6 md:p-8">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2">
                {projects.small1.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {projects.small1.title}
              </h3>
              <p className="text-slate-200 text-sm mb-3 md:mb-4">
                {projects.small1.description}
              </p>
            </div>
          </motion.div>

          {/* Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-12 group relative overflow-hidden rounded-2xl h-[300px] md:h-[400px]"
          >
            <Image
              src={projects.banner.image}
              alt={projects.banner.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent flex flex-col justify-center p-6 md:p-12">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">
                {projects.banner.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">
                {projects.banner.title}
              </h2>
              <p className="text-slate-200 text-sm md:text-base max-w-lg mb-4 md:mb-8">
                {projects.banner.description}
              </p>
              <Button className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Explore Work
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-sm md:px-10 py-4 md:py-6 text-base md:text-lg"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}