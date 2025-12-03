# Guide de Style

## Principes Directeurs

### Ton et Voix
- **Intellectuel mais accessible**: Profondeur sans jargon inutile
- **Assertif et confiant**: Position claire, bien argumentée
- **Engageant**: Captiver le lecteur, stimuler la réflexion
- **Respectueux**: Considération pour perspectives diverses

### Audience Cible
- Lecteurs éduqués et curieux
- Intérêt pour la pensée critique
- Recherche d'insights profonds
- Valorisation de l'argumentation rigoureuse

---

## Structure et Organisation

### Architecture des Chapitres

```markdown
# Chapitre X: Titre du Chapitre

## Introduction
- Accroche captivante
- Contexte et enjeux
- Annonce du plan

## I. Première Grande Section
### A. Sous-section
#### 1. Point détaillé

## II. Deuxième Grande Section
[Structure similaire]

## III. Troisième Grande Section
[Structure similaire]

## Conclusion
- Synthèse des points clés
- Implications
- Transition vers chapitre suivant
```

### Hiérarchie des Titres
- `#` : Titre de chapitre uniquement
- `##` : Sections principales (3-5 par chapitre)
- `###` : Sous-sections
- `####` : Points détaillés (utiliser avec parcimonie)

---

## Conventions d'Écriture

### Longueurs Recommandées
- **Chapitre**: 5,000-10,000 mots
- **Section**: 1,000-2,000 mots
- **Paragraphe**: 3-7 phrases (80-150 mots)
- **Phrase**: 15-25 mots en moyenne

### Construction des Paragraphes
1. **Phrase d'ouverture**: Idée principale claire
2. **Développement**: 2-4 phrases explicatives
3. **Exemples/Preuves**: Support concret
4. **Phrase de transition**: Lien avec paragraphe suivant

### Phrases
- **Privilégier**: Voix active, constructions directes
- **Éviter**: Passif excessif, phrases alambiquées
- **Varier**: Longueur et structure pour rythme

---

## Argumentation et Logique

### Structure Argumentative

```
THÈSE
├── Argument 1
│   ├── Prémisse A
│   ├── Prémisse B
│   └── Conclusion logique
├── Argument 2
│   └── [Structure similaire]
└── Argument 3
    └── [Structure similaire]
```

### Présentation des Arguments
1. **Énoncer clairement**: Position sans ambiguïté
2. **Justifier**: Preuves, données, citations
3. **Anticiper objections**: Adresser contre-arguments
4. **Synthétiser**: Relier à thèse principale

### Rigueur Intellectuelle
- ✅ Citations vérifiables
- ✅ Statistiques sourcées
- ✅ Logique transparente
- ✅ Nuances reconnues
- ❌ Généralisations hâtives
- ❌ Sophismes
- ❌ Cherry-picking

---

## Citations et Références

### Format des Citations

**Citations courtes (< 3 lignes)**:
```markdown
Selon Einstein, "L'imagination est plus importante que le savoir" (Einstein, 1929, p. 117).
```

**Citations longues (> 3 lignes)**:
```markdown
Einstein développe cette idée:

> L'imagination est plus importante que le savoir. Car le savoir est limité,
> tandis que l'imagination embrasse le monde entier, stimule le progrès,
> suscite l'évolution. (Einstein, 1929, p. 117)
```

### Système de Référence
- **Premier mention**: Nom complet, année, page
- **Mentions suivantes**: (Auteur, année)
- **Paraphrases**: Toujours citer la source

### Notes de Bas de Page
```markdown
Texte principal avec référence[^1].

[^1]: Note explicative ou référence détaillée.
```

---

## Terminologie et Vocabulaire

### Consistance
- **Termes clés**: Utiliser systématiquement la même terminologie
- **Définitions**: Définir termes techniques à première utilisation
- **Glossaire**: Maintenir liste dans `/concepts/glossary.md`

### Niveau de Langage
- **Précis**: Mots justes, non approximatifs
- **Riche**: Vocabulaire varié, éviter répétitions
- **Accessible**: Expliquer concepts complexes clairement
- **Éviter**: Jargon inutile, anglicismes non nécessaires

### Expressions à Privilégier

