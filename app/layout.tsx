import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cultureo - Référentiel Créa-Comp",
  description: "Référentiel de compétences créatives pour la culture et l'innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
