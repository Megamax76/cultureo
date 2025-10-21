'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { formations } from '@/data/formations';
import styles from './formations.module.css';

export default function FormationsPage() {
  const [filter, setFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(formations.map(f => f.category)));
  }, []);

  // Filter formations
  const filteredFormations = useMemo(() => {
    return formations.filter(formation => {
      const matchesPrice = filter === 'all' ||
        (filter === 'free' && formation.isFree) ||
        (filter === 'paid' && !formation.isFree);

      const matchesLevel = levelFilter === 'all' || formation.level === levelFilter;
      const matchesCategory = categoryFilter === 'all' || formation.category === categoryFilter;

      return matchesPrice && matchesLevel && matchesCategory;
    });
  }, [filter, levelFilter, categoryFilter]);

  // Check URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get('filter');
    const levelParam = params.get('level');

    if (filterParam === 'free' || filterParam === 'paid') {
      setFilter(filterParam);
    }
    if (levelParam) {
      setLevelFilter(levelParam);
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <h1>Formations en Intelligence Artificielle</h1>
          <p className={styles.subtitle}>
            Découvrez nos formations pour tous les niveaux, du débutant à l'expert
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Filters Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Type</h3>
              <div className={styles.filterOptions}>
                <button
                  className={`${styles.filterButton} ${filter === 'all' ? styles.filterButtonActive : ''}`}
                  onClick={() => setFilter('all')}
                >
                  Toutes ({formations.length})
                </button>
                <button
                  className={`${styles.filterButton} ${filter === 'free' ? styles.filterButtonActive : ''}`}
                  onClick={() => setFilter('free')}
                >
                  Gratuites ({formations.filter(f => f.isFree).length})
                </button>
                <button
                  className={`${styles.filterButton} ${filter === 'paid' ? styles.filterButtonActive : ''}`}
                  onClick={() => setFilter('paid')}
                >
                  Payantes ({formations.filter(f => !f.isFree).length})
                </button>
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Niveau</h3>
              <div className={styles.filterOptions}>
                <button
                  className={`${styles.filterButton} ${levelFilter === 'all' ? styles.filterButtonActive : ''}`}
                  onClick={() => setLevelFilter('all')}
                >
                  Tous
                </button>
                <button
                  className={`${styles.filterButton} ${levelFilter === 'Débutant' ? styles.filterButtonActive : ''}`}
                  onClick={() => setLevelFilter('Débutant')}
                >
                  Débutant
                </button>
                <button
                  className={`${styles.filterButton} ${levelFilter === 'Intermédiaire' ? styles.filterButtonActive : ''}`}
                  onClick={() => setLevelFilter('Intermédiaire')}
                >
                  Intermédiaire
                </button>
                <button
                  className={`${styles.filterButton} ${levelFilter === 'Avancé' ? styles.filterButtonActive : ''}`}
                  onClick={() => setLevelFilter('Avancé')}
                >
                  Avancé
                </button>
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Catégorie</h3>
              <div className={styles.filterOptions}>
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
          </aside>

          {/* Formations Grid */}
          <div className={styles.mainContent}>
            <div className={styles.resultsHeader}>
              <p className={styles.resultsCount}>
                {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} trouvée{filteredFormations.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className={styles.formationsGrid}>
              {filteredFormations.map((formation) => (
                <Link key={formation.id} href={`/formations/${formation.id}`} className="card">
                  <div className={styles.formationCard}>
                    <div className={styles.formationHeader}>
                      <span className={`badge ${formation.isFree ? 'badge-free' : 'badge-paid'}`}>
                        {formation.isFree ? 'Gratuit' : `${formation.price}€`}
                      </span>
                      <span className="badge badge-level">{formation.level}</span>
                    </div>
                    <h3 className={styles.formationTitle}>{formation.title}</h3>
                    <p className={styles.formationDescription}>{formation.description}</p>
                    <div className={styles.formationMeta}>
                      <span>⏱️ {formation.duration}</span>
                      <span>📚 {formation.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredFormations.length === 0 && (
              <div className={styles.noResults}>
                <p>Aucune formation ne correspond à vos critères.</p>
                <button
                  onClick={() => {
                    setFilter('all');
                    setLevelFilter('all');
                    setCategoryFilter('all');
                  }}
                  className="btn btn-primary"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
