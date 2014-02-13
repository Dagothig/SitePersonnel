function MapLoad()
{
    MapName = "Map002";
    Background = '#160820';

    var array = new Array();
    // BG
    array.push([0, 1, 0, 0, 1, 0]);
    array.push([0, 1, 1, 1, 1, 0]);
    array.push([0, 1, 9, 9, 1, 0]);
    array.push([0, 1, 9, 9, 1, 0]);
    array.push([0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0);

    array = new Array();
    // MG
    array.push([1, 0, 1, 1, 2, 1]);
    array.push([1, 0, 0, 0, 2, 1]);
    array.push([1, 0, 0, 0, 2, 1]);
    array.push([1, 0, 10, 0, 2, 1]);
    array.push([1, 0, 17, 17, 17, 1]);
    array.push([1, 1, 1, 1, 1, 1]);
    new GrilleVisuelle(sprGrille, array, 1);

    array = new Array();
    // FG
    array.push([0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 2);

    new Eau(48, 216, 192, 24, sprEau, sprSplash, 6, 0);
    new Bloc(144, 24, 96, 192, false, false, false, true);
    new Bloc(48, 288, 0, 0, false, false, false, true);
    new Bloc(192, 48, 48, 240, false, false, false, true);
    new Bloc(48, 288, 240, 0, false, false, false, true);
    new Bloc(144, 48, 48, 0, false, false, false, true);
    new Bloc(48, 24, 192, 0, false, false, false, true);
    new Echelle(200, 0, 32, 192);
    new Pancarte(96, 144, 48, 48, "Hello!@This is my hole! It's pretty, no?", Joueur);
    new Teleporteur(192, 0, 48, 48, "Map001", 0, 0, true);
    MapLoaded();
}
ScriptLoaded();
