# Guide de Démarrage Rapide

## Bienvenue dans votre Structure de Livre Professionnelle

Ce guide vous aide à démarrer rapidement avec cette structure complète pour écrire un livre intellectuel de haute qualité.

---

## Première Étape: Comprendre la Structure

### 📖 Lecture Obligatoire
1. **`README.md`** - Vue d'ensemble générale
2. **`STRUCTURE.md`** - Compréhension détaillée de l'organisation
3. **`style-guide.md`** - Conventions d'écriture

**Temps estimé**: 30-45 minutes

---

## Deuxième Étape: Planification

### 1. Définir Votre Thèse

Ouvrez `/outline/master-outline.md` et commencez par:

**Questions clés**:
- Quel est le sujet de votre livre?
- Quelle est votre thèse principale?
- Qui est votre public cible?
- Quelle contribution originale apportez-vous?

### 2. Créer le Plan Général

Dans `/outline/master-outline.md`:
- [ ] Définir la structure en parties et chapitres
- [ ] Écrire résumés de chapitres (2-3 phrases chacun)
- [ ] Établir objectif de mots par chapitre
- [ ] Identifier ressources de recherche nécessaires

**Temps estimé**: 2-4 heures (crucial pour la suite)

### 3. Cartographier l'Argumentation

Dans `/outline/argument-structure.md`:
- [ ] Décomposer votre thèse en arguments majeurs
- [ ] Lister prémisses et conclusions
- [ ] Identifier contre-arguments potentiels

**Temps estimé**: 1-2 heures

### 4. Identifier Thèmes et Concepts

- `/outline/themes.md`: Thèmes récurrents
- `/concepts/core-concepts.md`: Concepts clés à définir

**Temps estimé**: 1-2 heures

---

## Troisième Étape: Recherche

### 1. Lister Vos Sources

Dans `/research/sources/books.md`:
- [ ] Lister tous les livres à consulter
- [ ] Prioriser (haute/moyenne/basse)
- [ ] Assigner à des chapitres spécifiques

### 2. Prendre des Notes

Pour chaque source importante:
1. Copier `/templates/research-note-template.md`
2. Le renommer: `/research/notes/auteur-YYYY-titre.md`
3. Remplir au fur et à mesure de la lecture

**Conseil**: Ne pas attendre d'avoir tout lu avant de commencer à écrire

---

## Quatrième Étape: Rédaction

### 1. Choisir un Chapitre de Départ

**Recommandation**: Ne pas forcément commencer par le Chapitre 1

**Stratégies**:
- Commencer par le chapitre le plus clair dans votre esprit
- Ou par celui pour lequel vous avez le plus de matériel
- Ou par un chapitre central (souvent plus motivant)

### 2. Créer le Dossier du Chapitre

```bash
# Créer structure pour nouveau chapitre
mkdir -p book/chapters/02-chapter-title
```

### 3. Planifier le Chapitre

1. Copier `/templates/chapter-template.md`
2. Le placer dans `/chapters/XX-chapter-title/chapter-XX.md`
3. Copier `/templates/section-template.md` si besoin de planifier sections
4. Créer outline: `/chapters/XX-chapter-title/outline.md`

### 4. Rédiger

**Processus recommandé**:

1. **Session 1: Squelette** (1-2h)
   - Écrire toutes les sections/sous-sections (juste les titres)
   - Écrire une phrase résumant chaque section
   - Identifier exemples/citations nécessaires

2. **Session 2-4: Premier Draft** (3-6h par session)
   - Écrire sans s'autocensurer
   - Ne pas viser la perfection
   - Objectif: Avoir tout le contenu, même brouillon

3. **Session 5: Complétion** (2-3h)
   - Combler les trous
   - Ajouter transitions
   - Vérifier citations

4. **Pause** (1-2 jours minimum)
   - S'éloigner du texte
   - Laisser décanter

5. **Session 6+: Révision** (2-4h)
   - Utiliser `/templates/review-checklist.md`
   - Plusieurs passes (structure, style, technique)

### 5. Suivre Votre Progression

Mettre à jour régulièrement `/progress-tracker.md`:
- [ ] Statut du chapitre
- [ ] Compte de mots
- [ ] Problèmes rencontrés
- [ ] Prochaines actions

---

## Cinquième Étape: Itération

### Workflow Quotidien/Hebdomadaire

**Chaque session d'écriture**:
1. Relire derniers paragraphes écrits (5-10 min)
2. Écrire nouveau contenu (1-3h)
3. Mettre à jour notes du chapitre (5 min)
4. Sauvegarder/committer (2 min)

**Chaque semaine**:
1. Réviser progression dans `/progress-tracker.md`
2. Ajuster planning si nécessaire
3. Sauvegarder draft dans `/drafts/`
4. Faire mini-révision d'un chapitre complété

**Chaque mois**:
1. Révision structurelle d'une partie complétée
2. Vérifier cohérence globale
3. Mise à jour `/outline/` si structure a évolué
4. Backup externe complet

---

## Sixième Étape: Révision

### Quand Tous les Chapitres Sont Écrits

1. **Assembler le Manuscrit**
   - Compiler dans `/manuscript/full-manuscript.md`
   - Générer statistiques
   - Créer version 1.0

2. **Révision Globale**
   - Utiliser `/templates/review-checklist.md`
   - Faire plusieurs passes (voir checklist)
   - Vérifier connexions entre chapitres (`/outline/connections.md`)

3. **Polissage Final**
   - Cohérence terminologique
   - Uniformité style
   - Citations et bibliographie
   - Formatage

---

## Outils et Commandes Utiles

### Compter les Mots

