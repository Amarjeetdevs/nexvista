// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { 
//   Rocket, 
//   Sparkles, 
//   Zap, 
//   Mail, 
//   Bell, 
//   CheckCircle,
//   Cpu,
//   Code,
//   Cloud
// } from "lucide-react";
// import { useState } from "react";

// export function ComingSoon() {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleNotify = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       // Here you would typically send this to your backend/Supabase
//       console.log("Notify me:", email);
//       setIsSubmitted(true);
//       setEmail("");
//       setTimeout(() => setIsSubmitted(false), 3000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center px-4 pt-28 pb-6">
//       <div className="max-w-5xl mx-auto text-center">
        
//         {/* Animated Icon Section */}
//         <div className="relative mb-8 md:mb-12">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-primary/10 to-indigo-500/10 rounded-full animate-pulse" />
//           </div>
//           <div className="relative flex items-center justify-center gap-3 md:gap-4">
//             <Rocket className="w-10 h-10 md:w-14 md:h-14 text-primary animate-bounce" />
//             <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-amber-500 animate-pulse" />
//             <Zap className="w-10 h-10 md:w-14 md:h-14 text-indigo-500 animate-bounce delay-100" />
//           </div>
//         </div>

//         {/* Status Badge */}
//         <div className="inline-block mb-6">
//           <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-indigo-500/10 text-primary dark:text-primary rounded-full text-sm font-semibold font-mono tracking-wider border border-primary/20">
//             🚀 Coming Soon
//           </span>
//         </div>

//         {/* Main Title */}
//         <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 font-mono">
//           <span className="bg-gradient-to-r from-slate-900 via-primary to-indigo-600 dark:from-white dark:via-primary dark:to-indigo-400 bg-clip-text text-transparent">
//             Something Amazing
//           </span>
//           <br />
//           <span className="bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent">
//             Is On Its Way
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
//           We're crafting something extraordinary to help you transform your business. 
//           Stay tuned for launch — it's going to be worth the wait.
//         </p>

//         {/* Feature Highlights */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
//           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
//             <Cpu className="w-4 h-4 text-primary" />
//             <span>Cutting-edge Tech</span>
//           </div>
//           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
//             <Code className="w-4 h-4 text-primary" />
//             <span>Clean Code</span>
//           </div>
//           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
//             <Cloud className="w-4 h-4 text-primary" />
//             <span>Cloud Native</span>
//           </div>
//         </div> */}

//         {/* Notify Me Form */}
//         {/* <div className="max-w-md mx-auto mb-10">
//           <p className="text-sm text-muted-foreground mb-3">
//             Be the first to know when we launch:
//           </p>
//           <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
//             <div className="flex-1">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//                 className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               />
//             </div>
//             <Button type="submit" className="gap-2 whitespace-nowrap">
//               <Bell className="w-4 h-4" />
//               Notify Me
//             </Button>
//           </form>
          
//           {isSubmitted && (
//             <div className="mt-3 flex items-center justify-center gap-2 text-green-600 dark:text-green-400 text-sm animate-in fade-in slide-in-from-top-2">
//               <CheckCircle className="w-4 h-4" />
//               <span>Thanks! We'll notify you at launch.</span>
//             </div>
//           )}
//         </div> */}

//         {/* Contact Section */}
//         <div className="space-y-4">
//           <p className="text-sm text-muted-foreground">
//             Need immediate assistance? Contact us:
//           </p>
//           <Button asChild variant="outline" className="gap-2">
//             <Link href="mailto:info@amrutcoresystems.com">
//               <Mail className="w-4 h-4" />
//               info@amrutcoresystems.com
//             </Link>
//           </Button>
//         </div>

//         {/* Copyright */}
//         <div className="mt-16 pt-8 border-t border-border">
//           <p className="text-sm text-muted-foreground">
//             © 2026 Amrut Core Systems. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Sparkles, 
  Zap, 
  Mail, 
  Clock
} from "lucide-react";

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Icon Animation - Same as Maintenance page */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/5 rounded-full animate-pulse" />
          </div>
          
          {/* Status Badge - Same style */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#FFDEA6] uppercase dark:text-secondary rounded-md text-sm font-semibold font-mono tracking-wider">
              Coming Soon
            </span>
          </div>
          
          {/* Icons - Same animation pattern */}
          <div className="relative flex items-center justify-center gap-2">
            <Rocket className="w-12 h-12 md:w-16 md:h-16 text-primary animate-bounce" />
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-primary/70 animate-pulse" />
            <Zap className="w-12 h-12 md:w-16 md:h-16 text-primary/50 animate-bounce delay-100" />
          </div>
        </div>

        {/* Main Title - Same typography as Maintenance */}
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold mb-4 font-mono bg-gradient-to-r from-slate-900 via-primary to-slate-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">
          Launching
          <br />
            Soon
        </h1>

        {/* Description - Same style */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono max-w-4xl mx-auto">
          We are preparing something exceptional for our institutional partners. 
          Our new platform is under development and will be unveiled shortly.
        </p>

        {/* Optional: Estimated Time - Same as Maintenance (commented in original) */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Estimated launch: Coming weeks</span>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Need immediate assistance? Contact us directly:
          </p>
          
          <Button asChild variant="default" className="gap-2">
            <Link href="mailto:info@amrutcoresystems.com">
              <Mail className="w-4 h-4" />
              info@amrutcoresystems.com
            </Link>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-md text-muted-foreground">
            © 2026 Amrut Core Systems Pvt. Ltd. &nbsp; All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}