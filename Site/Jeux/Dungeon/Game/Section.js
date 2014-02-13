var	documentElement = document.getElementById('c'),
	width = documentElement.offsetWidth,
	height = documentElement.offsetHeight,
	context = documentElement.getContext('2d'),
	enPause = false,
	CheckPointText = 120,
	SectionName = 1;
documentElement.width = width;
documentElement.height = height;

var script, imageCount = 27, soundCount = 1;
{ // SPRITES
	
	var	sprGrille = new Image(); 		sprGrille.onLoad = ImageLoaded();		 	sprGrille.src = 'Sprites/Grille.png';
	var sprJoueur = new Image(); 		sprJoueur.onLoad = ImageLoaded(); 			sprJoueur.src = 'Sprites/Joueur.png';
	var sprJoueurEpee = new Image(); 	sprJoueurEpee.onLoad = ImageLoaded(); 		sprJoueurEpee.src = 'Sprites/JoueurEpee.png';
	var	sprJoueurArbalete = new Image();sprJoueurArbalete.onLoad = ImageLoaded(); 	sprJoueurArbalete.src = 'Sprites/JoueurArbalete.png';
	var	sprCarreau = new Image(); 		sprCarreau.onLoad = ImageLoaded(); 			sprCarreau.src = 'Sprites/Carreau.png';
	var	sprMaxCarreau = new Image(); 	sprMaxCarreau.onLoad = ImageLoaded(); 		sprMaxCarreau.src = 'Sprites/MaxCarreau.png';
	var	sprVieFond = new Image();		sprVieFond.onLoad = ImageLoaded(); 			sprVieFond.src = 'Sprites/VieFond.png';
	var	sprVie = new Image(); 			sprVie.onLoad = ImageLoaded(); 				sprVie.src = 'Sprites/Vie.png';
	var	sprNbCarreaux = new Image();	sprNbCarreaux.onLoad = ImageLoaded(); 		sprNbCarreaux.src = 'Sprites/NbCarreaux.png';
	var	sprOr = new Image(); 			sprOr.onLoad = ImageLoaded(); 				sprOr.src = 'Sprites/Or.png';
	var	sprArgent = new Image(); 		sprArgent.onLoad = ImageLoaded(); 			sprArgent.src = 'Sprites/Argent.png';
	var	sprBronze = new Image(); 		sprBronze.onLoad = ImageLoaded(); 			sprBronze.src = 'Sprites/Bronze.png';
	var	sprMaxOr = new Image(); 		sprMaxOr.onLoad = ImageLoaded();			sprMaxOr.src = 'Sprites/MaxOr.png';
	var	sprFlash = new Image(); 		sprFlash.onLoad = ImageLoaded();			sprFlash.src = 'Sprites/Flash.png';
	var sprCoffre = new Image(); 		sprCoffre.onLoad = ImageLoaded(); 			sprCoffre.src = 'Sprites/Coffre.png';
	var	sprEpee = new Image(); 			sprEpee.onLoad = ImageLoaded(); 			sprEpee.src = 'Sprites/Epee.png';
	var	sprCrossbow = new Image(); 		sprCrossbow.onLoad = ImageLoaded();		 	sprCrossbow.src = 'Sprites/Crossbow.png';
	var	sprArmure = new Image(); 		sprArmure.onLoad = ImageLoaded();		 	sprArmure.src = 'Sprites/Armure.png';
	var	sprPorte = new Image(); 		sprPorte.onLoad = ImageLoaded(); 			sprPorte.src = 'Sprites/Porte.png';
	var	sprSwitch = new Image(); 		sprSwitch.onLoad = ImageLoaded(); 			sprSwitch.src = 'Sprites/Switch.png';
	var	sprTextBox = new Image(); 		sprTextBox.onLoad = ImageLoaded(); 			sprTextBox.src = 'Sprites/TextBox.png';
	var	sprEau = new Image(); 			sprEau.onLoad = ImageLoaded(); 				sprEau.src = 'Sprites/Eau.png';
	var	sprLave = new Image(); 			sprLave.onLoad = ImageLoaded(); 			sprLave.src = 'Sprites/Lave.png';
	var	sprSplash = new Image(); 		sprSplash.onLoad = ImageLoaded(); 			sprSplash.src = 'Sprites/Splash.png';
	var	sprSplashLave = new Image(); 	sprSplashLave.onLoad = ImageLoaded(); 		sprSplashLave.src = 'Sprites/SplashLave.png';
	var	sprRegen = new Image(); 		sprRegen.onLoad = ImageLoaded(); 			sprRegen.src = 'Sprites/Regen.png';
	var	sprSparkle = new Image(); 		sprSparkle.onLoad = ImageLoaded(); 			sprSparkle.src = 'Sprites/Sparkle.png';

} // end SPRITES
{ // SONS

	var sndItem = new Audio('Sons/Item.wav'); sndItem.onLoad = SoundLoaded();
	sndItem.volume = 0.50;

} // end SONS

function ImageLoaded()
{
	imageCount--;
	if (imageCount <= 0 && soundCount <= 0)
	{
		script = document.createElement('script');
		script.type= 'text/javascript';
		script.src= 'Game/Main.js';
		documentElement.appendChild(script);
	}
}
function SoundLoaded()
{
	soundCount--;
	if (imageCount <= 0 && soundCount <= 0)
	{
		script = document.createElement('script');
		script.type= 'text/javascript';
		script.src= 'Game/Main.js';
		documentElement.appendChild(script);
	}
}