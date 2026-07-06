---
target: home + pages projet (critique)
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-07-06T12-58-33Z
slug: src-components-pages-homepage-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Altimètre = position/section active/hover clairs ; pas d'indicateur de focus scroll au-delà |
| 2 | Match System / Real World | 4 | Langue naturelle FR/EN, « Design Engineer », ordre logique |
| 3 | User Control and Freedom | 3 | Thème + accent + langue + prev/next projets + ancres ; scroll libre (pas de snap) |
| 4 | Consistency and Standards | 4 | Système tokenisé cohérent, hovers accent uniformes, un seul système de composants |
| 5 | Error Prevention | 3 | n/a (pas de formulaire) ; liens externes rel/noopener, download attr OK |
| 6 | Recognition Rather Than Recall | 3 | Nav altimètre découvrable au survol seulement ; un primo-visiteur peut la manquer |
| 7 | Flexibility and Efficiency | 3 | Sauts d'ancre, thème/accent ; pas de raccourcis clavier (non nécessaires ici) |
| 8 | Aesthetic and Minimalist Design | 4 | Réellement minimal, hiérarchie forte, chaque élément mérite sa place |
| 9 | Error Recovery | 3 | n/a (pas de surface d'erreur) ; un 404 stylé compléterait |
| 10 | Help and Documentation | 3 | n/a pour un portfolio ; contenu auto-explicatif |
| **Total** | | **33/40** | **Good (haut de fourchette)** |

## Anti-Patterns Verdict

**LLM assessment :** Ce n'est PAS du slop IA. Le système N&B chaud + antiqua Light en display (Sentient→PP Editorial New) × grotesque neutre × Geist Mono rationné + l'accent bordeaux discipliné + la descente « chute libre » pinned = un POV committed et spécifique. Passe le test de réflexe de catégorie aux deux niveaux : un portfolio de Design Engineer qui n'est PAS tombé dans la lane éditoriale-serif-Klim par défaut — l'antiqua est justifiée par l'opposition de registre « humain × machine », et le concept de descente est idiosyncratique. Le picker d'accent (theme-color chooser) est un vrai signal « Design Engineer », sur-marque sans être gadget.

**Deterministic scan :** détecteur quasi propre — **1 warning** : `transition: width` (Descent.astro:305, altimètre) = animation de propriété de layout dans le hot path du scroll.

## Overall Impression

Portfolio near-ship, distinctif, confiant. Le plus gros levier n'est pas la home (excellente) mais les **pages projet** : les vidéos y apparaissent comme des rectangles sombres vides avant lecture — le seul endroit qui lit « placeholder cassé » sur un site par ailleurs très soigné.

## What's Working

1. **Système d'accent discipliné + picker.** Rationné (emphase + hovers + un aplat CTA), thémé, avec repli estompé en dark hero (jugement de contraste juste). Le picker matérialise l'identité tech sans gadget.
2. **Typographie signée.** Contraste de registre fort (antiqua Light × grotesque × mono), échelle fluide clamp, aucune police reflex-reject, casse normale. Scale mobile impeccable, zéro débordement.
3. **Concept committed.** La descente + l'altimètre + le grain portent une DA que personne ne confondra avec un template.

## Priority Issues

**[P1] Vidéos = rectangles sombres vides avant lecture (pages projet).**
- Why : `<video preload="metadata">` sans `poster` ne peint pas de première frame → gros blocs charbon vides avec juste une légende, jusqu'à ce que l'IntersectionObserver les lance. Sur le registre brand, un bloc plein là où une image devrait être lit exactement comme le « colored div where a hero image goes » banni. C'est la faiblesse la plus visible du site.
- Fix : exporter la 1re frame de chaque mp4 et l'ajouter en `poster` sur le `<video>` (still immédiat) ; garder l'aspect-ratio déjà en place.
- Command : `/impeccable polish` (ou fix direct).

**[P2] Cibles tactiles des contrôles header < 44px (mobile).**
- Why : toggle thème, pastille accent (~24px) et lien langue sont sous le seuil 44×44 recommandé ; doigt imprécis, surtout groupés en haut à droite.
- Fix : zone de tap ≥44px (padding invisible) sur les 3 contrôles ; espacer légèrement.
- Command : `/impeccable adapt`.

**[P2] Header fixe sans fond → collision possible au scroll (pages article).**
- Why : `position: fixed` transparent ; sur une page projet en thème clair, le logo/nom sombre peut chevaucher le contenu qui défile dessous (l'image de couverture, le titre). Sur la home il se replie, mais pas sur les articles.
- Fix : voile/backdrop-blur subtil au scroll, uniquement en variant `article`.
- Command : `/impeccable polish`.

**[P2] `transition: width` sur l'altimètre (Descent.astro:305).**
- Why : anime une propriété de layout dans le hot path du scroll → risque de jank là où la perf compte le plus.
- Fix : passer à `transform: scaleX()` (ou `grid-template-columns`) + `transform-origin`.
- Command : `/impeccable optimize`.

**[P3] Index projets numéroté 01–07.**
- Why : brand.md signale les marqueurs numérotés comme échafaudage sauf séquence réelle. Ici c'est une liste unique (affordance d'index légitime, pas des eyebrows numérotés sur chaque section), donc défendable — mais les projets ne sont pas une séquence ordonnée, les numéros sont décoratifs. À surveiller, pas un blocage.
- Fix (optionnel) : garder les numéros comme repère d'index assumé, ou les remplacer par l'année/le client en repère.

## Persona Red Flags

**Jordan (primo-visiteur) :** le hero n'a plus qu'une flèche de scroll comme invitation — pas de libellé « voir les projets ». Un primo-visiteur comprend « descendre » mais pas forcément qu'il y a des études de cas plus bas. La nav altimètre n'apparaît qu'au survol. Risque faible (tout le site est un scroll), mais l'entrée vers le travail est implicite.

**Casey (mobile, une main) :** bonne décision de désactiver la 3D en soft-reveal. MAIS les contrôles (thème/accent/langue) sont en haut de l'écran, hors zone du pouce, et sous 44px. Le CV et les liens de contact sont bien en bas (atterrissage), OK.

**Sam (a11y) :** les options du picker sont des cercles couleur-seule mais **avec `aria-label`** (bien), `menuitemradio`, Échap, clic extérieur. Flèche de scroll = `sr-only` label (bien). Vérifier le focus-visible sur la pastille accent et les ticks de l'altimètre.

**Recruteur pressé (persona projet) :** scanne 40 portfolios en 10 min. Il veut voir le travail vite. Ici il doit scroller la descente (ou trouver l'altimètre) pour atteindre les projets — pas de raccourci « work » explicite au-dessus de la ligne de flottaison. Le concept est fort mais coûte quelques secondes d'orientation ; à arbitrer contre l'effet « wow ».

## Minor Observations

- Lead/prose en `--ink-muted` : contrastes calibrés au ras de 4.5:1 sur papier (0.44/0.966 ≈ 4.6:1). OK mais aucune marge — ne pas éclaircir davantage le muted pour le corps.
- Pas de `poster` = aussi un flash de vide au premier paint avant l'autoplay ; le fix P1 le règle.
- Un 404 stylé (dans la DA) fermerait la boucle « craft partout ».

## Questions to Consider

- Et si l'entrée « Projets » était rendue explicite dès le hero (au-delà de la flèche), pour le recruteur pressé — sans casser la descente ?
- Les vidéos méritent-elles un poster N&B (cohérent avec le grayscale→couleur des couvertures) plutôt qu'une frame couleur ?
- L'index numéroté 01–07 raconte-t-il quelque chose (ordre = importance ?) ou est-ce décoratif ?
