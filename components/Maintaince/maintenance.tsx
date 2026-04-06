"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Database, 
  Shield, 
  Clock, 
  Mail, 
//   Twitter, 
//   Linkedin, 
//   Github 
} from "lucide-react";

export function Maintenance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon Animation */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/5 rounded-full animate-pulse" />
          </div>
            <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-[#FFDEA6] uppercase dark:text-secondary  rounded-md text-sm font-semibold font-mono tracking-wider">
             Strategic Maintenance
          </span>
        </div>
          <div className="relative flex items-center justify-center gap-2">
            <Wrench className="w-12 h-12 md:w-16 md:h-16 text-primary animate-bounce" />
            <Database className="w-12 h-12 md:w-16 md:h-16 text-primary/70 animate-pulse" />
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary/50 animate-bounce delay-100" />
          </div>
        </div>



        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold mb-4 font-mono bg-gradient-to-r from-slate-900 via-primary to-slate-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">
            Systems Upgrade 
            <br/>
            <span className="text-[#7 986A0]">
            in Progress
            </span>
        </h1>
        
      

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono max-w-4xl mx-auto">
          We are re-engineering our digital backbone to better serve our institutional partners. 
          We'll be back online shortly.
        </p>

     

        {/* Estimated Time */}
        {/* <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Estimated completion: 24-48 hours</span>
        </div> */}

        {/* Contact & Social Links */}
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Need immediate assistance? Contact us directly:
          </p>
          
          <Button asChild variant="default" className="gap-2">
            <Link href="mailto:info@amrutcoresystems.com">
              <Mail className="w-4 h-4" />
              info@amrutcoresystems.com
            </Link>
          </Button>
{/* 
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link 
              href="#" 
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link 
              href="#" 
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-md text-muted-foreground">
            © 2026 Amrut Core Systems. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}