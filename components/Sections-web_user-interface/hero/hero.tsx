// "use client";

// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// export function Hero() {
//   return (
//     <section className="relative px-4 md:px-8 py-16 md:py-24 lg:py-32 overflow-hidden">
//       {/* Background Gradient Effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      
//       <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="inline-block px-4 py-1.5 bg-tertiary-fixed/90 dark:bg-secondary/10 text-on-tertiary-fixed dark:text-secondary text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6 md:mb-8"
//         >
//           Technological Authority
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-foreground leading-[1.1] mb-6 md:mb-8"
//         >
//           Building Tomorrow's <br className="hidden sm:block" />
//           <span className="text-secondary">Intelligent Systems</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-slate-600 dark:text-slate-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
//         >
//           Architecting high-performance digital ecosystems for global enterprises and government institutions. 
//           Amrut Core fuses deep tech innovation with institutional-grade stability.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
//         >
//           <Button
//             size="lg"
//             className="bg-primary text-primary-foreground border border-white/10 dark:border-white/10 px-8 md:px-10 py-5 md:py-6 rounded-md font-bold text-base md:text-lg transition-all hover:bg-primary/90 w-full sm:w-auto"
//           >
//             Explore Solutions
//           </Button>
          
//           <Button
//             variant="outline"
//             size="lg"
//             className="bg-white/10 dark:bg-white/5 backdrop-blur-md text-foreground border border-white/20 dark:border-white/10 px-8 md:px-10 py-5 md:py-6 rounded-md font-bold text-base md:text-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
//           >
//             Our Methodology
//             <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroImageUrl } from "@/data/Image";

export function Hero() {
  return (
    <section className="relative px-4 md:px-20 py-28 md:py-32 lg:py-32 overflow-hidden bg-[#ECEEF0] dark:bg-secondary/0 ">
      <div className="relative">
        
        {/* Background Image - Enhanced properties only */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl md:rounded-3xl lg:rounded-4xl">
          <img 
            src={heroImageUrl} 
            alt="Background"
            className="w-full h-full object-cover opacity-25 dark:opacity-50 scale-105 md:scale-100"
            style={{
              objectPosition: "center 30%",
            }}
          />
          {/* Subtle gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 pointer-events-none" />
        </div>

        {/* Blur overlay - kept but commented in your original */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/10 blur-3xl pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-5xl p-20 mx-auto px-4 md:px-8 text-center ">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-[#FFDEA6] dark:bg-secondary/90 text-black dark:text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-6 md:mb-8 backdrop-blur-sm"
          >
            MSME Certified | Startup India Recognized
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-[#000410] dark:text-white leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl"
          >
            Building Tomorrow's <br className="hidden sm:block" />
            <span className="text-[#A2803E] drop-shadow-lg">Intelligent Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#031C4D] dark:text-slate-200 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12 drop-shadow-lg"
          >
            Architecting high-performance digital ecosystems for global enterprises and government institutions. 
            Amrut Core fuses deep tech innovation with institutional-grade stability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="dark:bg-secondary text-secondary-foreground hover:bg-secondary border border-white/20 px-8 md:px-10 py-5 md:py-6 rounded-sm font-regular text-base md:text-lg transition-all w-full sm:w-auto shadow-xl cursor-pointer"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-white/90 backdrop-blur-md text-black border border-white/30 hover:bg-white/30 transition-all flex items-center justify-center gap-2 group w-full rounded-sm sm:w-auto shadow-xl px-8 md:px-10 py-5 md:py-6 cursor-pointer font-regular text-base md:text-lg"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}