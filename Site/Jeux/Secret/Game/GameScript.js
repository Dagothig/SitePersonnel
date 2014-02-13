var	DocumentElement = document.getElementById('c'),
	Width = DocumentElement.offsetWidth,
	Height = DocumentElement.offsetHeight,
	Context = DocumentElement.getContext("2d");
DocumentElement.width = Width;
DocumentElement.height = Height;	
var sndRoggan = new Audio('Musique/Zic.mp3');
var sndRoggan2 = new Audio('Musique/Zic.mp3');
var sndRoggan3 = new Audio('Musique/Zic.mp3');
var sndRoggan4 = new Audio('Musique/Zic.mp3');
var sndRoggan5 = new Audio('Musique/Zic.mp3');

var Sprites = new Array();
var Sprite = function(pNom)
{
	if (Sprites[pNom] == undefined)
	{
		Sprites[pNom] = new Image();
		Sprites[pNom].src = "Images/" + pNom;
	}
	return Sprites[pNom];
}

var Camera = { X:0, Y:0 }

var Point = function(pX, pY, pZ)
{
	this.X = pX;
	this.Y = pY;
	this.Z = pZ;
	
	Point.prototype.Additionner = function(pPoint)
	{
		this.X += pPoint.X;
		this.Y += pPoint.Y;
		this.Z += pPoint.Z;
	}
}
var Vecteur = function(pPoint1, pPoint2, pCouleur)
{	
	this.Point1 = pPoint1;
	this.Point2 = pPoint2;
	if (pCouleur !== undefined)
		this.Couleur = pCouleur;
	else
		this.Couleur = '#000';
	
	Vecteur.prototype.Additionner = function(pVecteur)
	{
		this.Point1.Additionner(pVecteur.Point1);
		this.Point2.Additionner(pVecteur.Point2);
		
		return this;
	}
	
	Vecteur.prototype.Dessiner = function()
	{
		Context.strokeStyle = this.Couleur;
		
		Context.beginPath();
		Context.moveTo(this.Point1.X, this.Point1.Y);
		Context.lineTo(this.Point2.X, this.Point2.Y);
		Context.closePath();
		
		Context.stroke();
	}
}

var Draw = function()
{
		Context.fillStyle = '#' + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
		Context.fillRect(0, 0, Width, Height);
		
		for (var index = 0; index < 10; index++)
		{
			Context.fillStyle = '#' + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
			Context.fillRect((Math.random() - 0.5) * Width * 2, (Math.random() - 0.5) * Height * 2, Width * Math.random() / 2, Height * Math.random() / 2);
		}
}
var Update = function()
{ 
	var tmp = Math.random();
	if (tmp < 0.2)
		sndRoggan.play();
	else if (tmp < 0.4)
		sndRoggan2.play();
	else if (tmp < 0.6)
		sndRoggan3.play();
	else if (tmp < 0.8)
		sndRoggan4.play();
	else
		sndRoggan5.play();
}
var jean = 0;
var GameLoop = function()
{
	Width = DocumentElement.offsetWidth;
	Height = DocumentElement.offsetHeight;
	DocumentElement.width = Width;
	DocumentElement.height = Height;
	jean = (jean + 1) % 2;
	if (jean === Math.floor(Math.random() * 2))
		Update();
	Draw();
	gLoop = setTimeout(GameLoop, 1000 / 20);
}

GameLoop();