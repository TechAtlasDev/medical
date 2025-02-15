import { auth } from '@/lib/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

export const metadata: Metadata = {
  title: "A Smarter Way to Diagnose and Innovate in Healthcare",
  description: "Get instant medical insights, explore AI-driven diagnostics, and seamlessly connect with specialists—all in one platform.",
  keywords: ["medical", "medicalAI", "IA", "ia", "medical ai", "chatgpt"],
  openGraph: {
    title: "A Smarter Way to Diagnose and Innovate in Healthcare",
    description: "Get instant medical insights, explore AI-driven diagnostics, and seamlessly connect with specialists—all in one platform.",
    url: "https://medical-experimental.vercel.app/",
    siteName: "MedicalAI",
    images: [
      {
        url: "https://raw.githubusercontent.com/TechAtlasDev/medical/main/image.png",
        width: 800,
        height: 600,
        alt: "Landing Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Smarter Way to Diagnose and Innovate in Healthcare",
    description: "Get instant medical insights, explore AI-driven diagnostics, and seamlessly connect with specialists—all in one platform.",
    images: ["https://raw.githubusercontent.com/TechAtlasDev/medical/main/image.png"],
  },
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang='en' className={`${lato.className}`} suppressHydrationWarning>
      <body className={'overflow-hidden'}>
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <Providers session={session}>
            <Toaster />
            {children}
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
