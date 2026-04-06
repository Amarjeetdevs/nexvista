"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 flex items-center justify-center px-4 py-16 md:py-24">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 md:mb-12">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold tracking-tighter text-primary">
            404
          </h1>
        </div>

        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold tracking-[0.2em] uppercase rounded-full">
            Page Not Found
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Lost in the Digital <span className="text-secondary">Realm</span>?
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to building intelligent systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}