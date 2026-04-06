"use client";

import Link from "next/link";
import { Verified, Award, Shield,  Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Footer3() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000410]/90 dark:bg-[#000410] w-full pt-16 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
      {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

      <div className="relative z-10   mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Left Section - Logo & Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8 w-full md:w-auto text-center md:text-left"
          >
            <div>
              <div className="text-2xl md:text-3xl text-white dark:font-black bg-gradie nt-to-r from-primary to-primary/70 bg-clip-text text-transparent  uppercase tracking-tighter">
                Amrut Core Systems
              </div>
              <p className="text-slate-400 text-xs mt-2 max-w-md">
                Intelligent Technology Solutions for Modern Enterprises
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group cursor-default">
                <Verified className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                  MSME Certified
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group cursor-default">
                <Award className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                  Startup India
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group cursor-default">
                <Shield className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                  ISO 9001:2024
                </span>
              </div>
            </div>
          </motion.div>
   <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-96 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
          {/* Right Section - Links & Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8 w-full md:w-auto"
          >
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link 
                href="/privacy" 
                className="text-slate-400 hover:text-white  transition-all duration-300 text-sm font-medium hover:translate-y-[-2px] inline-flex items-center gap-1 group"
              >
                Privacy Policy
                <span className="w-0 h-px  bg-amber-400 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-y-[-2px] inline-flex items-center gap-1 group"
              >
                Terms of Service
                <span className="w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link 
                href="/governance" 
                className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-y-[-2px] inline-flex items-center gap-1 group"
              >
                Institutional Governance
                <span className="w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link 
                href="/partnerships" 
                className="text-amber-400 font-bold hover:text-amber-300 transition-all duration-300 text-sm hover:translate-y-[-2px] inline-flex items-center gap-1 group"
              >
                Global Partnerships
                <span className="w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-end gap-4">
              {/* <Link 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 transition-all duration-300 hover:scale-110 group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </Link>
              <Link 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </Link>
              <Link 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </Link> */}
              <Link 
                href="mailto:info@amrutcoresystems.com" 
                className="p-2 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 transition-all duration-300 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-slate-400/90 text-center md:text-right text-xs">
            Empowering businesses with intelligent technology solutions

            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5">
          <p className="text-slate-500/90 text-xs text-center">
              © {currentYear} Amrut Core Systems Private Limited. All Rights Reserved.

          </p>
        </div>
      </div>
    </footer>
  );
}