# Cultureo - Référentiel Créa-Comp

Une application web moderne pour explorer et développer les compétences créatives.

## 🎨 Fonctionnalités

- **Interface moderne et intuitive** : Design épuré avec Tailwind CSS et animations fluides
- **Filtrage avancé** : Recherchez et filtrez les compétences par catégorie et niveau
- **Responsive** : Fonctionne parfaitement sur tous les appareils
- **Mode sombre** : Support du thème sombre automatique
- **Interactif** : Cartes animées et interface engageante

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📚 Structure du projet

```
cultureo/
├── app/                  # Pages Next.js App Router
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
├── components/          # Composants React
│   └── CreaCompReferentiel.tsx
├── data/                # Données du référentiel
│   └── creaCompData.ts
└── public/              # Assets statiques
```

## 🎯 Catégories de compétences

1. **Création & Innovation** - Compétences créatives et innovation
2. **Numérique & Technologies** - Maîtrise des outils numériques
3. **Communication & Médiation** - Transmission d'idées créatives
4. **Collaboration & Collectif** - Travail en équipe et co-création
5. **Pensée Critique & Analyse** - Analyse et réflexion créative

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne
- **React 19** - Bibliothèque UI

## 📝 License

ISC
