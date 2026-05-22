"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  MapPin, 
  Clock,
  GraduationCap,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer3 } from "@/components/Footer/footer3";
import { careerPageBannerImageUrl, careerPageInterImageUrl } from "@/data/Image";
import Image from "next/image";

const jobOpenings = [
  {
    title: "Software Developer - Full Stack",
    location: "Remote / New Delhi",
    type: "Full-time",
    description: "Build scalable web applications for government infrastructure projects."
  },
  {
    title: "AI/ML Engineer",
    location: "Hybrid",
    type: "Full-time",
    description: "Develop cutting-edge AI solutions for national security and public services."
  },
  {
    title: "Project Coordinator",
    location: "New Delhi",
    type: "Full-time",
    description: "Coordinate and manage critical government technology initiatives."
  }
];

const whyJoinCards = [
  {
    icon: Building2,
    title: "National Impact",
    description: "Contribute to critical Government and PSU projects that impact millions. Your code isn't just software; it's national infrastructure."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "A high-performance environment where ideas are valued over hierarchy. Learn from the best minds in deep-tech and public administration."
  },
  {
    icon: TrendingUp,
    title: "Rapid Growth",
    description: "As a recognized startup, we offer immense opportunities for ownership. Take charge of complex modules and lead whole workstreams."
  }
];

const processSteps = [
  { number: "01", title: "Submit Resume", description: "Apply via our portal or LinkedIn." },
  { number: "02", title: "Technical Screen", description: "Assess core skills and problem-solving." },
  { number: "03", title: "Panel Interview", description: "Deep dive with our technical leads." },
  { number: "04", title: "Onboarding", description: "Welcome to the core team." }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
      <Navbar/>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <span className="uppercase tracking-[0.2em] text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 inline-block font-bold text-xs rounded">
              Join Our Mission
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight text-gray-900 dark:text-white">
              Join Our Team.
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              At Amrut Core Systems, we are bridging the gap between cutting-edge technology 
              and government infrastructure. Build the systems that power a nation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 md:px-8 py-5 rounded-sm font-bold text-sm tracking-wide hover:bg-gray-800 dark:hover:bg-gray-100">
                View Openings
              </Button>
              <Button variant="link" className="text-gray-900 dark:text-white border-b-2 border-amber-400 rounded-none font-bold text-sm px-2 py-4">
                Our Culture
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
          <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-4xl overflow-hidden border-[12px] border-white dark:border-gray-900 shadow-2xl relative">
  {careerPageBannerImageUrl ? (
    <Image 
      src={careerPageBannerImageUrl} 
      alt="Team collaborating at Amrut Core Systems" 
      fill 
      className="object-cover"
      priority
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-gray-900/5 to-gray-900/10 dark:from-white/5 dark:to-white/10 flex items-center justify-center">
      <span className="text-gray-400 dark:text-gray-600 text-4xl font-bold">Team Photo</span>
    </div>
  )}
</div>
            <Card className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white dark:bg-gray-900 p-4 md:p-6 rounded-xl shadow-xl max-w-[220px] md:max-w-[240px] border border-gray-200 dark:border-gray-800">
              <CardContent className="p-0">
                <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Led by Excellence</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Work alongside IITians and retired high-ranking government officers.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tighter mb-3 md:mb-4 uppercase">
              Why Join Us
            </h2>
            <div className="w-16 md:w-20 h-1 bg-amber-400"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {whyJoinCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-950 p-6 md:p-8 lg:p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-200 dark:border-gray-800">
                  <CardContent className="p-0 space-y-4 md:space-y-6">
                    <card.icon className="w-8 h-8 md:w-10 md:h-10 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 md:mb-6">
                Current Openings
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                We are looking for individuals who are not just skilled, but possess the passion 
                to solve hard problems for India's digital future.
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs md:text-sm font-bold text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 md:px-4 py-1.5 md:py-2 rounded">
                {jobOpenings.length} ACTIVE ROLES
              </span>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-gray-900/50 p-5 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 hover:shadow-lg rounded-lg border border-gray-200 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-sm font-bold text-xs md:text-sm tracking-tight transition-all group-hover:scale-105">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-5 bg-gray-900 dark:bg-gray-950 text-white p-8 md:p-12 rounded-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] opacity-60 uppercase mb-3 md:mb-4 block">
                  Education Partner
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 md:mb-6">
                  Internship Program
                </h2>
                <p className="text-blue-100 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  Launch your career with hands-on training and mentorship. Our interns are trained through{" "}
                  <span className="font-bold text-amber-400">Seekho Computer</span>, ensuring top-tier 
                  technical readiness before joining our core project teams.
                </p>
              </div>
              <Button className="mt-6 md:mt-8 bg-white text-gray-900 px-6 md:px-8 py-4 rounded-sm font-bold text-sm w-fit hover:bg-gray-100">
                Learn More
              </Button>
            </motion.div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-md flex flex-col justify-center border-l-4 border-amber-400 shadow-sm"
              >
                <GraduationCap className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-3 md:mb-4" />
                <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-2">Trained for Success</h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  Expert curriculum designed by industry veterans at Seekho Computer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-md flex flex-col justify-center border-l-4 border-amber-400 shadow-sm"
              >
                <Trophy className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-3 md:mb-4" />
                <h4 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-2">Mentorship</h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  Direct access to IIT alumni and former government bureaucrats for career guidance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-2 overflow-hidden rounded-md h-40 md:h-48 relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
              >
    <Image 
      src={careerPageInterImageUrl} 
      alt="Team collaborating at Amrut Core Systems" 
      fill 
      className="object-cover"
      priority
    />
                <span className="text-gray-400 dark:text-gray-600 text-sm">Internship Image</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              Application Process
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-3 md:mt-4">
              Simple, transparent, and rigorous.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-0">
                      <div className={`w-10 h-10 md:w-12 md:h-12 ${
                        index === 2 
                          ? "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-400" 
                          : "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      } rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-lg md:text-xl font-bold`}>
                        {step.number}
                      </div>
                      <h4 className="font-bold text-base md:text-lg text-gray-900 dark:text-white mb-1 md:mb-2">{step.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer3/>
    </div>
  );
}