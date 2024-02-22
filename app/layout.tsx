import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Section/Navbar';
import Footer from '@/components/Section/Footer';

export const metadata: Metadata = {
  title: 'Coliving',
  description: 'Coliving website to find your next home',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
