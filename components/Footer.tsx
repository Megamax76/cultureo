import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>
              <span className={styles.logoIcon}>🧠</span> CultureO IA
            </h3>
            <p className={styles.footerDescription}>
              Plateforme d'apprentissage de l'intelligence artificielle pour tous.
              Découvrez, apprenez et maîtrisez l'IA.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/formations">Formations</Link></li>
              <li><Link href="/glossaire">Glossaire</Link></li>
              <li><Link href="/actualites">Actualités</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Formations</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/formations?filter=free">Gratuites</Link></li>
              <li><Link href="/formations?filter=paid">Payantes</Link></li>
              <li><Link href="/formations?level=beginner">Débutant</Link></li>
              <li><Link href="/formations?level=advanced">Avancé</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Ressources</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/glossaire">Définitions IA</Link></li>
              <li><Link href="/actualites">Dernières nouvelles</Link></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Support</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} CultureO IA. Tous droits réservés.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="#">Confidentialité</Link>
            <Link href="#">Conditions</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
