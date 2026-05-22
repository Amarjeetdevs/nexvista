"use client";

import Link from "next/link";
import Image from "next/image";
import logo from '../../public/image/logo/nobg_logo.png'
import { Verified, Award, Shield,  Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Footer3() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg- [#000410]/90 bg-[#000410]  dark:bg-[#000410] w-full pt-16 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

      <div className="relative z-10   mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8 w-full md:w-auto text-center md:text-left"
          >
            <div>
            <div className="flex items-center gap-2 text-2xl md:text-3xl font- bold font-black text-white dark:font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text uppercase tracking-tighter">
  <Image 
    src={logo} 
    width={60} 
    height={60} 
    alt="Company Logo" 
    className="object-contain"
  />
  <span className=" to-white/60 bg-clip-text ">
    Nexvista
  </span>
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
        </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8 w-full md:w-auto"
          >
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <Link 
  href="/privacy" 
  className="relative text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium inline-flex items-center gap-1 group"
>
  Privacy Policy
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400/50 group-hover:w-full transition-all duration-300 delay-75" />
</Link>
              <Link 
  href="/terms" 
  className="relative text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium inline-flex items-center gap-1 group"
>
  Terms of Service
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400/50 group-hover:w-full transition-all duration-300 delay-75" />
</Link>

<Link 
  href="/governance" 
  className="relative text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium inline-flex items-center gap-1 group"
>
  Institutional Governance
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400/50 group-hover:w-full transition-all duration-300 delay-75" />
</Link>

<Link 
  href="/partnerships" 
  className="relative text-amber-400 font-bold hover:text-amber-300 transition-all duration-300 text-sm inline-flex items-center gap-1 group"
>
  Global Partnerships
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400/50 group-hover:w-full transition-all duration-300 delay-75" />
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
          <p className="text-slate-400/90 text-sm text-center">
              © {currentYear} Nextvista Private Limited. All Rights Reserved.

          </p>
        </div>
      </div>
    </footer>
  );
}