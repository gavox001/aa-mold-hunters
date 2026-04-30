import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AA Mold Hunters | Professional Mold Remediation Front 2',
  description: 'Hidden Mold is Destroying Your Home. FREE Thermal Inspection Reveals It in 24 Hours.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen bg-neutral-bg text-neutral-text">
        {children}
      </body>
    </html>
  );
}
