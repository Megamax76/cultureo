# CultureO IA - Plateforme d'Apprentissage de l'Intelligence Artificielle

Une plateforme moderne et accessible pour apprendre l'intelligence artificielle, destinée au grand public.

## Fonctionnalités

### Formations
- **Formations gratuites et payantes** : Large catalogue de cours pour tous les niveaux
- **Filtres avancés** : Par prix (gratuit/payant), niveau (débutant/intermédiaire/avancé) et catégorie
- **Pages détaillées** : Contenu structuré avec modules, objectifs et informations complètes
- **8 formations disponibles** : De l'introduction à l'IA aux applications en entreprise

### Glossaire
- **25+ définitions** : Tous les termes et concepts clés de l'IA expliqués simplement
- **Recherche intelligente** : Recherche en temps réel dans les termes et définitions
- **Filtres par catégorie** : Général, Technique, Méthodes, Domaines, Éthique, etc.
- **Termes liés** : Navigation entre concepts connexes
- **Exemples concrets** : Illustrations pratiques pour chaque terme

### Actualités
- **Articles d'actualité IA** : Dernières nouvelles et avancées en intelligence artificielle
- **Filtres par catégorie** : Technologie, Recherche, Régulation, Santé, Société
- **Articles détaillés** : Contenu structuré avec analyses approfondies
- **Suggestions d'articles similaires** : Pour approfondir vos lectures

### Design & UX
- **Design moderne** : Interface élégante avec dégradés et animations
- **Responsive** : Optimisé pour tous les écrans (mobile, tablette, desktop)
- **Mode sombre** : Adaptation automatique selon les préférences système
- **Navigation intuitive** : Menu sticky et navigation fluide
- **Expérience utilisateur optimisée** : Filtres, recherche et interactions fluides

## Technologies

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage fort pour un code robuste
- **CSS Modules** : Styles scopés et maintenables
- **React Hooks** : État et logique avec useMemo, useState, useEffect

## Installation

### Prérequis
- Node.js 18.x ou supérieur
- npm ou yarn

### Étapes d'installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/votre-username/cultureo.git
cd cultureo
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version optimisée pour la production
- `npm run start` : Lance le serveur de production
- `npm run lint` : Vérifie le code avec ESLint

## Structure du projet

```
cultureo/
├── app/                        # Pages Next.js (App Router)
│   ├── formations/            # Section formations
│   │   ├── [id]/             # Pages détails formations
│   │   └── page.tsx          # Liste des formations
│   ├── glossaire/            # Section glossaire
│   │   └── page.tsx          # Page glossaire
│   ├── actualites/           # Section actualités
│   │   ├── [id]/             # Pages détails articles
│   │   └── page.tsx          # Liste des articles
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Page d'accueil
│   └── globals.css           # Styles globaux
├── components/               # Composants réutilisables
│   ├── Header.tsx            # Navigation principale
│   └── Footer.tsx            # Pied de page
├── data/                     # Données de l'application
│   ├── formations.ts         # Catalogue des formations
│   ├── glossary.ts           # Définitions IA
│   └── news.ts               # Articles d'actualité
├── public/                   # Fichiers statiques
└── package.json              # Dépendances du projet
```

## Personnalisation

### Ajouter une formation

Éditez `data/formations.ts` :

```typescript
{
  id: '9',
  title: 'Titre de la formation',
  description: 'Description...',
  duration: '4 semaines',
  level: 'Débutant',
  price: 0,
  isFree: true,
  category: 'Catégorie',
  image: '/images/formation.jpg',
  content: {
    modules: ['Module 1', 'Module 2'],
    objectives: ['Objectif 1', 'Objectif 2']
  }
}
```

### Ajouter un terme au glossaire

Éditez `data/glossary.ts` :

```typescript
{
  id: '26',
  term: 'Nouveau terme',
  definition: 'Définition du terme...',
  category: 'Général',
  relatedTerms: ['Terme lié 1', 'Terme lié 2'],
  example: 'Exemple concret...'
}
```

### Ajouter un article d'actualité

Éditez `data/news.ts` :

```typescript
{
  id: '9',
  title: 'Titre de l\'article',
  summary: 'Résumé...',
  content: 'Contenu complet...',
  date: '2025-01-21',
  category: 'Technologie',
  author: 'Auteur',
  image: '/images/article.jpg',
  tags: ['Tag1', 'Tag2']
}
```

## Déploiement

### Vercel (recommandé)

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre dépôt GitHub
3. Déployer automatiquement

### Autres plateformes

```bash
npm run build
npm run start
```

## Roadmap

- [ ] Système d'authentification utilisateur
- [ ] Progression et suivi des formations
- [ ] Quiz et exercices interactifs
- [ ] Certificats de fin de formation
- [ ] Forum communautaire
- [ ] API REST pour les données
- [ ] CMS pour gérer le contenu
- [ ] Multilingue (EN, ES, etc.)
- [ ] Mode hors ligne (PWA)
- [ ] Notifications des nouvelles actualités

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

Fait avec ❤️ pour démocratiser l'apprentissage de l'IA