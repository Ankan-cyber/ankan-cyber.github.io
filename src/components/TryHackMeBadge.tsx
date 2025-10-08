"use client";
import React, { useEffect, useRef } from "react";

export function TryHackMeBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (badgeRef.current && typeof window !== 'undefined') {
      // Store the original document.write
      const originalWrite = document.write;
      const writes: string[] = [];
      
      // Override document.write to capture the output
      document.write = function(...args: any[]) {
        writes.push(args.join(''));
      };
      
      // Create and append script element
      const script = document.createElement('script');
      script.src = 'https://tryhackme.com/badge/2529018';
      script.async = false; // Make it synchronous to capture writes
      
      script.onload = () => {
        // Restore original document.write
        document.write = originalWrite;
        
        // Insert captured HTML
        if (badgeRef.current && writes.length > 0) {
          badgeRef.current.innerHTML = writes.join('');
        }
      };
      
      script.onerror = () => {
        // Restore on error too
        document.write = originalWrite;
        console.error('Failed to load TryHackMe badge');
      };
      
      document.head.appendChild(script);
      
      // Cleanup on unmount
      return () => {
        document.write = originalWrite;
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div 
      ref={badgeRef}
      className="flex justify-center md:justify-start [&>img]:max-w-full [&>img]:h-auto [&>img]:w-auto [&>img]:max-h-[200px]"
    />
  );
}
