"use client";
import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-slate-400 text-sm mb-4 md:mb-0"
          >
            © {currentYear} Ankan Roy. All rights reserved.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            <a
              href="https://twitter.com/TechAnkan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Ankan-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:contact@mail.ankanroy.in"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
    
      </div>
    </footer>
  );
}
