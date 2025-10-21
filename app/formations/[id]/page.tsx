import Link from 'next/link';
import { formations } from '@/data/formations';
import { notFound } from 'next/navigation';
import styles from './formation-detail.module.css';

export function generateStaticParams() {
  return formations.map((formation) => ({
    id: formation.id,
  }));
}

export default function FormationDetailPage({ params }: { params: { id: string } }) {
  const formation = formations.find(f => f.id === params.id);

  if (!formation) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className="container">
          <Link href="/formations" className={styles.backLink}>
            ← Retour aux formations
          </Link>
          <div className={styles.headerContent}>
            <div className={styles.badges}>
              <span className={`badge ${formation.isFree ? 'badge-free' : 'badge-paid'}`}>
                {formation.isFree ? 'Gratuit' : `${formation.price}€`}
              </span>
              <span className="badge badge-level">{formation.level}</span>
              <span className="badge">{formation.category}</span>
            </div>
            <h1 className={styles.title}>{formation.title}</h1>
            <p className={styles.description}>{formation.description}</p>
            <div className={styles.meta}>
              <span>⏱️ {formation.duration}</span>
              <span>📚 {formation.content.modules.length} modules</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Objectives */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Objectifs de la formation</h2>
              <ul className={styles.objectivesList}>
                {formation.content.objectives.map((objective, index) => (
                  <li key={index} className={styles.objectiveItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            {/* Modules */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Contenu de la formation</h2>
              <div className={styles.modulesList}>
                {formation.content.modules.map((module, index) => (
                  <div key={index} className={styles.moduleItem}>
                    <div className={styles.moduleNumber}>{index + 1}</div>
                    <div className={styles.moduleContent}>
                      <h3 className={styles.moduleTitle}>{module}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Description détaillée */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>À propos de cette formation</h2>
              <div className={styles.about}>
                <p>
                  Cette formation est conçue pour vous permettre de maîtriser {formation.title.toLowerCase()}.
                  Que vous soyez {formation.level.toLowerCase()}, ce cours vous accompagnera pas à pas dans votre
                  apprentissage.
                </p>
                <p>
                  Avec une durée de {formation.duration}, vous aurez le temps d'assimiler tous les concepts
                  essentiels et de pratiquer à travers des exercices concrets.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className="card">
              <div className={styles.priceCard}>
                <div className={styles.price}>
                  {formation.isFree ? (
                    <div className={styles.priceAmount}>Gratuit</div>
                  ) : (
                    <>
                      <div className={styles.priceAmount}>{formation.price}€</div>
                      <div className={styles.priceLabel}>Accès à vie</div>
                    </>
                  )}
                </div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  {formation.isFree ? 'Commencer gratuitement' : 'S\'inscrire maintenant'}
                </button>
                <div className={styles.features}>
                  <div className={styles.featureItem}>
                    <span>✓</span> Accès illimité
                  </div>
                  <div className={styles.featureItem}>
                    <span>✓</span> {formation.content.modules.length} modules
                  </div>
                  <div className={styles.featureItem}>
                    <span>✓</span> Support communauté
                  </div>
                  <div className={styles.featureItem}>
                    <span>✓</span> Certificat de fin
                  </div>
                </div>
              </div>
            </div>

            {/* Related formations */}
            <div className={styles.relatedSection}>
              <h3 className={styles.relatedTitle}>Formations similaires</h3>
              <div className={styles.relatedList}>
                {formations
                  .filter(f => f.category === formation.category && f.id !== formation.id)
                  .slice(0, 3)
                  .map(related => (
                    <Link key={related.id} href={`/formations/${related.id}`} className={styles.relatedItem}>
                      <div>
                        <div className={styles.relatedItemTitle}>{related.title}</div>
                        <div className={styles.relatedItemMeta}>
                          {related.isFree ? 'Gratuit' : `${related.price}€`} • {related.level}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
