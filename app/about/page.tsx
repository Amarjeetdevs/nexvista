"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Verified, 
  Shield, 
  Gavel,
  Building2,
  Rocket,
  ShoppingCart,
  User,
  Users,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer3 } from "@/components/Footer/footer3";

const coreValues = [
  {
    number: "01",
    title: "Architectural Authority",
    description: "Establishing the standards for digital governance through rigorous structural design and peer-reviewed technical frameworks.",
    icon: Building2
  },
  {
    number: "02",
    title: "Technical Sovereignty",
    description: "Prioritizing indigenous technology stacks that ensure full control and resilience of the national digital infrastructure.",
    icon: Shield
  },
  {
    number: "03",
    title: "Institutional Integrity",
    description: "Upholding the highest ethics of data transparency and ethical AI to foster trust between the institution and the public.",
    icon: Gavel
  }
];

const leadershipTeam = [
  {
    name: "Director Gupta",
    role: "Founding Director",
    expertise: "Strategic Planning & Ethics",
    initial: "RG",
    icon: User
  },
  {
    name: "Commissioner Verma",
    role: "Strategic Advisor",
    expertise: "Policy Implementation",
    initial: "AV",
    icon: Users
  },
  {
    name: "Dr. S. Kulkarni",
    role: "Chief Scientist",
    expertise: "Deep Tech Research",
    initial: "SK",
    icon: GraduationCap
  },
  {
    name: "Officer Singh",
    role: "Compliance Head",
    expertise: "Operations & Compliance",
    initial: "RS",
    icon: Briefcase
  }
];

const trustBadges = [
  { icon: Verified, label: "MSME" },
  { icon: Rocket, label: "Startup India" },
  { icon: ShoppingCart, label: "GeM Portal" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-4 mb-6 md:mb-8">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-900 dark:text-white" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L90 25V75L50 95L10 75V25L50 5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
              <path d="M50 25L75 37.5V62.5L50 75L25 62.5V37.5L50 25Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="50" cy="50" fill="#e9c178" r="5"/>
            </svg>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Pioneering Sovereign Digital Infrastructure
          </h1>
          <p className="mt-6 md:mt-8 text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Building the secure architectural foundation for national interests through advanced deep-tech integration and institutional excellence.
          </p>
        </motion.div>
      </header>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 md:space-y-8"
          >
            <div className="inline-block px-3 md:px-4 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-xs font-bold tracking-widest uppercase rounded">
              Strategic Intent
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              The Goal for the Digital Nation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Amrut Core Systems serves as the architectural authority in sovereign digital ecosystems. 
              Our mission is to engineer high-integrity platforms that empower government entities and 
              citizens alike, ensuring data localization, security, and technological independence in 
              an increasingly complex global landscape.
            </p>
            <div className="flex gap-3 md:gap-4 items-center">
              <Verified className="w-5 h-5 md:w-6 md:h-6 text-amber-600 dark:text-amber-400" />
              <span className="text-gray-900 dark:text-white font-semibold text-sm md:text-base">
                Institutional Grade Security Protocol
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:w-1/2 aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 dark:shadow-gray-900/50 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
          >
            <div className="text-center">
              <Building2 className="w-16 h-16 md:w-24 md:h-24 text-gray-400 dark:text-gray-600 mx-auto mb-3 md:mb-4" />
              <span className="text-gray-400 dark:text-gray-600 text-sm md:text-base font-medium">Digital Infrastructure</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Core Expertise
          </h2>
          <div className="w-16 md:w-24 h-1 bg-amber-500 dark:bg-amber-400 mt-3 md:mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white dark:bg-gray-950 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-500 flex flex-col h-full border border-gray-200 dark:border-gray-800">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="text-amber-600 dark:text-amber-400 text-xs md:text-sm font-black mb-4 md:mb-6 tracking-widest uppercase">
                    Value {value.number}
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 md:mb-8 flex-grow text-sm md:text-base">
                    {value.description}
                  </p>
                  <value.icon className="w-8 h-8 md:w-10 md:h-10 text-amber-600 dark:text-amber-400 mt-auto" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 md:py-16 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-24 transition-all duration-700">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 md:gap-3"
              >
                <badge.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-500 dark:text-gray-400" />
                <span className="font-bold tracking-tighter text-base md:text-xl text-gray-700 dark:text-gray-300">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              The Council
            </h2>
            <p className="mt-3 md:mt-4 text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Our advisory board comprises seasoned bureaucrats, research scientists, and industry 
              visionaries guiding our strategic path.
            </p>
          </motion.div>
          <div className="text-amber-600 dark:text-amber-400 font-black text-4xl md:text-6xl opacity-10 select-none">
            LEADERSHIP
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Avatar Placeholder */}
              <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 relative mb-4 md:mb-6 flex items-center justify-center">
                <div className="text-center">
                  <member.icon className="w-12 h-12 md:w-16 md:h-16 text-gray-400 dark:text-gray-600 mx-auto mb-2 md:mb-3" />
                  <span className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600">
                    {member.initial}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                  <span className="text-white text-xs md:text-sm font-medium">
                    {member.expertise}
                  </span>
                </div>
              </div>
              <h4 className="font-headline text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h4>
              <p className="text-gray-500 dark:text-gray-500 text-xs md:text-sm uppercase tracking-widest mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer3 />
    </div>
  );
}