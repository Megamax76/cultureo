# 🚀 Rafale Knowledge Bridge (RKB)

> Plateforme de transfert de connaissances industrielles entre Dassault Aviation et Tata Advanced Systems Limited pour le programme Rafale Marine.

## 📋 Vue d'ensemble

Le **Rafale Knowledge Bridge** est une plateforme numérique intégrée permettant de pérenniser et transférer les savoirs et savoir-faire industriels de Dassault Aviation (France) vers Tata Advanced Systems Limited - TASL (Inde) dans le cadre du transfert de production du Rafale Marine.

### Objectifs principaux

- 📚 **Bible documentaire bilingue** (FR/EN) centralisée et interactive
- 🎓 **LMS augmenté** avec fiches métiers, gestes filmés, check-lists
- 🔍 **Moteur de recherche intelligent** avec IA (RAG)
- 📊 **Supervision complète** pour Dassault (analytics, progression, alertes)
- ✅ **Traçabilité totale** des transferts de compétences
- 🔒 **Sécurité et souveraineté** des données industrielles

## 🏗️ Architecture

```
├── backend/          # NestJS API (Node.js + TypeScript)
├── frontend/         # Next.js App (React + TypeScript)
├── shared/           # Types et constantes partagés
├── infrastructure/   # Docker, Nginx, monitoring
└── docs/             # Documentation technique
```

**Tech Stack**:
- **Backend**: NestJS, PostgreSQL, Prisma, Redis, Elasticsearch
- **Frontend**: Next.js 14, Material-UI, Zustand, React Query
- **AI**: LangChain, OpenAI/Claude API, Pinecone (RAG)
- **Infrastructure**: Docker, Kubernetes, GitHub Actions

Voir [ARCHITECTURE.md](./ARCHITECTURE.md) pour les détails complets.

## 📦 Modules Principaux

| Module | Description |
|--------|-------------|
| **Dashboard** | Tableau de bord KPI, progression, alertes |
| **Bible Dassault-Tata** | Documentation technique par tronçon (T34, T56, etc.) |
| **Tacit Skills Hub** | Fiches gestes métiers vidéo (3-5 min) |
| **Formation & Certification** | Parcours LMS niveau 1-4, quiz, badges |
| **Outils & Outillages** | Bibliothèque 3D, workflow transfert FR→IN |
| **Safety & Quality** | Gestion RNC (non-conformités), protocole qualité |
| **Administration** | Analytics, supervision, gestion droits |
| **Ask RKB** | Chatbot RAG (recherche sémantique intelligente) |

## 🚀 Quick Start

### Prérequis

- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis

### Installation

```bash
# Cloner le repository
git clone https://github.com/Megamax76/cultureo.git
cd cultureo

# Installer les dépendances (workspace root)
npm install

# Copier les fichiers .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Démarrer les services (Docker)
docker-compose up -d

# Migrations base de données
cd backend
npx prisma migrate dev
npx prisma db seed

# Démarrer le backend (dev)
npm run start:dev

# Démarrer le frontend (nouvelle console)
cd ../frontend
npm run dev
```

### Accès

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000/api
- **API Docs**: http://localhost:4000/api/docs (Swagger)
- **Adminer (DB)**: http://localhost:8080

### Comptes de test

| Email | Password | Rôle |
|-------|----------|------|
| admin@dassault.fr | Admin123! | DASSAULT_ADMIN |
| user@dassault.fr | User123! | DASSAULT_USER |
| admin@tata.in | Admin123! | TATA_ADMIN |
| user@tata.in | User123! | TATA_USER |

## 🔐 Rôles & Permissions

| Rôle | Permissions |
|------|-------------|
| **DASSAULT_ADMIN** | Supervision complète, analytics, gestion contenu, validation |
| **DASSAULT_USER** | Consultation, contribution Q&A |
| **TATA_ADMIN** | Gestion équipes Inde, suivi formations, déclaration RNC |
| **TATA_USER** | Consultation, formation, certifications |

## 📊 KPI & Métriques

- % de documents consultés
- % de modules formation complétés
- Taux de réussite aux certifications
- RNC ouvertes vs résolues
- Temps moyen par module
- Taux d'adoption par département

## 🌐 Internationalisation

- Interface bilingue **FR** / **EN** (switch dynamique)
- Détection automatique langue navigateur
- Traduction technique DeepL avec validation humaine
- Glossaire Dassault-Tata intégré

## 🧪 Tests

```bash
# Tests unitaires backend
cd backend
npm run test

# Tests e2e backend
npm run test:e2e

# Tests frontend
cd ../frontend
npm run test

# Coverage
npm run test:cov
```

## 📚 Documentation

- [Architecture détaillée](./ARCHITECTURE.md)
- [Guide API](./docs/api/README.md) (à venir)
- [Guide utilisateur](./docs/user-guide/README.md) (à venir)
- [Guide déploiement](./docs/deployment/README.md) (à venir)

## 🤝 Contribution

Ce projet est développé par **Dassault Aviation** en collaboration avec **Tata Advanced Systems Limited**.

### Workflow Git

1. Créer une branche feature: `git checkout -b feature/ma-fonctionnalite`
2. Committer: `git commit -m "feat: description"`
3. Pusher: `git push origin feature/ma-fonctionnalite`
4. Créer une Pull Request

### Conventions

- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/)
- **Code**: ESLint + Prettier (auto-format)
- **Branches**: `feature/*`, `fix/*`, `docs/*`, `refactor/*`

## 📝 Roadmap

### Phase 1 - MVP (3 mois) ✅
- [x] Architecture & setup
- [ ] Auth & users
- [ ] Documents module
- [ ] Skills module
- [ ] Dashboard v1

### Phase 2 (6 mois)
- [ ] Training & certification
- [ ] Quality/RNC module
- [ ] Advanced analytics
- [ ] RAG search (Ask RKB)

### Phase 3 (9 mois)
- [ ] Tools/outillages
- [ ] Admin supervision
- [ ] Mobile app (React Native)
- [ ] Offline mode

### Phase 4 (12+ mois)
- [ ] IA analyse RNC
- [ ] Reconnaissance gestuelle (computer vision)
- [ ] AR sur outillages
- [ ] Intégration ERP

## 📄 Licence

Propriétaire - **Dassault Aviation** © 2025

Usage strictement réservé au transfert de connaissances Dassault Aviation → Tata ASL dans le cadre du programme Rafale Marine.

## 📧 Contact

- **Support**: knowledge-bridge-support@dassault-aviation.com
- **Documentation**: https://rkb-docs.dassault-aviation.com
- **Équipe projet**:
  - Chef de projet: [À définir]
  - Tech Lead Backend: [À définir]
  - Tech Lead Frontend: [À définir]
  - Product Owner Dassault: [À définir]
  - Product Owner Tata: [À définir]

---

**Made with ❤️ by Dassault Aviation & Tata ASL for the Rafale Marine program**
