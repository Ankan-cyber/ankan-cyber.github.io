"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, X, Github, Coffee, Send, Linkedin } from "lucide-react";
import Turnstile from "react-turnstile";
import { TryHackMeBadge } from "./TryHackMeBadge";
import { form, li } from "framer-motion/client";

export function Contact() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const socialLinks = [
    {
      name: "X",
      icon: X,
      href: "https://x.com/TechAnkan",
      color: "hover:text-sky-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Ankan-cyber",
      color: "hover:text-grey-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@mail.ankanroy.in",
      color: "hover:text-red-400",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/royankan/",
      color: "hover:text-blue-400",
    },
    {
      name: "Phone",
      icon: Phone,
      href: "tel:+12053774989",
      color: "hover:text-green-400",
    },
    {
      name: "Buy Me a Coffee",
      icon: Coffee,
      href: "https://buymeacoffee.com/ankanroy2",
      color: "hover:text-yellow-400",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      return;
    }

    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formcarry.com/s/Zc_v4xd08og", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
        setTurnstileToken("");
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  minLength={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={8}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Turnstile */}
              <div>
                <div className="flex justify-center md:justify-start">
                  <Turnstile
                    sitekey="0x4AAAAAAABT5rh5c_jGhISR"
                    onVerify={(token: string) => {
                      setTurnstileToken(token);
                    }}
                    theme="dark"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting" || !turnstileToken}
                className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Status Messages */}
              {formStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {formStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  ✗ Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 mt-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <p className="text-slate-400 mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-slate-600 transition-all ${link.color}`}
                  >
                    <link.icon className="w-5 h-5 text-slate-400 group-hover:text-current transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* TryHackMe Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <TryHackMeBadge />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
