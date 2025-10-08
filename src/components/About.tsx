"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layers, Server, Smartphone } from "lucide-react";

export function About() {
  const skills = [
    { name: "JavaScript", icon: Code, level: 95 },
    { name: "TypeScript", icon: Code, level: 90 },
    { name: "React", icon: Layers, level: 95 },
    { name: "MongoDB", icon: Database, level: 85 },
    { name: "Next.js 15", icon: Globe, level: 95 },
    { name: "HTML/CSS", icon: Code, level: 98 },
    { name: "News API", icon: Server, level: 80 },
    { name: "MERN Stack", icon: Layers, level: 92 },
    { name: "API Integration", icon: Server, level: 88 },
    { name: "Node.js", icon: Server, level: 90 },
  ];

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building Digital Excellence
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 text-center hover:border-violet-500/50 transition-colors">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    My journey into the world of technology began with a simple curiosity that evolved into 
                    a profound passion for creating digital solutions. As a full-stack developer specializing 
                    in modern web technologies, I&apos;ve spent over four years honing my craft and building 
                    applications that make a difference in people&apos;s lives.
                  </p>
                  <p>
                    Throughout my career, I&apos;ve had the privilege of working on diverse projects ranging from 
                    healthcare applications to e-commerce platforms, each presenting unique challenges that 
                    have shaped my problem-solving abilities. My approach combines technical excellence with 
                    user-centric design, ensuring that every solution I build is not only robust and scalable 
                    but also intuitive and accessible.
                  </p>
                  <p>
                    What sets me apart is my dual expertise in web development and cybersecurity. This unique 
                    combination allows me to architect applications with security at their core, implementing 
                    best practices from the ground up. I believe that great software should be both powerful 
                    and secure, and I&apos;m committed to delivering nothing less.
                  </p>
                  <p>
                    As a lifelong learner, I stay ahead of the curve by continuously exploring emerging 
                    technologies and frameworks. Whether it&apos;s diving into the latest features of Next.js 15, 
                    experimenting with AI integration, or refining my cloud architecture skills, I&apos;m always 
                    pushing the boundaries of what&apos;s possible in web development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20 transition-all">
                        <skill.icon className="w-4 h-4 text-violet-400" />
                      </div>
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
