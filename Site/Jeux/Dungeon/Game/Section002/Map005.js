function MapLoad()
{
    MapName = "Map005";
    Background = '#082010';

    var array = new Array();
    // BG
    array.push([0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 15, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 15, 15, 15, 15, 15, 0, 16, 0, 0, 1, 1, 1, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 0, 16, 0, 0, 1, 0, 1, 0]);
    array.push([0, 16, 0, 0, 0, 0, 0, 0, 16, 1, 1, 1, 0, 1, 0]);
    array.push([0, 16, 0, 16, 15, 15, 15, 15, 16, 0, 1, 1, 0, 1, 0]);
    array.push([0, 16, 0, 16, 15, 15, 15, 15, 0, 0, 0, 1, 0, 1, 0]);
    array.push([0, 16, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 1, 0, 1, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 1, 1, 1, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 1, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 1, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 1, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 1, 1, 1, 1, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 23, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 1, 1, 1, 1, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 0, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 15, 15, 15, 15, 15, 15, 16, 0, 1, 1, 1, 1, 0]);
    array.push([0, 16, 15, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 15, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 15, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 15, 15, 15, 15, 15, 15, 16, 0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 15, 15, 15, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0, 0.5);

    array = new Array();
    // MG
    array.push([1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 2, 1]);
    array.push([1, 2, 1, 3, 0, 0, 0, 1, 2, 1, 1, 0, 1, 2, 1]);
    array.push([1, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 1, 2, 1]);
    array.push([1, 2, 1, 2, 0, 0, 0, 0, 2, 1, 0, 0, 1, 2, 1]);
    array.push([1, 2, 1, 2, 0, 0, 0, 4, 1, 1, 1, 0, 1, 2, 1]);
    array.push([1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1]);
    array.push([1, 2, 1, 2, 0, 0, 0, 0, 0, 1, 1, 0, 1, 2, 1]);
    array.push([1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 1]);
    array.push([1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1]);
    array.push([1, 2, 1, 1, 6, 0, 7, 6, 0, 1, 1, 1, 2, 1, 1]);
    array.push([1, 2, 1, 0, 0, 0, 0, 0, 7, 1, 1, 1, 0, 1, 1]);
    array.push([1, 2, 1, 0, 0, 0, 0, 7, 6, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 0, 2, 1, 6, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 0, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    array.push([1, 2, 1, 6, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 7, 6, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 0, 0, 0, 7, 1, 23, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 2, 0, 0, 22, 22, 22, 1, 0, 0, 0, 0, 1]);
    array.push([1, 2, 1, 2, 6, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 0, 7, 6, 0, 7, 6, 0, 1, 0, 0, 0, 0, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1]);
    array.push([1, 0, 0, 0, 0, 0, 0, 7, 6, 1, 1, 1, 1, 1, 1]);
    array.push([1, 0, 7, 6, 0, 7, 6, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    array.push([1, 1, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1]);
    new GrilleVisuelle(sprGrille, array, 1, 1);

    array = new Array();
    // FG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 9, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 9, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0]);
    array.push([0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 9, 1]);
    array.push([0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]);
    new GrilleVisuelle(sprGrille, array, 2, 1);

    new Bloc(336, 48, 96, 0, false, false, false, true);
    new Echelle(392, 48, 32, 240);
    new Echelle(152, 240, 32, 192);
    new Escalier(144, 144, 48, 48, true);
    new Bloc(192, 48, 144, 192, false, false, false, true);
    new Bloc(48, 144, 336, 96, false, false, false, true);
    new Bloc(48, 48, 384, 288, false, false, false, true);
    new Bloc(240, 48, 192, 336, false, false, false, true);
    new Escalier(336, 288, 48, 48, false);
    new Bloc(48, 96, 48, 1344, false, false, false, true);
    new Bloc(48, 1440, 0, 0, false, false, false, true);
    new Bloc(48, 24, 120, 1296, false, false, false, true);
    new Bloc(48, 24, 264, 1296, false, false, false, true);
    new Bloc(48, 24, 360, 1248, false, false, false, true);
    new Bloc(24, 24, 408, 1200, false, false, false, true);
    new Bloc(48, 24, 312, 1152, false, false, false, true);
    new Bloc(48, 24, 168, 1152, false, false, false, true);
    new Echelle(152, 960, 32, 144);
    new Bloc(24, 24, 192, 1008, false, false, false, true);
    new Piques(96, 1392, 336, 48, 1);
    new Eau(48, 1344, 384, 96, sprEau, sprSplash, 6, 0);
    new Echelle(56, 0, 32, 1248);
    new Echelle(392, 912, 32, 96);
    new Bloc(48, 48, 336, 912, false, false, false, true);
    new Bloc(24, 24, 312, 912, false, false, false, true);
    new Echelle(296, 960, 80, 48);
    new Bloc(48, 48, 288, 864, false, false, false, true);
    new Bloc(48, 24, 168, 864, false, false, false, true);
    new Bloc(24, 24, 144, 816, false, false, false, true);
    new Bloc(24, 24, 288, 672, false, false, false, true);
    new Echelle(200, 672, 32, 96);
    new Bloc(48, 48, 240, 672, false, false, false, true);
    new Bloc(48, 24, 360, 624, false, false, false, true);
    new Bloc(48, 24, 312, 528, false, false, false, true);
    new Bloc(24, 24, 408, 576, false, false, false, true);
    new Bloc(48, 1008, 96, 144, false, false, false, true);
    new Bloc(48, 48, 144, 528, false, false, false, true);
    new Bloc(24, 24, 192, 528, false, false, false, true);
    new Bloc(48, 192, 432, 0, false, false, false, true);
    new Bloc(48, 1200, 432, 240, false, false, false, true);
    new Bloc(48, 288, 576, 144, false, false, false, true);
    new Bloc(48, 144, 528, 480, false, false, false, true);
    new Bloc(48, 144, 624, 480, false, false, false, true);
    new Echelle(632, 96, 32, 336);
    new Echelle(584, 432, 32, 144);
    new Bloc(192, 48, 480, 1392, false, false, false, true);
    new Bloc(192, 144, 480, 1200, false, false, false, true);
    new Bloc(192, 144, 480, 1008, false, false, false, true);
    new Bloc(192, 144, 480, 816, false, false, false, true);
    new Bloc(192, 144, 480, 624, false, false, false, true);
    new Bloc(48, 816, 672, 624, false, false, false, true);
    new Bloc(48, 336, 480, 288, false, false, false, true);
    new Bloc(48, 192, 480, 0, false, false, false, true);
    new Bloc(144, 96, 528, 0, false, false, false, true);
    new Bloc(48, 624, 672, 0, false, false, false, true);
    new Teleporteur (48, 0, 48, 48, "Map001", 1, 10, true);
    new Coffre(sprCoffre, 240, 298, 48, 40, AugmenterOr);
    new OozeGolem(240, 624, 5, 2);
    new Ooze(336, 864, 2, 1);
    new Ooze(144, 480, 2, 1);
    new Coffre(sprCoffre, 576, 586, 48, 40, Coeur);
    new Ooze(480, 768, 2, 1);
    new Ooze(528, 960, 2, 1);
    new Ooze(576, 1152, 2, 1);
    new Ooze(624, 1344, 2, 1);
    MapLoaded();
}
ScriptLoaded();
