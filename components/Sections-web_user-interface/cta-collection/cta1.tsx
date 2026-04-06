"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background border-y border-border/15">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-foreground mb-4 md:mb-8 tracking-tight"
        >
          Ready to Transform Your Business?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12"
        >
          Partner with India's leading technology experts for secure, scalable, and intelligent system integration.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 md:px-12 py-5 md:py-6 text-base md:text-sm rounded-sm shadow-lg"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 md:px-12 py-5 md:py-6 text-base md:text-sm rounded-sm border-secondary/30"
            asChild
          >
            <Link href="/request-quote" 
            >Get a Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}