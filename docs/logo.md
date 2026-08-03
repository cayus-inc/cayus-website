# Logo — direction et decisions

> Ecrit le 2026-08-04 pour ne plus dependre de la memoire de conversation. Reconstruit a
> partir des references reelles envoyees par Enzo (captures du portfolio Softriver) et des
> decisions prises dans la meme conversation.

## References regardees (portfolio Softriver, images collees par Enzo)

Enzo a explicitement dit de ne PAS suivre la direction de Softriver telle quelle — juste
de regarder les meilleurs logos au monde, Softriver etant un point de depart, pas une cible.

Logos vus : softriver (wordmark noir + mark en "S" forme de deux chevrons superposes),
apytel (mark triangle/montagne + cercle, blanc sur bleu nuit), byrdseye (icone oiseau
stylise), une grille de petits logos clients (CommodityAI, Humaify, Arch, FusionHealth.ai,
MyFitter, Destiny Consulting Group), exposure (4 barres verticales + wordmark), monty
(mark "//." + point, bleu fintech), atlas (mark "A", imagerie de colonnes/sculptures,
registre classique/musee), une deuxieme grille (Accredifi, CopyCatch, Innovinity, Humaify,
PingYou, PureVital, Agint, supportmagic, persocare, Bloosh), plus la page de pricing des
forfaits branding Softriver ($280/$480/$987).

**Verdict a l'epoque, toujours valable** : la deuxieme grille (Accredifi, Innovinity,
PingYou, Agint, persocare, Bloosh) est le piege a eviter — forme geometrique arrondie +
wordmark sans-serif, competent mais interchangeable, exactement le type de logo generique
qu'un generateur produirait. **Atlas** est la reference la plus pertinente : registre
classique (colonnes, marbre) traite de facon sobre et monochrome, pas costume — la preuve
qu'un registre antique peut etre premium-tech plutot que kitsch. Le mark en **S** de
Softriver lui-meme tient aussi : un vrai signe, pas une forme generique.

## Le concept retenu : le sceau de cire

Pas un "C" en bulle arrondie generique. Une abstraction du sceau/cachet de cire, parce que
le produit EST litteralement un sceau de qualification appose sur un candidat verifie.
Deja code et en ligne sur le site (`src/components/ui/Seal.tsx`) : deux anneaux concentriques
qui tournent lentement en sens inverse, une forme de sceau irreguliere (pas un cercle
parfait) en dégradé metal, avec un "C" grave dedans.

## Palette (validee par Enzo apres 2 iterations)

1. Premiere proposition : travertin/basalte/bronze/pourpre tyrien — **rejetee**, "casse
   l'effet premium", trop "brocante".
2. **Validee** : base monochrome noir/blanc/gris (ink `#0D0D0C` / paper `#FAF8F4`) avec un
   seul accent metal tres desature (pewter `#9A9488` / `#C7C0B2` en clair, `#6B6559` en
   sombre). Aucune couleur vive.

## Typographie

Serif display en retrait pour les titres/wordmark (Source Serif 4 sur le vrai site, pensé
a l'origine comme "Iowan Old Style" sur le premier prototype), grotesque neutre pour le
corps (Inter).

## Ce qui manque encore, a livrer maintenant

Le mark existe seulement comme composant React integre a la page d'accueil. **Il n'existe
aucun fichier de logo portable** (SVG isole, favicon, version monochrome pour tampon/
filigrane, format carre pour avatar). C'est l'objet de la prochaine etape.

## Correction du 2026-08-04 : le contour etait mal construit

Premiere version livree : contour dessine a la main (courbes de Bezier approximatives,
asymetriques). Rendu juge par Enzo, a raison, comme "une bouse avec une lettre dessus" — pas
une forme deliberee. Refait mathematiquement : fonction polaire r(theta) = 78 + 9*cos(8*theta),
echantillonnee et lissee en Catmull-Rom -> Bezier. Resultat : un medaillon a 8 pointes
parfaitement symetrique, plus proche d'un vrai sceau de cire. Propage partout (composant
`Seal.tsx`, tous les SVG de `public/brand/`, favicon, image OG).

**Sur la critique des logos Softriver** : Enzo a raison de pousser en arriere — l'execution
technique de toute la grille (Accredifi, Innovinity, PingYou, Agint, persocare, Bloosh
compris) est propre et precise, ce n'est pas la qualite d'execution qui les rendait
critiquables, c'est leur manque de specificite conceptuelle par rapport a Cayus. Le vrai
enseignement a retenir des deux : **precision geometrique deliberee**, ce qui manquait
dans la premiere version du sceau.

## Deuxieme correction, meme jour : abandon du sceau festonne

Le medaillon a 8 pointes, meme mathematiquement precis, se lisait comme "un biscuit" ou
"une vieille etoile" (retour direct d'Enzo sur les fichiers). Diagnostic correct : le
festonnage/organique n'est simplement pas le bon registre, quelle que soit la precision
d'execution. Toutes les references qu'Enzo a validees (Softriver, Monty, Apytel) sont des
**formes geometriques simples et abstraites** (arcs, chevrons, barres), jamais des
contours ondules. Nouveau mark : un anneau ouvert formant un "C" litteral, un seul arc
epais (rayon 62, epaisseur de trait 26, extremites arrondies), meme registre que le S de
Softriver. Propage partout. Un vrai bug trouve au passage : le filtre `drop-shadow` du
composant React debordait le viewport SVG et se faisait tronquer net a droite — corrige
avec `overflow: visible` sur le SVG et un flou reduit.
