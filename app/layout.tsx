import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nofal Hassaan — Full-stack engineer",
  description:
    "Full-stack engineer building AI-powered web applications. React, TypeScript, Laravel, LLM integrations. Available for remote contract work.",
  openGraph: {
    title: "Nofal Hassaan — Full-stack engineer",
    description:
      "Full-stack engineer building AI-powered web applications. React, TypeScript, Laravel, LLM integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
