"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "The EHR system developed by us streamlined our clinic operations completely. Patient check-in time dropped by 60%, and data retrieval became instant. Their healthcare domain expertise is outstanding.",
    author: "Dr. Meera Deshmukh",
    role: "Director, City Care Hospital",
  },
  {
    id: 2,
    quote: "We needed a robust B2B platform for our supply chain, and they delivered beyond expectations. The system handles 10,000+ orders monthly with zero downtime. Highly recommend their engineering team.",
    author: "Rajan Kothari",
    role: "VP Operations, Gujarat Mart",
  },
  {
    id: 3,
    quote: "The predictive analytics model they built for our inventory reduced wastage by 28% within four months. Their AI team is pragmatic, fast, and deeply technical.",
    author: "Neha Singh",
    role: "Head of Analytics, FarmFresh Retail",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-32 bg-amrut-navy dark:bg-amrut-navy/10 px-4 md:px-6 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 blur-[150px] rounded-full" />
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/20 blur-[150px] rounded-full" />
      
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 md:mb-20 text-center tracking-tight"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-container/50 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl border border-white/10 relative hover:border-secondary/30 transition-all duration-300"
            >
              <Quote className="text-secondary/20 w-10 h-10 md:w-12 md:h-12 absolute -top-4 left-4 md:-top-6 md:left-6" />
              
              <p className="text-base md:text-lg lg:text-xl italic leading-relaxed text-slate-200 mb-6 md:mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div>
                <p className="font-bold text-white text-base md:text-lg">
                  {testimonial.author}
                </p>
                <p className="text-secondary text-xs md:text-sm uppercase tracking-wider mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}