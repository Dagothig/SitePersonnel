function MapLoad()
{
    MapName = "Map005";
    Background = '#102140';

    var array = new Array();
    // BG
    array.push([32, 0, 0, 41, 34, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([32, 0, 0, 36, 39, 35, 0, 38, 42, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([33, 0, 0, 0, 32, 0, 0, 41, 34, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 25, 0, 33, 0, 0, 36, 39, 35, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    array.push([0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0]);
    array.push([0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0]);
    array.push([0, 24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 24, 24, 24, 24, 24, 24, 38, 42, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 24, 24, 24, 24, 24, 24, 36, 39, 35, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0]);
    array.push([0, 24, 24, 24, 24, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 12, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 32, 0, 0, 0, 0, 12, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 0, 15, 15, 15, 15, 15, 20, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 0, 15, 15, 15, 15, 20, 0, 38, 37, 0]);
    array.push([42, 0, 0, 0, 24, 24, 24, 24, 24, 24, 0, 15, 15, 15, 20, 0, 38, 34, 40, 0]);
    array.push([0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24, 38, 42, 37, 0, 0, 41, 34, 34, 0]);
    array.push([0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24, 41, 34, 40, 0, 0, 41, 34, 0, 0]);
    array.push([0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24, 0, 34, 40, 0, 0, 36, 39, 0, 0]);
    array.push([0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 0, 0, 39, 35, 38, 42, 37, 32, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 0, 0, 32, 0, 36, 39, 35, 32, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 33, 0, 0, 33, 0, 33, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0, 0.5);

    array = new Array();
    // MG
    array.push([39, 39, 35, 36, 34, 34, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 32, 0, 0, 36, 39, 35, 0, 0, 0, 0, 0, 0, 0, 29, 27, 28, 0, 0, 0]);
    array.push([0, 33, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 29, 27, 27, 27, 28, 0, 0]);
    array.push([25, 0, 22, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 0, 0, 25, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]);
    array.push([24, 0, 22, 0, 24, 24, 24, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 22, 0, 24, 24, 24, 24, 24, 18, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]);
    array.push([24, 0, 22, 0, 24, 24, 24, 24, 24, 15, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 0, 0, 24, 24, 24, 24, 24, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 0, 0, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 22, 22, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]);
    array.push([24, 0, 22, 22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 22, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]);
    array.push([24, 0, 0, 0, 0, 24, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 24, 0, 0, 24, 24, 24, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0]);
    array.push([24, 24, 24, 24, 24, 24, 24, 24, 24, 22, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 24, 24, 24, 24, 24, 22, 22, 22, 22, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 24, 24, 24, 24, 22, 22, 22, 0, 22, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 24, 24, 24, 22, 22, 0, 22, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([24, 24, 24, 24, 22, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 38, 37, 0, 0, 0]);
    array.push([24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 37, 41, 34, 37, 0, 0]);
    array.push([24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 35, 41, 34, 40, 0, 0]);
    array.push([24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 36, 39, 35, 0, 0]);
    array.push([24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 32, 0, 0, 0]);
    array.push([24, 24, 24, 24, 24, 24, 24, 0, 0, 25, 25, 25, 0, 33, 0, 0, 33, 0, 0, 0]);
    array.push([24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25]);
    new GrilleVisuelle(sprGrille, array, 1, 1);

    array = new Array();
    // FG
    array.push([0, 0, 36, 39, 35, 36, 34, 34, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 32, 0, 0, 36, 39, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([38, 42, 37, 33, 0, 0, 0, 32, 0, 0, 0, 0, 0, 29, 27, 27, 27, 28, 0, 0]);
    array.push([25, 25, 0, 25, 0, 38, 37, 33, 0, 0, 0, 0, 0, 12, 17, 17, 17, 12, 0, 0]);
    array.push([0, 24, 24, 24, 0, 25, 25, 25, 0, 0, 0, 0, 0, 12, 1, 9, 1, 12, 0, 0]);
    array.push([0, 24, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 24, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 9, 31, 0, 0, 0]);
    array.push([0, 24, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 0, 0, 0, 31, 9, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 37, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 34, 37, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 36, 35, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 31, 9, 31, 0, 0, 0]);
    array.push([24, 0, 0, 0, 0, 24, 0, 0, 0, 32, 0, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([24, 24, 0, 0, 24, 24, 0, 0, 0, 33, 0, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 24, 24, 24, 24, 0, 0, 0, 0, 25, 0, 0, 0, 0, 31, 12, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 9, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 9, 31, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 42]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 42, 37, 0, 0, 0, 0, 38, 34, 34]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 34, 40, 0, 0, 0, 0, 36, 34, 34]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 35, 0, 0, 0, 0, 0, 36, 39]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 32]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 38, 37, 0, 38, 42, 37, 33]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 0, 25, 25, 25, 25]);
    new GrilleVisuelle(sprGrille, array, 2, 1);

    new Bloc(48, 336, 48, 144, false, false, false, true);
    new Bloc(48, 336, 144, 144, false, false, false, true);
    new Bloc(192, 336, 192, 192, false, false, false, true);
    new Bloc(48, 240, 384, 240, false, false, false, true);
    new Bloc(48, 144, 480, 960, false, false, false, true);
    new Bloc(384, 48, 576, 1392, false, false, false, true);
    new Bloc(48, 192, 192, 1248, false, false, false, true);
    new Bloc(96, 624, 96, 816, false, false, false, true);
    new Bloc(48, 672, 48, 768, false, false, false, true);
    new Bloc(48, 288, 192, 768, false, false, false, true);
    new Bloc(48, 288, 240, 720, false, false, false, true);
    new Bloc(96, 240, 288, 720, false, false, false, true);
    new Bloc(48, 192, 384, 768, false, false, false, true);
    new Bloc(48, 96, 432, 816, false, false, false, true);
    new Bloc(48, 768, 0, 144, false, false, false, true);
    new Echelle(104, 144, 32, 480);
    new Echelle(152, 480, 32, 96);
    new Echelle(200, 528, 32, 48);
    new Echelle(248, 528, 32, 96);
    new Echelle(488, 816, 32, 144);
    new Echelle(440, 912, 32, 144);
    new Echelle(392, 960, 32, 48);
    new Echelle(344, 960, 32, 144);
    new Echelle(296, 960, 32, 96);
    new Echelle(248, 1008, 32, 96);
    new Echelle(200, 1056, 32, 96);
    new Bloc(24, 720, 936, 672, false, false, false, true);
    new Bloc(24, 144, 0, 0, false, false, false, true);
    new Bloc(24, 672, 936, 0, false, false, false, true);
    new Eau(48, 744, 192, 72, sprEau, sprSplash, 6, 0);
    new Bloc(240, 48, 432, 336, false, false, false, true);
    new Escalier(432, 288, 48, 48, true);
    new Bloc(48, 768, 768, 192, false, false, false, true);
    new Echelle(728, 192, 32, 720);
    new Bloc(240, 24, 624, 120, false, false, false, true);
    new Fontaine(720, 864, 48, 48);
    new Bloc(48, 96, 672, 192, false, false, false, true);
    new Bloc(48, 624, 672, 336, false, false, false, true);
    new Bloc(48, 96, 816, 144, false, false, false, true);
    new Bloc(48, 96, 624, 144, false, false, false, true);
    new Eau(336, 1368, 96, 24, sprEau, sprSplash, 6, 0);
    new Bloc(48, 144, 240, 1296, false, false, false, true);
    new Bloc(48, 96, 288, 1344, false, false, false, true);
    new Bloc(144, 96, 432, 1344, false, false, false, true);
    new Bloc(96, 48, 336, 1392, false, false, false, true);
    new Ooze(288, 672, 2, 1);
    new Teleporteur(0, 96, 48, 48, "Map004", 38, 18, true);
    new Coffre(sprCoffre, 720, 922, 48, 40, dropOr);
    new Teleporteur(912, 1344, 48, 48, "Map006", 1, 13, true);
    new Ooze(480, 1296, 2, 1);
    MapLoaded();
}
ScriptLoaded();
