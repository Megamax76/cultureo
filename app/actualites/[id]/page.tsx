import Link from 'next/link';
import { newsArticles } from '@/data/news';
import { notFound } from 'next/navigation';
import styles from './article-detail.module.css';

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }));
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = newsArticles.find(a => a.id === params.id);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className={styles.page}>
      <article>
        {/* Header */}
        <div className={styles.header}>
          <div className="container">
            <Link href="/actualites" className={styles.backLink}>
              ← Retour aux actualités
            </Link>
            <div className={styles.headerContent}>
              <div className={styles.meta}>
                <span className={styles.category}>{article.category}</span>
                <time className={styles.date}>
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <h1 className={styles.title}>{article.title}</h1>
              <p className={styles.summary}>{article.summary}</p>
              <div className={styles.author}>Par {article.author}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className={styles.content}>
            <div className={styles.mainContent}>
              <div className={styles.articleContent}>
                {article.content.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph is a heading (starts with ##)
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className={styles.contentHeading}>
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  // Check if paragraph is a list item (starts with -)
                  if (paragraph.includes('\n-')) {
                    const [title, ...items] = paragraph.split('\n');
                    return (
                      <div key={index}>
                        {title && <p className={styles.contentParagraph}>{title}</p>}
                        <ul className={styles.contentList}>
                          {items
                            .filter(item => item.startsWith('-'))
                            .map((item, i) => (
                              <li key={i}>{item.replace(/^-\s\*\*(.+?)\*\*:?\s?/, '').replace(/\*\*(.+?)\*\*/g, '$1')}</li>
                            ))}
                        </ul>
                      </div>
                    );
                  }
                  // Regular paragraph
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className={styles.contentParagraph}>
                        {paragraph.replace(/\*\*(.+?)\*\*/g, '$1')}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                <strong>Tags :</strong>
                <div className={styles.tagList}>
                  {article.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            {relatedArticles.length > 0 && (
              <aside className={styles.sidebar}>
                <div className={styles.relatedSection}>
                  <h3 className={styles.relatedTitle}>Articles similaires</h3>
                  <div className={styles.relatedList}>
                    {relatedArticles.map(related => (
                      <Link key={related.id} href={`/actualites/${related.id}`} className={styles.relatedItem}>
                        <div>
                          <div className={styles.relatedCategory}>{related.category}</div>
                          <div className={styles.relatedItemTitle}>{related.title}</div>
                          <div className={styles.relatedDate}>
                            {new Date(related.date).toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
