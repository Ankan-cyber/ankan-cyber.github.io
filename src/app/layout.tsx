import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      </head>
      <body className={inter.className} style={{ backgroundColor: '#0f172a' }}>{children}</body>
    </html>
  );
}
