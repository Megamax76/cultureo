# Dossier Drafts

## Objectif

Ce dossier archive les différentes versions et brouillons du manuscrit pour:
- Historique des versions
- Possibilité de revenir en arrière
- Comparaison entre versions
- Mémoire du processus d'écriture

---

## Organisation

### Par Date

Organiser les drafts par mois pour faciliter la navigation:

```
drafts/
├── 2025-01/
│   ├── draft-2025-01-15.md
│   ├── draft-2025-01-22.md
│   └── notes-janvier.md
├── 2025-02/
│   ├── draft-2025-02-05.md
│   └── draft-2025-02-20.md
└── archive/
    └── old-versions/
```

### Par Version

Alternative: organiser par numéro de version:

```
drafts/
├── v0.1-first-complete-draft.md
├── v0.2-after-chapter-revision.md
├── v0.5-major-rewrite.md
└── v1.0-final.md
```

---

## Convention de Nommage

**Format recommandé**: `draft-YYYY-MM-DD-description.md`

Exemples:
- `draft-2025-01-15-initial.md`
- `draft-2025-02-10-post-revision-part1.md`
- `draft-2025-03-20-before-final-review.md`

---

## Quand Sauvegarder un Draft

Créer un nouveau draft à ces moments:

1. **Avant modifications majeures**: Sécurité avant changements importants
2. **Après étapes importantes**: Fin d'un chapitre, fin d'une partie
3. **Périodiquement**: Une fois par semaine ou bi-mensuel
4. **Avant révisions externes**: Garder version pré-feedback
5. **Milestones**: Quand un objectif important est atteint

---

## Comment Sauvegarder

### Chapitre Individuel

```bash
# Copier un chapitre spécifique
cp chapters/03-chapter-three/chapter-03.md \
   drafts/2025-02/chapter-03-2025-02-15.md
```

### Manuscrit Complet

```bash
# Copier le manuscrit assemblé
cp manuscript/full-manuscript.md \
   drafts/2025-02/draft-2025-02-15-complete.md
```

### Avec Notes

Créer un fichier de notes accompagnant:
`draft-2025-02-15-notes.md`

Contenu:
```markdown
# Notes - Draft 2025-02-15

## État
- Chapitres 1-5: Révisés
- Chapitres 6-8: Premier draft
- Chapitres 9-12: En cours

## Changements depuis dernier draft
- Restructuration Chapitre 3
- Ajout section Chapitre 5
- Développement arguments Chapitre 7

## Prochaines étapes
- Réviser Partie II
- Renforcer transitions
- Vérifier cohérence terminologie

## Problèmes connus
- Chapitre 4 trop court
- Transition Ch7→Ch8 abrupte
- Manque exemples Chapitre 9
```

---

## Comparaison entre Versions

### Diff Textuel

```bash
# Comparer deux versions
diff drafts/2025-01/draft-2025-01-15.md \
     drafts/2025-02/draft-2025-02-15.md
```

### Compte de Mots

```bash
# Évolution du nombre de mots
wc -w drafts/2025-*/*.md
```

---

## Archive

Quand le dossier devient trop chargé, archiver les vieilles versions:

```bash
# Créer archive
mkdir -p drafts/archive/2024
mv drafts/2024-* drafts/archive/2024/
```

---

## Backup

Les drafts sont précieux. Backup régulier recommandé:

1. **Git**: Committer régulièrement
2. **Cloud**: Synchro Dropbox/Drive/etc.
3. **Externe**: Copie sur disque dur externe

---

## Récupération

Pour revenir à une version antérieure:

```bash
# Copier ancien draft vers emplacement actif
cp drafts/2025-01/draft-2025-01-15.md \
   chapters/03-chapter-three/chapter-03.md
```

**Attention**: Sauvegarder version actuelle avant!

---

## Statistiques et Suivi

Créer fichier `version-history.md` pour tracker progression:

```markdown
# Historique des Versions

| Date | Version | Mots | Chapitres | Statut | Notes |
|------|---------|------|-----------|--------|-------|
| 2025-01-15 | 0.1 | 15,000 | 1-3 draft | Draft | Premier jet |
| 2025-02-01 | 0.2 | 28,000 | 1-5 draft | Draft | Ajout Ch 4-5 |
| 2025-02-15 | 0.3 | 32,000 | 1-5 révisés | Review | Révision Part I |
```

---

## Checklist Draft

Avant de sauvegarder un draft majeur:

- [ ] Compte de mots mis à jour
- [ ] Fichier de notes accompagnant créé
- [ ] Statut de chaque chapitre noté
- [ ] Problèmes connus listés
- [ ] Prochaines étapes identifiées
- [ ] Backup externe effectué

---

**Dernière mise à jour**: [YYYY-MM-DD]
**Drafts actuels**: [Nombre]
**Version actuelle**: [X.Y]
