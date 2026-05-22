"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Brain,
  Cloud,
  Shield,
  Cpu,
  Heart,
  Terminal,
  Mail,
  Clock,
  Verified,
  Rocket,
  Award,
  Upload,
  Building2,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer3 } from "@/components/Footer/footer3";

import { officeImage } from "@/data/Image"; 

const serviceCategories = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Predictive analytics, demand forecasting, and sophisticated AI models."
  },
  {
    icon: Cloud,
    title: "Cloud & Enterprise",
    description: "Cloud migration, ERP, CRM, and robust SaaS platform architectures."
  },
  {
    icon: Shield,
    title: "Fintech & Security",
    description: "Digital payments, secure gateways, and enterprise cybersecurity."
  },
  {
    icon: Cpu,
    title: "IoT & Hardware",
    description: "Equipment tracking, sensor networks, and custom embedded systems."
  },
  {
    icon: Heart,
    title: "Healthcare IT",
    description: "Hospital management systems, EHR integration, and teleconsultation."
  },
  {
    icon: Terminal,
    title: "Custom Software",
    description: "Tailored end-to-end development as per your specific requirements."
  }
];

const trustBadges = [
  { icon: Verified, title: "MSME Certified", subtitle: "Govt. of India Recognized" },
  { icon: Rocket, title: "Startup India", subtitle: "Innovation Registered" },
  { icon: Award, title: "ISO 9001:2015", subtitle: "Quality Management System" }
];

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-28 lg:pt-36 pb-16 md:pb-32">
        {/* Hero Section */}
        <section className="mb-12 md:mb-20 mt-20 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 md:px-4 py-1.5  rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-[10px] font-bold tracking-[0.1em] uppercase mb-4 md:mb-6">
              Partner With Authority
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-tight mb-4 md:mb-6">
              Request a Quote
            </h1>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end gap-3 md:gap-4 pb-2"
          >
            <p className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-500 tracking-wide uppercase">
              Trusted by PSUs and enterprises across India
            </p>
            <div className="flex gap-4 md:gap-8 opacity-40 grayscale">
              <Building2 className="w-6 h-6 md:w-8 md:h-8" />
              <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
              <Shield className="w-6 h-6 md:w-8 md:h-8" />
              <Brain className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Selection & Form */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            {/* Service Selection */}
            <section>
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700 opacity-30"></div>
                <h2 className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-gray-500 dark:text-gray-500 uppercase">
                  01. Select Your Service
                </h2>
                <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700 opacity-30"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {serviceCategories.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer p-4 md:p-6 rounded-lg border border-transparent bg-white dark:bg-gray-950 shadow-md hover:shadow-lg hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center mb-3 md:mb-4">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Project Inquiry Form */}
            <section>
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700 opacity-30"></div>
                <h2 className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-gray-500 dark:text-gray-500 uppercase">
                  02. Project Details
                </h2>
                <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700 opacity-30"></div>
              </div>

              <form className="space-y-8 md:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                      Full Name
                    </Label>
                    <Input 
                      id="full_name" 
                      placeholder="John Doe"
                      className="bg-gray-100 dark:bg-gray-900 border-0 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                      Work Email
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="john@company.com"
                      className="bg-gray-100 dark:bg-gray-900 border-0 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+91 1234567890"
                      className="bg-gray-100 dark:bg-gray-900 border-0 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                      Organization
                    </Label>
                    <Input 
                      id="organization" 
                      placeholder="Your Company Name"
                      className="bg-gray-100 dark:bg-gray-900 border-0 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                      Estimated Budget
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-gray-100 dark:bg-gray-900 border-0 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-400">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5l">₹1L - ₹5L</SelectItem>
                        <SelectItem value="5-25l">₹5L - ₹25L</SelectItem>
                        <SelectItem value="25l-1cr">₹25L - ₹1Cr</SelectItem>
                        <SelectItem value="1cr+">₹1Cr+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                      Timeline
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-gray-100 dark:bg-gray-900 border-0 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-400">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (&lt; 1 month)</SelectItem>
                        <SelectItem value="standard">Standard (1-3 months)</SelectItem>
                        <SelectItem value="planned">Planned (3+ months)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                    Project Description
                  </Label>
                  <Textarea 
                    id="description"
                    placeholder="Briefly describe your requirements, goals, and any specific tech stack preferences..."
                    rows={5}
                    className="bg-gray-100 dark:bg-gray-900 border-0 rounded-md px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-amber-400 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                    Upload Brief (Optional)
                  </Label>
                  <div className="relative group cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-md p-6 md:p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-gray-400 dark:text-gray-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-bold text-gray-900 dark:text-white">Click to upload</span> or drag and drop files
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">PDF, DOCX, ZIP (Max 10MB)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    I agree to the <a href="#" className="text-gray-900 dark:text-white font-bold hover:underline decoration-amber-400">Terms &amp; Conditions</a> and consent to Amrut Core Systems processing my information for the purpose of providing a quote.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 md:px-12 py-5 md:py-6 rounded-md font-bold text-base md:text-lg tracking-tight hover:bg-gray-800 dark:hover:bg-gray-100 shadow-xl transition-all duration-300"
                >
                  Submit Inquiry
                </Button>
              </form>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-6 md:space-y-8">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900 dark:bg-gray-950 p-6 md:p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-amber-400 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6">
                  Immediate Support
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-400 font-medium">Partnership Inquiries</p>
                      <p className="text-sm md:text-base font-bold text-white break-all">partnerships@nexvista.co</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-400 font-medium">Business Hours</p>
                      <p className="text-sm md:text-base font-bold text-white">Mon-Fri 10AM-6PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Brain className="w-32 h-32 md:w-40 md:h-40" />
              </div>
            </motion.div>

            {/* Trust Badges */}
            <Card className="bg-gray-100 dark:bg-gray-900/50 p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-800">
              <CardContent className="p-0">
                <h3 className="text-gray-900 dark:text-white font-bold text-sm mb-4 md:mb-6">
                  Architectural Authority
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {trustBadges.map((badge, index) => (
                    <div key={badge.title} className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-950 rounded-md flex items-center justify-center shadow-md">
                        <badge.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{badge.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{badge.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Image / Visual Anchor */}
            <div className="rounded-lg overflow-hidden aspect-video relative">
              <Image 
                src={officeImage} 
                alt="Premium modern office space representing Nexvista"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/20"></div>
            </div>
          </aside>
        </div>
      </main>

      <Footer3 />
    </div>
  );
}