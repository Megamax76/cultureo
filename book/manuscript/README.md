# Dossier Manuscript

## Objectif

Ce dossier contient les versions compilées et finales du manuscrit, assemblées à partir des chapitres individuels.

---

## Fichiers

### `metadata.yaml`
Métadonnées du livre (titre, auteur, ISBN, etc.) - utilisées pour génération des formats finaux.

### `full-manuscript.md`
Version complète et actuelle du manuscrit, assemblée à partir de tous les chapitres.

### `version-X.X.md`
Versions majeures archivées du manuscrit (milestones).

---

## Processus de Compilation

### Manuelle

Pour assembler manuellement le manuscrit complet:

```bash
# Depuis le dossier book/
cat chapters/00-front-matter/preface.md \
    chapters/00-front-matter/introduction.md \
    chapters/01-chapter-one/chapter-01.md \
    chapters/02-chapter-two/chapter-02.md \
    # ... tous les chapitres ...
    chapters/99-back-matter/conclusion.md \
    chapters/99-back-matter/acknowledgments.md \
    > manuscript/full-manuscript.md
```

### Automatique (Script à créer)

```bash
# À créer: compile-manuscript.sh
./scripts/compile-manuscript.sh
```

---

## Versionnement

Créer une nouvelle version lorsqu'une étape majeure est atteinte:

```bash
cp manuscript/full-manuscript.md manuscript/version-1.0.md
```

**Historique des versions**:
- `version-0.1.md`: Premier draft complet
- `version-0.5.md`: Draft après première révision
- `version-1.0.md`: Version finale
- `version-1.1.md`: Version après corrections éditoriales

---

## Génération des Formats

### PDF

```bash
# Utilisant pandoc
pandoc manuscript/full-manuscript.md \
    --metadata-file=manuscript/metadata.yaml \
    -o manuscript/book.pdf \
    --toc \
    --number-sections
```

### EPUB

```bash
pandoc manuscript/full-manuscript.md \
    --metadata-file=manuscript/metadata.yaml \
    -o manuscript/book.epub \
    --toc
```

### DOCX (pour éditeurs)

```bash
pandoc manuscript/full-manuscript.md \
    -o manuscript/book.docx
```

---

## Checklist Avant Compilation

- [ ] Tous les chapitres sont finalisés
- [ ] Transitions entre chapitres vérifiées
- [ ] Métadonnées à jour
- [ ] Table des matières générée
- [ ] Références croisées vérifiées
- [ ] Numérotation cohérente
- [ ] Bibliographie complète
- [ ] Notes de bas de page formatées

---

## Statistiques

Pour compter les mots:

```bash
wc -w manuscript/full-manuscript.md
```

Pour compter par chapitre:

```bash
wc -w chapters/**/*.md
```

---

**Dernière compilation**: [YYYY-MM-DD]
**Version actuelle**: [X.Y]
