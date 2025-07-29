// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Portfolio - Ingeniero en Multimedia',
  description: 'Desarrollador Full-Stack especializado en WordPress, Next.js y e-commerce',
  keywords: ['Next.js', 'React', 'WordPress', 'E-commerce', 'Full-Stack'],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tu-portfolio.com',
    title: 'Portfolio - Ingeniero en Multimedia',
    description: 'Desarrollador Full-Stack especializado en WordPress, Next.js y e-commerce',
    siteName: 'Tu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Ingeniero en Multimedia',
    description: 'Desarrollador Full-Stack especializado en WordPress, Next.js y e-commerce',
    creator: '@tu_usuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}