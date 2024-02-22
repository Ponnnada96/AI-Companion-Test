import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ErrorBoundary } from "react-error-boundary";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "companion.ai",
  description: `About
            AI-Companion is a cool software that lets you create your own custom AI models of people you admire, like actors or celebrities. It's a tool to make personalized artificial intelligence companions based on your favorite individuals`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
    
            {children}
      
      </body>
    </html>

  );
}
