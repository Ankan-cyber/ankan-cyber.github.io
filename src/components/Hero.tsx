"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Shield, Wifi, Sparkles, Award, Rocket } from "lucide-react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const roles = [
    { icon: Code2, text: "Full Stack Developer", color: "from-violet-400 to-purple-400" },
    { icon: Shield, text: "Cyber Security Student", color: "from-fuchsia-400 to-pink-400" },
    { icon: Wifi, text: "WiFi Pentester", color: "from-purple-400 to-indigo-400" },
  ];

  const highlights = [
    { icon: Sparkles, label: "50+ Projects", color: "text-violet-400" },
    { icon: Award, label: "4+ Years", color: "text-fuchsia-400" },
    { icon: Rocket, label: "10+ Tech Stack", color: "text-purple-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Meteors Effect */}
      <Meteors number={30} />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            {/* Profile Photo - Mobile/Tablet Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden mb-8 flex justify-center"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <Image
                  src="/images/ankan.jpg"
                  alt="Ankan Roy"
                  fill
                  sizes="(max-width: 768px) 192px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-500/10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-white text-base font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
            >
              <span className="block text-white mb-2">Hi, I am</span>
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                Ankan Roy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 lg:mb-12"
            >
              Crafting innovative digital experiences with code, security, and creativity
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] cursor-pointer"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="group px-8 py-4 rounded-full border-2 border-slate-600 text-slate-300 font-semibold hover:border-violet-500 hover:text-violet-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] cursor-pointer"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Highlights - Mobile/Tablet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex lg:hidden justify-center gap-8 mb-12"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-sm text-slate-400">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Photo & Role Cards (Desktop Only) */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center space-y-8">
            {/* Profile Photo - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-[0_0_60px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/ankan.jpg"
                  alt="Ankan Roy"
                  fill
                  sizes="(min-width: 1024px) 288px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-violet-500/20" />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 w-full max-w-md"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                  <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-violet-500/50 transition-colors">
                    <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                    <div className="text-sm text-slate-400 font-medium">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
