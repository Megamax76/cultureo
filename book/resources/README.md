# Dossier Resources

## Structure

```
resources/
├── images/          # Images, diagrammes, photos
├── tables/          # Tableaux et données
├── charts/          # Graphiques et visualisations
├── references/      # Documents de référence
└── tools/           # Scripts et outils utiles
```

---

## Images

### Organisation
- Par chapitre: `images/chapter-01/`
- Par type: `images/diagrams/`, `images/photos/`

### Convention de Nommage
Format: `chapterXX-type-description.ext`

Exemples:
- `chapter03-diagram-concept-map.png`
- `chapter05-photo-example.jpg`
- `chapter08-chart-statistics.svg`

### Formats Recommandés
- **Diagrammes**: SVG (vectoriel) ou PNG haute résolution
- **Photos**: JPG (qualité élevée)
- **Graphiques**: SVG ou PNG

### Référencement dans le Texte

```markdown
![Description de l'image](../resources/images/chapter03-diagram-concept-map.png)

*Figure 3.1: Légende descriptive de l'image*
```

---

## Tables

### Organisation
Fichiers CSV ou Markdown avec données structurées.

### Convention de Nommage
`chapterXX-table-description.csv`

### Exemple de Table Markdown

```markdown
| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Donnée 1  | Donnée 2  | Donnée 3  |
| Donnée 4  | Donnée 5  | Donnée 6  |
```

---

## Charts

### Outils Recommandés
- Python (matplotlib, seaborn)
- R (ggplot2)
- Excel/Numbers (puis export)
- Outils en ligne (Flourish, Datawrapper)

### Documentation
Pour chaque graphique, créer fichier accompagnant:
`chartXX-description-notes.md` avec:
- Source des données
- Script de génération (si applicable)
- Choix de visualisation
- Notes d'interprétation

---

## References

Documents PDF, articles, rapports consultés et à garder pour référence.

### Organisation
- Par auteur: `references/smith-2020-article.pdf`
- Par thème: `references/theme-A/`

---

## Tools

### Scripts Utiles

**`count-words.sh`**: Compte les mots par chapitre
```bash
#!/bin/bash
for file in ../chapters/**/*.md; do
    echo "$file: $(wc -w < "$file") mots"
done
```

**`compile-manuscript.sh`**: Assemble le manuscrit
```bash
#!/bin/bash
# Script de compilation du manuscrit
```

**`generate-toc.sh`**: Génère table des matières
```bash
#!/bin/bash
# Extraction des titres et génération TOC
```

---

## Checklist Ressources

- [ ] Toutes les images ont des légendes
- [ ] Toutes les tables ont des titres
- [ ] Sources citées pour toutes données
- [ ] Qualité suffisante pour impression
- [ ] Permissions/droits vérifiés
- [ ] Nommage cohérent
- [ ] Référencées dans le texte

---

**Dernière mise à jour**: [YYYY-MM-DD]
