// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { 
//   ChevronRight,
//   Home,
//   Users,
//   Mail,
//   FileText,
//   MessageSquare,
//   Building2,
//   Shield,
//   Cpu,
//   Briefcase,
//   ExternalLink,
//   Info,
//   FolderTree,
//   FolderOpen,
//   File,
//   Minus,
//   Plus
// } from "lucide-react";
// import { useState } from "react";
// import { Navbar } from "@/components/Navbar/navbar";
// import { Footer3 } from "@/components/Footer/footer3";

// const sitemapSections = [
//   {
//     title: "Main Pages",
//     icon: Home,
//     links: [
//       { name: "Home", href: "/", description: "Welcome to Nexvista - Sovereign Digital Infrastructure" },
//       { name: "About Us", href: "/about", description: "Our mission, vision, and leadership team" },
//       { name: "Contact Us", href: "/contact", description: "Get in touch with our team for inquiries" },
//       { name: "Careers", href: "/careers", description: "Join our mission-driven team and build the future" },
//       { name: "Project Details", href: "/project-details", description: "Neural Grid: Sovereign Infrastructure project" },
//       { name: "Request a Quote", href: "/quote-request", description: "Get a customized quote for your project" }
//     ]
//   },
//   {
//     title: "Quick Actions",
//     icon: Briefcase,
//     links: [
//       { name: "Request a Quote", href: "/quote-request", description: "Submit your project requirements" },
//       { name: "Contact Support", href: "/contact", description: "Reach out to our support team" },
//       { name: "View Careers", href: "/careers", description: "Explore current job openings" },
//       { name: "Project Portfolio", href: "/project-details", description: "View our flagship projects" }
//     ]
//   }
// ];

// const quickLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "About", href: "/about", icon: Info },
//   { name: "Careers", href: "/careers", icon: Users },
//   { name: "Contact", href: "/contact", icon: Mail },
//   { name: "Projects", href: "/project-details", icon: FileText },
//   { name: "Get Quote", href: "/quote-request", icon: MessageSquare }
// ];

// interface TreeNode {
//   name: string;
//   href?: string;
//   children?: TreeNode[];
// }

// const siteTree: TreeNode[] = [
//   {
//     name: "Nexvista",
//     children: [
//       {
//         name: "Home",
//         href: "/",
//         children: []
//       },
//       {
//         name: "About Us",
//         href: "/about",
//         children: []
//       },
//       {
//         name: "Contact",
//         href: "/contact",
//         children: []
//       },
//       {
//         name: "Careers",
//         href: "/careers",
//         children: []
//       },
//       {
//         name: "Projects",
//         children: [
//           {
//             name: "Project Details",
//             href: "/project-details",
//             children: []
//           }
//         ]
//       },
//       {
//         name: "Services",
//         children: [
//           {
//             name: "Request a Quote",
//             href: "/quote-request",
//             children: []
//           }
//         ]
//       }
//     ]
//   }
// ];

// function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
//   const [isOpen, setIsOpen] = useState(true);
//   const hasChildren = node.children && node.children.length > 0;

//   return (
//     <div className="select-none">
//       <div 
//         className={`flex items-center gap-1 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 transition-colors cursor-pointer`}
//         style={{ paddingLeft: `${level * 24 + 8}px` }}
//         onClick={() => hasChildren && setIsOpen(!isOpen)}
//       >
//         {hasChildren ? (
//           <button className="p-0.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
//             {isOpen ? (
//               <Minus className="w-3.5 h-3.5 text-gray-500" />
//             ) : (
//               <Plus className="w-3.5 h-3.5 text-gray-500" />
//             )}
//           </button>
//         ) : (
//           <div className="w-5" />
//         )}
        
//         {hasChildren ? (
//           isOpen ? (
//             <FolderOpen className="w-4 h-4 text-amber-500" />
//           ) : (
//             <FolderTree className="w-4 h-4 text-amber-500" />
//           )
//         ) : (
//           <File className="w-4 h-4 text-gray-400" />
//         )}
        
//         {node.href ? (
//           <Link 
//             href={node.href}
//             className="text-sm text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ml-1"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {node.name}
//           </Link>
//         ) : (
//           <span className="text-sm font-medium text-gray-900 dark:text-white ml-1">
//             {node.name}
//           </span>
//         )}
        
