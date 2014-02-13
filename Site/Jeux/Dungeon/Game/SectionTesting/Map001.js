function MapLoad()
{
	MapName = "Map001";
	Background = '#300302';

	var array = new Array();
	// BG
	array.push( [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] );
	array.push( [0, 16, 15, 0, 15, 15, 16, 15, 15, 15, 0] );
	array.push( [0, 17, 15, 0, 15, 15, 16, 15, 15, 0, 0] );
	array.push( [12, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0] );
	array.push( [12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0] );
	new GrilleVisuelle(sprGrille, array, 0);
	
	array = new Array();
	// MG
	array.push( [2, 19, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0] );
	array.push( [2, 0, 7, 6, 0, 0, 0, 0, 0,4, 1, 0] );
	array.push( [0, 0, 4, 1, 3, 0, 0,10,4, 1, 1, 0] );
	array.push( [0,12, 1, 1, 1, 0, 0, 0, 1, 1, 1,11] );
	array.push( [0,12, 1, 1, 1, 0, 5, 0, 1, 1, 1, 1] );
	array.push( [12,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] );
	new GrilleVisuelle(sprGrille, array, 1);

	array = new Array();
	// FG
	array.push( [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] );
	array.push( [0, 0, 0, 17, 9, 9, 0, 0, 0, 0, 0] );
	array.push( [0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0] );
	array.push( [0, 12, 0, 0, 0, 1, 0, 1, 0, 0, 0] );
	array.push( [0, 12, 0, 0, 0, 1, 0, 1, 0, 0, 0] );
	array.push( [12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0] );
	new GrilleVisuelle(sprGrille, array, 2);

	new Coffre(sprCoffre, 3 * 48, -1 * 48 + 10, 48, 40, MaxCarreau);
	new Switch(sprSwitch, 16, 16, 2 * 48 + 16, -1 * 48 + 32, new Porte(sprPorte, 48, 48, -4, 0, 3 * 48 + 4, 1 * 48, 40, 48, false));
	new Echelle(8, 0, 32, 96);
	new Escalier(48, 0, 48, 48, false);
	new Escalier(96, 96, 48, 48, false);
	new Escalier(192, 96, 48, 48, true);
	new Escalier(384, 48, 96, 96, false);
	new Bloc(240, 48, 96, 0, false, false, false, true);
	new Bloc(48, 48, 144, 96, false, false, false, true);
	new Bloc(240, 96, 48, 144, false, false, false, true);
	new Bloc(240, 96, 336, 144, false, false, false, true);
	new Bloc(48, 192, 480, 48, false, false, false, true);
	new Ooze(5 * 48, -1 * 48, 2, 1);
	new ChangeurSection(3 * 48 + 23, 1 * 48, 2, 48, 1, 1, 1, 2, true);
	new Fontaine(0, 192, 48, 48);
	new Eau(0, 168, 48, 72, sprLave, sprSplashLave, 10, 2);
	//new Pancarte(7 * 48, 2 * 48, 48, 48, "Test YO JPENSE LE @PREMIER MOT EST TUÉ", 10);
	new Achat(7 * 48, 2 * 48, 48, 48, "Ça c't'une épée. @Tu tapes plus fort avec", Epee, 1);
	new Eau(288, 168, 48, 72, sprEau, sprSplash, 6, 0);
	new Piques(288, 192, 48, 48, 1);
	MapLoaded();
}
ScriptLoaded();