"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Eye, 
  MousePointerClick, 
  Layout, 
  Server, 
  Database, 
  Monitor, 
  CloudUpload, 
  Network, 
  Shield, 
  Activity, 
  Headphones,
  ArrowRight,
  Settings,
  Users,
  BarChart,
  Zap,
  CheckCircle,
  Lock,
  History,
//   Security,
  Share2,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer3 } from "@/components/Footer/footer3";

import { servicesHeroImage, servicesProcessImage } from "@/data/Image";

const softwareStrategyItems = [
  {
    icon: Eye,
    title: "Technology Vision",
    description: "Defining the long-term trajectory of your tech stack to ensure it evolves alongside market shifts and sovereign requirements.",
    variant: "default"
  },
  {
    icon: MousePointerClick,
    title: "Product Positioning",
    description: "Strategically placing your technical assets within the competitive landscape to maximize architectural advantage and user adoption.",
    variant: "highlight"
  },
  {
    icon: Layout,
    title: "System Architecture",
    description: "Designing the skeletal structure of complex platforms, ensuring high availability, fault tolerance, and modular evolution.",
    variant: "default"
  }
];

const architecturePillars = [
  { icon: Server, title: "Enterprise Backend", description: "Robust server-side logic built on microservices architecture for extreme resilience." },
  { icon: Database, title: "Data Management", description: "Distributed data pipelines and secure storage solutions for massive, sensitive datasets." },
  { icon: Monitor, title: "Modern Frontend", description: "Performant, reactive user interfaces designed for complex data visualization and control." },
  { icon: CloudUpload, title: "Flexible Deployment", description: "On-prem, cloud, or hybrid solutions tailored to strict sovereign security policies." },
  { icon: Network, title: "System Integration", description: "Bridges between legacy systems and modern infrastructure with zero data loss." },
  { icon: Shield, title: "Security & Compliance", description: "Hardened security layers meeting global standards like SOC2, GDPR, and NIST." },
  { icon: Activity, title: "DevOps & Observability", description: "Full-stack monitoring and CI/CD pipelines designed for rapid, safe deployment." },
  { icon: Headphones, title: "Support & SLAs", description: "Dedicated 24/7 technical oversight with guaranteed response times for critical ops." }
];

const deliveryLifecycle = [
  { number: "01", title: "Governed Agile", description: "Sprint-based delivery with integrated policy gates to maintain alignment with institutional objectives." },
  { number: "02", title: "Enterprise QA", description: "Automated stress testing and manual edge-case auditing for high-load reliability." },
  { number: "03", title: "Controlled Release", description: "Phased rollouts using blue-green deployment strategies to eliminate service downtime." },
  { number: "04", title: "Change Management", description: "Formalized documentation and stakeholder communication for every system update." },
  { number: "05", title: "Security Gates", description: "Hardened audit points where code is scanned for vulnerabilities before production merging." }
];

const digitalSystems = [
  {
    category: "Interface",
    items: ["Custom Web Apps", "Mobile Apps"]
  },
  {
    category: "Infrastructure",
    items: ["API Development", "Legacy Migration"]
  },
  {
    category: "Data",
    items: ["3rd-Party Integrations", "Data Platforms"]
  }
];

const internalSystems = [
  { icon: Settings, label: "Operations Tools" },
  { icon: Users, label: "Employee Portals" },
  { icon: BarChart, label: "Leadership Dashboards" },
  { icon: Zap, label: "Process Automation" }
];