//         {node.href && (
//           <code className="text-[10px] text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded ml-2">
//             {node.href}
//           </code>
//         )}
//       </div>
//       {hasChildren && isOpen && (
//         <div>
//           {node.children!.map((child, index) => (
//             <TreeItem key={index} node={child} level={level + 1} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function SitemapPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-3xl"
//           >
//             <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-[10px] font-bold tracking-[0.1em] uppercase mb-4 md:mb-6">
//               Site Navigation
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-tight mb-4 md:mb-6">
//               Sitemap
//             </h1>
//             <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
//               Explore all pages and resources available on the Nexvista website. 
//               Find the information you need quickly and easily.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Sitemap Grid */}
//       <section className="py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//             {sitemapSections.map((section, sectionIndex) => (
//               <motion.div
//                 key={section.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
//                   <div className="p-4 md:p-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
//                     <div className="flex items-center gap-2 md:gap-3">
//                       <div className="w-8 h-8 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center">
//                         <section.icon className="w-4 h-4 text-amber-400" />
//                       </div>
//                       <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
//                         {section.title}
//                       </h2>
//                       <span className="ml-auto text-xs text-gray-500 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded">
//                         {section.links.length}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-4 md:p-5">
//                     <ul className="space-y-3 md:space-y-4">
//                       {section.links.map((link, linkIndex) => (
//                         <li key={link.name}>
//                           <Link
//                             href={link.href}
//                             className="group flex items-start gap-2 md:gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
//                           >
//                             <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-gray-400 dark:text-gray-600 group-hover:text-amber-500 transition-colors" />
//                             <div className="flex-1">
//                               <div className="flex items-center justify-between flex-wrap gap-2">
//                                 <span className="text-sm md:text-base font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
//                                   {link.name}
//                                 </span>
//                                 <code className="text-[10px] md:text-xs text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded">
//                                   {link.href === "/" ? "/" : link.href}
//                                 </code>
//                               </div>
//                               <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
//                                 {link.description}
//                               </p>
//                             </div>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tree Structure Section */}
//       <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900/50">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-center mb-8 md:mb-12"
//           >
//             <div className="flex items-center justify-center gap-2 mb-3">
//               <FolderTree className="w-6 h-6 text-amber-500" />
//               <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
//                 Site Hierarchy
//               </h2>
//             </div>
//             <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-3 md:mt-4"></div>
//             <p className="text-gray-600 dark:text-gray-400 mt-3 md:mt-4">
//               Visual tree structure of the entire website - click on folders to expand/collapse
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm"
//           >
//             <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
//               <div className="flex items-center gap-3">
//                 <FolderOpen className="w-5 h-5 text-amber-500" />
//                 <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
//                   Website Structure
//                 </h3>
//                 <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
//                   Click on <Plus className="w-3 h-3 inline mx-0.5" /> / <Minus className="w-3 h-3 inline mx-0.5" /> to expand/collapse
//                 </span>
//               </div>
//             </div>
//             <div className="p-4 md:p-6">
//               {siteTree.map((node, index) => (
//                 <TreeItem key={index} node={node} />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* All Pages Overview Table */}
//       <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-center mb-8 md:mb-12"
//           >
//             <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
//               Complete Page Index
//             </h2>
//             <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-3 md:mt-4"></div>
//             <p className="text-gray-600 dark:text-gray-400 mt-3 md:mt-4">
//               All available pages on the Nexvista website
//             </p>
//           </motion.div>

