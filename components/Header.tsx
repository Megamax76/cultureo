'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navContent}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>🧠</span>
              <span className={styles.logoText}>CultureO IA</span>
            </Link>

            <button
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
              <li>
                <Link href="/formations" className={styles.navLink}>
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/glossaire" className={styles.navLink}>
                  Glossaire
                </Link>
              </li>
              <li>
                <Link href="/actualites" className={styles.navLink}>
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/formations?filter=free" className={`${styles.navLink} ${styles.navLinkCta}`}>
                  Formations gratuites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
