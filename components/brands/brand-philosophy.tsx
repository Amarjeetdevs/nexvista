"use client";

import { motion } from "framer-motion";
import { Shield, Building2, Rocket, Globe, Users, Award, Lock } from "lucide-react";

const collaborators = [
  {
    name: "Quodel",
    logo: "/images/partner1.png",
    alt: "Prestigious technology institute logo"
  },
  {
    name: "Shipshar Developers",
    logo: "/images/partner2.png",
    alt: "Global financial regulatory body logo"
  },
  {
    name: "Anmaya",
    logo: "/images/partner3.png",
    alt: "National defense and security agency logo"
  },
  {
    name: "Partner 4",
    logo: "/images/partner4.png",
    alt: "Leading aerospace corporation logo"
  },
  {
    name: "Partner 5",
    logo: "/images/partner5.png",
    alt: "Global technology consortium logo"
  },
  // {
  //   name: "Partner 6",
  //   logo: "/images/partner6.png",
  //   alt: "International research council logo"
  // }
];

const accreditations = [
  {
    icon: Shield,
    title: "ISO 27001:2022",
    description: "Global standard for information security management systems (ISMS)."
  },
  {
    icon: Award,
    title: "CMMI Level 5",
    description: "Optimizing processes for high-performance software engineering."
  },
  {
    icon: Building2,
    title: "MSME Registered",
    description: "Officially recognized entity by the Government of India."
  },
//   {
//     icon: Rocket,
//     title: "Startup India",
//     description: "A certified innovator under the Department for Promotion of Industry."
//   },
  {
    icon: Lock,
    title: "Tier-1 Data Security",
    description: "Highest tier protection for sovereign and enterprise data assets."
  }
];

export function GlobalNetwork() {
  return (
    <>
      {/* Strategic Collaborators - Now Horizontal Scroll */}
      <section className="py-16 md:py-20 lg:py-24 overflow-hidden bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase">
              Our Trusted Partners
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-gray-900 dark:text-white mt-2">
              Our Strategic Collaborators
            </h2>
            <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-4 md:mt-6"></div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-4 md:gap-6 lg:gap-8 animate-marquee whitespace-nowrap px-4 md:px-8">
            {/* First set */}
            {collaborators.map((partner, index) => (
              <motion.div
                key={`${partner.name}-1`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="min-w-[200px] md:min-w-[240px] bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md flex flex-col items-center gap-3 md:gap-4"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-gray-950 flex items-center justify-center shadow-sm">
                  <Globe className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white tracking-tight text-base md:text-lg">
                  {partner.name}
                </h4>
              </motion.div>
            ))}
            {/* Duplicate for seamless scroll */}
            {collaborators.map((partner, index) => (
              <motion.div
                key={`${partner.name}-2`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="min-w-[200px] md:min-w-[240px] bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md flex flex-col items-center gap-3 md:gap-4"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-gray-950 flex items-center justify-center shadow-sm">
                  <Globe className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white tracking-tight text-base md:text-lg">
                  {partner.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Compliance - Now Grid Layout */}
      {/* <section className="bg-gray-100 dark:bg-gray-900/50 py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase">
              Trust & Compliance
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-gray-900 dark:text-white mt-2">
              Accreditations & Compliance
            </h2>
            <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-4 md:mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {accreditations.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all hover:border-amber-400 dark:hover:border-amber-500 group"
              >
                <cert.icon className="w-10 h-10 md:w-12 md:h-12 text-amber-500 mb-4" />
                <h4 className="font-bold text-gray-900 dark:text-white tracking-tight text-lg md:text-xl mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}