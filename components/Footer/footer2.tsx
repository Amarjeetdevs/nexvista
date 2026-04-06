"use client";

import Link from "next/link";
import { Verified, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Footer2() {
  return (
    <footer className="bg-[#000410] w-full pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Left Section - Logo & Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8 w-full md:w-auto text-center md:text-left"
          >
            <div className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
              Amrut Core Systems
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* MSME Certified Badge */}
              <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <Verified className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                  MSME Certified
                </span>
              </div>
              
              {/* Startup India Badge */}
              <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                  Startup India
                </span>
              </div>
              
              {/* ISO Certified Badge */}
              <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                  ISO 9001:2024
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Links & Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-10 w-full md:w-auto"
          >
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
              <Link 
                href="/privacy" 
                className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-y-[-2px]"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-y-[-2px]"
              >
                Terms of Service
              </Link>
              <Link 
                href="/governance" 
                className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-y-[-2px]"
              >
                Institutional Governance
              </Link>
              <Link 
                href="/partnerships" 
                className="text-amber-400 font-bold hover:text-amber-300 transition-all duration-300 text-sm hover:translate-y-[-2px]"
              >
                Global Partnerships
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-slate-400/60 text-center md:text-right text-xs md:text-sm">
              © 2024 Amrut Core Systems Private Limited. All Rights Reserved.
            </div>
          </motion.div>
        </div>

        {/* Bottom Border Line */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500/50 text-xs">
            Empowering businesses with intelligent technology solutions since 2024
          </p>
        </div>
      </div>
    </footer>
  );
}