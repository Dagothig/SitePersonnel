function MapLoad()
{
    MapName = "Map002";
    Background = '#082010';

    var array = new Array();
    // BG
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 1, 1, 1, 1, 1, 1, 0]);
    array.push([0, 1, 1, 26, 26, 1, 1, 0]);
    array.push([0, 1, 1, 1, 1, 1, 1, 0]);
    array.push([0, 1, 1, 1, 1, 1, 1, 0]);
    array.push([0, 1, 1, 26, 26, 1, 1, 0]);
    array.push([0, 1, 1, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0, 0.5);

    array = new Array();
    // MG
    array.push([1, 1, 1, 1, 1, 1, 1, 1]);
    array.push([1, 0, 0, 0, 0, 0, 0, 1]);
    array.push([1, 0, 10, 0, 10, 0, 0, 1]);
    array.push([1, 0, 11, 0, 11, 0, 2, 1]);
    array.push([1, 17, 17, 17, 17, 17, 2, 1]);
    array.push([1, 0, 10, 0, 10, 0, 2, 1]);
    array.push([1, 0, 11, 0, 11, 0, 0, 6]);
    array.push([1, 1, 1, 1, 1, 1, 1, 1]);
    new GrilleVisuelle(sprGrille, array, 1, 1);

    array = new Array();
    // FG
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 7]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 2, 1);

    new Bloc(48, 384, 0, 0, false, false, false, true);
    new Bloc(288, 48, 48, 336, false, false, false, true);
    new Bloc(48, 48, 336, 336, false, false, false, true);
    new Bloc(288, 48, 48, 0, false, false, false, true);
    new Bloc(48, 288, 336, 0, false, false, false, true);
    new Bloc(24, 48, 360, 288, false, false, false, true);
    new Bloc(240, 24, 48, 192, false, false, false, true);
    new Bloc(48, 48, 96, 144, false, false, false, true);
    new Bloc(48, 48, 192, 144, false, false, false, true);
    new Bloc(48, 48, 192, 288, false, false, false, true);
    new Bloc(48, 48, 96, 288, false, false, false, true);
    new Echelle(296, 168, 32, 120);
    new Achat(96, 240, 48, 48, "Coeur", dropVie, 10);
    new Achat(192, 240, 48, 48, "Augmenter votre maximum d'or par 100", AugmenterOr, 100);
    new Achat(96, 96, 48, 48, "Augmenter votre vie", Coeur, 500);
    new Achat(192, 96, 48, 48, "Augmenter votre maximum de carreaux par 5", MaxCarreau, 300);
    new Teleporteur(336, 288, 48, 48, "Map001", 12, 12, true);
    MapLoaded();
}
ScriptLoaded();
