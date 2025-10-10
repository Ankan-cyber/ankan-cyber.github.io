"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "PillPal",
      description:
        "A comprehensive medication management app that helps users track their medications, set reminders, and manage their health effectively",
      link: "https://pillpal.ankanroy.in",
      image: "/images/pillpal.jpg",
      tags: ["Next.js", "MongoDB", "Ollama AI"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Shop By Ankan Roy",
      description:
        "Ankan Roy's Shop is an Ecommerce website built using Next.js framework with product pages, accounts, categories, checkout and Razorpay payment gateway.",
      link: "https://shop.ankanroy.in",
      image: "/images/shop.jpg",
      tags: ["Next.js", "Razorpay", "Admin Panel"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Indian Recipe Finder",
      description:
        "Indian Recipe Finder is a full-stack web application that allows you to search for and filter over 7000+ Indian recipes based on cuisine and diet.",
      link: "https://recipes.ankanroy.in",
      image: "/images/indianrecipefinder.jpg",
      tags: ["Next.js", "API", "Search"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Resume Downloader",
      description:
        "React based web application that allows users to download their Resume.io resume in PDF format for free",
      link: "https://resumeio.ankanroy.in",
      image: "/images/resumeio2pdf.jpg",
      tags: ["Next.js", "PDF", "Tool"],
      color: "from-fuchsia-500 to-violet-500",
    },
    {
      title: "Blog By Ankan Roy",
      description:
        "Ankan Roy's Blog is a personal blogging website built using Next.js framework with blog posts on various topics and tags for easy navigation.",
      link: "https://blog.ankanroy.in",
      image: "/images/blog.jpg",
      tags: ["Next.js", "MDX", "Blog"],
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "CloudNote Pro",
      description:
        "CloudNotePro is a powerful and easy-to-use note-taking app with encrypted passwords. Your notes are always safe and secure in the cloud.",
      link: "https://notes.ankanroy.in",
      image: "/images/cloudnotepro.jpg",
      tags: ["React", "Encryption", "Cloud"],
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "News Wallah",
      description:
        "React based modern news app where you can manifest all your news needs. Daily updates and the best news to keep you informed.",
      link: "https://news.ankanroy.in",
      image: "/images/newswallah.jpg",
      tags: ["React", "News API", "Real-time"],
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Textutils",
      description:
        "React based text manipulation web app, where you can set your text however you like with various formatting options",
      link: "https://ankanroy.in/textutils",
      image: "/images/textutils.jpg",
      tags: ["React", "Tools", "Utility"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my best work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                {/* Subtle Top Gradient on Hover - Only at the top edge */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                    />
                  )}
                </AnimatePresence>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors group/link"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
