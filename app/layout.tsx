import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'CultureO IA - Apprendre l\'Intelligence Artificielle',
  description: 'Plateforme d\'apprentissage de l\'IA pour le grand public. Formations gratuites et payantes, glossaire complet et actualités.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
