export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
  example?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: '1',
    term: 'Intelligence Artificielle (IA)',
    definition: 'Discipline scientifique qui vise à créer des machines capables de simuler l\'intelligence humaine, notamment l\'apprentissage, le raisonnement et l\'adaptation.',
    category: 'Général',
    relatedTerms: ['Machine Learning', 'Deep Learning', 'AGI'],
    example: 'Les assistants vocaux comme Siri ou Alexa utilisent l\'IA pour comprendre et répondre aux questions.'
  },
  {
    id: '2',
    term: 'Machine Learning',
    definition: 'Sous-domaine de l\'IA permettant aux machines d\'apprendre à partir de données sans être explicitement programmées pour chaque tâche.',
    category: 'Général',
    relatedTerms: ['Deep Learning', 'Algorithme', 'Modèle'],
    example: 'Les systèmes de recommandation de Netflix utilisent le machine learning pour suggérer des films.'
  },
  {
    id: '3',
    term: 'Deep Learning',
    definition: 'Sous-ensemble du machine learning utilisant des réseaux de neurones artificiels à plusieurs couches pour traiter des données complexes.',
    category: 'Technique',
    relatedTerms: ['Réseau de neurones', 'CNN', 'RNN', 'Transformer'],
    example: 'La reconnaissance faciale utilise le deep learning pour identifier des personnes.'
  },
  {
    id: '4',
    term: 'Réseau de Neurones',
    definition: 'Modèle informatique inspiré du fonctionnement du cerveau humain, composé de neurones artificiels connectés par couches.',
    category: 'Technique',
    relatedTerms: ['Deep Learning', 'Perceptron', 'Backpropagation'],
    example: 'Un réseau de neurones peut apprendre à reconnaître des chiffres manuscrits.'
  },
  {
    id: '5',
    term: 'Apprentissage Supervisé',
    definition: 'Type d\'apprentissage où le modèle est entraîné sur des données étiquetées (avec les réponses attendues).',
    category: 'Méthodes',
    relatedTerms: ['Classification', 'Régression', 'Dataset'],
    example: 'Entraîner un modèle à reconnaître des chats avec des images étiquetées "chat" ou "pas chat".'
  },
  {
    id: '6',
    term: 'Apprentissage Non Supervisé',
    definition: 'Apprentissage où le modèle découvre des structures dans des données non étiquetées.',
    category: 'Méthodes',
    relatedTerms: ['Clustering', 'Réduction de dimension', 'Anomalie'],
    example: 'Regrouper des clients en segments sans connaître les catégories à l\'avance.'
  },
  {
    id: '7',
    term: 'NLP (Natural Language Processing)',
    definition: 'Traitement du langage naturel : branche de l\'IA permettant aux machines de comprendre, interpréter et générer du langage humain.',
    category: 'Domaine',
    relatedTerms: ['LLM', 'Tokenization', 'Embedding', 'ChatGPT'],
    example: 'ChatGPT utilise le NLP pour comprendre vos questions et y répondre.'
  },
  {
    id: '8',
    term: 'LLM (Large Language Model)',
    definition: 'Grand modèle de langage entraîné sur d\'énormes quantités de texte pour comprendre et générer du langage naturel.',
    category: 'Technique',
    relatedTerms: ['GPT', 'Transformer', 'NLP', 'Token'],
    example: 'GPT-4 est un LLM capable de converser, écrire du code et analyser du texte.'
  },
  {
    id: '9',
    term: 'Transformer',
    definition: 'Architecture de réseau de neurones révolutionnaire utilisant des mécanismes d\'attention, à la base des modèles modernes comme GPT et BERT.',
    category: 'Technique',
    relatedTerms: ['Attention', 'LLM', 'Encoder', 'Decoder'],
    example: 'Les Transformers ont permis des avancées majeures en traduction automatique.'
  },
  {
    id: '10',
    term: 'CNN (Convolutional Neural Network)',
    definition: 'Réseau de neurones convolutif spécialisé dans le traitement d\'images, utilisant des filtres pour détecter des motifs.',
    category: 'Technique',
    relatedTerms: ['Computer Vision', 'Convolution', 'Pooling'],
    example: 'Les CNN sont utilisés dans les voitures autonomes pour détecter les piétons.'
  },
  {
    id: '11',
    term: 'Overfitting',
    definition: 'Problème où un modèle apprend trop bien les données d\'entraînement mais performe mal sur de nouvelles données.',
    category: 'Problèmes',
    relatedTerms: ['Underfitting', 'Régularisation', 'Validation'],
    example: 'Un modèle qui mémorise les exemples d\'entraînement au lieu de généraliser.'
  },
  {
    id: '12',
    term: 'Dataset',
    definition: 'Ensemble de données utilisé pour entraîner, valider ou tester un modèle de machine learning.',
    category: 'Données',
    relatedTerms: ['Training set', 'Test set', 'Validation set'],
    example: 'ImageNet est un dataset célèbre contenant des millions d\'images étiquetées.'
  },
  {
    id: '13',
    term: 'Algorithme',
    definition: 'Ensemble d\'instructions définissant comment un modèle apprend à partir des données.',
    category: 'Général',
    relatedTerms: ['Modèle', 'Optimization', 'Gradient Descent'],
    example: 'L\'algorithme des k-plus proches voisins classe les données selon leurs voisins.'
  },
  {
    id: '14',
    term: 'Biais (Bias)',
    definition: 'Préjugé systématique dans les prédictions d\'un modèle, souvent causé par des données d\'entraînement déséquilibrées.',
    category: 'Éthique',
    relatedTerms: ['Équité', 'Discrimination', 'Dataset'],
    example: 'Un système de recrutement IA peut avoir un biais si entraîné sur des données historiques sexistes.'
  },
  {
    id: '15',
    term: 'AGI (Artificial General Intelligence)',
    definition: 'Intelligence artificielle générale capable de comprendre et accomplir n\'importe quelle tâche intellectuelle humaine.',
    category: 'Général',
    relatedTerms: ['IA forte', 'IA faible', 'Singularité'],
    example: 'L\'AGI reste hypothétique et est un objectif à long terme de la recherche en IA.'
  },
  {
    id: '16',
    term: 'Prompt',
    definition: 'Instruction ou question donnée à un modèle d\'IA pour générer une réponse.',
    category: 'Pratique',
    relatedTerms: ['Prompt Engineering', 'LLM', 'Zero-shot'],
    example: 'Un prompt efficace pour ChatGPT : "Explique la photosynthèse à un enfant de 10 ans".'
  },
  {
    id: '17',
    term: 'Computer Vision',
    definition: 'Vision par ordinateur : domaine permettant aux machines d\'interpréter et comprendre le contenu visuel (images, vidéos).',
    category: 'Domaine',
    relatedTerms: ['CNN', 'Détection d\'objets', 'Segmentation'],
    example: 'La reconnaissance de plaques d\'immatriculation utilise la computer vision.'
  },
  {
    id: '18',
    term: 'Reinforcement Learning',
    definition: 'Apprentissage par renforcement : méthode où un agent apprend en recevant des récompenses ou punitions selon ses actions.',
    category: 'Méthodes',
    relatedTerms: ['Agent', 'Récompense', 'Politique'],
    example: 'AlphaGo a utilisé le reinforcement learning pour battre des champions de Go.'
  },
  {
    id: '19',
    term: 'Transfer Learning',
    definition: 'Technique consistant à réutiliser un modèle pré-entraîné et l\'adapter à une nouvelle tâche similaire.',
    category: 'Technique',
    relatedTerms: ['Fine-tuning', 'Pré-entraînement', 'Modèle'],
    example: 'Utiliser un modèle entraîné sur ImageNet pour classifier des images médicales.'
  },
  {
    id: '20',
    term: 'Tokenization',
    definition: 'Processus de division du texte en unités plus petites (tokens) pour le traitement par un modèle NLP.',
    category: 'NLP',
    relatedTerms: ['Token', 'Embedding', 'NLP'],
    example: 'La phrase "Je suis heureux" peut être tokenisée en ["Je", "suis", "heureux"].'
  },
  {
    id: '21',
    term: 'Embedding',
    definition: 'Représentation vectorielle dense de données (texte, images) dans un espace multidimensionnel.',
    category: 'Technique',
    relatedTerms: ['Vector', 'Word2Vec', 'Semantic similarity'],
    example: 'Les mots similaires comme "chat" et "chaton" ont des embeddings proches.'
  },
  {
    id: '22',
    term: 'API (Application Programming Interface)',
    definition: 'Interface permettant à des applications de communiquer avec des services IA sans connaître leur implémentation interne.',
    category: 'Pratique',
    relatedTerms: ['REST', 'Intégration', 'Service'],
    example: 'L\'API OpenAI permet d\'utiliser GPT-4 dans vos applications.'
  },
  {
    id: '23',
    term: 'Explainability (Explicabilité)',
    definition: 'Capacité à comprendre et expliquer comment un modèle IA prend ses décisions.',
    category: 'Éthique',
    relatedTerms: ['Boîte noire', 'Transparence', 'Interprétabilité'],
    example: 'Un modèle médical doit pouvoir expliquer pourquoi il suggère un diagnostic.'
  },
  {
    id: '24',
    term: 'MLOps',
    definition: 'Ensemble de pratiques pour déployer et maintenir des modèles de machine learning en production de manière fiable.',
    category: 'Pratique',
    relatedTerms: ['DevOps', 'CI/CD', 'Monitoring'],
    example: 'Le MLOps inclut le versionnement des modèles et la surveillance des performances.'
  },
  {
    id: '25',
    term: 'Hallucination',
    definition: 'Phénomène où un modèle génératif produit des informations fausses ou inventées présentées comme vraies.',
    category: 'Problèmes',
    relatedTerms: ['LLM', 'Fiabilité', 'Vérification'],
    example: 'ChatGPT peut "halluciner" en citant des sources ou statistiques inexistantes.'
  }
];
