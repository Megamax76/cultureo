import Link from 'next/link';
import styles from './page.module.css';
import { formations } from '@/data/formations';
import { newsArticles } from '@/data/news';

export default function Home() {
  const featuredFormations = formations.filter(f => f.isFree).slice(0, 3);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Maîtrisez l'Intelligence Artificielle
            </h1>
            <p className={styles.heroSubtitle}>
              Formations gratuites et payantes, glossaire complet et actualités pour comprendre et maîtriser l'IA
            </p>
            <div className={styles.heroButtons}>
              <Link href="/formations" className="btn btn-primary">
                Voir les formations
              </Link>
              <Link href="/glossaire" className="btn btn-secondary">
                Explorer le glossaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{formations.length}</div>
              <div className={styles.statLabel}>Formations</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{formations.filter(f => f.isFree).length}</div>
              <div className={styles.statLabel}>Cours Gratuits</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Définitions</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>Actualités</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Formations */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Formations Gratuites Populaires</h2>
            <Link href="/formations?filter=free" className={styles.sectionLink}>
              Voir toutes les formations gratuites →
            </Link>
          </div>
          <div className={styles.formationsGrid}>
            {featuredFormations.map((formation) => (
              <Link key={formation.id} href={`/formations/${formation.id}`} className="card">
                <div className={styles.formationCard}>
                  <div className={styles.formationHeader}>
                    <span className="badge badge-free">Gratuit</span>
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
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Pourquoi choisir CultureO IA ?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Formations complètes</h3>
              <p>Des cours structurés pour tous les niveaux, du débutant à l'expert</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Contenu gratuit</h3>
              <p>De nombreuses formations gratuites pour démarrer sans investissement</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📖</div>
              <h3>Glossaire détaillé</h3>
              <p>Toutes les définitions et concepts clés de l'IA expliqués simplement</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📰</div>
              <h3>Actualités IA</h3>
              <p>Restez informé des dernières avancées et tendances de l'intelligence artificielle</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Pédagogie adaptée</h3>
              <p>Contenu accessible conçu pour le grand public</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>Apprentissage progressif</h3>
              <p>Parcours structuré pour progresser à votre rythme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Dernières Actualités</h2>
            <Link href="/actualites" className={styles.sectionLink}>
              Voir toutes les actualités →
            </Link>
          </div>
          <div className={styles.newsGrid}>
            {latestNews.map((article) => (
              <Link key={article.id} href={`/actualites/${article.id}`} className="card">
                <div className={styles.newsCard}>
                  <span className={styles.newsCategory}>{article.category}</span>
                  <h3 className={styles.newsTitle}>{article.title}</h3>
                  <p className={styles.newsSummary}>{article.summary}</p>
                  <div className={styles.newsMeta}>
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <span>Par {article.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Prêt à commencer votre apprentissage ?</h2>
            <p>Rejoignez des milliers d'apprenants et découvrez l'univers fascinant de l'IA</p>
            <Link href="/formations" className="btn btn-primary">
              Commencer maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
