import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: ' Dr. Rishman Jot Kaur Chahal',
  description:
    'Explore the academic journey and professional achievements of Dr. Rishman Jot Kaur Chahal. Dedicated educator with expertise in research, teaching, and academic leadership.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
          <SpeedInsights />
            <Analytics />
        <Footer />
      </body>
    </html>
  );
}
