# Rafale Knowledge Bridge (RKB) - Architecture

## 🎯 Vision
Plateforme de transfert de connaissances industrielles entre Dassault Aviation (France) et Tata Advanced Systems Limited (Inde) pour le programme Rafale Marine.

## 🏗️ Architecture Technique

### Tech Stack

#### Backend
- **Runtime**: Node.js 20+ avec TypeScript
- **Framework**: NestJS (architecture modulaire enterprise)
- **Base de données**:
  - PostgreSQL (données structurées, relationnelles)
  - MongoDB (documents, logs, contenu non structuré)
- **ORM**: Prisma (type-safe, migrations automatiques)
- **Authentification**: JWT + Passport (multi-rôles France/Inde)
- **File Storage**: MinIO (compatible S3, self-hosted pour souveraineté)
- **Search**: Elasticsearch (recherche full-text FR/EN)
- **Cache**: Redis (sessions, cache API)
- **Queue**: BullMQ (traitement async vidéos, exports)

#### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI v5 (thème industriel personnalisé)
- **State**: Zustand + React Query (cache API)
- **i18n**: next-i18next (FR/EN)
- **Charts**: Recharts (dashboards analytics)
- **3D Viewer**: Three.js (visualisation CAD)
- **Video**: Video.js (player vidéo gestes métiers)

#### AI/ML
- **RAG**: LangChain + OpenAI/Claude API
- **Vector DB**: Pinecone ou Weaviate (embeddings documents)
- **Translation**: DeepL API (traduction technique FR/EN)
- **OCR**: Tesseract.js (numérisation documents)

#### Infrastructure
- **Containerization**: Docker + Docker Compose
- **Reverse Proxy**: Nginx
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logs**: Winston + ELK Stack (optionnel)

## 📁 Structure du Projet

```
rafale-knowledge-bridge/
├── backend/                    # NestJS API
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/          # Authentification JWT
│   │   │   ├── users/         # Gestion utilisateurs
│   │   │   ├── documents/     # Bible documentaire
│   │   │   ├── skills/        # Fiches gestes métiers
│   │   │   ├── training/      # LMS & certifications
│   │   │   ├── quality/       # RNC & non-conformités
│   │   │   ├── tools/         # Outillages & jumeaux numériques
│   │   │   ├── analytics/     # KPI & supervision
│   │   │   ├── search/        # Moteur recherche intelligent
│   │   │   └── notifications/ # Alertes & notifications
│   │   ├── common/
│   │   │   ├── guards/        # AuthGuard, RolesGuard
│   │   │   ├── decorators/    # Custom decorators
│   │   │   ├── filters/       # Exception filters
│   │   │   └── interceptors/  # Logging, Transform
│   │   ├── prisma/
│   │   │   └── schema.prisma  # Database schema
│   │   └── main.ts
│   ├── test/
│   ├── Dockerfile
│   └── package.json
│
├── frontend/                   # Next.js App
│   ├── src/
│   │   ├── app/               # App Router
│   │   │   ├── (auth)/        # Login, register
│   │   │   ├── (dashboard)/   # Main app
│   │   │   │   ├── home/      # Tableau de bord
│   │   │   │   ├── bible/     # Bible Dassault-Tata
│   │   │   │   ├── skills/    # Tacit Skills Hub
│   │   │   │   ├── training/  # Formation & certification
│   │   │   │   ├── tools/     # Outils & outillages
│   │   │   │   ├── quality/   # Safety & Quality
│   │   │   │   └── admin/     # Administration
│   │   │   └── api/           # API routes (proxy)
│   │   ├── components/
│   │   │   ├── layout/        # Layout, Sidebar, Header
│   │   │   ├── common/        # Buttons, Cards, Modals
│   │   │   ├── forms/         # Form components
│   │   │   ├── charts/        # Analytics charts
│   │   │   └── viewers/       # PDF, 3D, Video viewers
│   │   ├── lib/
│   │   │   ├── api/           # API client
│   │   │   ├── hooks/         # Custom hooks
│   │   │   └── utils/         # Utilities
│   │   ├── store/             # Zustand stores
│   │   ├── styles/            # Global styles, theme
│   │   └── types/             # TypeScript types
│   ├── public/
│   │   ├── locales/           # i18n translations
│   │   └── assets/            # Static assets
│   ├── Dockerfile
│   └── package.json
│
├── shared/                     # Code partagé
│   ├── types/                 # TypeScript interfaces
│   └── constants/             # Constantes communes
│
├── infrastructure/
│   ├── docker-compose.yml     # Services locaux
│   ├── nginx/                 # Config reverse proxy
│   └── monitoring/            # Prometheus, Grafana
│
├── docs/
│   ├── api/                   # Documentation API
│   ├── deployment/            # Guides déploiement
│   └── user-guide/            # Manuel utilisateur
│
├── .github/
│   └── workflows/             # CI/CD pipelines
│
├── README.md
├── ARCHITECTURE.md
└── package.json               # Root workspace
```

