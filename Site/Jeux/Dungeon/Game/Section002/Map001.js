function MapLoad()
{
    MapName = "Map001";
    Background = '#082010';

    var array = new Array();
    // BG
    array.push([0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 15, 15, 16, 15, 16, 15, 16, 15, 15, 16, 15, 15, 16, 15, 15, 0]);
    array.push([0, 16, 15, 15, 16, 26, 16, 15, 16, 15, 15, 16, 26, 26, 16, 15, 15, 0]);
    array.push([0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15, 16, 15, 15, 0, 15, 15, 0]);
    array.push([0, 16, 15, 15, 16, 15, 16, 15, 16, 6, 15, 16, 15, 15, 0, 15, 15, 0]);
    array.push([0, 16, 15, 15, 16, 26, 16, 15, 16, 15, 15, 16, 26, 26, 15, 15, 15, 0]);
    array.push([0, 16, 15, 15, 16, 15, 16, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 16, 1, 0, 16, 15, 16, 0, 16, 15, 15, 16, 15, 15, 16, 15, 0, 0]);
    array.push([0, 16, 15, 15, 16, 26, 16, 1, 0, 0, 0, 0, 26, 26, 0, 0, 0, 0]);
    array.push([0, 16, 15, 15, 16, 15, 16, 1, 1, 1, 1, 16, 15, 15, 16, 15, 15, 0]);
    array.push([0, 16, 0, 0, 16, 15, 16, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0]);
    array.push([0, 16, 0, 0, 16, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0, 0.5);

    array = new Array();
    // MG
    array.push([1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    array.push([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    array.push([1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 7, 6, 0, 1, 0, 0, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 5, 5, 5, 5, 1, 3, 0, 1]);
    array.push([1, 2, 1, 6, 0, 0, 0, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    array.push([1, 2, 1, 1, 1, 0, 7, 1, 0, 0, 0, 0, 0, 0, 0, 7, 6, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 6, 7, 1, 1, 1, 1]);
    array.push([1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    array.push([1, 2, 1, 1, 1, 0, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1]);
    array.push([1, 2, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    new GrilleVisuelle(sprGrille, array, 1, 1);

    array = new Array();
    // FG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 1, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1]);
    array.push([0, 0, 8, 0, 8, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 8, 0, 8, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0]);
    array.push([1, 9, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1]);
    array.push([1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 2, 1);

    new Eau(528, 504, 288, 24, sprEau, sprSplash, 6, 0);
    new Piques(480, 192, 192, 48, 1);
    new Echelle(392, 264, 32, 72);
    new Bloc(48, 576, 0, 0, false, false, false, true);
    new Bloc(48, 576, 816, 0, false, false, false, true);
    new Bloc(144, 48, 672, 384, false, false, false, true);
    new Bloc(24, 24, 648, 384, false, false, false, true);
    new Bloc(24, 24, 576, 384, false, false, false, true);
    new Bloc(192, 48, 384, 384, false, false, false, true);
    new Bloc(24, 24, 312, 336, false, false, false, true);
    new Bloc(24, 24, 312, 480, false, false, false, true);
    new Bloc(48, 24, 552, 144, false, false, false, true);
    new Bloc(48, 96, 432, 144, false, false, false, true);
    new Bloc(720, 48, 96, 0, false, false, false, true);
    new Bloc(192, 96, 336, 480, false, false, false, true);
    new Bloc(288, 48, 528, 528, false, false, false, true);
    new Bloc(384, 48, 432, 288, false, false, false, true);
    new Escalier(720, 192, 48, 48, true);
    new Bloc(48, 96, 672, 144, false, false, false, true);
    new Bloc(192, 48, 48, 144, false, false, false, true);
    new Bloc(144, 48, 288, 144, false, false, false, true);
    new Bloc(48, 48, 336, 336, false, false, false, true);
    new Bloc(48, 24, 48, 0, false, false, false, true);
    new Echelle(56, 0, 32, 96);
    new Bloc(48, 48, 96, 240, false, false, false, true);
    new Bloc(24, 24, 144, 240, false, false, false, true);
    new Bloc(24, 24, 360, 384, false, false, false, true);
    new Bloc(0, 0, 0, 0, false, false, false, true);
    new Piques(240, 528, 96, 48, 1);
    new Bloc(144, 96, 96, 480, false, false, false, true);
    new Bloc(48, 24, 48, 552, false, false, false, true);
    new Bloc(144, 48, 96, 336, false, false, false, true);
    new Echelle(56, 192, 32, 384);
    new Ooze(528, 480, 2, 1);
    new Ooze(768, 480, 2, 1);
    new Ooze(336, 432, 2, 1);
    new Ooze(528, 240, 2, 1);
    new Ooze(384, 96, 2, 1);
    new OozeGolem(96, 96, 5, 2);
    new Ooze(432, 336, 2, 1);
    new Switch(sprSwitch, 16, 16, 144, 224, new Porte (sprPorte, 48, 48, -4, 0, 436, 240, 40, 48, true));
    new Ooze(624, 480, 2, 1);
    new OozeGolem(96, 192, 5, 2);
    new Teleporteur (48, 0, 48, 48, "Map002", 1, 19, true);
    new ChangeurSection (768, 336, 48, 48, 1, 1, 16, 29, true);
    new Teleporteur (48, 528, 48, 48, "Map005", 1, 1, true);
    MapLoaded();
}
ScriptLoaded();