const complianceItems = [
  { icon: History, label: "Audit Logging" },
  { icon: Lock, label: "RBAC" },
  { icon: Shield, label: "Data Privacy" },
  { icon: History, label: "Disaster Recovery" },
  { icon: Shield, label: "Security Standards" },
  { icon: Share2, label: "Enterprise Integration" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="pt-28 md:pt-32 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-3 md:px-4 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6">
              SERVICES & ARCHITECTURE
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.9] mb-6 md:mb-8">
              Architectural Authority <br className="hidden sm:block"/> in Deep Tech
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-2xl font-medium">
              Nexvista helps you transform your vision into a unified technology strategy. 
              We build sovereign-grade systems engineered for precision, scalability, and 
              long-term institutional stability.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 md:px-8 py-4 md:py-6 rounded-md font-bold tracking-tight hover:bg-gray-800 dark:hover:bg-gray-100 transition-all">
                Request a Quote
              </Button>
              <Button variant="link" className="flex items-center gap-2 font-bold text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors group">
                Explore Capability 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-lg">
              {servicesHeroImage ? (
                <Image 
                  src={servicesHeroImage} 
                  alt="Sovereign Architecture"
                  fill
                  className="object-cover grayscale opacity-80"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <Layout className="w-16 h-16 text-gray-500" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white dark:bg-gray-950 p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 max-w-[200px] md:max-w-[240px]">
              <div className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">99.9%</div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">Uptime guarantee for sovereign infrastructure.</p>
            </div>
          </motion.div>
        </section>

        {/* Software Strategy Section */}
        <section className="py-16 md:py-24">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                Software Strategy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                Laying the foundation for generational tech stability.
              </p>
            </div>
            <div className="h-px flex-grow mx-8 mb-4 bg-gray-300 dark:bg-gray-700 opacity-20 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {softwareStrategyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 md:p-8 lg:p-10 rounded-2xl transition-colors duration-500 group ${
                  item.variant === "highlight" 
                    ? "bg-gray-900 dark:bg-white" 
                    : "bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900"
                }`}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg mb-6 md:mb-8 ${
                  item.variant === "highlight"
                    ? "bg-amber-400"
                    : "bg-gray-900 dark:bg-white group-hover:bg-amber-400 transition-colors"
                }`}>
                  <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${
                    item.variant === "highlight"
                      ? "text-gray-900"
                      : "text-white dark:text-gray-900 group-hover:text-gray-900 transition-colors"
                  }`} />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
                  item.variant === "highlight"
                    ? "text-white dark:text-gray-900"
                    : "text-gray-900 dark:text-white"
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${
                  item.variant === "highlight"
                    ? "text-gray-300 dark:text-gray-600"
                    : "text-gray-600 dark:text-gray-400"
                }`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-100 dark:bg-gray-900/50 rounded-2xl md:rounded-3xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-3 md:mb-4">
              The Pillars of Technical Architecture
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              Precision-engineered modules designed to integrate seamlessly into high-stakes environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {architecturePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
                className="space-y-2 md:space-y-3"
              >
                <pillar.icon className="w-6 h-6 md:w-7 md:h-7 text-amber-600 dark:text-amber-400" />
                <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                  {pillar.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-6 md:mb-8 leading-tight">
                The Nexvista <br /> Delivery Lifecycle
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 md:mb-10 font-medium">
                A rigid methodology for fluid environments. Our governed approach ensures 
                every line of code serves a sovereign purpose.
              </p>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                {servicesProcessImage ? (
                  <Image 
                    src={servicesProcessImage} 
                    alt="Process Oversight"
                    fill
                    className="object-cover grayscale brightness-75"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <Activity className="w-16 h-16 text-gray-600" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 md:w-7 md:h-7 text-gray-900 ml-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8 md:space-y-10 relative"
            >
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>
              {deliveryLifecycle.map((item, index) => (
                <div key={item.number} className="flex gap-4 md:gap-6 relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    item.number === "04" 
                      ? "bg-amber-400 text-gray-900" 
                      : "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  }`}>
                    <span className="text-sm font-black">{item.number}</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Digital Systems & Platforms */}
        <section className="py-16 md:py-24">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Digital Systems & Platforms
            </h2>
            <div className="w-16 md:w-20 h-1 bg-amber-400 mt-3 md:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {digitalSystems.map((system, index) => (
              <motion.div
                key={system.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 bg-white dark:bg-gray-950 border-b-4 border-gray-900 dark:border-white shadow-md rounded-lg"
              >
                <h5 className="text-[10px] md:text-xs font-black tracking-widest text-gray-500 dark:text-gray-500 uppercase mb-4 md:mb-6">
                  {system.category}
                </h5>
                <ul className="space-y-4 md:space-y-5">
                  {system.items.map((item) => (
                    <li key={item} className="flex justify-between items-center group cursor-default">
                      <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                        {item}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-500 transition-colors" />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Internal Systems & Culture */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gray-900 dark:bg-gray-950 rounded-2xl md:rounded-3xl px-6 md:px-8 lg:px-16">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <div className="w-full h-full bg-gradient-to-l from-amber-400 to-transparent"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6 md:mb-8">
                Internal Systems & <br /> Institutional Culture
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                We don't just build external products; we build the internal nervous systems 
                of global leaders. Tools designed for those who govern complexity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {internalSystems.map((system, index) => (
                  <div key={system.label} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <system.icon className="w-5 h-5 text-amber-400" />
                    <span className="text-white font-medium text-sm">{system.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <Card className="w-full max-w-md bg-white dark:bg-gray-950 rounded-xl p-6 md:p-8 shadow-lg">
                <CardContent className="p-0">
                  <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-gray-900 dark:text-white mb-4 md:mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                    Audit & Compliance
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 md:mb-8 leading-relaxed">
                    Our internal systems include built-in audit trails and compliance tracking 
                    to ensure every action is logged, verified, and ready for regulatory scrutiny.
                  </p>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-amber-400"></div>
                  </div>
                  <p className="text-[10px] md:text-xs mt-3 text-gray-500 dark:text-gray-500 font-bold uppercase tracking-widest">
                    Compliance Readiness: 98%
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance & Enterprise Readiness */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-3 md:mb-4">
              Sovereign Compliance
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl font-medium">
              Engineered for the most demanding regulatory frameworks on earth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {complianceItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-950 mb-3 md:mb-4 shadow-sm group-hover:bg-amber-400 transition-colors">
                  <item.icon className="w-5 h-5 text-gray-900 dark:text-white group-hover:text-gray-900" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest text-center">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer3 />
    </div>
  );
}