```bash
# Par chapitre
wc -w chapters/**/*.md

# Total
wc -w chapters/**/*.md | tail -1

# Manuscrit complet
wc -w manuscript/full-manuscript.md
```

### Rechercher dans le Texte

```bash
# Trouver toutes les mentions d'un concept
grep -r "concept-clé" chapters/

# Trouver tous les TODOs
grep -r "TODO" chapters/
grep -r "\[À" chapters/
```

### Visualiser la Structure

```bash
# Arborescence
tree book/

# Ou avec limites de profondeur
tree -L 2 book/
```

---

## Conseils Pratiques

### 🎯 Productivité

1. **Définir objectifs quotidiens réalistes**
   - 500-1000 mots/jour est excellent
   - Consistance > Quantité

2. **Écrire à heure fixe**
   - Même heure chaque jour
   - Crée habitude et momentum

3. **Sessions Pomodoro**
   - 25 min écriture focus
   - 5 min pause
   - 4 cycles = 2h productives

4. **Séparer Création et Révision**
   - Ne pas réviser en écrivant
   - Deux modes mentaux différents

### 📚 Recherche

1. **Prendre notes immédiatement**
   - Ne pas faire confiance à sa mémoire
   - Utiliser templates de notes

2. **Citer précisément**
   - Pages exactes
   - Citations textuelles entre guillemets

3. **Organiser au fur et à mesure**
   - Ne pas accumuler sources non traitées

### ✍️ Écriture

1. **Écrire mal plutôt que ne pas écrire**
   - Premier draft = draft zéro
   - Perfection vient à la révision

2. **Varier les chapitres**
   - Si bloqué sur un chapitre, passer à un autre
   - Maintient motivation

3. **Lire à voix haute**
   - Meilleure façon de détecter problèmes de flow

### 🔄 Révision

1. **Plusieurs passes, un focus**
   - Ne pas tout réviser en même temps
   - Structure → Contenu → Style → Technique

2. **S'éloigner du texte**
   - Minimum 2-3 jours entre écriture et révision
   - Oeil frais crucial

3. **Feedback externe**
   - Au moins 2-3 relecteurs
   - Différents niveaux d'expertise

---

## Pièges à Éviter

❌ **Ne pas écrire de l'introduction en premier**
- Écrire introduction APRÈS le reste
- Difficile de synthétiser ce qui n'existe pas encore

❌ **Ne pas viser la perfection au premier draft**
- "Perfect is the enemy of done"
- Réviser vient après

❌ **Ne pas négliger la structure**
- 70% du succès = bonne structure
- Prendre temps sur outline

❌ **Ne pas ignorer les transitions**
- Transitions = cohérence
- Relier explicitement les idées

❌ **Ne pas sous-estimer le temps de révision**
- Révision = 30-50% du temps total
- Planifier en conséquence

---

## Ressources Additionnelles

### Dans Cette Structure
- `/style-guide.md`: Guide complet de style
- `/templates/`: Tous les templates
- `/outline/connections.md`: Vérifier cohérence

### Lectures Recommandées
- "The Craft of Research" - Booth, Colomb, Williams
- "On Writing Well" - William Zinsser
- "Bird by Bird" - Anne Lamott
- "Writing Your Journal Article in Twelve Weeks" - Wendy Belcher

### Outils
- **Antidote/LanguageTool**: Correction
- **Zotero/Mendeley**: Gestion bibliographie
- **Scrivener/Ulysses**: Écriture longue (alternatif à markdown)
- **Obsidian/Notion**: Gestion notes (si préféré à fichiers md)

---

## Plan d'Action Immédiat

### Cette Semaine

1. [ ] Lire README.md, STRUCTURE.md, style-guide.md
2. [ ] Définir thèse dans `/outline/master-outline.md`
3. [ ] Créer plan chapitres (titres + résumés courts)
4. [ ] Lister 10 sources principales
5. [ ] Choisir chapitre de départ

### Ce Mois

1. [ ] Compléter outline détaillé de tous les chapitres
2. [ ] Lire et noter 5 sources majeures
3. [ ] Rédiger premier draft de 2-3 chapitres
4. [ ] Établir routine d'écriture quotidienne

### Ces 3 Mois

1. [ ] Premier draft complet ou 50% du livre
2. [ ] Base de recherche solide
3. [ ] Système de travail rôdé
4. [ ] Momentum établi

---

## Questions Fréquentes

**Q: Par où vraiment commencer?**
A: 1) Thèse claire, 2) Plan général, 3) Un chapitre (pas forcément le 1er)

**Q: Combien de temps pour écrire un livre?**
A: Variable, mais comptez 6-12 mois pour 80-100k mots si 1-2h/jour

**Q: Dois-je suivre la structure exactement?**
A: Non, adaptez à vos besoins. C'est un cadre, pas une prison.

**Q: Que faire si je suis bloqué?**
A: 1) Changer de chapitre, 2) Faire de la recherche, 3) Réviser ce qui existe, 4) Pause

**Q: Comment savoir si c'est assez bon?**
A: Feedback externe + checklist de révision. Perfectionnisme = ennemi.

---

## Besoin d'Aide?

- Consultez la documentation dans chaque dossier
- Utilisez les templates fournis
- Référez-vous au style-guide en cas de doute
- N'hésitez pas à adapter la structure à vos besoins

---

**Bon courage dans votre aventure d'écriture!**

L'important n'est pas d'être parfait, mais d'être consistant.
Un livre s'écrit mot après mot, jour après jour.

*"You don't write a book. You write a sentence. You write another sentence. Eventually, you have a book."* - Neil Gaiman

---

**Prochaine étape**: Ouvrir `/outline/master-outline.md` et définir votre thèse.

**Go!** 🚀
