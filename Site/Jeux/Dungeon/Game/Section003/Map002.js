function MapLoad()
{
    MapName = "Map002";
    Background = '#40BEFF';

    var array = new Array();
    // BG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 43, 43, 43, 0, 0, 0]);
    array.push([0, 0, 43, 43, 26, 43, 43, 0, 0]);
    array.push([0, 43, 43, 43, 43, 43, 43, 43, 0]);
    array.push([0, 12, 12, 12, 12, 12, 12, 12, 0]);
    array.push([0, 12, 12, 12, 12, 12, 12, 12, 0]);
    array.push([0, 12, 12, 26, 12, 12, 12, 12, 0]);
    array.push([0, 12, 12, 12, 12, 12, 12, 12, 0]);
    array.push([0, 12, 12, 12, 12, 12, 12, 46, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0, 0.8);

    array = new Array();
    // MG
    array.push([0, 0, 0, 45, 43, 44, 0, 0, 0]);
    array.push([0, 0, 45, 0, 0, 0, 44, 0, 0]);
    array.push([0, 45, 0, 0, 0, 0, 0, 44, 0]);
    array.push([45, 0, 0, 0, 48, 49, 48, 49, 44]);
    array.push([12, 2, 15, 15, 15, 15, 15, 15, 12]);
    array.push([12, 2, 0, 0, 0, 0, 11, 11, 12]);
    array.push([12, 2, 0, 0, 0, 11, 11, 11, 12]);
    array.push([12, 2, 15, 15, 15, 15, 15, 15, 12]);
    array.push([12, 2, 0, 0, 0, 0, 0, 20, 12]);
    array.push([12, 12, 12, 12, 12, 12, 12, 12, 12]);
    new GrilleVisuelle(sprGrille, array, 1, 1);

    array = new Array();
    // FG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 20, 32, 21, 0, 0, 0]);
    array.push([0, 0, 20, 0, 32, 0, 21, 0, 0]);
    array.push([0, 20, 0, 0, 32, 0, 0, 21, 0]);
    array.push([0, 0, 0, 0, 32, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 32, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 32, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 32, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 32, 0, 0, 21, 12]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 2, 1);

    new Bloc(336, 48, 48, 432, false, false, false, true);
    new Bloc(48, 336, 0, 144, false, false, false, true);
    new Bloc(48, 48, 48, 96, false, false, false, true);
    new Bloc(48, 48, 96, 48, false, false, false, true);
    new Bloc(144, 48, 144, 0, false, false, false, true);
    new Bloc(48, 48, 288, 48, false, false, false, true);
    new Bloc(48, 48, 336, 96, false, false, false, true);
    new Bloc(48, 336, 384, 144, false, false, false, true);
    new Echelle(56, 192, 32, 240);
    new Bloc(72, 24, 312, 168, false, false, false, true);
    new Bloc(72, 24, 216, 168, false, false, false, true);
    new Bloc(288, 48, 96, 192, false, false, false, true);
    new Bloc(288, 48, 96, 336, false, false, false, true);
    new Bloc(48, 48, 240, 288, false, false, false, true);
    new Bloc(96, 96, 288, 240, false, false, false, true);
    new Teleporteur (pX, pY, pWidth, pHeight, pNouvelleMap, pNouvelX, pNouvelY, pEtat);
    MapLoaded();
}
ScriptLoaded();