## 🗄️ Schéma de Base de Données

### PostgreSQL (Données structurées)

#### Users
- id, email, password_hash, role (DASSAULT_ADMIN, DASSAULT_USER, TATA_ADMIN, TATA_USER)
- country (FR, IN), language (fr, en), department, certification_level
- created_at, updated_at, last_login

#### Documents
- id, code, title_fr, title_en, type (NORM, PROCEDURE, DATAPACK)
- section (T34, T56, etc.), status (DRAFT, VALIDATED, OBSOLETE)
- file_url, thumbnail_url, 3d_model_url
- created_by, validated_by, version, tags[]

#### GestesMetiers (Skills)
- id, title_fr, title_en, description_fr, description_en
- video_url, duration, difficulty_level (BASIC, INTERMEDIATE, ADVANCED)
- category (ASSEMBLY, PROCESS, CONTROL, REPAIR, TOOLING)
- procedure_ids[], common_errors[], best_practices[]

#### TrainingModules
- id, title_fr, title_en, level (1-4), estimated_duration
- content (JSON: steps, quizzes, media), prerequisites[]
- skill_ids[], document_ids[]

#### Certifications
- id, user_id, module_id, score, status (PENDING, PASSED, FAILED)
- attempts, completed_at, certificate_url

#### Tools (Outillages)
- id, name, code, description_fr, description_en
- 3d_model_url, calibration_procedure, photos[]
- location_fr, location_in, status (IN_FR, TRANSFERRED, IN_IN, VALIDATED)

#### NonConformities (RNC)
- id, reference, title, description, severity (LOW, MEDIUM, HIGH, CRITICAL)
- detected_by, detected_at, section, document_id, skill_id
- status (OPEN, IN_PROGRESS, RESOLVED, CLOSED)
- root_cause, corrective_action, resolved_at

#### Questions
- id, author_id, question_text, related_document_id, related_skill_id
- status (PENDING, ANSWERED, VALIDATED), answer_text, answered_by
- is_public, votes

#### ActivityLogs
- id, user_id, action (VIEW, DOWNLOAD, COMPLETE, SEARCH)
- resource_type, resource_id, metadata (JSON), timestamp

### MongoDB (Documents flexibles)

#### search_index (Elasticsearch)
- Indexation full-text de tous les documents et fiches
- Embeddings vectoriels pour RAG

## 🔐 Sécurité & Rôles

### Rôles
1. **DASSAULT_ADMIN**: Supervision complète, analytics, gestion contenu
2. **DASSAULT_USER**: Consultation, contribution questions/réponses
3. **TATA_ADMIN**: Gestion équipes Inde, suivi formations, RNC
4. **TATA_USER**: Consultation, formation, certifications

### Permissions
- Documents sensibles: accès restreint DASSAULT_ADMIN
- Logs d'audit complets
- Chiffrement des données sensibles (AES-256)
- HTTPS obligatoire
- Rate limiting API
- CORS configuré

## 🚀 Modules Principaux

### 1. Dashboard (Home)
- KPI en temps réel (React Query + WebSockets)
- Carte de progression transfert FR → IN
- Alertes intelligentes (documents obsolètes, RNC, compétences manquantes)
- Fil d'actualité

### 2. Bible Dassault-Tata
- Arborescence par tronçon (T34, T56, etc.)
- Recherche multicritère avancée
- Visualiseur PDF/3D intégré
- Annotation et commentaires
- Versioning documents
- Q&A contextuelle

### 3. Tacit Skills Hub
- Galerie de micro-modules vidéo (3-5 min)
- Séquence pédagogique: Contexte → Démonstration → Vigilance → Quiz
- Mauvaises pratiques vs bonnes pratiques
- Favoris et progression personnelle

### 4. Formation & Certification
- Parcours progressif niveau 1-4
- Quiz interactifs, score minimum 80%
- Génération certificats PDF
- Dashboard manager (vue équipe)
- Rappels automatiques

