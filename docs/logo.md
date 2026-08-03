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
