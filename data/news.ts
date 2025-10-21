export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'GPT-4 Turbo : OpenAI lance une version plus rapide et moins chère',
    summary: 'OpenAI annonce GPT-4 Turbo, une version optimisée de son modèle phare avec une fenêtre de contexte étendue et des coûts réduits.',
    content: `OpenAI a dévoilé GPT-4 Turbo lors de sa conférence DevDay. Cette nouvelle version apporte plusieurs améliorations majeures :

- **Fenêtre de contexte étendue** : 128 000 tokens (équivalent à 300 pages)
- **Réduction des coûts** : 3x moins cher pour l'input, 2x pour l'output
- **Connaissances à jour** : données jusqu'en avril 2024
- **Nouvelles capacités** : vision, DALL-E 3 intégré, text-to-speech

Cette mise à jour vise à rendre l'IA plus accessible aux développeurs et entreprises.`,
    date: '2024-11-06',
    category: 'Technologie',
    author: 'Marie Dubois',
    image: '/images/news-gpt4-turbo.jpg',
    tags: ['OpenAI', 'GPT-4', 'LLM']
  },
  {
    id: '2',
    title: 'L\'Union Européenne adopte l\'AI Act : première réglementation mondiale de l\'IA',
    summary: 'Le Parlement européen vote l\'AI Act, établissant des règles strictes pour l\'utilisation de l\'intelligence artificielle.',
    content: `L'Union Européenne a franchi une étape historique en adoptant l'AI Act, la première législation complète sur l'intelligence artificielle au monde.

**Points clés de la réglementation :**

- Classification des systèmes IA par niveau de risque
- Interdiction de certaines applications (notation sociale, manipulation)
- Obligations de transparence pour les IA génératives
- Sanctions pouvant atteindre 7% du chiffre d'affaires mondial

Cette loi vise à protéger les citoyens tout en favorisant l'innovation responsable.`,
    date: '2024-12-13',
    category: 'Régulation',
    author: 'Jean Martin',
    image: '/images/news-ai-act.jpg',
    tags: ['Régulation', 'Europe', 'Éthique']
  },
  {
    id: '3',
    title: 'AlphaFold 3 : révolution dans la prédiction des structures moléculaires',
    summary: 'DeepMind présente AlphaFold 3, capable de prédire la structure de protéines, ADN, ARN et autres molécules.',
    content: `Google DeepMind a dévoilé AlphaFold 3, une avancée majeure pour la recherche biomédicale.

**Nouveautés d'AlphaFold 3 :**

- Prédiction de toutes les molécules de la vie (pas seulement les protéines)
- Précision de 50% supérieure aux méthodes précédentes
- Modélisation des interactions entre molécules
- Accès gratuit pour la recherche académique

Cette IA pourrait accélérer la découverte de nouveaux médicaments et notre compréhension du vivant.`,
    date: '2024-05-08',
    category: 'Recherche',
    author: 'Sophie Laurent',
    image: '/images/news-alphafold3.jpg',
    tags: ['DeepMind', 'Santé', 'Biologie']
  },
  {
    id: '4',
    title: 'Sora : l\'IA de génération vidéo d\'OpenAI impressionne',
    summary: 'OpenAI dévoile Sora, un modèle capable de générer des vidéos réalistes de 60 secondes à partir de texte.',
    content: `Sora, le nouveau modèle d'OpenAI, repousse les limites de la génération vidéo par IA.

**Capacités de Sora :**

- Génération de vidéos jusqu'à 60 secondes
- Compréhension de la physique et du mouvement
- Multiples personnages et scènes complexes
- Cohérence temporelle et spatiale

Les vidéos de démonstration montrent une qualité impressionnante, soulevant des questions sur l'authenticité du contenu numérique.`,
    date: '2024-02-15',
    category: 'Technologie',
    author: 'Pierre Durand',
    image: '/images/news-sora.jpg',
    tags: ['OpenAI', 'Vidéo', 'Génération']
  },
  {
    id: '5',
    title: 'Claude 3 : Anthropic lance son modèle le plus performant',
    summary: 'Claude 3 Opus surpasse GPT-4 sur plusieurs benchmarks et offre une fenêtre de contexte de 200 000 tokens.',
    content: `Anthropic frappe fort avec Claude 3, disponible en trois versions : Haiku, Sonnet et Opus.

**Caractéristiques principales :**

- **Claude 3 Opus** : performances supérieures à GPT-4
- **Fenêtre de contexte** : 200 000 tokens
- **Capacités multimodales** : texte et vision
- **Refus réduits** : moins de faux refus qu'avant

Claude 3 se positionne comme une alternative sérieuse à GPT-4 pour les entreprises.`,
    date: '2024-03-04',
    category: 'Technologie',
    author: 'Laura Petit',
    image: '/images/news-claude3.jpg',
    tags: ['Anthropic', 'Claude', 'LLM']
  },
  {
    id: '6',
    title: 'L\'IA au service de la lutte contre le changement climatique',
    summary: 'Des chercheurs utilisent le machine learning pour optimiser les énergies renouvelables et prédire les événements climatiques.',
    content: `L'intelligence artificielle devient un allié crucial dans la lutte contre le réchauffement climatique.

**Applications concrètes :**

- Optimisation des réseaux électriques intelligents
- Prédiction de la production éolienne et solaire
- Surveillance de la déforestation par satellite
- Modélisation climatique plus précise
- Réduction de la consommation énergétique des bâtiments

Cependant, l'empreinte carbone de l'entraînement des modèles IA reste un défi à relever.`,
    date: '2024-10-22',
    category: 'Société',
    author: 'Thomas Bernard',
    image: '/images/news-climate-ai.jpg',
    tags: ['Climat', 'Environnement', 'Applications']
  },
  {
    id: '7',
    title: 'Meta lance LLaMA 3 : un modèle open source performant',
    summary: 'Meta rend disponible LLaMA 3, un modèle de langage open source rivalisant avec les solutions propriétaires.',
    content: `Meta poursuit sa stratégie open source avec LLaMA 3, disponible en versions 8B et 70B.

**Points forts de LLaMA 3 :**

- Performances comparables à GPT-3.5
- Licence permissive pour usage commercial
- Optimisé pour l'efficacité
- Multilinguisme amélioré
- Communauté active de développeurs

Cette approche open source démocratise l'accès aux modèles de langage avancés.`,
    date: '2024-04-18',
    category: 'Technologie',
    author: 'Alice Moreau',
    image: '/images/news-llama3.jpg',
    tags: ['Meta', 'Open Source', 'LLM']
  },
  {
    id: '8',
    title: 'Les assistants IA arrivent dans les hôpitaux français',
    summary: 'Plusieurs établissements hospitaliers testent des assistants IA pour aider au diagnostic et à la prise de décision médicale.',
    content: `Des hôpitaux français expérimentent l'utilisation d'assistants IA pour améliorer les soins.

**Cas d'usage :**

- Aide au diagnostic d'images médicales
- Détection précoce de septicémie
- Optimisation des parcours de soins
- Analyse de dossiers patients
- Rédaction automatisée de comptes-rendus

Les médecins restent décisionnaires, l'IA servant d'outil d'aide à la décision.`,
    date: '2025-01-15',
    category: 'Santé',
    author: 'Dr. Caroline Rousseau',
    image: '/images/news-health-ai.jpg',
    tags: ['Santé', 'Médecine', 'France']
  }
];
