import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Quillgent - Premium Virtual Assistant Agency',
  description: 'Quillgent provides premium virtual assistant services to help scale your business. Expert VAs for administrative support, customer service, and more.',
  keywords: ['virtual assistant', 'VA services', 'administrative support', 'remote assistance', 'business scaling'],
  openGraph: {
    title: 'Quillgent - Premium Virtual Assistant Agency',
    description: 'Focus on growth, we handle the rest. Premium virtual assistant services for growing businesses.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
