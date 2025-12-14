'use client';

import { useState } from 'react';
import { categories, competences, type Competence, type Categorie } from '@/data/creaCompData';

export default function CreaCompReferentiel() {
  const [selectedCategorie, setSelectedCategorie] = useState<string | null>(null);
  const [selectedNiveau, setSelectedNiveau] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const niveaux = ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'];

  const filteredCompetences = competences.filter(comp => {
    const matchesCategorie = !selectedCategorie || comp.categorie === selectedCategorie;
    const matchesNiveau = !selectedNiveau || comp.niveau === selectedNiveau;
    const matchesSearch = !searchTerm ||
      comp.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategorie && matchesNiveau && matchesSearch;
  });

  const getNiveauColor = (niveau: string) => {
    switch(niveau) {
      case 'Débutant': return 'bg-green-100 text-green-800 border-green-300';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Avancé': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Expert': return 'bg-orange-100 text-orange-800 border-orange-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getColorClasses = (couleur: string) => {
    const colorMap: { [key: string]: string } = {
      purple: 'border-purple-500 hover:shadow-purple-200',
      blue: 'border-blue-500 hover:shadow-blue-200',
      green: 'border-green-500 hover:shadow-green-200',
      orange: 'border-orange-500 hover:shadow-orange-200',
      indigo: 'border-indigo-500 hover:shadow-indigo-200'
    };
    return colorMap[couleur] || 'border-gray-500 hover:shadow-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🎨</div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Référentiel Créa-Comp
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Explorez et développez vos compétences créatives
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="🔍 Rechercher une compétence..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700
                       bg-white dark:bg-slate-800 text-slate-900 dark:text-white
                       focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900
                       transition-all outline-none"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtres */}
        <div className="mb-8 space-y-6">
          {/* Filtre Catégories */}
          <div>
            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Catégories
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategorie(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategorie === null
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-700'
                }`}
              >
                Toutes
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategorie(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedCategorie === cat.id
                      ? `bg-gradient-to-r ${cat.couleur} text-white shadow-lg scale-105`
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span>{cat.icone}</span>
                  <span>{cat.nom}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filtre Niveaux */}
          <div>
            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Niveau
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedNiveau(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedNiveau === null
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-700'
                }`}
              >
                Tous
              </button>
              {niveaux.map((niveau) => (
                <button
                  key={niveau}
                  onClick={() => setSelectedNiveau(niveau)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedNiveau === niveau
                      ? getNiveauColor(niveau) + ' shadow-lg scale-105 border-2'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {niveau}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compteur de résultats */}
        <div className="mb-6">
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            {filteredCompetences.length} compétence{filteredCompetences.length > 1 ? 's' : ''} trouvée{filteredCompetences.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetences.map((comp) => (
            <div
              key={comp.id}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border-l-4
                         shadow-sm hover:shadow-xl transition-all duration-300
                         hover:-translate-y-1 cursor-pointer group
                         ${getColorClasses(comp.couleur)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {comp.icone}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getNiveauColor(comp.niveau)}`}>
                  {comp.niveau}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {comp.titre}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {comp.description}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                {categories.find(c => c.id === comp.categorie) && (
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>{categories.find(c => c.id === comp.categorie)?.icone}</span>
                    <span>{categories.find(c => c.id === comp.categorie)?.nom}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredCompetences.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              Aucune compétence trouvée
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Essayez de modifier vos filtres ou votre recherche
            </p>
          </div>
        )}

        {/* Catégories Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Explorer par catégorie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategorie(cat.id)}
                className={`bg-gradient-to-br ${cat.couleur} rounded-2xl p-8 cursor-pointer
                           transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                           text-white`}
              >
                <div className="text-5xl mb-4">{cat.icone}</div>
                <h3 className="text-2xl font-bold mb-3">{cat.nom}</h3>
                <p className="text-white/90 mb-4">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {competences.filter(c => c.categorie === cat.id).length} compétences
                  </span>
                  <span className="text-2xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-slate-900 dark:bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Cultureo</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Le référentiel Créa-Comp vous aide à identifier, développer et valoriser
            vos compétences créatives dans un monde en constante évolution.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">À propos</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
