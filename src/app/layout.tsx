import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Prevent invisible text while loading
  preload: true,
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  title: "Ankan Roy - Full Stack Developer & Cyber Security Student",
  description: "Ankan Roy is a full-stack web developer with expertise in MERN stack, Next.js, and cyber security. Portfolio showcasing innovative projects and web applications.",
  keywords: ["Ankan Roy", "Full Stack Developer", "MERN Stack", "Next.js", "Cyber Security", "Web Developer", "React", "Node.js"],
  authors: [{ name: "Ankan Roy" }],
  openGraph: {
    title: "Ankan Roy - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack and Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#0f172a' }}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical image */}
        <link
          rel="preload"
          as="image"
          href="/images/ankan.jpg"
          imageSrcSet="/images/ankan.jpg"
        />

        {/* Brevo Conversations Widget */}
        <Script
          id="brevo-conversations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, c) {
                w.BrevoConversationsID = '65ed518d8f022410551d3d53';
                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
                };
                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                if (d.head) d.head.appendChild(s);
              })(document, window, 'BrevoConversations');
            `,
          }}
        />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#0f172a' }}>{children}</body>
    </html>
  );
}
