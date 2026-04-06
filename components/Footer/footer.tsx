"use client";

import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
//   Twitter, 
//   Linkedin, 
//   Github,
//   Facebook,
//   Instagram,
  ArrowUpRight
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  { name: "AI & ML Solutions", href: "/services/ai-ml" },
  { name: "Enterprise Platforms", href: "/services/erp" },
  { name: "IoT & Infrastructure", href: "/services/iot" },
  { name: "Cloud Services", href: "/services/cloud" },
  { name: "Custom Development", href: "/services/custom-software" },
  { name: "IT Consulting", href: "/services/consulting" },
];

const solutionsLinks = [
  { name: "Healthcare", href: "/solutions/healthcare" },
  { name: "Manufacturing", href: "/solutions/manufacturing" },
  { name: "E-commerce", href: "/solutions/ecommerce" },
  { name: "Education", href: "/solutions/education" },
];

// const socialLinks = [
//   { name: "Twitter", icon: Twitter, href: "#" },
//   { name: "LinkedIn", icon: Linkedin, href: "#" },
//   { name: "GitHub", icon: Github, href: "#" },
//   { name: "Facebook", icon: Facebook, href: "#" },
//   { name: "Instagram", icon: Instagram, href: "#" },
// ];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b   from-slate-100 to-white dark:from-slate-950 dark:to-slate-900 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold uppercase bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Amrut Core Systems
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Intelligent Technology Solutions for Modern Enterprises
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Bhagalpur, Bihar, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +91 12345 67890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@amrutcoresystems.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Mon-Fri: 9:00 AM - 6:00 PM IST
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              {/* <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div> */}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions By Industry</h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                MSME CERTIFIED
              </span>
              <span className="px-3 py-1 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold rounded">
                STARTUP INDIA
              </span>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded">
                ISO 9001:2024
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground">
            Global Partnerships | Delivering Excellence Worldwide
            </p>
          </div>
        </div>

        {/* Global Partnerships Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
              © 2026 Amrut Core Systems Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}