//           <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
//                   <tr>
//                     <th className="text-left p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Page Name
//                     </th>
//                     <th className="text-left p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       URL Path
//                     </th>
//                     <th className="text-left p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
//                   {[
//                     { name: "Home", path: "/" },
//                     { name: "About Us", path: "/about" },
//                     { name: "Contact", path: "/contact" },
//                     { name: "Careers", path: "/careers" },
//                     { name: "Project Details", path: "/project-details" },
//                     { name: "Quote Request", path: "/quote-request" },
//                     { name: "Sitemap", path: "/sitemap" }
//                   ].map((page, index) => (
//                     <motion.tr
//                       key={page.path}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: index * 0.05 }}
//                       viewport={{ once: true }}
//                       className="hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
//                     >
//                       <td className="p-4">
//                         <span className="text-sm md:text-base font-medium text-gray-900 dark:text-white">
//                           {page.name}
//                         </span>
//                       </td>
//                       <td className="p-4">
//                         <code className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
//                           {page.path}
//                         </code>
//                       </td>
//                       <td className="p-4">
//                         <Link
//                           href={page.path}
//                           className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
//                         >
//                           Visit
//                           <ExternalLink className="w-3 h-3" />
//                         </Link>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Links Section */}
//       <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900/50">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-center mb-8 md:mb-12"
//           >
//             <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
//               Quick Navigation
//             </h2>
//             <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-3 md:mt-4"></div>
//             <p className="text-gray-600 dark:text-gray-400 mt-3 md:mt-4">
//               Most frequently accessed pages
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
//             {quickLinks.map((link, index) => (
//               <motion.div
//                 key={link.name}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//                 viewport={{ once: true }}
//               >
//                 <Link
//                   href={link.href}
//                   className="flex flex-col items-center gap-2 p-4 md:p-5 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-md transition-all group text-center"
//                 >
//                   <div className="w-10 h-10 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <link.icon className="w-5 h-5 text-amber-400" />
//                   </div>
//                   <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
//                     {link.name}
//                   </span>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trust Badges */}
//       <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
//             <div className="flex items-center gap-2 md:gap-3">
//               <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
//                 <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//               </div>
//               <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">MSME Certified</span>
//             </div>
//             <div className="flex items-center gap-2 md:gap-3">
//               <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
//                 <Building2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//               </div>
//               <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">Startup India</span>
//             </div>
//             <div className="flex items-center gap-2 md:gap-3">
//               <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
//                 <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//               </div>
//               <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">ISO 9001:2015</span>
//             </div>
//             <div className="flex items-center gap-2 md:gap-3">
//               <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
//                 <Cpu className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//               </div>
//               <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">Deep Tech Partner</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer3 />
//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight,
  Home,
  Users,
  Mail,
  FileText,
  MessageSquare,
  Building2,
  Shield,
  Cpu,
  Briefcase,
  ExternalLink,
  Info,
  FolderTree,
  FolderOpen,
  File,
  Minus,
  Plus,
  Server,
  Layout
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer3 } from "@/components/Footer/footer3";

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { name: "Home", href: "/", description: "Welcome to Nexvista - Sovereign Digital Infrastructure" },
      { name: "About Us", href: "/about", description: "Our mission, vision, and leadership team" },
      { name: "Services", href: "/services", description: "Architectural authority in deep tech and software strategy" },
      { name: "Contact Us", href: "/contact", description: "Get in touch with our team for inquiries" },
      { name: "Careers", href: "/careers", description: "Join our mission-driven team and build the future" },
      { name: "Project Details", href: "/project-details", description: "Neural Grid: Sovereign Infrastructure project" },
      { name: "Request a Quote", href: "/quote-request", description: "Get a customized quote for your project" }
    ]
  },
  {
    title: "Quick Actions",
    icon: Briefcase,
    links: [
      { name: "Request a Quote", href: "/quote-request", description: "Submit your project requirements" },
      { name: "Contact Support", href: "/contact", description: "Reach out to our support team" },
      { name: "View Careers", href: "/careers", description: "Explore current job openings" },
      { name: "Project Portfolio", href: "/project-details", description: "View our flagship projects" },
      { name: "Explore Services", href: "/services", description: "Discover our deep tech capabilities" }
    ]
  }
];

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Server },
  { name: "Careers", href: "/careers", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Projects", href: "/project-details", icon: FileText },
  { name: "Get Quote", href: "/quote-request", icon: MessageSquare }
];

interface TreeNode {
  name: string;
  href?: string;
  children?: TreeNode[];
}

