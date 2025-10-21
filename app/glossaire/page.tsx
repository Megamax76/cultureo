'use client';

import { useState, useMemo } from 'react';
import { glossaryTerms } from '@/data/glossary';
import styles from './glossaire.module.css';

export default function GlossairePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(glossaryTerms.map(t => t.category)));
  }, []);

  // Filter and search terms
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = searchQuery === '' ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = categoryFilter === 'all' || term.category === categoryFilter;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, categoryFilter]);

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: typeof glossaryTerms } = {};
    filteredTerms.forEach(term => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <h1>Glossaire de l'Intelligence Artificielle</h1>
          <p className={styles.subtitle}>
            Explorez les définitions et concepts clés de l'IA
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.controls}>
          {/* Search */}
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Rechercher un terme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={styles.clearButton}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${categoryFilter === 'all' ? styles.filterButtonActive : ''}`}
              onClick={() => setCategoryFilter('all')}
            >
              Toutes
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterButton} ${categoryFilter === category ? styles.filterButtonActive : ''}`}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.resultsInfo}>
            <p>{filteredTerms.length} terme{filteredTerms.length > 1 ? 's' : ''} trouvé{filteredTerms.length > 1 ? 's' : ''}</p>
          </div>

          {letters.length > 0 ? (
            <div className={styles.glossary}>
              {letters.map(letter => (
                <div key={letter} className={styles.letterSection}>
                  <h2 className={styles.letter}>{letter}</h2>
                  <div className={styles.termsGrid}>
                    {groupedTerms[letter].map(term => (
                      <div key={term.id} className={`card ${styles.termCard}`}>
                        <div className={styles.termHeader}>
                          <h3 className={styles.termTitle}>{term.term}</h3>
                          <span className={styles.termCategory}>{term.category}</span>
                        </div>
                        <p className={styles.termDefinition}>{term.definition}</p>
                        {term.example && (
                          <div className={styles.termExample}>
                            <strong>Exemple :</strong> {term.example}
                          </div>
                        )}
                        {term.relatedTerms.length > 0 && (
                          <div className={styles.relatedTerms}>
                            <strong>Termes liés :</strong>{' '}
                            {term.relatedTerms.map((related, index) => (
                              <span key={index}>
                                <button
                                  onClick={() => setSearchQuery(related)}
                                  className={styles.relatedLink}
                                >
                                  {related}
                                </button>
                                {index < term.relatedTerms.length - 1 && ', '}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>Aucun terme ne correspond à votre recherche.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                }}
                className="btn btn-primary"
              >
                Réinitialiser
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
