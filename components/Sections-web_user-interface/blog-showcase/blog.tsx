"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "AI in Hospital Management Systems: The Next Frontier",
    category: "Technology",
    description: "Exploring how generative AI and predictive analytics are reshaping patient care and operational efficiency.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxHwsdLx9EibardmGL76dr3GSTGd9H4_vmfYfDA5aECXEQxo-MopciRUXlyB1qY1MlqINNaH18a_Db2sBTdKUczEJS_oeeKpz5wtAlFpvhOg_4KBlQMpd_iL79xKTDeeBRUI_HYtJBUTj2MhpfqsvXr_45BDR-ZCz9Ke-uP1O0dDn1xDVa04SiNHPnlzslmxMbJc7_JTh2yGeLLZiUecXLG1tZgcMTFQqk5-sW6-LvMQhBqV8kl0x12dlREd8MFVe_ZGFsC_qszgE",
    href: "/blog/ai-in-hospital-management",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Navigating PSU Sublet Work: Guidelines for Partners",
    category: "Industry",
    description: "A deep dive into the regulatory frameworks and execution strategies for public sector collaborations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Nb551LwBnXYPYtGLP_vC7b88A8fo4Z4Eztb3RzhPZfk1e-l8Kj8TgKZS5Y-Dq3voQZTc-WU6sIM0BJqKbpan3cSrhppFCXWV2cM2lHEqoHmCUpHYv2vFh9NPV6NSBHwubm5tvG0cZAsEW_QDJuYSTaGWMFdcXakpu7HolzzpBPXNvCXDtDXcmZhmOQQmaRNXx5rwWxpf0LsdUd3lirz8Dj1SQ-gIFYJi4vpwRgmXv8IwBBXsh-yrJisRGSKoqOg2PUiHGISuBN8",
    href: "/blog/psu-sublet-work",
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "Unlocking MSME Benefits in the Digital Age",
    category: "Policy",
    description: "Leveraging government incentives and technology grants to accelerate small enterprise growth.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxM3Sb_K67xq2cxJGCg9BNbQW-pHC39FOGvWX6uKs8GYjPr-f0ifwlCn9jhh2MVSyH596hyodeVMdUXk6FpmCYuezL4hddJqz1EsaWGHBYxSdG0Lvm2cf1TFBq4zdGJbDU_MdCuoWenthHqLwHjhC9gtzzESGfyP4f3a7CmqlMq11qZ1YCnzBiZCcR10qX9LXjXG4bY7e_97ds26aW7CLuCxGjnB2lS5TAXz3xqkadun14oxhgMwe1fMmagmqluqQPCrxxqp12O5Y",
    href: "/blog/msme-benefits",
    date: "2024-01-05",
  },
];

export function Blog() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Latest Insights
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="text-foreground font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-all inline-flex items-center gap-2 group"
            >
              Read All Articles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group "
            >
              <Link href={post.href}>
                <div className="overflow-hidden rounded-md aspect-video mb-4 md:mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em]">
                  {post.category}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2 md:mt-3 mb-2 md:mb-4 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  {post.description}
                </p>
                
                <span className="font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-foreground">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}