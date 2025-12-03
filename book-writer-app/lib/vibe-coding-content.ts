import { Book } from './types'

export const vibeCodingBook: Book = {
  id: 'vibe-coding-2025',
  title: 'Vibe Coding',
  subtitle: 'Le Manifeste de la Création Numérique par l\'Intention',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  chapters: [
    {
      id: 'preface',
      title: 'Préface : Mon Premier Vibe',
      order: 0,
      content: `<h1>Préface : Mon Premier Vibe</h1>

<p>2h13 du matin. Je fixe mon écran. Le curseur clignote. Ça fait 6 heures que je suis sur ce putain de bug. Un truc débile, un pointeur mal initialisé en C++. Stack Overflow est ouvert sur 47 onglets. Je ne comprends plus rien. Je sens le syndrome de l'imposteur me bouffer de l'intérieur.</p>

<p>C'était en 2010. J'avais 20 ans. Je voulais créer une app simple - un gestionnaire de tâches perso. Mais entre mon idée et sa réalisation, il y avait un mur. Un mur fait de syntaxe obscure, de documentation incomplète, et de ma propre incompétence technique.</p>

<h2>Le Contraste</h2>

<p>Fast forward. Décembre 2024.</p>

<p>Même objectif : créer une app de todo. Sauf que cette fois, j'ouvre Cursor. Je dis (littéralement, je parle) :</p>

<blockquote>
"Crée-moi une app de gestion de tâches en Next.js. Design moderne avec Tailwind. Les tâches doivent être priorisables par couleur et tags. Ajoute un mode sombre."
</blockquote>

<p>10 secondes plus tard : l'IA me propose un plan. Je valide.</p>
<p>2 minutes plus tard : L'app existe. Elle tourne dans mon navigateur.</p>
<p>Elle est belle. Elle fonctionne.</p>

<p>Je teste. Je demande des modifications en langage naturel :</p>
<ul>
<li>"Rends les boutons plus arrondis"</li>
<li>"Ajoute une animation quand on complète une tâche"</li>
<li>"Connecte ça à PostgreSQL au lieu d'utiliser le local storage"</li>
</ul>

<p>Chaque fois : 20-30 secondes, c'est fait.</p>

<p>2 heures plus tard, l'app est complète, déployée sur Vercel, accessible à n'importe qui via une URL.</p>

<h2>La Prise de Conscience</h2>

<p>Ce moment m'a foudroyé. Ce n'était pas juste "pratique" ou "cool". C'était <strong>civilisationnel</strong>.</p>

<p>Quelque chose de fondamental avait changé dans la relation entre l'humain et la machine.</p>

<p>La barrière - cette putain de barrière technique qui m'avait torturé pendant des années - venait de s'effondrer.</p>

<h2>La Promesse</h2>

<p>Ce livre raconte cette révolution. Le "Vibe Coding" n'est pas qu'un buzzword. C'est un changement de paradigme qui va redéfinir qui peut créer, comment on crée, et ce que signifie "savoir coder".</p>

<p>Je ne suis pas un gourou. Je ne vais pas vous vendre du rêve. Je vais vous raconter, avec honnêteté et rigueur, ce qui est en train de se passer. Les possibilités folles. Les pièges réels. Et surtout, comment vous pouvez saisir cette opportunité maintenant.</p>

<p>Si vous avez une idée - n'importe laquelle - ce livre est votre mode d'emploi pour la concrétiser.</p>

<p><strong>Allons-y.</strong></p>`
    },
    {
      id: 'introduction',
      title: 'Introduction : L\'Aube d\'une Nouvelle Littératie',
      order: 1,
      content: `<h1>Introduction : L'Aube d'une Nouvelle Littératie</h1>

<h2>I. L'Accroche : Le Moment Historique</h2>

<p><strong>3 janvier 2025</strong> : Collins Dictionary annonce "Vibe Coding" comme <strong>mot de l'année 2025</strong>.</p>

<p>Ce n'est pas anecdotique. C'est le symbole d'une rupture.</p>

<h3>Comparaisons historiques</h3>

<table>
<tr><th>Révolution</th><th>Année</th><th>Ce qu'elle a démocratisé</th><th>Impact</th></tr>
<tr><td>Imprimerie</td><td>1450</td><td>Le savoir (livres accessibles)</td><td>Renaissance, Réforme</td></tr>
<tr><td>Internet</td><td>1990</td><td>L'information (accès universel)</td><td>Économie digitale</td></tr>
<tr><td>Vibe Coding</td><td>2025</td><td><strong>La création numérique</strong></td><td>À définir (nous y sommes)</td></tr>
</table>

<h3>Citation choc</h3>

<blockquote>
"Tout le monde est désormais un programmeur. Le langage de programmation du futur est l'humain."<br/>
— Jensen Huang, CEO NVIDIA
</blockquote>

<h3>Les chiffres qui prouvent que c'est réel</h3>

<ul>
<li>Collins Dictionary: +400% d'usage du terme "vibe coding" en 2024</li>
<li>Google Internal Report: +350% de "first-time code contributors" dans l'entreprise</li>
<li>Replit: Revenus passés de 2.8M$ à 150M$ annualisés en 1 an grâce à leur Agent IA</li>
</ul>

<h2>II. Qu'est-ce que le Vibe Coding ?</h2>

<p>Le Vibe Coding, c'est la capacité de créer des logiciels fonctionnels en utilisant uniquement le langage naturel pour communiquer avec une IA.</p>

<p>Plus de syntaxe à mémoriser.<br/>
Plus d'erreurs de compilation cryptiques.<br/>
Plus de "comment je fais un map en JavaScript déjà ?".</p>

<p>Juste vous, votre intention ("je veux une app qui fait X"), et l'IA qui l'exécute.</p>

<h3>Ce que ce n'est PAS</h3>

<ul>
<li><strong>No-Code (Webflow, Bubble)</strong> : Limité aux templates, pas de vraie flexibilité</li>
<li><strong>Low-Code (Outsystems)</strong> : Nécessite quand même des compétences tech</li>
<li><strong>Vibe Coding</strong> : Intention en langage naturel → Code complet (nouvelle catégorie, illimité)</li>
</ul>

<h2>III. Pourquoi Maintenant ? Pourquoi 2025 ?</h2>

<h3>La Convergence de 3 Facteurs Critiques</h3>

<p><strong>1. La Science : Maturité des Transformers (2017→2025)</strong></p>

<p>Le saut qualitatif de 2024 est que les IA ont franchi le seuil du "juste impressionnant" au "réellement utilisable en production".</p>

<p><strong>2. Les Outils : L'Infrastructure du Vibe</strong></p>

<ul>
<li><strong>Cursor</strong> (2023-2024) : IDE qui intègre l'IA nativement, mode "Composer" multi-fichiers</li>
<li><strong>Replit Agent</strong> (2024) : De l'idée au déploiement en 1 clic, zéro config</li>
<li><strong>Claude Computer Use</strong> (Oct 2024) : L'IA peut prendre le contrôle de votre PC pour tester le code elle-même</li>
</ul>

<p><strong>3. La Culture : Une Génération Prête</strong></p>

<p>Les gens nés après 1995 ont grandi avec les smartphones, YouTube tutorials, et le no-code. Cette génération n'a pas peur de la tech. Elle veut juste que la tech s'adapte à elle, pas l'inverse.</p>

<h2>IV. La Promesse de Ce Livre</h2>

<p>Ce que vous allez apprendre :</p>

<ol>
<li><strong>COMPRENDRE</strong> (Partie I : La Révolution) - Les fondations scientifiques sans être un PhD</li>
<li><strong>MAÎTRISER</strong> (Partie II : L'Arsenal) - Les outils concrets pour Vibe Coder dès demain</li>
<li><strong>ANTICIPER</strong> (Partie III : Le Nouveau Monde) - Les opportunités économiques et les pièges</li>
</ol>

<p>Je serai honnête. Brutalement honnête. Je vous montrerai les possibilités folles ET les limites réelles.</p>

<h2>V. Le Mot de la Fin</h2>

<blockquote>
"You don't write a book. You write a sentence. You write another sentence. Eventually, you have a book."<br/>
— Neil Gaiman
</blockquote>

<p>De la même manière, en 2025, vous ne "codez" plus.</p>

<p>Vous formulez une intention. Puis une autre. Puis une autre.</p>

<p>Et finalement, vous avez une application.</p>

<p>Pour la première fois dans l'histoire de l'informatique, <strong>l'imagination est la seule limite</strong>.</p>

<p>Nous sommes au <strong>moment zéro</strong> de cette révolution. La fenêtre est ouverte. Mais elle ne le restera pas longtemps.</p>

<p>Ce livre est votre guide pour la traverser.</p>

<p><strong>Allons-y.</strong></p>`
    },
    {
      id: 'chapter-1',
      title: 'Chapitre 1 : Le Son du Code a Changé',
      order: 2,
      content: `<h1>Chapitre 1 : Le Son du Code a Changé</h1>

<p><em>Ce chapitre est en cours de rédaction. Consultez le plan détaillé dans la structure du livre.</em></p>

<h2>Plan du chapitre</h2>

<ul>
<li>Flashback : Une Soirée de Coding en 2010</li>
<li>Fast Forward : Une Après-Midi de Vibe en 2024</li>
<li>Analyse : Qu'est-ce qui a Changé ?</li>
<li>La Sociologie du Changement</li>
<li>Le Message</li>
</ul>

<p><strong>À rédiger...</strong></p>`
    }
  ]
}

export const initializeVibeCodingBook = () => {
  const books = JSON.parse(localStorage.getItem('book-writer-books') || '[]')
  
  // Ne pas réimporter si déjà présent
  if (books.some((b: Book) => b.id === vibeCodingBook.id)) {
    return
  }
  
  books.push(vibeCodingBook)
  localStorage.setItem('book-writer-books', JSON.stringify(books))
}
