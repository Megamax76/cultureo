export interface Competence {
  id: string;
  titre: string;
  description: string;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  categorie: string;
  icone: string;
  couleur: string;
}

export interface Categorie {
  id: string;
  nom: string;
  description: string;
  couleur: string;
  icone: string;
}

export const categories: Categorie[] = [
  {
    id: 'creation',
    nom: 'Création & Innovation',
    description: 'Compétences liées à la création de contenus originaux et innovants',
    couleur: 'from-purple-500 to-pink-500',
    icone: '🎨'
  },
  {
    id: 'numerique',
    nom: 'Numérique & Technologies',
    description: 'Maîtrise des outils et technologies numériques créatives',
    couleur: 'from-blue-500 to-cyan-500',
    icone: '💻'
  },
  {
    id: 'communication',
    nom: 'Communication & Médiation',
    description: 'Capacité à transmettre et partager des idées créatives',
    couleur: 'from-green-500 to-emerald-500',
    icone: '🗣️'
  },
  {
    id: 'collaboration',
    nom: 'Collaboration & Collectif',
    description: 'Travail en équipe et co-création',
    couleur: 'from-orange-500 to-red-500',
    icone: '🤝'
  },
  {
    id: 'pensee-critique',
    nom: 'Pensée Critique & Analyse',
    description: 'Analyse, réflexion et esprit critique dans le processus créatif',
    couleur: 'from-indigo-500 to-purple-500',
    icone: '🧠'
  }
];

export const competences: Competence[] = [
  // Création & Innovation
  {
    id: 'c1',
    titre: 'Idéation créative',
    description: 'Capacité à générer des idées originales et innovantes',
    niveau: 'Intermédiaire',
    categorie: 'creation',
    icone: '💡',
    couleur: 'purple'
  },
  {
    id: 'c2',
    titre: 'Design Thinking',
    description: 'Approche méthodologique centrée sur l\'utilisateur pour résoudre des problèmes',
    niveau: 'Avancé',
    categorie: 'creation',
    icone: '🎯',
    couleur: 'purple'
  },
  {
    id: 'c3',
    titre: 'Prototypage rapide',
    description: 'Création rapide de maquettes et prototypes pour tester des concepts',
    niveau: 'Intermédiaire',
    categorie: 'creation',
    icone: '⚡',
    couleur: 'purple'
  },

  // Numérique & Technologies
  {
    id: 'n1',
    titre: 'Création multimédia',
    description: 'Maîtrise des outils de création vidéo, audio et graphique',
    niveau: 'Avancé',
    categorie: 'numerique',
    icone: '🎬',
    couleur: 'blue'
  },
  {
    id: 'n2',
    titre: 'Développement web créatif',
    description: 'Création d\'expériences web interactives et engageantes',
    niveau: 'Expert',
    categorie: 'numerique',
    icone: '🌐',
    couleur: 'blue'
  },
  {
    id: 'n3',
    titre: 'Intelligence artificielle créative',
    description: 'Utilisation de l\'IA pour augmenter le processus créatif',
    niveau: 'Avancé',
    categorie: 'numerique',
    icone: '🤖',
    couleur: 'blue'
  },

  // Communication & Médiation
  {
    id: 'com1',
    titre: 'Storytelling',
    description: 'Art de raconter des histoires captivantes et engageantes',
    niveau: 'Avancé',
    categorie: 'communication',
    icone: '📖',
    couleur: 'green'
  },
  {
    id: 'com2',
    titre: 'Présentation créative',
    description: 'Capacité à présenter des idées de manière impactante',
    niveau: 'Intermédiaire',
    categorie: 'communication',
    icone: '🎤',
    couleur: 'green'
  },
  {
    id: 'com3',
    titre: 'Médiation culturelle',
    description: 'Transmission et partage de contenu culturel auprès de divers publics',
    niveau: 'Avancé',
    categorie: 'communication',
    icone: '🎭',
    couleur: 'green'
  },

  // Collaboration & Collectif
  {
    id: 'col1',
    titre: 'Co-création',
    description: 'Création collaborative avec des équipes multidisciplinaires',
    niveau: 'Avancé',
    categorie: 'collaboration',
    icone: '👥',
    couleur: 'orange'
  },
  {
    id: 'col2',
    titre: 'Animation d\'ateliers créatifs',
    description: 'Facilitation et animation de sessions créatives',
    niveau: 'Expert',
    categorie: 'collaboration',
    icone: '🎪',
    couleur: 'orange'
  },
  {
    id: 'col3',
    titre: 'Gestion de projet créatif',
    description: 'Pilotage de projets créatifs de A à Z',
    niveau: 'Avancé',
    categorie: 'collaboration',
    icone: '📊',
    couleur: 'orange'
  },

  // Pensée Critique & Analyse
  {
    id: 'pc1',
    titre: 'Analyse critique des médias',
    description: 'Décryptage et analyse critique des contenus médiatiques',
    niveau: 'Avancé',
    categorie: 'pensee-critique',
    icone: '🔍',
    couleur: 'indigo'
  },
  {
    id: 'pc2',
    titre: 'Veille créative',
    description: 'Recherche et curation de tendances et innovations',
    niveau: 'Intermédiaire',
    categorie: 'pensee-critique',
    icone: '📡',
    couleur: 'indigo'
  },
  {
    id: 'pc3',
    titre: 'Évaluation de l\'impact créatif',
    description: 'Mesure et analyse de l\'impact des projets créatifs',
    niveau: 'Expert',
    categorie: 'pensee-critique',
    icone: '📈',
    couleur: 'indigo'
  }
];

export function getCompetencesByCategorie(categorieId: string): Competence[] {
  return competences.filter(c => c.categorie === categorieId);
}

export function getCategorieById(id: string): Categorie | undefined {
  return categories.find(c => c.id === id);
}