### 5. Outils & Outillages
- Bibliothèque 3D (Three.js viewer)
- Workflow transfert FR → IN
- Contrôle installation (formulaire + photos + QR code)
- Historique complet

### 6. Safety & Quality Center
- Déclaration RNC (formulaire structuré)
- Workflow validation multi-niveaux
- Dashboard RNC par type/section/sévérité
- Analyse causes récurrentes (future IA)

### 7. Administration / Analytics
- Heatmap usage par section
- Rapports export CSV/PDF/Excel
- Suggestions formations (ML)
- Gestion droits utilisateurs
- Journal d'audit

### 8. Moteur de Recherche Intelligent (RAG)
- Recherche sémantique FR/EN
- "Ask RKB" chatbot documentaire
- Sources citées et traçables
- Traduction à la volée

## 📊 KPI & Métriques

- % documents consultés vs total
- % modules formation complétés
- Taux de réussite certifications
- Temps moyen par module
- Top documents/skills consultés
- RNC ouvertes vs résolues (délai moyen)
- Taux d'adoption par département
- Questions non répondues (backlog)

## 🌐 Internationalisation

- Interface bilingue FR/EN (switch dynamique)
- Contenu dupliqué FR/EN systématique
- Glossaire technique Dassault-Tata
- Détection langue navigateur
- Traduction automatique (DeepL) avec validation humaine

## 🎨 Design System

### Thème Industriel Dassault
- **Couleurs**:
  - Primary: Bleu marine (#003366)
  - Secondary: Gris acier (#536878)
  - Accent: Orange Dassault (#FF6B35)
  - Success: Vert (#4CAF50)
  - Warning: Orange (#FF9800)
  - Error: Rouge (#F44336)
  - Background: Blanc (#FFFFFF), Gris clair (#F5F5F5)

- **Typographie**:
  - Headings: Roboto Bold
  - Body: Roboto Regular
  - Monospace: Roboto Mono (codes, références)

- **Navigation**:
  - Sidebar latérale rétractable (icônes + labels)
  - Breadcrumb en haut
  - Top bar: logo, recherche, profil, switch langue

- **Components**:
  - Cards avec ombre subtile
  - Buttons avec feedback hover/active
  - Tooltips explicatifs
  - Loaders inspirés cockpit Rafale

## 🔄 CI/CD Pipeline

### GitHub Actions
1. **On Push (feature branch)**:
   - Lint (ESLint + Prettier)
   - Type checking (TypeScript)
   - Unit tests (Jest)
   - Build backend + frontend

2. **On Pull Request**:
   - Tous les checks ci-dessus
   - Integration tests
   - Security scan (Snyk)
   - Lighthouse performance

3. **On Merge to Main**:
   - Build Docker images
   - Push to registry
   - Deploy to staging
   - Smoke tests
   - (Manuel) Deploy to production

## 📦 Déploiement

### Environnements
- **Local**: Docker Compose (dev)
- **Staging**: Kubernetes cluster (pre-prod)
- **Production**: Kubernetes cluster (HA, scalabilité)

### Services
- 3x Backend API (load balanced)
- 2x Frontend SSR (load balanced)
- PostgreSQL cluster (master-replica)
- MongoDB replica set
- Redis cluster
- Elasticsearch cluster
- MinIO distributed

## 🔮 Roadmap Future

### Phase 1 (MVP - 3 mois)
- ✅ Auth & users
- ✅ Documents module
- ✅ Skills module
- ✅ Basic search
- ✅ Dashboard v1

### Phase 2 (6 mois)
- ✅ Training & certification
- ✅ Quality/RNC module
- ✅ Advanced analytics
- ✅ RAG search

### Phase 3 (9 mois)
- ✅ Tools/outillages
- ✅ Admin supervision
- ✅ Mobile app (React Native)
- ✅ Offline mode

### Phase 4 (12+ mois)
- 🔮 IA analyse RNC récurrentes
- 🔮 Génération automatique quiz
- 🔮 Reconnaissance gestuelle (computer vision)
- 🔮 Réalité augmentée (AR) sur outillages
- 🔮 Intégration ERP Dassault/Tata

---

**Maintenance**: Dassault Aviation + Tata ASL
**Support**: knowledge-bridge-support@dassault-aviation.com
**Documentation**: https://rkb-docs.dassault-aviation.com
