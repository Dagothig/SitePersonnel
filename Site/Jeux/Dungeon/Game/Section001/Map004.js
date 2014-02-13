function MapLoad()
{
    MapName = "Map004";
    Background = '#102140';

    var array = new Array();
    // BG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 42, 37, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 40, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 42, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 40, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 40, 38, 37, 0, 0, 0, 0, 38, 42, 37, 0, 36, 39, 35, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 38, 42, 37, 0, 0, 0, 0, 0, 0, 0, 36, 39, 35, 41, 34, 37, 0, 0, 0, 36, 39, 35, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 36, 34, 40, 38, 37, 0, 0, 0, 0, 0, 0, 32, 0, 36, 39, 35, 0, 0, 0, 0, 33, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 38, 37, 41, 34, 34, 40, 0, 0, 0, 0, 0, 0, 32, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 38, 42, 37, 0, 38, 34, 35, 36, 39, 34, 40, 0, 0, 0, 0, 0, 0, 32, 0, 0, 33, 0, 0, 0, 0, 24, 24, 24, 24, 0, 0, 0, 38, 42, 37, 0, 0, 0, 0]);
    array.push([0, 41, 34, 40, 0, 41, 34, 37, 0, 32, 36, 35, 38, 42, 37, 0, 0, 0, 33, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24, 24, 24, 0, 41, 34, 40, 0, 0, 38, 37]);
    array.push([0, 41, 34, 40, 0, 36, 39, 35, 0, 32, 0, 38, 34, 34, 34, 37, 38, 42, 0, 0, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 0, 36, 39, 35, 0, 38, 34, 40]);
    array.push([0, 36, 39, 35, 0, 0, 32, 0, 0, 32, 0, 36, 39, 39, 39, 35, 41, 34, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 0, 0, 32, 0, 0, 36, 39, 35]);
    array.push([0, 0, 32, 0, 0, 0, 32, 0, 0, 33, 0, 0, 0, 33, 0, 0, 36, 39, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 32, 0]);
    array.push([0, 0, 33, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0, 0.5);

    array = new Array();
    // MG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 34, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 40, 0, 38, 42, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 35, 0, 41, 34, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 36, 39, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 40, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 33, 0, 25, 25, 25, 25, 0, 0, 0, 0, 0, 0, 41, 40, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 34, 40, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 25, 25, 25, 24, 22, 22, 24, 25, 25, 0, 0, 38, 42, 34, 40, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 40, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 24, 0, 22, 0, 22, 0, 0, 0, 22, 0, 0, 36, 34, 34, 34, 37, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 35, 0, 0, 0, 0, 0, 25, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 34, 35, 0]);
    array.push([0, 0, 0, 0, 38, 42, 37, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 35, 0, 0]);
    array.push([0, 0, 0, 0, 36, 39, 35, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 0, 0, 0, 32, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 33, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 33, 0, 0, 0]);
    array.push([25, 25, 25, 25, 25, 25, 25, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25]);
    new GrilleVisuelle(sprGrille, array, 1, 1);

    array = new Array();
    // FG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 0, 38, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 34, 40, 0, 38, 34, 34, 42, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 34, 34, 40, 0, 41, 34, 34, 34, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 34, 34, 40, 0, 36, 34, 34, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 0, 36, 39, 35, 0, 0, 36, 39, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 34, 40, 0, 0, 0, 32, 0, 0, 0, 0, 32, 38, 42, 37, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 34, 34, 37, 0, 0, 32, 0, 0, 0, 0, 33, 36, 39, 35, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([37, 0, 38, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 36, 39, 35, 0, 0, 33, 0, 0, 0, 0, 25, 0, 33, 38, 42, 37, 0, 0, 0, 0, 38, 42]);
    array.push([40, 0, 41, 40, 38, 37, 0, 38, 37, 0, 0, 38, 42, 37, 0, 36, 34, 42, 37, 32, 0, 38, 37, 25, 0, 0, 0, 0, 0, 0, 25, 41, 34, 40, 0, 0, 0, 0, 41, 34]);
    array.push([34, 37, 41, 34, 34, 40, 38, 34, 34, 37, 0, 36, 39, 35, 38, 42, 34, 34, 35, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 36, 39, 35, 0, 0, 0, 0, 41, 34]);
    array.push([39, 35, 36, 39, 39, 35, 36, 34, 34, 34, 37, 0, 32, 0, 36, 34, 34, 40, 0, 25, 0, 0, 24, 24, 0, 0, 0, 0, 0, 24, 0, 0, 32, 0, 38, 42, 37, 0, 36, 39]);
    array.push([32, 0, 0, 32, 0, 0, 0, 36, 39, 39, 35, 0, 32, 0, 0, 36, 39, 35, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 24, 0, 0, 33, 0, 36, 39, 35, 0, 0, 32]);
    array.push([32, 0, 0, 32, 0, 0, 0, 0, 33, 0, 0, 0, 33, 38, 42, 37, 33, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 24, 0, 0, 25, 38, 37, 33, 0, 0, 0, 32]);
    array.push([33, 0, 0, 33, 0, 0, 38, 37, 25, 0, 0, 0, 25, 25, 25, 25, 25, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 0, 0, 0, 33]);
    array.push([25, 0, 0, 25, 0, 0, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25]);
    new GrilleVisuelle(sprGrille, array, 2, 1);

    new Bloc(144, 48, 864, 720, false, false, false, true);
    new Bloc(192, 48, 960, 672, false, false, false, true);
    new Bloc(192, 48, 1104, 624, false, false, false, true);
    new Bloc(192, 48, 1248, 576, false, false, false, true);
    new Bloc(144, 48, 1392, 624, false, false, false, true);
    new Bloc(384, 48, 0, 912, false, false, false, true);
    new Bloc(96, 96, 960, 864, false, false, false, true);
    new Bloc(528, 144, 1056, 816, false, false, false, true);
    new Bloc(144, 96, 1584, 864, false, false, false, true);
    new Bloc(192, 48, 1728, 912, false, false, false, true);
    new Bloc(24, 816, 1896, 96, false, false, false, true);
    new Bloc(24, 816, 0, 96, false, false, false, true);
    new Echelle(872, 768, 32, 48);
    new Echelle(1208, 672, 32, 48);
    new Echelle(1304, 624, 32, 96);
    new Echelle(1352, 624, 32, 48);
    new Echelle(1496, 672, 32, 48);
    new Bloc(144, 48, 816, 912, false, false, false, true);
    new Bloc(432, 96, 384, 864, false, false, false, true);
    new Eau(816, 888, 144, 24, sprEau, sprSplash, 6, 0);
    new Teleporteur(0, 0, 48, 912, "Map003", 38, 18, true);
    new Ooze(864, 864, 2, 1);
    new Ooze(480, 816, 2, 1);
    new Ooze(192, 864, 2, 1);
    new Ooze(1200, 768, 2, 1);
    new Ooze(1440, 768, 2, 1);
    new Ooze(1632, 816, 2, 1);
    new Teleporteur(1872, 864, 48, 48, "Map005", 1, 2, true);
    MapLoaded();
}
ScriptLoaded();