const siteTree: TreeNode[] = [
  {
    name: "Nexvista",
    children: [
      {
        name: "Home",
        href: "/",
        children: []
      },
      {
        name: "About Us",
        href: "/about",
        children: []
      },
      {
        name: "Services",
        href: "/services",
        children: [
          {
            name: "Software Strategy",
            href: "/services#software-strategy",
            children: []
          },
          {
            name: "Technical Architecture",
            href: "/services#architecture",
            children: []
          },
          {
            name: "Delivery Lifecycle",
            href: "/services#delivery",
            children: []
          },
          {
            name: "Digital Systems",
            href: "/services#digital-systems",
            children: []
          }
        ]
      },
      {
        name: "Contact",
        href: "/contact",
        children: []
      },
      {
        name: "Careers",
        href: "/careers",
        children: []
      },
      {
        name: "Projects",
        children: [
          {
            name: "Project Details",
            href: "/project-details",
            children: []
          }
        ]
      },
      {
        name: "Services",
        children: [
          {
            name: "Request a Quote",
            href: "/quote-request",
            children: []
          }
        ]
      }
    ]
  }
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="select-none">
      <div 
        className={`flex items-center gap-1 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-2 transition-colors cursor-pointer`}
        style={{ paddingLeft: `${level * 24 + 8}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren ? (
          <button className="p-0.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
            {isOpen ? (
              <Minus className="w-3.5 h-3.5 text-gray-500" />
            ) : (
              <Plus className="w-3.5 h-3.5 text-gray-500" />
            )}
          </button>
        ) : (
          <div className="w-5" />
        )}
        
        {hasChildren ? (
          isOpen ? (
            <FolderOpen className="w-4 h-4 text-amber-500" />
          ) : (
            <FolderTree className="w-4 h-4 text-amber-500" />
          )
        ) : (
          <File className="w-4 h-4 text-gray-400" />
        )}
        
        {node.href ? (
          <Link 
            href={node.href}
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ml-1"
            onClick={(e) => e.stopPropagation()}
          >
            {node.name}
          </Link>
        ) : (
          <span className="text-sm font-medium text-gray-900 dark:text-white ml-1">
            {node.name}
          </span>
        )}
        
        {node.href && (
          <code className="text-[10px] text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded ml-2">
            {node.href}
          </code>
        )}
      </div>
      {hasChildren && isOpen && (
        <div>
          {node.children!.map((child, index) => (
            <TreeItem key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-[10px] font-bold tracking-[0.1em] uppercase mb-4 md:mb-6">
              Site Navigation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-tight mb-4 md:mb-6">
              Sitemap
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Explore all pages and resources available on the Nexvista website. 
              Find the information you need quickly and easily.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="p-4 md:p-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center">
                        <section.icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                      <span className="ml-auto text-xs text-gray-500 dark:text-gray-500 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded">
                        {section.links.length}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <ul className="space-y-3 md:space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group flex items-start gap-2 md:gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          >
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-gray-400 dark:text-gray-600 group-hover:text-amber-500 transition-colors" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <span className="text-sm md:text-base font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                  {link.name}
                                </span>
                                <code className="text-[10px] md:text-xs text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded">
                                  {link.href === "/" ? "/" : link.href}
                                </code>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                                {link.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Structure Section */}
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <FolderTree className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
                Site Hierarchy
              </h2>
            </div>
            <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-3 md:mt-4"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-3 md:mt-4">
              Visual tree structure of the entire website - click on folders to expand/collapse
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm"
          >
            <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-3">
                <FolderOpen className="w-5 h-5 text-amber-500" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  Website Structure
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-500 ml-auto">
                  Click on <Plus className="w-3 h-3 inline mx-0.5" /> / <Minus className="w-3 h-3 inline mx-0.5" /> to expand/collapse
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              {siteTree.map((node, index) => (
                <TreeItem key={index} node={node} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Pages Overview Table */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Complete Page Index
            </h2>
            <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-3 md:mt-4"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-3 md:mt-4">
              All available pages on the Nexvista website
            </p>
          </motion.div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                  <tr>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Page Name
                    </th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      URL Path
                    </th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About Us", path: "/about" },
                    { name: "Services", path: "/services" },
                    { name: "Contact", path: "/contact" },
                    { name: "Careers", path: "/careers" },
                    { name: "Project Details", path: "/project-details" },
                    { name: "Quote Request", path: "/quote-request" },
                    { name: "Sitemap", path: "/sitemap" }
                  ].map((page, index) => (
                    <motion.tr
                      key={page.path}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                    >
                      <td className="p-4">
                        <span className="text-sm md:text-base font-medium text-gray-900 dark:text-white">
                          {page.name}
                        </span>
                       </td>
                      <td className="p-4">
                        <code className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                          {page.path}
                        </code>
                       </td>
                      <td className="p-4">
                        <Link
                          href={page.path}
                          className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                        >
                          Visit
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                       </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
              Quick Navigation
            </h2>
            <div className="w-16 md:w-20 h-1 bg-amber-500 mx-auto mt-3 md:mt-4"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-3 md:mt-4">
              Most frequently accessed pages
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="flex flex-col items-center gap-2 p-4 md:p-5 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-md transition-all group text-center"
                >
                  <div className="w-10 h-10 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <link.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">MSME Certified</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">Startup India</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">Deep Tech Partner</span>
            </div>
          </div>
        </div>
      </section>

      <Footer3 />
    </div>
  );
}