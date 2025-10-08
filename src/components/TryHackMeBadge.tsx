"use client";
import React, { useEffect, useRef, useState } from "react";

export function TryHackMeBadge() {
  const [badgeHtml, setBadgeHtml] = useState("");

  useEffect(() => {
    // Fetch the badge script and extract the image
    fetch("https://tryhackme.com/badge/2529018")
      .then(response => response.text())
      .then(scriptContent => {
        // The script uses document.write, so we need to extract the HTML
        // Create a temporary function to capture document.write calls
        const writes: string[] = [];
        const originalWrite = document.write;
        
        // Override document.write temporarily
        document.write = function(...args: string[]) {
          writes.push(args.join(''));
        };
        
        try {
          // Execute the script content
          eval(scriptContent);
          setBadgeHtml(writes.join(''));
        } catch (e) {
          console.error("Error loading TryHackMe badge:", e);
        } finally {
          // Restore original document.write
          document.write = originalWrite;
        }
      })
      .catch(err => console.error("Failed to load TryHackMe badge:", err));
  }, []);

  return (
    <div 
      className="flex justify-center md:justify-start"
      dangerouslySetInnerHTML={{ __html: badgeHtml }}
    />
  );
}
