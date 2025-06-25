import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Alexandria } from 'next/font/google';

const alexandria = Alexandria({
  subsets: ['latin', 'arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-alexandria',
});

export const metadata: Metadata = {
  title: 'Bayat App',
  description: 'Bayat',
  generator: 'Bayat',
  icons: {
    icon: '/images/bayat-logo-black.png',
    shortcut: '/images/bayat-logo-black.png',
    apple: '/images/bayat-logo-black.png',
    other: {
      rel: 'icon',
      url: '/images/bayat-logo-black.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.variable} font-alexandria`}>
        {children}
      </body>
    </html>
  );
}
