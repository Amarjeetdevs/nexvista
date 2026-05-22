"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Globe, MapPin, Handshake, Send, Verified, Rocket, Building2, Shield, LocateFixed } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer3 } from "@/components/Footer/footer3";

export default function page() {
  return (
    <div className="min-h-screen bg-background font-body text-on-surface antialiased">
      {/* Hero Section */}
      <Navbar/>
      <section className="mx-auto px-4 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-lg font-bold tracking-[0.15em] uppercase mb-6 rounded-sm">
            Institutional Support
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tighter mb-6 leading-[1.1]">
            Get In <span className="text-[#a2803e]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
            Sovereign Core systems are engineered for resilience. We facilitate strategic institutional 
            collaboration and offer high-tier professional support for government-recognized tech infrastructures.
          </p>
        </motion.div>
      </section>

      {/* Main Content: Two-Column Layout */}
      <section className=" mx-auto px-4 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
        {/* Left Column: Details */}
        <div className="lg:col-span-5 space-y-8 md:space-y-12">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#3a475e] mb-6">
              Contact Channels
            </h3>
            <div className="space-y-6 md:space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e6e8ea] rounded-lg text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">
                    Electronic Mail
                  </p>
                  <a
                    href="mailto:info@amrutcoresystems.com"
                    className="text-lg md:text-xl font-semibold text-primary hover:text-[#a2803e] transition-colors"
                  >
                    info@nexvista.co
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e6e8ea] rounded-lg text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">
                    Digital Presence
                  </p>
                  <a
                    href="https://nexvista.co"
                    className="text-lg md:text-xl font-semibold text-primary hover:text-[#a2803e] transition-colors"
                  >
                    nexvista.co
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e6e8ea] rounded-lg text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">
                    Corporate Office
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-primary leading-snug">
                    Shaket, Delhi,<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <Card className="bg-[#f2f4f6] border-l-4 border-amber-400 rounded-xl">
            <CardContent className="p-6 md:p-8">
              <p className="text-on-surface-variant italic leading-relaxed">
                "Our commitment to architectural authority ensures that every inquiry is treated 
                with the precision required for mission-critical infrastructure."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary/80 flex items-center justify-center text-white text-xs font-bold">
                    EX
                  </div>
                </div>
                <span className="text-xs font-bold tracking-tight text-primary">
                  Directorship, Amrut Core Systems
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-[#ffffff] p-6 md:p-10 lg:p-12 rounded-xl shadow-lg">
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <Label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">
                  Full Name
                </Label>
                <Input
                  placeholder="John Doe"
                  className="bg-transparent border-0 border-b-2 rounded-none border-[#c5c6cd]/30 px-0 focus-visible:ring-0 focus-visible:border-amber-400 transition-all placeholder:text-[#c5c6cd]/50"
                />
              </div>
              <div>
                <Label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">
                  Email Address
                </Label>
                <Input
                  type="email"
                  placeholder="john@organization.gov"
                  className="bg-transparent border-0 border-b-2 rounded-none border-[#c5c6cd]/30 px-0 focus-visible:ring-0 focus-visible:border-amber-400 transition-all placeholder:text-[#c5c6cd]/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <Label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">
                  Organization
                </Label>
                <Input
                  placeholder="Institution Name"
                  className="bg-transparent border-0 border-b-2 rounded-none border-[#c5c6cd]/30 px-0 focus-visible:ring-0 focus-visible:border-amber-400 transition-all placeholder:text-[#c5c6cd]/50"
                />
              </div>
              <div>
                <Label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">
                  Inquiry Type
                </Label>
                <Select>
                  <SelectTrigger className="bg-transparent border-0 border-b-2 rounded-none border-[#c5c6cd]/30 px-0 focus-visible:ring-0 focus-visible:border-amber-400">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="sponsorship">Sponsorship</SelectItem>
                    <SelectItem value="project">Project</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">
                Message
              </Label>
              <Textarea
                placeholder="Describe your inquiry in detail..."
                rows={4}
                className="bg-transparent border-0 border-b-2 rounded-none border-[#c5c6cd]/30 px-0 focus-visible:ring-0 focus-visible:border-amber-400 transition-all placeholder:text-[#c5c6cd]/50 resize-none"
              />
            </div>

            <Button className="w-full py-6 bg-primary text-on-primary text-white dark:text-black font-bold tracking-widest uppercase text-xs rounded-lg hover:bg-primary/90 transition-all gap-2">
              Transmit Inquiry
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Partnership & Sponsorship Focus */}
      <section className="bg-[#f2f4f6] py-16 md:py-24 mb-16 md:mb-32">
        <div className=" mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-4 md:mb-6 leading-tight">
              Strategic Alliances & <br />
              <span className="text-[#a2803e]">Sponsorships</span>
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
              We actively seek partners who share our vision of sovereign technological independence. 
              For formal proposals and institutional grant inquiries, our dedicated strategic office 
              is available for direct consultation.
            </p>
          </div>
          <div className="md:w-auto">
            <Card className="bg-white p-6 md:p-20 rounded-xl shadow-sm border border-[#c5c6cd]/10 text-center">
              <CardContent className="p-0">
                <Handshake className="w-10 h-10 text-amber-500 mb-4 mx-auto" />
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Priority Channel
                </p>
                <a
                  href="mailto:partnerships@nexvista.co"
                  className="text-xl md:text-2xl font-bold text-primary block border-b-2 border-amber-400 pb-1"
                >
                  partnerships@nexvista.co
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className=" mx-auto px-4 md:px-20 mb-16 md:mb-32">
        <div className="h-[400px] md:h-[500px] w-full bg-[#e0e3e5] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <Card className="bg-white p-4 md:p-6 rounded-md shadow-lg text-center max-w-xs md:max-w-xl">
              <CardContent className="p-0">
                <LocateFixed className="text-red-500 mb-2 text-3xl w-8 h-8 mx-auto" />
                <h4 className="text-lg md:text-xl font-bold text-primary mb-1">Nexvista</h4>
                <p className="text-xs md:text-sm text-on-surface-variant mb-3 md:mb-4">
                  Shaket, Delhi, India
                </p>
                <Button variant="default" size="sm" className="text-xs">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

   <Footer3/>
    </div>
  );
}