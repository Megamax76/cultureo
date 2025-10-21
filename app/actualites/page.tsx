'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { newsArticles } from '@/data/news';
import styles from './actualites.module.css';

export default function ActualitesPage() {
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(newsArticles.map(a => a.category)));
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    const filtered = categoryFilter === 'all'
      ? newsArticles
      : newsArticles.filter(article => article.category === categoryFilter);

    // Sort by date (most recent first)
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [categoryFilter]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <h1>Actualités IA</h1>
          <p className={styles.subtitle}>
            Restez informé des dernières avancées en intelligence artificielle
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.filterSection}>
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
            <p>{filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}</p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className={styles.articlesGrid}>
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/actualites/${article.id}`} className="card">
                  <article className={styles.articleCard}>
                    <div className={styles.articleHeader}>
                      <span className={styles.articleCategory}>{article.category}</span>
                      <time className={styles.articleDate}>
                        {new Date(article.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    <h2 className={styles.articleTitle}>{article.title}</h2>
                    <p className={styles.articleSummary}>{article.summary}</p>
                    <div className={styles.articleFooter}>
                      <span className={styles.articleAuthor}>Par {article.author}</span>
                      <div className={styles.articleTags}>
                        {article.tags.slice(0, 3).map(tag => (
                          <span key={tag} className={styles.tag}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>Aucun article trouvé.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
