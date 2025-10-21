export interface Formation {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  price: number;
  isFree: boolean;
  category: string;
  image: string;
  content: {
    modules: string[];
    objectives: string[];
  };
}

export const formations: Formation[] = [
  {
    id: '1',
    title: 'Introduction à l\'Intelligence Artificielle',
    description: 'Découvrez les fondamentaux de l\'IA, du machine learning aux réseaux de neurones. Parfait pour les débutants.',
    duration: '4 semaines',
    level: 'Débutant',
    price: 0,
    isFree: true,
    category: 'Fondamentaux',
    image: '/images/ia-intro.jpg',
    content: {
      modules: [
        'Qu\'est-ce que l\'IA ?',
        'Histoire et évolution de l\'IA',
        'Types d\'intelligence artificielle',
        'Applications concrètes de l\'IA',
        'Éthique et IA'
      ],
      objectives: [
        'Comprendre les concepts de base de l\'IA',
        'Identifier les différents types d\'IA',
        'Reconnaître les applications de l\'IA au quotidien'
      ]
    }
  },
  {
    id: '2',
    title: 'Machine Learning pour Débutants',
    description: 'Apprenez les bases du machine learning avec des exemples pratiques et des exercices interactifs.',
    duration: '6 semaines',
    level: 'Débutant',
    price: 0,
    isFree: true,
    category: 'Machine Learning',
    image: '/images/ml-basics.jpg',
    content: {
      modules: [
        'Introduction au Machine Learning',
        'Apprentissage supervisé',
        'Apprentissage non supervisé',
        'Algorithmes de base',
        'Évaluation des modèles'
      ],
      objectives: [
        'Comprendre les principes du ML',
        'Créer votre premier modèle',
        'Évaluer la performance d\'un modèle'
      ]
    }
  },
  {
    id: '3',
    title: 'Deep Learning et Réseaux de Neurones',
    description: 'Maîtrisez les réseaux de neurones profonds et leurs applications modernes.',
    duration: '8 semaines',
    level: 'Intermédiaire',
    price: 199,
    isFree: false,
    category: 'Deep Learning',
    image: '/images/deep-learning.jpg',
    content: {
      modules: [
        'Architecture des réseaux de neurones',
        'Réseaux de neurones convolutifs (CNN)',
        'Réseaux de neurones récurrents (RNN)',
        'Transformers et attention',
        'Optimisation et régularisation',
        'Projets pratiques'
      ],
      objectives: [
        'Construire des réseaux de neurones complexes',
        'Appliquer le deep learning à des problèmes réels',
        'Optimiser les performances des modèles'
      ]
    }
  },
  {
    id: '4',
    title: 'Traitement du Langage Naturel (NLP)',
    description: 'Explorez le NLP et créez des applications de traitement du langage.',
    duration: '6 semaines',
    level: 'Intermédiaire',
    price: 149,
    isFree: false,
    category: 'NLP',
    image: '/images/nlp.jpg',
    content: {
      modules: [
        'Introduction au NLP',
        'Prétraitement du texte',
        'Embeddings et représentation',
        'Modèles de langage',
        'Applications : chatbots, traduction, analyse de sentiment'
      ],
      objectives: [
        'Comprendre le traitement du langage naturel',
        'Créer un chatbot simple',
        'Analyser des sentiments dans du texte'
      ]
    }
  },
  {
    id: '5',
    title: 'Vision par Ordinateur',
    description: 'Apprenez à créer des systèmes de reconnaissance d\'images et de vidéos.',
    duration: '8 semaines',
    level: 'Intermédiaire',
    price: 179,
    isFree: false,
    category: 'Computer Vision',
    image: '/images/computer-vision.jpg',
    content: {
      modules: [
        'Fondamentaux de la vision par ordinateur',
        'Détection d\'objets',
        'Segmentation d\'images',
        'Reconnaissance faciale',
        'Projets pratiques'
      ],
      objectives: [
        'Créer des systèmes de détection d\'objets',
        'Implémenter la reconnaissance faciale',
        'Traiter des flux vidéo en temps réel'
      ]
    }
  },
  {
    id: '6',
    title: 'IA Générative : ChatGPT, Midjourney et plus',
    description: 'Découvrez les modèles génératifs et créez du contenu avec l\'IA.',
    duration: '4 semaines',
    level: 'Débutant',
    price: 0,
    isFree: true,
    category: 'IA Générative',
    image: '/images/generative-ai.jpg',
    content: {
      modules: [
        'Introduction à l\'IA générative',
        'Les grands modèles de langage (LLM)',
        'Génération d\'images',
        'Prompt engineering',
        'Cas d\'usage professionnels'
      ],
      objectives: [
        'Utiliser efficacement les outils d\'IA générative',
        'Maîtriser le prompt engineering',
        'Intégrer l\'IA dans votre workflow'
      ]
    }
  },
  {
    id: '7',
    title: 'IA et Éthique',
    description: 'Comprenez les enjeux éthiques et sociaux de l\'intelligence artificielle.',
    duration: '3 semaines',
    level: 'Débutant',
    price: 0,
    isFree: true,
    category: 'Éthique',
    image: '/images/ai-ethics.jpg',
    content: {
      modules: [
        'Biais et discrimination dans l\'IA',
        'Vie privée et données personnelles',
        'Transparence et explicabilité',
        'Impact social et emploi',
        'Régulation de l\'IA'
      ],
      objectives: [
        'Identifier les enjeux éthiques de l\'IA',
        'Comprendre les biais algorithmiques',
        'Développer une IA responsable'
      ]
    }
  },
  {
    id: '8',
    title: 'IA en Entreprise : Stratégie et Mise en Œuvre',
    description: 'Apprenez à déployer des solutions IA en entreprise.',
    duration: '6 semaines',
    level: 'Avancé',
    price: 299,
    isFree: false,
    category: 'Business',
    image: '/images/ai-business.jpg',
    content: {
      modules: [
        'Stratégie IA en entreprise',
        'ROI et cas d\'usage',
        'Infrastructure et MLOps',
        'Gestion des données',
        'Déploiement et maintenance',
        'Change management'
      ],
      objectives: [
        'Élaborer une stratégie IA',
        'Déployer des modèles en production',
        'Mesurer l\'impact de l\'IA'
      ]
    }
  }
];
