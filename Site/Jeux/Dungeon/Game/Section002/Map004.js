function MapLoad()
{
    MapName = "Map004";
    Background = '#082040';

    var array = new Array();
    // BG
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]);
    array.push([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]);
    array.push([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 23, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]);
    array.push([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]);
    array.push([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]);
    array.push([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 46, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    new GrilleVisuelle(sprGrille, array, 0, 0.5);

    array = new Array();
    // MG
    array.push([0, 0, 0, 0, 0, 0, 0, 29, 27, 27, 27, 27, 27, 27, 27, 27, 28, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 29, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 28, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 29, 1, 22, 22, 22, 22, 22, 0, 22, 22, 22, 22, 1, 28, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 29, 1, 22, 22, 22, 0, 22, 0, 0, 22, 0, 0, 22, 22, 1, 28, 0, 0, 0, 0]);
    array.push([0, 0, 0, 29, 1, 0, 0, 22, 0, 0, 22, 0, 0, 22, 0, 0, 0, 22, 0, 1, 28, 0, 0, 0]);
    array.push([0, 0, 29, 1, 22, 0, 0, 22, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 1, 28, 0, 0]);
    array.push([0, 29, 1, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 1, 28, 0]);
    array.push([29, 1, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 22, 1, 0]);
    array.push([1, 16, 22, 7, 1, 6, 7, 1, 6, 7, 1, 22, 22, 1, 6, 7, 1, 6, 7, 1, 6, 22, 16, 1]);
    array.push([1, 16, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 2, 16, 1]);
    array.push([1, 16, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 0, 32, 0, 2, 20, 1]);
    array.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 1, 1]);
    new GrilleVisuelle(sprGrille, array, 1, 1);

    array = new Array();
    // FG
    array.push([0, 0, 0, 0, 0, 0, 29, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 29, 27, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 27, 28, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 29, 27, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 27, 28, 0, 0, 0, 0]);
    array.push([0, 0, 0, 29, 27, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 27, 28, 0, 0, 0]);
    array.push([0, 0, 29, 27, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 27, 28, 0, 0]);
    array.push([0, 29, 27, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 27, 28, 0]);
    array.push([29, 27, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 27, 28]);
    array.push([27, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 27]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 1]);
    array.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 1]);
    array.push([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 1]);
    new GrilleVisuelle(sprGrille, array, 2, 1);

    new Bloc(48, 48, 48, 336, false, false, false, true);
    new Bloc(48, 48, 96, 288, false, false, false, true);
    new Bloc(48, 48, 144, 240, false, false, false, true);
    new Bloc(48, 48, 192, 192, false, false, false, true);
    new Bloc(48, 48, 240, 144, false, false, false, true);
    new Bloc(48, 48, 288, 96, false, false, false, true);
    new Bloc(480, 48, 336, 48, false, false, false, true);
    new Bloc(48, 48, 816, 96, false, false, false, true);
    new Bloc(48, 48, 1008, 288, false, false, false, true);
    new Bloc(48, 48, 1056, 336, false, false, false, true);
    new Bloc(48, 48, 960, 240, false, false, false, true);
    new Bloc(48, 48, 912, 192, false, false, false, true);
    new Bloc(48, 48, 864, 144, false, false, false, true);
    new Echelle(104, 336, 32, 96);
    new Echelle(152, 288, 32, 96);
    new Echelle(200, 240, 32, 48);
    new Echelle(344, 96, 32, 192);
    new Echelle(296, 144, 32, 48);
    new Echelle(536, 96, 32, 48);
    new Echelle(632, 96, 32, 192);
    new Echelle(680, 96, 80, 48);
    new Echelle(776, 96, 32, 96);
    new Echelle(824, 144, 32, 96);
    new Echelle(968, 288, 32, 96);
    new Echelle(1016, 336, 32, 240);
    new Echelle(392, 96, 32, 96);
    new Echelle(488, 96, 32, 144);
    new Echelle(440, 96, 32, 48);
    new Bloc(96, 192, 0, 384, false, false, false, true);
    new Bloc(912, 48, 96, 528, false, false, false, true);
    new Bloc(48, 24, 1008, 552, false, false, false, true);
    new Bloc(96, 24, 888, 384, false, false, false, true);
    new Bloc(96, 24, 744, 384, false, false, false, true);
    new Bloc(48, 24, 624, 408, false, false, false, true);
    new Bloc(48, 24, 768, 408, false, false, false, true);
    new Bloc(48, 24, 912, 408, false, false, false, true);
    new Bloc(48, 24, 480, 408, false, false, false, true);
    new Bloc(48, 24, 336, 408, false, false, false, true);
    new Bloc(96, 24, 312, 384, false, false, false, true);
    new Bloc(96, 24, 168, 384, false, false, false, true);
    new Bloc(48, 24, 192, 408, false, false, false, true);
    new Echelle(536, 384, 80, 48);
    new Bloc(72, 24, 456, 384, false, false, false, true);
    new Bloc(72, 24, 624, 384, false, false, false, true);
    new Bloc(48, 96, 1056, 384, false, false, false, true);
    new Bloc(48, 192, 1104, 384, false, false, false, true);
    new Bloc(48, 48, 1056, 528, false, false, false, true);
    new Teleporteur (1008, 528, 48, 48, "Map003", 18, 1, true);
    new OozeBoss();
    new Porte (sprPorte, 48, 48, -4, 0, 1060, 480, 48, 48, true);
    new ChangeurSection (1080, 480, 24, 48, 1, 1, 19, 17, true);
    MapLoaded();
}
ScriptLoaded();
