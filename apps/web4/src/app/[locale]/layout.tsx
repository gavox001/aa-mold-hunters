import type { Metadata } from "next";
import { DM_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Providers } from '@/components/Providers';

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export const metadata: Metadata = {
  title: "AA Mold Hunters | Free Mold Inspection South Florida",
  description:
    "AA Mold Hunters is South Florida's leading mold inspection and remediation company. Get your FREE mold inspection today. 100% covered by most insurances.",
  keywords: [
    "mold inspection",
    "mold remediation",
    "mold removal",
    "South Florida",
    "free inspection",
    "water damage",
    "air quality",
  ],
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${dmSans.variable} ${lora.variable} ${ibmPlexMono.variable} min-h-screen bg-background text-foreground antialiased font-sans`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}