| ✅ Privilégier | ❌ Éviter |
|---------------|----------|
| Nous analysons | On va regarder |
| Cette recherche démontre | Ça montre que |
| Il convient de noter | Il faut dire que |
| Néanmoins | Mais bon |
| En conséquence | Du coup |

---

## Formatage et Présentation

### Emphase
- **Gras**: `**concept clé**` pour concepts importants
- *Italique*: `*terme étranger*` ou emphase légère
- `Code`: `` `terme technique` `` pour termes spécialisés

### Listes

**Listes à puces** - Pour éléments sans ordre:
- Premier élément
- Deuxième élément
- Troisième élément

**Listes numérotées** - Pour séquences ou hiérarchies:
1. Première étape
2. Deuxième étape
3. Troisième étape

### Tableaux
Utiliser pour comparaisons ou données structurées:

```markdown
| Critère | Option A | Option B |
|---------|----------|----------|
| Coût | Élevé | Faible |
| Efficacité | Forte | Moyenne |
```

---

## Éléments Visuels

### Diagrammes et Schémas
- Placer dans `/resources/images/`
- Nommer: `chapterXX-diagram-description.png`
- Toujours légender et référencer dans texte

### Tableaux et Données
- Placer dans `/resources/tables/`
- Sourcer toutes les données
- Formater pour lisibilité

---

## Révision et Qualité

### Checklist de Révision

**Niveau Macro**:
- [ ] Structure logique claire
- [ ] Arguments bien développés
- [ ] Transitions fluides entre sections
- [ ] Cohérence avec thèse principale

**Niveau Micro**:
- [ ] Phrases claires et variées
- [ ] Vocabulaire précis
- [ ] Grammaire et orthographe
- [ ] Citations formatées correctement

**Niveau Stylistique**:
- [ ] Ton cohérent
- [ ] Rythme engageant
- [ ] Pas de répétitions
- [ ] Formatage uniforme

### Passes de Révision Recommandées
1. **Contenu**: Logique et arguments
2. **Structure**: Organisation et flow
3. **Style**: Langue et ton
4. **Technique**: Grammaire et formatage
5. **Citations**: Vérification des références

---

## Conventions Techniques

### Nommage des Fichiers
- Minuscules uniquement
- Tirets pour espaces: `concept-cle.md`
- Descriptif et court
- Préfixes numériques pour ordre: `01-introduction.md`

### Métadonnées YAML
Inclure en tête de chaque chapitre:

```yaml
---
title: "Titre du Chapitre"
chapter: 1
status: draft|review|final
word_count: 0
last_updated: YYYY-MM-DD
tags: [concept1, concept2]
---
```

### Git Commits
- Messages descriptifs en français
- Format: `type: description`
- Types: `feat`, `edit`, `refactor`, `docs`, `fix`

---

## Exemples de Bon Style

### ✅ Excellent Paragraphe

> La question de l'identité numérique soulève des enjeux fondamentaux pour nos sociétés contemporaines. Alors que nous déléguons une part croissante de notre existence aux plateformes numériques, nous fragmentons notre identité en multiples représentations dont nous perdons progressivement le contrôle. Cette fragmentation n'est pas sans conséquence: elle redéfinit les rapports de pouvoir entre individus et institutions, questionnant ainsi les fondements même de l'autonomie personnelle à l'ère digitale.

**Pourquoi c'est excellent**:
- Idée claire dès la première phrase
- Développement logique
- Vocabulaire précis et riche
- Implications profondes
- Transition naturelle vers développement

### ❌ À Améliorer

> Aujourd'hui on vit dans un monde digital. Ça pose des problèmes pour notre identité. Les réseaux sociaux c'est compliqué. Il faut faire attention.

**Problèmes**:
- Langage trop familier
- Phrases trop courtes et saccadées
- Manque de précision
- Pas de développement
- Pas d'argumentation

---

## Ressources Complémentaires

- **Dictionnaires**: Larousse, Robert, CNRTL
- **Synonymes**: crisco.unicaen.fr
- **Vérification**: Antidote, LanguageTool
- **Style**: "Éléments de style" de Strunk & White
- **Argumentation**: "The Craft of Research" de Booth et al.
