import { ComingSoon } from "@/components/ComminSoon/commingsoon";
import { Footer } from "@/components/Footer/footer";
import { Footer2 } from "@/components/Footer/footer2";
import { Footer3 } from "@/components/Footer/footer3";
import { Maintenance } from "@/components/Maintaince/maintenance";
import { Navbar } from "@/components/Navbar/navbar";
import { Blog } from "@/components/Sections-web_user-interface/blog-showcase/blog";
import { CTA } from "@/components/Sections-web_user-interface/cta-collection/cta1";
import { Hero } from "@/components/Sections-web_user-interface/hero/hero";
import { Projects } from "@/components/Sections-web_user-interface/projects-showcase/projects1";
import { Expertise } from "@/components/Sections-web_user-interface/section/expertise";
import { Recognition } from "@/components/Sections-web_user-interface/section/recognition";
import { Stats } from "@/components/Sections-web_user-interface/section/starts";
import { Testimonials } from "@/components/Sections-web_user-interface/testimonials-showcase/testimonials1";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment >
      <div className="bg-[#ECEEF0] dark:bg-primary/5 min-h-screen">

          <Navbar/>
{/* <Maintenance/> */}
{/* <ComingSoon/> */}
 <Hero />
      <Stats />
      <Expertise />
      <Recognition />
      <Projects/>
      <Testimonials/>
      <Blog/>
      <CTA/>
     {/* <Footer/> */}
    {/* <Footer2/>  */}
    <Footer3/>
      </div>

    </Fragment>

  );
}


// import { ComingSoon } from "@/components/ComminSoon/commingsoon";
// import { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "Coming Soon | Amrut Core Systems",
//     description: "We're crafting something extraordinary to help transform your business. Our new platform is under development and will be unveiled shortly.",
//     keywords: "coming soon, IT services, Amrut Core Systems, technology launch, digital transformation",
//     robots: {
//       index: false,
//       follow: true,
//     },
//     openGraph: {
//       title: "Coming Soon | Amrut Core Systems",
//       description: "Something amazing is on its way. Stay tuned!",
//       url: "https://amrutcoresystems.com/coming-soon",
//       siteName: "Amrut Core Systems",
//       locale: "en_IN",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Coming Soon | Amrut Core Systems",
//       description: "We're launching soon. Get ready!",
//     },
//   };
// }

// export default function ComingSoonPage() {
//   return <ComingSoon />;
// }