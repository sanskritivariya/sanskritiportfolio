import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sanskriti Variya | Frontend Developer",
  description: "Portfolio of Sanskriti Variya, Frontend Developer specializing in React.js and Next.js.",
  openGraph: {
    title: "Sanskriti Variya | Frontend Developer",
    description: "Portfolio of Sanskriti Variya, Frontend Developer specializing in React.js and Next.js.",
    type: "website",
    locale: "en_US",
    siteName: "Sanskriti Variya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanskriti Variya | Frontend Developer",
    description: "Portfolio of Sanskriti Variya, Frontend Developer specializing in React.js and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Ambient background glowing orbs */}
        <div className="ambient-orb orb-primary"></div>
        <div className="ambient-orb orb-secondary"></div>
        <div className="ambient-orb orb-tertiary"></div>
        {children}
      </body>
    </html>
  );
}
