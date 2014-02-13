var Ready = true;
var QueueLoad = undefined, QueueX, QueueY;

{ // M�THODES

	function Comparer(pMinX1, pMinY1, pMaxX1, pMaxY1, pMinX2, pMinY2, pMaxX2, pMaxY2)
	{
		return  pMinX1 < pMaxX2 &&
				pMaxX1 > pMinX2 &&
				pMinY1 < pMaxY2 &&
				pMaxY1 > pMinY2;
	}

	function LoadMap(pNom, pX, pY)
	{
		QueueLoad = undefined;
		Ready = false;
		tmrLoad = 60;
		
		Blocs = [];
		Etres = [];
		SFXs = [];
		Objets = [];
		Eaux = [];
		BGs = [];
		MGs = [];
		FGs = [];
		UI = [];
		Projectiles = [];
		NombreCoffres = 0;
			
		Etres.push(Joueur);
		Blocs.push(Joueur.Bloc);
		Joueur.Bloc.X = pX * 48 + 24 - Joueur.Bloc.Width / 2;
		Joueur.Bloc.Y = pY * 48 + 24 - Joueur.Bloc.Height / 2;
		
		script = document.createElement('script');
		script.type= 'text/javascript';
		script.src= 'Game/' + getPassURL() + '/' + pNom + '.js';
		documentElement.appendChild(script);
	}
	
	function ScriptLoaded()
	{
		MapLoad();
	}
	function MapLoaded()
	{
		Ready = true;
	}

	function DrawImage(pImage, pX1, pY1, pWidth1, pHeight1, pX2, pY2, pWidth2, pHeight2)
	{
		if (pImage === undefined)
			return;
		if (pX2  != undefined)
		{
			if (pX2 > width || pX2 + pWidth2 < 0 || pY2 > height || pY2 + pHeight2 < 0 ||
				pWidth1 < 0 || pHeight1 < 0 || pWidth2 < 0 || pHeight2 < 0 || pX1 < 0 || pY1 < 0)
				return;
			context.drawImage(pImage, pX1, pY1, pWidth1, pHeight1, pX2, pY2, pWidth2, pHeight2);
		}
		else
		{
			if (pX1 > width || pX1 + pImage.Width < 0 || pY1 > height || pY1 + pImage.Height < 0)
				return;
			context.drawImage(pImage, pX1, pY1);
		}
	}
	
	function JouerSon(pSon)
	{
		if (pSon === undefined)
			return;
		if (Son)
			pSon.play();
	}
	
	function JouerMusique(pMusique)
	{
		if (pMusique === undefined)
			return;
		if (Musique)
		{
			pMusique.loop = true;
			pMusique.play();
		}
	}
	
	function numCoffre()
	{
		return NombreCoffres++;
	}
	function nouveauCoffre(pNum)
	{
		var ligne = getPassURL().substring(7) + MapName.substring(3) + pNum;
		for (var index = 0; index < Coffres.length; index++)
		{
			if (Coffres[index] === ligne)				
				return true;
		}	
		return false;
	}
	function ouvrirCoffre(pNum)
	{
		var ligne = getPassURL().substring(7) + MapName.substring(3) + pNum;
		Coffres.push(ligne);
	}
	
} // end M�THODES
{ // CLASSES

	{ // Meta
	
		var Grav = 0.95, Friction = 0.95;
		var Camera =
		{
			X: 0,
			Y: 0
		}
		var Shake =
		{
			Intensity: 0,
			Duration: 0,
			Update: function()
			{
				if (this.Duration > 0)
				{
					this.Duration--;
					Camera.X += (Math.random() - 0.5) * this.Intensity;
					Camera.Y += (Math.random() - 0.5) * this.Intensity;
				}
				else
					this.Intensity = 0;
			}
		}
	
		function Barre(pWidth, pHeight, pX, pY, pMaximum, pBarre, pFond)
		{
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			this.Barre = pBarre;
			this.Fond = pFond;
			
			this.Valeur = 0;
			this.Maximum = pMaximum;
			
			Barre.prototype.Draw = function()
			{
				for (var index = 0; index < this.Maximum / 2; index++)
				{
					DrawImage(this.Fond, this.X + index * this.Width, this.Y);
				}
				for (var index = 0; index < this.Valeur; index++)
					if (index%2 === 0)
						DrawImage(this.Barre, 0, 0, this.Width / 2, this.Height, this.X + index * this.Width / 2, this.Y, this.Width / 2, this.Height);
					else
						DrawImage(this.Barre, this.Width / 2, 0, this.Width / 2, this.Height, this.X + index * this.Width / 2, this.Y, this.Width / 2, this.Height);
			}
		}
		function Attribut(pImage, pWidth, pX, pY, pValeur)
		{
			this.Image = pImage
			this.Width = pWidth;
			this.X = pX;
			this.Y = pY;
			this.Valeur = pValeur;
			
			Attribut.prototype.Draw = function()
			{
				DrawImage(this.Image, this.X, this.Y);
				context.font = '14px Geneva';
				context.fillStyle = '#fff';
				context.fillText(this.Valeur, this.X - 8, this.Y + this.Width);
			}
		}

	}
	{ // Blocky
		
		function Bloc(pWidth, pHeight, pX, pY, pGravite, pFrictionne, pCollisionne, pCollisionnable) 
		{
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			this.Gravite = pGravite;
			this.Frictionne = pFrictionne;
			this.Collisionne = pCollisionne;
			this.Collisionnable = pCollisionnable;
			
			this.MovX = 0;
			this.MovY = 0;
			this.SurUnBloc = false;
			this.SurEchelle = false;
			this.SurEscalier = false;
			this.DansEau = undefined;
			Blocs.push(this);
			
			Bloc.prototype.Deplacer = function()
			{
				// Appliquer la gravit�
				if (this.Gravite && !this.SurEchelle)
					if(this.DansEau === undefined)
						this.MovY += Grav;
					else
						this.MovY += Grav * 0.1;
				// Appliquer la friction
				if (this.Frictionne)
				{
					if (this.DansEau === undefined)
					{
						this.MovX *= Friction;
						this.MovY *= Friction;
					}
					else
					{
						this.MovX *= Friction * 0.5 + 0.5;
						this.MovY *= Friction * 0.5 + 0.5;
						this.MovX /= 4;
						this.MovY /= 4;
					}
					if (this.SurUnBloc)
						this.MovX *= Friction - 0.15;
					else if (this.SurEscalier)
						this.MovX *= Friction - 0.3;
				}
				// Instantier les variables de v�rification de collision
				// movX et movY servent � conserver le mouvement final
				// tmpBloc sert � conserver en m�moire le bloc actuel
				// tmp sert aux calculs de rapport
				// tmpX et tmpY server aux calculs de comparaison
				var movX = this.MovX, movY = this.MovY, tmpBloc, tmp;
				this.SurEscalier = false;
				this.SurUnBloc = false;
				if (this.Collisionne && (movX !== 0 || movY !== 0))
					// Passation � travers les blocs pour d�terminer les collisions
					for (var index = 0; index < Blocs.length; index++)
					{
						tmpBloc = Blocs[index];
						// Faire le test seulement si le bloc est collisionnable ou qu'il est un escalier
						if 	(tmpBloc !== this && 
							(tmpBloc.Collisionnable || tmpBloc instanceof Escalier) && 
							this.Comparer(this.MovX, this.MovY, tmpBloc))
						{
							// V�rifier si le bloc est en situtation d'escalier
							if (tmpBloc instanceof Escalier && 
								this.Y + this.Height < tmpBloc.Y + tmpBloc.Height &&
								(tmpBloc.Orientation && this.X + this.Width > tmpBloc.X - 1 ||
								!tmpBloc.Orientation && this.X < tmpBloc.X + tmpBloc.Width + 1))
							{
								if (tmpBloc.Orientation)
									tmpY = ((tmpBloc.Y + tmpBloc.Height) + 
											(tmpBloc.Height / tmpBloc.Width) * 
											(this.X + movX - (tmpBloc.X  + tmpBloc.Width))) -
											(this.Y + this.Height);
								else
									tmpY = ((tmpBloc.Y + tmpBloc.Height) - 
											(tmpBloc.Height / tmpBloc.Width) * 
											(this.X + this.Width + movX - tmpBloc.X)) -
											(this.Y + this.Height);
								if (tmpY < movY)
								{
									movY = Math.max(tmpY, tmpBloc.Y - (this.Y + this.Height));
									this.SurEscalier = true;
								}
							}
							else
							{
								if (movY > 0)
								{
									tmp = tmpBloc.Y - (this.Y + this.Height);
									if (tmp >= 0 && tmp < movY)
										movY = tmp;
									this.SurUnBloc = true;
								}
								else if (movY < 0)
								{
									tmp = (tmpBloc.Y + tmpBloc.Height) - this.Y;
									if (tmp <= 0 && tmp > movY)
										movY = tmp;
								}
								if (this.Y + this.Height - tmpBloc.Y !== 0)
								{
									if (movX > 0)
									{
										tmp = tmpBloc.X - (this.X + this.Width);
										if (tmp >= 0 && tmp < movX)
											movX = tmp;
									}
									else if (movX < 0)
									{
										tmp = tmpBloc.X + tmpBloc.Width - this.X;
										if (tmp <= 0 && tmp > movX)
											movX = tmp;
									}
								}
							}
						}
					}
								
				// Appliquer le mouvement final
				this.X += movX;
				this.Y += movY;
				this.MovX = movX;
				this.MovY = movY;
				
				if (this.DansEau !== undefined)
				{
					this.MovX *= 4;
					this.MovY *= 4;
				}
			}
			Bloc.prototype.Comparer = function(pMovX, pMovY, pBloc)
			{
				return  this.X + pMovX < pBloc.X + pBloc.Width &&
					this.X + pMovX + this.Width > pBloc.X &&
					this.Y + pMovY < pBloc.Y + pBloc.Height &&
					this.Y + pMovY + this.Height > pBloc.Y;
			}
			Bloc.prototype.EnCollision = function(pMovX, pMovY)
			{
				for (var index = 0; index < Blocs.length; index++)
					if (this !== Blocs[index] && Blocs[index].Collisionnable && this.Comparer(pMovX, pMovY, Blocs[index]))
						return true;
				return false;
			}
		}
		
		function Eau(pX, pY, pWidth, pHeight, pImage, pSplash, pVitesse, pForce)
		{
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			this.Image = pImage;
			this.Splash = pSplash;
			this.Vitesse = pVitesse;
			this.Force = pForce;
			this.Anim = 0, this.Temp = 0;
			
			Eaux.push(this);
			
			Eau.prototype.Draw = function() 
			{
				if (this.Temp < 0)
				{
					this.Anim = (this.Anim + 1) % 4;
					this.Temp = this.Vitesse;
				}
				else
					this.Temp--;
				for (var x = this.X; x < this.Width + this.X; x+=48)
					DrawImage(this.Image, this.Anim * 48, 0, 48, 48, Math.round(x - Camera.X), Math.round(this.Y - 48 - Camera.Y), 48, 48);

				DrawImage(this.Image, 0, 49, 1, 1, Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y), this.Width, this.Height);
				context.restore();
			}
		}
		
		function Echelle(pX, pY, pWidth, pHeight)
		{
			this.X = pX;
			this.Y = pY - 1;
			this.Width = pWidth;
			this.Height = pHeight + 1;
			
			Objets.push(this);
			
			Echelle.prototype.Draw = function() {}
			Echelle.prototype.Update = function() {}
		}
		
		function Teleporteur(pX, pY, pWidth, pHeight, pNouvelleMap, pNouvelX, pNouvelY, pEtat)
		{
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			this.NouvelleMap = pNouvelleMap;
			this.NouvelX = pNouvelX;
			this.NouvelY = pNouvelY;
			this.JoueurDessus = false;
			
			Teleporteur.prototype.OuvrirFermer = function(pEtat)
			{
				this.Etat = pEtat;
			}
			this.Etat = pEtat;
			
			Objets.push(this);
			
			Teleporteur.prototype.Draw = function() {}
			Teleporteur.prototype.Update = function() 
			{
				if (!this.Etat)
					return;
				var joueurDessus = this.X < Joueur.Bloc.X + Joueur.Bloc.Width &&
								   this.X + this.Width > Joueur.Bloc.X &&
								   this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height &&
								   this.Y + this.Height > Joueur.Bloc.Y;
				if (joueurDessus && !this.JoueurDessus)
				{
					QueueLoad = this.NouvelleMap
					QueueX = this.NouvelX;
					QueueY = this.NouvelY;
				}
				this.JoueurDessus = joueurDessus;
			}
		}
		
		function ChangeurSection(pX, pY, pWidth, pHeight, pNouvelleSection, pNouvelleMap, pNouvelX, pNouvelY, pEtat)
		{
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			this.NouvelleSection = pNouvelleSection;
			this.NouvelleMap = pNouvelleMap;
			this.NouvelX = pNouvelX;
			this.NouvelY = pNouvelY;
			this.JoueurDessus = false;
			
			ChangeurSection.prototype.OuvrirFermer = function(pEtat)
			{
				this.Etat = pEtat;
			}
			this.Etat = pEtat;
			
			Objets.push(this);
			
			ChangeurSection.prototype.Draw = function() {}
			ChangeurSection.prototype.Update = function() 
			{
				if (!this.Etat)
					return;
				var joueurDessus = this.X < Joueur.Bloc.X + Joueur.Bloc.Width &&
								   this.X + this.Width > Joueur.Bloc.X &&
								   this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height &&
								   this.Y + this.Height > Joueur.Bloc.Y;
				if (joueurDessus && !this.JoueurDessus)
				{
					setPassword(this.NouvelleSection, this.NouvelleMap, this.NouvelX, this.NouvelY,
								Force.Valeur, ForceR.Valeur, Resistance.Valeur, Joueur.VieMax, Joueur.Vie,
								MaxCarreaux, NbCarreaux, MaxOr, NbOr, Quest);
					passwordCheck();
				}
				this.JoueurDessus = joueurDessus;
			}
		}
		
		function Fontaine(pX, pY, pWidth, pHeight)
		{
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			this.Vitesse = 0;
			
			Objets.push(this);
			
			Fontaine.prototype.Draw = function() {}
			Fontaine.prototype.Update = function() 
			{
				if (Etres.indexOf(Joueur) !== -1 &&
					this.X < Joueur.Bloc.X + Joueur.Bloc.Width &&
					this.X + this.Width > Joueur.Bloc.X &&
					this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height &&
					this.Y + this.Height > Joueur.Bloc.Y)
				{
					if (this.Vitesse < 0)
					{
						Joueur.Vie = Math.min(Joueur.Vie + 1,Joueur.VieMax);
						new SFX(sprRegen, Joueur.Bloc.X + Joueur.Bloc.Width / 2 - 24, Joueur.Bloc.Y, 48, 48, 5, 1)
						this.Vitesse = 8;
					}
					else
						this.Vitesse--;
				}
				for (var index = 0; index < (this.Width / 48) * (this.Height / 48); index++)
					if (Math.random() < 0.2)
						new SFX(sprSparkle, this.X + this.Width * Math.random(), this.Y + this.Height * Math.random(), 8, 8, 3, 2);
			}
		}
		
		function Escalier (pX, pY, pWidth, pHeight, pOrientation)
		{
			this.X = pX;
			this.Y = pY - 1;
			this.Width = pWidth;
			this.Height = pHeight + 2;
			this.Orientation = pOrientation;
			
			Blocs.push(this);
		}
		
		function Pancarte (pX, pY, pWidth, pHeight, pTexte, pSpeaker)
		{
			this.Width = pWidth;
			this.Height = pHeight;
			this.X = pX;
			this.Y = pY;
			this.Texte = pTexte;
			this.Speaker = pSpeaker;
			this.JoueurDessus = false;
			
			Objets.push(this);
			
			Pancarte.prototype.Update = function()
			{
				var joueurDessus = this.X < Joueur.Bloc.X + Joueur.Bloc.Width &&
								   this.X + this.Width > Joueur.Bloc.X &&
								   this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height &&
								   this.Y + this.Height > Joueur.Bloc.Y;
				
				if (joueurDessus && !this.JoueurDessus)
				{
					BoxText = this.Texte;
					BoxSpeaker = this.Speaker;
				}
				if (!joueurDessus && this.JoueurDessus && BoxText === this.Texte)
				{
					BoxText = '';
					BoxSpeaker = undefined;
				}
				this.JoueurDessus = joueurDessus;
			}
			Pancarte.prototype.Draw = function()
			{
			}
		}
		
		function Achat (pX, pY, pWidth, pHeight, pTexte, pItem, pValeur)
		{
			this.Width = pWidth;
			this.Height = pHeight;
			this.X = pX;
			this.Y = pY;
			this.Texte = pTexte;
			this.Item = pItem;
			this.Valeur = pValeur;
			this.JoueurDessus = false;
			
			Objets.push(this);
			
			Achat.prototype.Update = function()
			{
				var joueurDessus = this.X < Joueur.Bloc.X + Joueur.Bloc.Width &&
								   this.X + this.Width > Joueur.Bloc.X &&
								   this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height &&
								   this.Y + this.Height > Joueur.Bloc.Y;
				if (joueurDessus && !this.JoueurDessus)
				{
					BoxText = this.Texte;
					BoxSpeaker = this;
				}
				if (!joueurDessus && this.JoueurDessus && BoxText === this.Texte)
				{
					BoxText = '';
					BoxSpeaker = undefined;
				}
				this.JoueurDessus = joueurDessus;
			}
			Achat.prototype.Draw = function()
			{
			}
			Achat.prototype.Faire = function()
			{
				if (NbOr >= this.Valeur)
				{
					NbOr -= this.Valeur;
					new Item(this.Item, this.X + this.Width / 2 - this.Item.Width / 2,
							 this.Y - this.Height / 2 - this.Item.Height / 2);
				}
			}
		}
		
		function Piques (pX, pY, pWidth, pHeight, pForce)
		{
			this.X = pX;
			this.Y = pY + 4;
			this.Width = pWidth;
			this.Height = pHeight - 10;
			this.Force = pForce;
			
			Objets.push(this);
			Blocs.push(new Bloc(this.Width, this.Height, this.X, this.Y + 8, false, false, false, true));
			
			Piques.prototype.Draw = function() {}
			Piques.prototype.Update = function() {}
		}
		
		function Porte (pImage, pImageWidth, pImageHeight, pImageDecalX, pImageDecalY, 
						pX, pY, pWidth, pHeight, pEtat)
		{
			this.Image = pImage;
			this.SourceWidth = pImageWidth;
			this.SourceHeight = pImageHeight;
			this.ImageDecalX = pImageDecalX;
			this.ImageDecalY = pImageDecalY;
			
			Porte.prototype.OuvrirFermer = function(pEtat)
			{
				this.Etat = pEtat;
				this.Bloc.Collisionnable = this.Etat;
			}
			this.Etat = pEtat;
			
			this.Bloc = new Bloc(pWidth, pHeight, pX, pY, false, false, false, this.Etat);
			
			Objets.push(this);
			
			Porte.prototype.Update = function(){}
			Porte.prototype.Draw = function()
			{
				var sourceY = 0;
				if (this.Etat)
					sourceY = this.SourceHeight;
					
				DrawImage(this.Image, 0, sourceY, this.SourceWidth, this.SourceHeight,
								  Math.round(this.Bloc.X + this.ImageDecalX - Camera.X),
								  Math.round(this.Bloc.Y + this.ImageDecalY - Camera.Y),
								  this.SourceWidth, this.SourceHeight);
			}
		}
		
		function Switch (pImage, pWidth, pHeight, pX, pY, pObjet)
		{
			this.Image = pImage;
			this.Width = pWidth;
			this.Height = pHeight;
			this.X = pX;
			this.Y = pY;
			this.Objet = pObjet;
			this.JoueurDessus = false;
			
			Objets.push(this);
			
			Switch.prototype.Update = function()
			{
				var joueurDessus = this.X < Joueur.Bloc.X + Joueur.Bloc.Width &&
								   this.X + this.Width > Joueur.Bloc.X &&
								   this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height &&
								   this.Y + this.Height > Joueur.Bloc.Y;
				if (joueurDessus && !this.JoueurDessus)
					this.Objet.OuvrirFermer(!this.Objet.Etat);
				this.JoueurDessus = joueurDessus;
			}
			Switch.prototype.Draw = function()
			{
				var sourceY = 0;
				if (!this.Objet.Etat)
					sourceY = this.Height;
				DrawImage(this.Image, 0, sourceY, this.Width, this.Height, 
								  Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y),
								  this.Width, this.Height);
			}
		}
		
		function Projectile(pImage, pWidth, pHeight, pX, pY, pMovX, pMovY, 
				    pForce, pDuration, pGravite, pFrictionne, 
				    pSFXImage, pSFXWidth, pSFXHeight, pSFXAnimCount, pSFXVitesse)
		{
			this.Image = pImage;
			this.Width = pWidth;
			this.Height = pHeight;
			this.X = pX;
			this.Y = pY;
			this.MovX = pMovX;
			this.MovY = pMovY;
			this.Force = pForce;
			this.Duration = pDuration;
			this.Gravite = pGravite;
			this.Frictionne = pFrictionne;
			this.SFXImage = pSFXImage;
			this.SFXWidth = pSFXWidth;
			this.SFXHeight = pSFXHeight;
			this.SFXAnimCount = pSFXAnimCount;
			this.SFXVitesse = pSFXVitesse;
			
			Projectiles.push(this);
			
			Projectile.prototype.Update = function()
			{
				if (this.Duration != -1)
					this.Duration--;
				if (this.Duration <= 0 && this.Duration != -1 || this.EnCollision())
					this.Explose();
					
				this.X += this.MovX;
				this.Y += this.MovY;
				if (this.Gravite)
					this.MovY += Grav;
				if (this.Frictionne)
				{
					this.MovX *= Friction;
					this.MovY *= Friction;
				}
			}
			Projectile.prototype.Draw = function()
			{
				DrawImage(this.Image, Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y));
			}
			Projectile.prototype.EnCollision = function()
			{
				for (var index = 0; index < Blocs.length; index++)
					if (Blocs[index].Collisionnable && 
						this.X < Blocs[index].X + Blocs[index].Width &&
						this.X + this.Width > Blocs[index].X &&
						this.Y < Blocs[index].Y + Blocs[index].Height &&
						this.Y + this.Height > Blocs[index].Y)
						return true;
				return false;
			}  
			Projectile.prototype.Explose = function()
			{
				if (this.SFXImage != undefined)
					new SFX(this.SFXImage, this.X + this.Width * 0.5 - this.SFXWidth * 0.5, 
						this.Y + this.Height * 0.5 - this.SFXHeight * 0.5, 
						this.SFXWidth, this.SFXHeight, this.SFXAnimCount, this.SFXVitesse);
				for (var index = 0; index < Etres.length; index++)
					if (Etres[index].Bloc.Collisionnable && 
						this.X + this.MovX < Etres[index].Bloc.X + Etres[index].Bloc.Width &&
						this.X + this.MovX + this.Width > Etres[index].Bloc.X &&
						this.Y + this.MovY < Etres[index].Bloc.Y + Etres[index].Bloc.Height &&
						this.Y + this.MovY + this.Height > Etres[index].Bloc.Y)
						Etres[index].Coup(this.Force, this.MovX * 0.5, -2);
				Projectiles.splice(Projectiles.indexOf(this), 1);
			}
		}
	}
	{ // Etres
	
		function Etre(pImage, pImageWidth, pImageHeight, pImageDecalX, pImageDecalY, 
					  pAnimX, pAnimY, pAnimVitesse, pWidth, pHeight, pX, pY, pGravite, 
					  pVieMax, pForce, pResistance)
		{
			{ // VISUEL
				
				this.Image = pImage;
				this.ImageDecalX = pImageDecalX;
				this.ImageDecalY = pImageDecalY;
				
				{ // SOURCE
					
					Etre.prototype.getSourceX = function() 
					{ 
						return this.AnimX * this.SourceWidth;
					}
					Etre.prototype.getSourceY = function() 
					{ 
						return this.AnimY * this.SourceHeight; 
					}
					this.SourceWidth = (pImageWidth / pAnimX);
					this.SourceHeight = (pImageHeight / pAnimY);
					
				} // end SOURCE
				{ // ANIM
					
					this.AnimX = 0;
					Etre.prototype.setAnimX = function(pX)
					{
						var X = pX;
						while (X < 0)
							X += this.AnimMaxX;
						while (X >= this.AnimMaxX)
							X -= this.AnimMaxX;
						this.AnimX = X;
					}
					this.AnimY = 0;
					Etre.prototype.setAnimY = function(pY)
					{
						var Y = pY;
						while (Y < 0)
							Y += this.AnimMaxY;
						while (Y >= this.AnimMaxY)
							Y -= this.AnimMaxY;
						this.AnimY = Y;
					}
					this.AnimMaxX = pAnimX;
					this.AnimMaxY = pAnimY;
					this.Anim = pAnimVitesse;
					this.AnimVitesse = pAnimVitesse;
					
				} // end ANIM
				
			} // end VISUEL
			
			this.Bloc = new Bloc(pWidth, pHeight, pX, pY, pGravite, true, true, true);
			this.Vie = pVieMax;
			this.VieMax = pVieMax;
			this.Force = pForce;
			this.Resistance = pResistance;
			this.Orientation = true;
			this.AMal = 0;
			
			Etres.push(this);
			
			Etre.prototype.Update = function()
			{
				this.Bloc.Deplacer(this.MovX, this.MovY);
				this.Bloc.SurEchelle = false;
				for (var index = 0; index < Objets.length; index++)
				{
					if (this.Bloc.Comparer(this.Bloc.MovX, this.Bloc.MovY, Objets[index]))
					{
						if (Objets[index] instanceof Echelle)
						{
							this.Bloc.SurEchelle = true;
							this.Bloc.MovX = 0;
							this.Bloc.MovY = 0;
						}
						if (Objets[index] instanceof Eau)
							this.Bloc.DansEau = Objets[index];
						if (Objets[index] instanceof Piques)
							this.Coup(this.Resistance + Objets[index].Force, 0, -14);
					}
				}
				var dansEau = undefined;
				for (var index = 0; index < Eaux.length; index++)
					if (this.Bloc.Comparer(this.Bloc.MovX, this.Bloc.MovY, Eaux[index]))
					{
						dansEau = Eaux[index];
						if (Eaux[index].Force >= 1)
							this.Coup(Eaux[index].Force + this.Resistance, 0, -3);
						else if (Eaux[index].Force > 0)
							this.Coup(Eaux[index].Force + this.Resistance);
					}
				if ((dansEau !== this.Bloc.DansEau) && Math.abs(this.Bloc.MovY) > 2)
				{
					if (dansEau !== undefined)
						new SFX(dansEau.Splash, this.Bloc.X + this.Bloc.Width / 2 - 24, dansEau.Y - 32, 48, 24, 3, 8);
					else if (this.Bloc.DansEau !== undefined)
						new SFX(this.Bloc.DansEau.Splash, this.Bloc.X + this.Bloc.Width / 2 - 24, this.Bloc.DansEau.Y - 32, 48, 24, 3, 8);
				}
				this.Bloc.DansEau = dansEau;
				if (this.Anim !== -1)
				{
					if (this.Anim > 0)
						this.Anim--;
					else
					{
						this.Anim = this.AnimVitesse;
						this.setAnimX(this.AnimX + 1);
					}
				}
				if (this.AMal > 0)
					this.AMal--;
			}
			Etre.prototype.Draw = function()
			{
				if (this.AMal <= 0 || Math.round(this.AMal / 2) % 2 === 0)
					DrawImage(this.Image, 
									  this.getSourceX(), this.getSourceY(), this.SourceWidth, this.SourceHeight, 
									  Math.round(this.Bloc.X + this.ImageDecalX - Camera.X), 
									  Math.round(this.Bloc.Y + this.ImageDecalY - Camera.Y), 
									  this.SourceWidth, this.SourceHeight);
			}
			Etre.prototype.Coup = function(pForce, pX, pY)
			{
				if (this.AMal > 0)
					return;
				if (this === Joueur)
				{
					Shake.Intensity = 4;
					Shake.Duration = 5;
				}
				this.Vie -= Math.max(pForce - this.Resistance, 0);
				if (pForce - this.Resistance > 0)
					this.AMal = 24;
				if (pX !== undefined)
					this.Bloc.MovX = pX;
				if (pY !== undefined)
					this.Bloc.MovY = pY;
				
				if (this.Vie <= 0)
					this.Disposer();
			}
			Etre.prototype.Disposer = function()
			{
				Etres.splice(Etres.indexOf(this), 1);
				Blocs.splice(Blocs.indexOf(this.Bloc), 1);
				var sfx = new SFX(sprFlash, this.Bloc.X + this.ImageDecalX + this.SourceWidth / 2 - 48, this.Bloc.Y + this.ImageDecalY + this.SourceHeight / 2 - 48, 96, 96, 4, 2);
			}
		}

		function Personne(pImage, pImageWidth, pImageHeight, pImageDecalX, pImageDecalY, 
						  pAnimX, pAnimY, pAnimVitesse, pWidth, pHeight, pX, pY, pTexte, pErre)
		{
			this.Etre = new Etre(pImage, pImageWidth, pImageHeight, pImageDecalX, pImageDecalY,
								 pAnimX, pAnimY, pAnimVitesse, pWidth, pHeight, pX, pY, true,
								 undefined, 0, undefined);
			Objets.push(this);
			this.Etre.Bloc.Collisionnable = false;
			this.Erre = pErre;
			this.Attente = 0;
			this.Texte = pTexte;
			this.Dialogue = new Pancarte(pX, pY, pWidth, pHeight, pTexte, this.Etre)
			
			Personne.prototype.Update = function()
			{
				if (this.Erre)
				{
					if (this.Attente > 0)
					{
						this.Attente--;
						if (this.Etre.Orientation)
							this.Etre.setAnimY(1);
						else
							this.Etre.setAnimY(0);
						if (this.Attente <= 0)
						{
							if (Math.random() < 0.5)
							{
								this.Etre.Orientation = true;
								this.Etre.setAnimY(3);
							}
							else
							{
								this.Etre.Orientation = false;
								this.Etre.setAnimY(2);
							}
						}
					}
					else
					{
						if (this.Etre.Orientation)
						{
							this.Etre.Bloc.MovX -= 0.25;
							if (!this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX - this.Etre.Bloc.Width, 1) || this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX, 0))
							{
								this.Etre.Orientation = !this.Etre.Orientation;
								this.Etre.setAnimY(2);
							}
						}
						else
						{
							this.Etre.Bloc.MovX += 0.25;
							if (!this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX + this.Etre.Bloc.Width, 1) || this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX, 0))
							{
								this.Etre.Orientation = !this.Etre.Orientation;
								this.Etre.setAnimY(3);
							}
						}
						if (Math.random() < 0.01)
							this.Attente = Math.random() * 120;
					}
				}
				this.Dialogue.X = this.Etre.Bloc.X;
				this.Dialogue.Y = this.Etre.Bloc.Y;
			}
			Personne.prototype.Draw = function()
			{
			}
		}
		
		function Ooze(pX, pY, pVie, pForce)
		{
			this.Etre = new Etre(sprOoze, 144, 72, -8, -4, 3, 3, 6, 34, 18, pX + 7, pY, true, pVie, pForce, 0);			
			Objets.push(this);
			this.Attente = 0;
			
			Ooze.prototype.Update = function()
			{	
				if (this.Attente > 0)
				{
					this.Attente--;
					this.Etre.setAnimY(0);
					if (this.Attente <= 0)
					{
						if (Math.random() < 0.5)
						{
							this.Etre.Orientation = true;
							this.Etre.setAnimY(1);
						}
						else
						{
							this.Etre.Orientation = false;
							this.Etre.setAnimY(2);
						}
					}
				}
				else
				{
					if (this.Etre.Orientation)
					{
						this.Etre.Bloc.MovX -= 0.3;
						if (!this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX - this.Etre.Bloc.Width, 1) || this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX, 0))
						{
							this.Etre.Orientation = !this.Etre.Orientation;
							this.Etre.setAnimY(2);
						}
					}
					else
					{
						this.Etre.Bloc.MovX += 0.3;
						if (!this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX + this.Etre.Bloc.Width, 1) || this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX, 0))
						{
							this.Etre.Orientation = !this.Etre.Orientation;
							this.Etre.setAnimY(1);
						}
					}
					if (Math.random() < 0.01)
						this.Attente = Math.random() * 120;
				}
								
				// Check for hit
				if (this.Etre.Bloc.X - 1 < Joueur.Bloc.X + Joueur.Bloc.Width &&
				    this.Etre.Bloc.X + 1 + this.Etre.Bloc.Width > Joueur.Bloc.X &&
				    this.Etre.Bloc.Y - 1 < Joueur.Bloc.Y + Joueur.Bloc.Height &&
				    this.Etre.Bloc.Y + 1 + this.Etre.Bloc.Height > Joueur.Bloc.Y)
				{
					var rebondX = ((Joueur.Bloc.X + Joueur.Bloc.Width  * 0.5) - (this.Etre.Bloc.X + this.Etre.Bloc.Width  * 0.5)) * 0.5,
					    rebondY = ((Joueur.Bloc.Y + Joueur.Bloc.Height * 0.5) - (this.Etre.Bloc.Y + this.Etre.Bloc.Height * 0.5)) * 0.5;
					rebondX = Math.min(Math.max(-8, rebondX), 8);
					rebondY = Math.min(Math.max(-8, rebondY), 8);
					Joueur.Coup(this.Etre.Force, rebondX, rebondY);
				}
			
				if (this.Etre.Vie <= 0)
					this.Disposer();
			}
			Ooze.prototype.Draw = function()
			{}
			Ooze.prototype.Disposer = function()
			{
				var drop, rnd = Math.random();
				if (Joueur.Vie > Joueur.VieMax - 2)
					if (rnd < 0.3)
						drop = dropCarreau;
					else if (rnd < 0.4)
						drop = dropOr;
					else if (rnd < 0.6)
						drop = dropArgent;
					else
						drop = dropBronze;
				else
					drop = dropVie;
				new Drop(drop, this.Etre.Bloc.X + this.Etre.SourceWidth * 0.5 + this.Etre.ImageDecalX - 8, this.Etre.Bloc.Y + this.Etre.SourceHeight * 0.5 + this.Etre.ImageDecalY - 8, 16, 16);
				Objets.splice(Objets.indexOf(this), 1);
			}
		}
		function OozeGolem(pX, pY, pVie, pForce)
		{
			this.Etre = new Etre(sprOozeGolem, 96, 240, -8, -4, 2, 5, 12, 32, 42, pX + 7, pY, true, pVie, pForce, 0);
			Objets.push(this);
			this.Attente = 0;
			this.Attack = 0;
			this.AttenteAttack = 0;
			
			OozeGolem.prototype.Update = function()
			{
				this.Attente = Math.max(this.AttenteAttack, this.Attack);
					
				if (this.Etre.AnimY !== 3 && this.Etre.AnimY !== 4)
				{
					this.Etre.ImageDecalX = -8;
					this.Etre.AnimVitesse = 12;
					if (this.Attente > 0)
					{
						this.Attente--;
						this.Etre.setAnimY(0);
						if (this.Attente <= 0)
						{
							if (Math.random() < 0.5)
							{
								this.Etre.Orientation = true;
								this.Etre.setAnimY(1);
							}
							else
							{
								this.Etre.Orientation = false;
								this.Etre.setAnimY(2);
							}
						}
					}
					else
					{
						if (this.Etre.Orientation)
						{
							this.Etre.Bloc.MovX -= 0.15;
							if (!this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX - this.Etre.Bloc.Width, 1) || this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX, 0))
							{
								this.Etre.Orientation = !this.Etre.Orientation;
								this.Etre.setAnimY(2);
							}
						}
						else
						{
							this.Etre.Bloc.MovX += 0.15;
							if (!this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX + this.Etre.Bloc.Width, 1) || this.Etre.Bloc.EnCollision(this.Etre.Bloc.MovX, 0))
							{
								this.Etre.Orientation = !this.Etre.Orientation;
								this.Etre.setAnimY(1);
							}
						}
						if (Math.random() < 0.01)
							this.Attente = Math.random() * 120;
					}
					
					var distX = (Joueur.Bloc.X + Joueur.Bloc.Width / 2) - (this.Etre.Bloc.X + this.Etre.Bloc.Width / 2);
					
					if (Math.abs(distX) < 48 && Math.abs((Joueur.Bloc.Y + Joueur.Bloc.Height / 2) - (this.Etre.Bloc.Y + this.Etre.Bloc.Height / 2)) < 48)
					{
						if (distX > 0)
						{
							this.Etre.Orientation = true;
							this.Etre.setAnimY(4);
						}
						else
						{
							this.Etre.Orientation = false;
							this.Etre.setAnimY(3);
						}
						this.Etre.setAnimX(0);
						this.Etre.MovX = 0;
						this.Etre.AnimVitesse = 60;
						this.Etre.Anim = this.Etre.AnimVitesse;
					}
				}
				else if (this.Etre.AnimX === 1)
				{
					this.Etre.Anim = Math.min(this.Etre.AnimVitesse / 4, this.Etre.Anim);
					var distG = 0, distD = 0;
					if (this.Etre.Orientation)
					{
						this.Etre.ImageDecalX = 8;
						distD = 22;
					}
					else
					{
						this.Etre.ImageDecalX = -24;
						distG = -22;
					}
						
					// Check for hit
					if (this.Etre.Bloc.X - 1 + distG < Joueur.Bloc.X + Joueur.Bloc.Width &&
						this.Etre.Bloc.X + 1 + this.Etre.Bloc.Width + distD > Joueur.Bloc.X &&
						this.Etre.Bloc.Y - 1 < Joueur.Bloc.Y + Joueur.Bloc.Height &&
						this.Etre.Bloc.Y + 1 + this.Etre.Bloc.Height / 2 > Joueur.Bloc.Y)
					{
						var rebondX = ((Joueur.Bloc.X + Joueur.Bloc.Width  * 0.5) - (this.Etre.Bloc.X + this.Etre.Bloc.Width  * 0.5)) * 0.5;
						rebondX = Math.min(Math.max(-8, rebondX), 8);
						rebondY = -4;
						Joueur.Coup(this.Etre.Force, rebondX, rebondY);
					}
				}
				else if (this.Etre.ImageDecalX !== -8)
				{
					if (this.Etre.Orientation)
						this.Etre.setAnimY(1);
					else
						this.Etre.setAnimY(2);
				}
				
				// Check for hit
				if (this.Etre.Bloc.X - 1 < Joueur.Bloc.X + Joueur.Bloc.Width &&
				    this.Etre.Bloc.X + 1 + this.Etre.Bloc.Width > Joueur.Bloc.X &&
				    this.Etre.Bloc.Y - 1 < Joueur.Bloc.Y + Joueur.Bloc.Height &&
				    this.Etre.Bloc.Y + 1 + this.Etre.Bloc.Height > Joueur.Bloc.Y)
				{
					var rebondX = ((Joueur.Bloc.X + Joueur.Bloc.Width  * 0.5) - (this.Etre.Bloc.X + this.Etre.Bloc.Width  * 0.5)) * 0.5;
					rebondX = Math.min(Math.max(-8, rebondX), 8);
					rebondY = -4;
					Joueur.Coup(0, rebondX, rebondY);
				}
			
				if (this.Etre.Vie <= 0)
					this.Disposer();
			}
			OozeGolem.prototype.Draw = function()
			{}
			OozeGolem.prototype.Disposer = function()
			{
				var drop, rnd = Math.random();
				if (Joueur.Vie > Joueur.VieMax - 2)
					if (rnd < 0.5)
						drop = dropCarreau;
					else if (rnd < 0.8)
						drop = dropOr;
					else
						drop = dropArgent;
				else
					drop = dropVie;
				new Drop(drop, this.Etre.Bloc.X + this.Etre.SourceWidth * 0.5 + this.Etre.ImageDecalX - 8, this.Etre.Bloc.Y + this.Etre.SourceHeight * 0.5 + this.Etre.ImageDecalY - 8, 16, 16);
				Objets.splice(Objets.indexOf(this), 1);
			}
		}
		function OozeBoss()
		{
			this.Eau = new Eau(96, 536, 960, 96, sprPoison, sprSplashPoison, 6, 0.1);
			this.Cible = 536;
			this.Phase = 'entree';
			this.PhaseDuration = undefined;
			this.CoupDuration = 0;
			this.Vie = 20;
			this.Barre = new Barre(16, 16, 32, 32, this.Vie * 2, sprViePoison, sprVieFond);
			this.Oozes = new Array();
			this.Streams = new Array();
			this.Timer = 4;
			Objets.push(this);
			UI.push(this);
			
			OozeBoss.prototype.CibleAtteinte = function()
			{
				this.Eau.Y = this.Cible;
			}
			OozeBoss.prototype.PhaseSwitch = function()
			{
				switch (this.Phase)
				{
					case 'entree':
						this.Cible = 456;
						this.PhaseDuration = 1800;
						this.Phase = 'phasePilliers';
						for (var index = 0; index < Objets.length; index++)
							if (Objets[index] instanceof Teleporteur)
								Objets[index].Etat = false;
					break;
					case 'phasePilliers':
						this.Cible = 288;
						this.PhaseDuration = 1200;
						this.Phase = 'phaseTop';
						this.Streams = [];
					break;
					case 'phaseTop':
						this.Cible = 536;
						this.PhaseDuration = 1800;
						this.Phase = 'phaseBas';
					break;
					case 'phaseBas':
						this.Cible = 456;
						this.PhaseDuration = 1800;
						this.Phase = 'phasePilliers';
					break;
					case 'fin':
						new Drop(ItemCoeur, 568, 500, 16, 16);
						this.PhaseDuration = undefined;
						this.Phase = 'fini';
						Quest = 1;
						for (var index = 0; index < Objets.length; index++)
							if (Objets[index] instanceof Porte)
								Objets[index].OuvrirFermer(false);
								
						BoxSpeaker = Joueur;
						BoxText = "Odd... no sign of my nephew... @He obviously didn't come here, I should go back to town to get new info."
					break;
					default:
					break;
				}
			}
			OozeBoss.prototype.PhaseUpdate = function(pPhase)
			{
				switch (this.Phase)
				{
					case 'entree':
						if (Joueur.Bloc.Y < 384 && Joueur.Bloc.X < 816 && Joueur.Bloc.X > 288)
							this.PhaseSwitch();
					break;
					case 'phasePilliers':
						if (this.PhaseDuration > 0)
							this.PhaseDuration--;
						else
							this.PhaseSwitch();
						if (this.Eau.Y === this.Cible && this.Timer === 0)
						{
							var position = Math.round(Math.random() * 6 - 0.5);
							if (Math.random() < 0.5)
								this.Streams.push(new OozeStream1(position, true));
							else
								this.Streams.push(new OozeStream1(position, false));
						}
						for (var index = this.Streams.length - 1; index >= 0; index--)
							if (this.Streams[index].Disposed)
							{
								this.Oozes.push(new Ooze(144 * this.Streams[index].Position + 192, this.Streams[index].Y + 24, 2, 1));
								this.Streams.splice(index, 1);
							}
						if (this.Timer > 0)
							this.Timer--;
						else
							this.Timer = 120;
					break;
					case 'phaseTop':
						if (this.PhaseDuration > 0)
						{
							this.PhaseDuration--;
							if (this.Eau.Y === this.Cible && this.Timer === 0)
							{
								var pos = Math.round((Math.random() * 16) - 0.5), taille = 4;
								if (pos < 3)
									taille = 4 - (3 - pos);
								if (pos > 12)
									taille = 4 - (pos - 12);
								this.Streams.push(new OozeStream2(pos + 4, 5, taille));
							}
						}
						else
							this.PhaseSwitch();
						if (this.Timer > 0)
							this.Timer--;
						else
							this.Timer = 20;
					break;
					case 'phaseBas':
						if (this.PhaseDuration > 0)
							this.PhaseDuration--;
						else
							this.PhaseSwitch();
						if (this.PhaseDuration === 1620)
							for (var index = 0; index < 6; index++)
								this.Oozes.push(new Ooze(index * 144 + 192, 350, 2, 1));
						if (this.PhaseDuration === 1330)
							for (var index = 0; index < 7; index++)
								if (Math.random() < 0.5)
									this.Oozes.push(new Ooze(index * 128 + 128, 528 - 24,2, 1));
								else
									this.Oozes.push(new OozeGolem(index * 128 + 128, 528 - 48,4, 2));
					break;
					case 'fin':
						if (this.PhaseDuration > 0)
							this.PhaseDuration--;
						else
							this.PhaseSwitch();
					default:
					break;
				}
			}
			
			OozeBoss.prototype.Update = function()
			{	
				if (Math.abs(this.Eau.Y - this.Cible) < 1)
					this.CibleAtteinte();
				else
				{
					Shake.Duration = Math.max(Shake.Duration, 1);
					Shake.Intensity = 3;
				}
				if (this.CoupDuration > 0)
					this.CoupDuration--;
				
				this.PhaseUpdate(this.Phase);
					
				// Couleur eau + force
				if (this.Vie <= 0)
				{
					this.Eau.Image = sprEau;
					this.Eau.Splash = sprSplash;
					this.Eau.Force = 0;
					this.Cible = 536;
				}
				else
				{
					if (this.CoupDuration % 2 === 0)
					{
						this.Eau.Image = sprPoison;
						this.Eau.Splash = sprSplashPoison;
					}
					else
					{
						this.Eau.Image = sprEau;
						this.Eau.Splash = sprSplash;
						Shake.Duration = Math.max(Shake.Duration, 2);
						Shake.Intensity = Math.max(Shake.Intensity, 4);
					}
				}
				
				// Changement hauteur eau
				if (this.Eau.Y < this.Cible)
					this.Eau.Y+= 0.5;
				else if (this.Eau.Y > this.Cible)
					this.Eau.Y-= 0.5;
				this.Eau.Height = 528 - this.Eau.Y;
				
				// Disparition des oozes
				for (var index = this.Oozes.length - 1; index >=0; index--)
					if (this.Oozes[index].Etre.Bloc.Y > this.Eau.Y - 8)
					{
						Etres.splice(Etres.indexOf(this.Oozes[index].Etre), 1);
						Blocs.splice(Blocs.indexOf(this.Oozes[index].Etre.Bloc), 1);
						Objets.splice(Objets.indexOf(this.Oozes[index]), 1);
						this.Oozes.splice(index, 1);
					}
				
				// Check de vie
				if (this.Oozes.length > 0)
					for (var index = this.Oozes.length - 1; index >= 0; index--)
					{
						if (this.Oozes[index].Etre.Vie <= 0)
						{
							this.CoupDuration = 24;
							this.Oozes.splice(index, 1);
							this.Vie--;
							if (this.Vie <= 0)
							{
								Shake.Intensity = 5;
								Shake.Duration = 120;
								this.Phase = 'fin';
								this.PhaseDuration = 120;
								for (var index = this.Oozes.length - 1; index >=0; index--)
								{
									Etres.splice(Etres.indexOf(this.Oozes[index].Etre), 1);
									Blocs.splice(Blocs.indexOf(this.Oozes[index].Etre.Bloc), 1);
									Objets.splice(Objets.indexOf(this.Oozes[index]), 1);
									this.Oozes.splice(index, 1);
								}
							}
						}
					}
			}
			OozeBoss.prototype.Draw = function() {}
			OozeBoss.prototype.DrawUI = function()
			{
				if (this.Phase !== 'entree' && this.Phase !== 'fini')
				{
					this.Barre.X = width / 2 - (this.Barre.Maximum / 4 * this.Barre.Width);
					this.Barre.Valeur = this.Vie * 2;
					this.Barre.Draw();
					context.font = '16px Geneva';
					context.lineWidth = 3;
					context.strokeStyle = '#050';
					context.strokeText('Ooze Puddle', width / 2 - 40, 20);
					context.fillStyle = '#af0';
					context.fillText('Ooze Puddle', width / 2 - 40, 20);
				}
			}
		}
		function OozeStream1(pPosition, pOrientation)
		{
			this.Position = pPosition;
			this.Orientation = pOrientation;
			if (this.Orientation)
			{
				this.X = 144 * pPosition + 120;
				this.Image = sprStreamPoisonD;
			}
			else
			{
				this.X = 144 * pPosition + 192;
				this.Image = sprStreamPoisonG;
			}
			this.Y = 288;
			this.Width = 120;
			this.Height = 192;
			
			this.Anim = 4;
			this.Timer = 10;
			this.AnimX = 0;
			this.AnimY = -1;
			
			if (this.Orientation)
			{
				new SFX(sprSplashPoison, this.X + 72, this.Y + 72, 48, 24, 3, 8);
				new SFX(sprSplashPoison, this.X, 424, 48, 24, 3, 8);
			}
			else
			{
				new SFX(sprSplashPoison, this.X, this.Y + 72, 48, 24, 3, 8);
				new SFX(sprSplashPoison, this.X + 72, 424, 48, 24, 3, 8);
			}
			
			this.Disposed = false;
			
			Objets.push(this);
			
			OozeStream1.prototype.Update = function()
			{
				if (this.Anim > 0)
					this.Anim--;
				else
				{
					this.Anim = 4;
					this.AnimX = (this.AnimX + 1) % 3;
					if (this.AnimX === 0 && this.AnimY === 0)
						this.AnimY = 1;
					if (this.AnimX === 0 && this.AnimY === 2)
					{
						this.Disposer();
					}
					if (this.AnimY === 1)
					{
						if (this.Timer > 0)
							this.Timer--;
						else
							this.AnimY = 2;
							
						if (Joueur.Bloc.X < this.X + this.Width && 
							Joueur.Bloc.X + Joueur.Bloc.Width > this.X && 
							Joueur.Bloc.Y + Joueur.Bloc.Height > this.Y && 
							Joueur.Bloc.Y < this.Y + this.Height)
							Joueur.Coup(1, ((Joueur.Bloc.X + Joueur.Bloc.Width * 0.5) - (this.X + this.Width * 0.5)) * 0.2, -8);
					}
					if (this.AnimY === -1)
					{
						if (this.Timer > 0)
							this.Timer--;
						else
						{
							this.AnimY = 0;
							this.Timer = 5;
						}
					}
					else
					{
						Shake.Duration = Math.max(Shake.Duration, 1);
						Shake.Intensity = Math.max(Shake.Intensity, 4);
					}
					if (this.AnimY !== 0 && this.AnimY !== -1)
						for (var index = 0; index < 2; index++)
							if (this.Orientation)
								new SFX(sprSplashPoison, this.X + 72 + (Math.random() - 0.5) * 96, this.Y + 72 + (Math.random() - 0.8) * 8, 48, 24, 3, 8);
							else
								new SFX(sprSplashPoison, this.X + (Math.random() - 0.5) * 96, this.Y + 72 + (Math.random() - 0.8) * 8, 48, 24, 3, 8);
					if (this.AnimY !== 2 && this.AnimY !== -1)
						if (this.Orientation)
							new SFX(sprSplashPoison, this.X + (Math.random() - 0.5) * 24, 424 + (Math.random() - 0.8) * 24, 48, 24, 3, 8);
						else
							new SFX(sprSplashPoison, this.X + 72 + (Math.random() - 0.5) * 24, 424 + (Math.random() - 0.8) * 24, 48, 24, 3, 8);
				}
			}
			OozeStream1.prototype.Draw = function()
			{
				DrawImage(this.Image, this.AnimX * this.Width, this.AnimY * this.Height, this.Width, this.Height, Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y), this.Width, this.Height);
			}
			OozeStream1.prototype.Disposer = function()
			{
				Objets.splice(Objets.indexOf(this), 1);
				this.Disposed = true;
			}
		}
		function OozeStream2(pX, pY, pTaille)
		{
			this.X = pX * 48;
			this.Y = pY * 48;
			this.Taille = pTaille;
			this.TailleActuelle = 1;
			this.Image = sprStreamPoisonDroitT;
			this.AnimX = new Array();
			this.AnimX.push(0);
			this.Anim = 4;
			this.Timer = 8;
			this.Disposed = false;
			this.Width = 48;
			this.Height = 48;
			
			Objets.push(this);
			
			OozeStream2.prototype.Update = function()
			{
				if (this.Anim > 0)
					this.Anim--;
				else
				{
					if (this.Taille === this.TailleActuelle)
					{
						for (var index = 0; index < 5; index++)
							new SFX(sprSplashPoisonT, this.X + (Math.random() - 0.5) * 128, this.Y - (this.Taille - 1) * 48 - (Math.random() - 0.8) * 32, 48, 24, 3, 8);
					
						Shake.Duration = Math.max(Shake.Duration, 3);
						Shake.Intensity = Math.max(Shake.Intensity, 10);
					}
					for (var index = 0; index < 2; index++)
						new SFX(sprSplashPoison, this.X + (Math.random() - 0.5) * 96, this.Y - (Math.random() - 0.8) * 24, 48, 24, 3, 8);
						
					this.Anim = 4;
					for (var index = 0; index < this.AnimX.length; index++)
						this.AnimX[index] = (this.AnimX[index] + 1) % 3;
					if (this.Timer > 0 && this.TailleActuelle < this.Taille)
					{
						this.Timer--;
						if (this.Timer === 0)
						{
							this.Timer = 1;
							this.TailleActuelle++;
							this.AnimX.push(0);
						}
					}
					else if (this.Timer < 0 && this.TailleActuelle > 0)
					{
						this.Timer++;
						if (this.Timer === 0)
						{
							this.Timer = -1;
							this.TailleActuelle--;
							this.Y-= 48;
						}
					}
					else if (this.TailleActuelle === this.Taille)
						this.Timer = -1;
					else if (this.TailleActuelle === 0)
						this.Disposer();
				}
				if (this.X < Joueur.Bloc.X + Joueur.Bloc.Width && this.X + this.Width > Joueur.Bloc.X &&
					this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height && this.Y + this.Height > Joueur.Bloc.Y)
					Joueur.Coup(1, ((Joueur.Bloc.X + Joueur.Bloc.Width * 0.5) - (this.X + this.Width * 0.5)), 0);
			}
			OozeStream2.prototype.Draw = function()
			{
				var AnimY;
				for (var index = 0; index < this.TailleActuelle; index++)
				{
					if (index === this.AnimX.length - 1 && this.TailleActuelle < this.Taille)
						AnimY = 0;
					else if (index === 0)
						AnimY = 2;
					else
						AnimY = 1;
					DrawImage(this.Image, this.AnimX[index] * this.Width, AnimY * this.Height, this.Width, this.Height, 
								Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y) - index * 48, this.Width, this.Height);
				}
			}
			OozeStream2.prototype.Disposer = function()
			{
				Objets.splice(Objets.indexOf(this), 1);
				this.Disposed = true;
			}
		}
	}
	{ // Visuel
		
		function SFX(pImage, pX, pY, pWidth, pHeight, pAnimCount, pVitesse)
		{
			this.Image = pImage;
		
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			
			this.AnimX = 0;
			this.AnimCount = pAnimCount;
			
			this.Anim = pVitesse;
			this.AnimVitesse = pVitesse;
			
			SFXs.push(this);
			
			SFX.prototype.Draw = function()
			{
				if (this.Anim > 0)
					this.Anim --;
				else
				{
					this.Anim = this.AnimVitesse;
					this.AnimX++;
					if (this.AnimX >= this.AnimCount)
						this.Disposer();
				}
				DrawImage(this.Image, 
								  this.AnimX * this.Width, 0, this.Width, this.Height, 
								  Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y), 
								  this.Width, this.Height);
			}
			SFX.prototype.Disposer = function()
			{
				SFXs.splice(SFXs.indexOf(this), 1);
			}
		}
		
		function GrilleVisuelle(pImage, pGridArray, pPriority, pOpacity)
		{
			this.Image = pImage;
			this.Buffer;
			this.TailleCase = 48;
			this.Width = pGridArray[0].length;
			this.Height = pGridArray.length;
			this.WidthPX = this.Width * this.TailleCase;
			this.HeightPX = this.Height * this.TailleCase;
			this.Cases = pGridArray;
			this.Load = 30;
			this.Priority = pPriority;
			this.Opacity = pOpacity;
			GrilleVisuelle.prototype.CreerBuffer = function()
			{
				this.Buffer = document.createElement('canvas');
				this.Buffer.width = this.Width * this.TailleCase;
				this.Buffer.height = this.Height * this.TailleCase;
				var ctx = this.Buffer.getContext('2d');
				if (this.Opacity !== undefined)
					ctx.globalAlpha = this.Opacity;
				else
					if (this.Priority === 0)
						ctx.globalAlpha = 0.5;
					else
						ctx.globalAlpha = 1;
				for (var x = 0; x < this.Width; x++)
					for (var y = 0; y < this.Height; y ++)
						ctx.drawImage(this.Image, 
							      0, this.Cases[y][x] * this.TailleCase, 
							      this.TailleCase, this.TailleCase, 
							      x * this.TailleCase, y * this.TailleCase, 
							      this.TailleCase, this.TailleCase);
			}
				
			if (pPriority === 0)
				BG = this;	
			if (pPriority === 1)
				MG = this;
			if (pPriority === 2)
				FG = this;
			
			GrilleVisuelle.prototype.Draw = function()
			{
				if (this.Load > 0)
					this.Load--;
				else
				{
					if (this.Buffer === undefined)
						this.CreerBuffer();
					DrawImage(this.Buffer, Math.round(-Camera.X), Math.round(-Camera.Y));
				}
			}
		}
		
	}
	{ // Shiney
	
		function Coffre(pImage, pX, pY, pWidth, pHeight, pItem)
		{
			this.Image = pImage;
			this.DistanceInteraction = 1;
			this.Item = pItem;
			
			this.Num = numCoffre();
			this.Ouvert = nouveauCoffre(this.Num);
			
			this.Bloc = new Bloc(pWidth, pHeight, pX, pY, false, true, false, true);
			
			Objets.push(this);
			
			Coffre.prototype.Draw = function()
			{
				var y = 0;
				if (this.Ouvert)
					y = this.Bloc.Height;
				DrawImage(this.Image, 
								  0, y, this.Bloc.Width, this.Bloc.Height, 
								  Math.round(this.Bloc.X - Camera.X), 
								  Math.round(this.Bloc.Y - Camera.Y), 
								  this.Bloc.Width, this.Bloc.Height);
			}
			Coffre.prototype.Update = function()
			{
				if (!this.Ouvert &&
					this.Bloc.X - this.DistanceInteraction < Joueur.Bloc.X + Joueur.Bloc.Width &&
					this.Bloc.X + this.DistanceInteraction + this.Bloc.Width > Joueur.Bloc.X &&
					this.Bloc.Y - this.DistanceInteraction < Joueur.Bloc.Y + Joueur.Bloc.Height &&
					this.Bloc.Y + this.DistanceInteraction + this.Bloc.Height > Joueur.Bloc.Y)
				{
					JouerSon(sndItem);
					this.Ouvert = true;
					ouvrirCoffre(this.Num);
					new Item(this.Item, this.Bloc.X + this.Bloc.Width / 2 - this.Item.Width / 2,
							 this.Bloc.Y - this.Bloc.Height / 2 - this.Item.Height / 2);
				}
				this.Bloc.Deplacer();
			}
		}
		function Item(pEffet, pX, pY)
		{
			this.Effet = pEffet;
			this.Effet.Donner();
			this.X = pX;
			this.Y = pY;
			this.Duration = 60;
			
			SFXs.push(this);
			
			Item.prototype.Draw = function()
			{
			this.Effet.Draw(Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y));
			this.Y-=0.25;
			if (this.Duration > 0)
				this.Duration--;
			else
				SFXs.splice(SFXs.indexOf(this), 1);	
			}
		}
		function Drop(pEffet, pX, pY, pWidth, pHeight)
		{
			this.Effet = pEffet;
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			
			Objets.push(this);
			Drop.prototype.Update = function()
			{
				if (this.X < Joueur.Bloc.X + Joueur.Bloc.Width &&
				    this.X + this.Width > Joueur.Bloc.X &&
				    this.Y < Joueur.Bloc.Y + Joueur.Bloc.Height &&
				    this.Y + this.Height > Joueur.Bloc.Y)
				{
					this.Effet.Donner();
					this.Disposer();
				}
			}
			Drop.prototype.Draw = function()
			{
				this.Effet.Draw(Math.round(this.X - Camera.X), Math.round(this.Y - Camera.Y));
			}
			Drop.prototype.Disposer = function()
			{
				Objets.splice(Objets.indexOf(this), 1);
			}
		}		
		
		var dropOr =
		{
			Width : 16,
			Height : 16,
			Donner : function()
			{
				NbOr += 20;
				NbOr = Math.min(MaxOr, NbOr);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprOr, pX, pY);
			}
		}
		var dropArgent =
		{
			Width : 16,
			Height : 16,
			Donner : function()
			{
				NbOr += 5;
				NbOr = Math.min(MaxOr, NbOr);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprArgent, pX, pY);
			}
		}
		var dropBronze =
		{
			Width : 16,
			Height : 16,
			Donner : function()
			{
				NbOr += 1;
				NbOr = Math.min(MaxOr, NbOr);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprBronze, pX, pY);
			}
		}
		var dropVie =
		{
			Width : 16,
			Height : 16,
			Donner : function()
			{
				Joueur.Vie+= 2;
				Joueur.Vie = Math.min(Joueur.Vie, Joueur.VieMax);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprVie, pX, pY);
			}
		}
		var Coeur =
		{
			Width : 16,
			Height : 16,
			Donner : function()
			{
				Joueur.VieMax = Math.min(Joueur.VieMax + 2, 60);
				Joueur.Vie+= 2;
				Joueur.Vie = Math.min(Joueur.Vie, Joueur.VieMax);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprVieFond, pX, pY);
				DrawImage(sprVie, pX, pY);
			}
		}
		var ItemCoeur = 
		{
			Width : 16,
			Height : 16,
			Donner : function()
			{
				JouerSon(sndItem);
				new Item(Coeur, Joueur.Bloc.X + Joueur.Bloc.Width / 2 - 8, Joueur.Bloc.Y - 24);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprVieFond, pX, pY);
				DrawImage(sprVie, pX, pY);
				if (Math.random() < 0.2)
					new SFX(sprSparkle, pX - 4 + Camera.X + this.Width * Math.random(), pY - 4 + Camera.Y + this.Height * Math.random(), 8, 8, 3, 2);
			}
		}
		var Epee =
		{
			Width : 32,
			Height : 32,
			Donner : function()
			{
				Force.Valeur = Math.min(Force.Valeur + 1, 50);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprEpee, pX, pY);
			}
		}	
		var Armure =
		{
			Width : 32,
			Height : 32,
			Donner : function()
			{
				Resistance.Valeur = Math.min(Resistance.Valeur + 1, 50);
				Joueur.Resistance = Resistance.Valeur;
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprArmure, pX, pY);
			}
		}
		var dropCarreau =
		{
			Width : 16,
			Height : 16,
			Donner : function()
			{
				NbCarreaux += 5;
				NbCarreaux = Math.min(MaxCarreaux, NbCarreaux);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprNbCarreaux, pX, pY);
			}
		}
		var MaxCarreau =
		{
			Width : 32,
			Height : 32,
			Donner : function()
			{
				MaxCarreaux = Math.min(MaxCarreaux + 5, 1000);
				NbCarreaux += 5;
				NbCarreaux = Math.min(MaxCarreaux, NbCarreaux);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprMaxCarreau, pX, pY);
			}
		}
		var Arbalete =
		{
			Width : 32,
			Height : 32,
			Donner : function()
			{
				if (ForceR.Valeur === 0)
					for (var index = 0; index < 2; index++)
						MaxCarreau.Donner();
				ForceR.Valeur = Math.min(ForceR.Valeur + 1, 50);
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprCrossbow, pX, pY);
			}
		}
		var AugmenterOr =
		{
			Width : 32,
			Height : 32,
			Donner : function()
			{
				MaxOr += 100;
			},
			Draw : function(pX, pY)
			{
				DrawImage(sprMaxOr, pX, pY);
			}
		}
	}

} // end CLASSES
{ // VARIABLES

	var gLoop,
		passwordElement = document.getElementById('password'),
		Background = '#000', MapName = undefined,
		BG, MG, FG,
		Blocs = new Array(),
		Etres = new Array(),
		Objets = new Array(),
		Projectiles = new Array(),
		Eaux = new Array(),
		SFXs = new Array(),
		Coffres = new Array(),
		UI = new Array(),
		NombreCoffres = 0,
		Vie = new Barre(16, 16, 8, 8, 4, sprVie, sprVieFond),
		Force = new Attribut(sprEpee, 32, width - 40, 8, getPassForce()),
		ForceR = new Attribut(sprCrossbow, 32, width - 40, 44, getPassForceR()),
		Resistance = new Attribut(sprArmure, 32, width - 40, 80, getPassResistance()),
		NbCarreaux = getPassFleches(), MaxCarreaux = getPassMaxFleches(),
		NbOr = getPassOr(), MaxOr = getPassMaxOr(),
		Quest = getPassQuest(),
		BoxText = '', BoxSpeaker = undefined,
		Joueur = new Etre(sprJoueur, 168, 432, -20, -4, 3, 9, 4, 16, 40, 0, 0, true, getPassMaxHP(), Force.Valeur, Resistance.Valeur),
		DepuisMort = 0;
		
		Joueur.Vie = getPassHP();
		BoxSpeaker = Etres[0];
		
	var Controlleur =
	{
		Arme: 0,
		Epee: sprJoueurEpee,
		Arbalete: sprJoueurArbalete,
	
		Gauche: false,
		PresseGauche: false,
		Haut: false,
		PresseHaut: false,
		Droite: false,
		PresseDroite: false,
		Bas: false,
		CoupGauche: false,
		CoupDroit: false,
		PresseCoup: false,
		CoupOrientation: false,
		Action: -1,
		Presse: function(pTouche)
		{
			switch(pTouche)
			{
				case 37:
					if (!this.Gauche)
						this.PresseGauche = true;
					this.Gauche = true;
				break;
				case 39:
					if (!this.Droite)
						this.PresseDroite = true;
					this.Droite = true;
				break;
				case 38:
					if (!this.Haut)
						this.PresseHaut = true;
					this.Haut = true;
				break;
				case 40:
					this.Bas = true;
					break;
				case 88:
					if (!this.CoupGauche && !this.CoupDroit)
					{
						this.PresseCoup = true;
						this.CoupOrientation = false;
					}
					this.CoupGauche = true;
					break;
				case 67:
					if (!this.CoupGauche && !this.CoupDroit)
					{
						this.PresseCoup = true;
						this.CoupOrientation = true;
					}
					this.CoupDroit = true;
					break;
				case 90:
					this.Arme++;
					this.Arme %= 2;
				break;
				case 66:
					if (BoxSpeaker instanceof Achat)
					{
						BoxSpeaker.Faire();
					}
					BoxText = '';
					BoxSpeaker = undefined;
				break;
				case 27:
					if (tmrLoad === 0)
						enPause = !enPause;
				break;
				case 83:
					alert(getPassword());
				break;
			}
		},
		Relache: function(pTouche)
		{
			switch(pTouche)
			{
				case 37:
				this.Gauche = false;
				break;
				case 39:
				this.Droite = false;
				break;
				case 38:
				this.Haut = false;
				break;
				case 40:
				this.Bas = false;
				break;
				case 88:
				this.CoupGauche = false;
				break;
				case 67:
				this.CoupDroit = false;
				break;
			}
		},
		Update: function()
		{
			Joueur.Resistance = Resistance.Valeur;
			
			if (this.Action === -1)
			{
				if (Joueur.Bloc.SurEchelle)
				{
					var tmpechelle = 1.5;
					if (Joueur.Bloc.DansEau)
						tmpechelle *= 3;
					if (this.Haut)
						Joueur.Bloc.MovY -= tmpechelle;
					if (this.Gauche)
						Joueur.Bloc.MovX -= tmpechelle;
					if (this.Droite)
						Joueur.Bloc.MovX += tmpechelle;
					if (this.Bas)
						Joueur.Bloc.MovY += tmpechelle;
				}
				else if (Joueur.Bloc.SurUnBloc || Joueur.Bloc.SurEscalier)
				{
					//context.fillText('Bleh', 128, 128);
					if (this.PresseHaut)
						if(Joueur.Bloc.DansEau)
							Joueur.Bloc.MovY -= 5;
						else
							Joueur.Bloc.MovY -= 13;
					if (this.Gauche)
						Joueur.Bloc.MovX -= 1.5;
					if (this.Droite)
						Joueur.Bloc.MovX += 1.5;
				}
				else
				{
					if (this.Gauche)
						Joueur.Bloc.MovX -= 0.2;
					if (this.Droite)
						Joueur.Bloc.MovX += 0.2;
					if (this.Bas)
						if(Joueur.Bloc.DansEau)
							Joueur.Bloc.MovY += 0.5;
						else
							Joueur.Bloc.MovY += 1;
				}
					
				if (Joueur.Bloc.DansEau && this.Haut)
					if ((this.Gauche || this.Droite ) && Joueur.Bloc.EnCollision(Joueur.Bloc.MovX, 0))
						Joueur.Bloc.MovY = -11;
					else
						Joueur.Bloc.MovY -= 0.25;
							
				if (this.Droite)
					Joueur.Orientation = true;
				else if (this.Gauche)
					Joueur.Orientation = false
				
				if (Joueur.Anim === -1 && Joueur.AnimY > 1)
					Joueur.Anim = 0;
				if (!Joueur.Bloc.SurEchelle)
				{
					if (!Joueur.Bloc.SurUnBloc && ! Joueur.Bloc.SurEscalier)
						if (Joueur.Orientation)
							Joueur.setAnimY(6);
						else
							Joueur.setAnimY(7);
					else
					{
						if ((Joueur.Bloc.MovX < -0.01 || Joueur.Bloc.MovX > 0.01))
						{
							if (Joueur.Orientation)
								Joueur.setAnimY(2);
							else
								Joueur.setAnimY(3);
						}
						else
						{
							Joueur.Anim = -1;
							if (Joueur.Orientation)
								Joueur.setAnimY(0);
							else
								Joueur.setAnimY(1);
						}
					}
				}
				else
				{
					Joueur.setAnimY(8);
					if (Joueur.Bloc.MovX > -0.1 && Joueur.Bloc.MovX < 0.1 &&
					    Joueur.Bloc.MovY > -0.1 && Joueur.Bloc.MovY < 0.1)
						Joueur.Anim = -1;
				}
				if (this.PresseCoup)
				{
					if (this.CoupDroit)
					{
						Joueur.setAnimY(4);
						if (this.Arme === 0)
							Joueur.Bloc.MovX+=1;
						else if (this.Arme === 1)
							Joueur.Bloc.MovX-=1;
					}
					else if (this.CoupGauche)
					{
						Joueur.setAnimY(5);
						if (this.Arme === 0)
							Joueur.Bloc.MovX-=1;
						else if (this.Arme === 1)
							Joueur.Bloc.MovX+=1;
					}
					Joueur.setAnimX(0);
					Joueur.Anim = 0;
					this.Action = Joueur.AnimVitesse * 2.5;
				}
			}
			else
			{
				if (this.Action > 0)
					this.Action--;
				else
					this.Action = -1;
			}
			
			// Coup
			if ((Joueur.AnimY === 4 || Joueur.AnimY === 5) && Joueur.AnimX === 2)
			{
				if (this.Arme === 0)
				{
					for (var index = 0; index < Etres.length; index++)
						if (Etres[index] !== Joueur)
						{
							var tmp1 = 0, tmp2 = 0;
							if (this.CoupOrientation)
								tmp2 = 28;
							else
								tmp1 = -28;
							if 
							(
								Comparer
								(
									Joueur.Bloc.X + Joueur.Bloc.Width * 0.5 + tmp1, 
									Joueur.Bloc.Y, 
									Joueur.Bloc.X + Joueur.Bloc.Width * 0.5 + tmp2, 
									Joueur.Bloc.Y + Joueur.Bloc.Height,
									Etres[index].Bloc.X, 
									Etres[index].Bloc.Y, 
									Etres[index].Bloc.X + Etres[index].Bloc.Width, 
									Etres[index].Bloc.Y + Etres[index].Bloc.Height
								)
							)
								Etres[index].Coup(Force.Valeur, (tmp1 + tmp2) / 3, -4);
						}
				}						
				else if (this.Arme === 1 && Joueur.Anim === Joueur.AnimVitesse && NbCarreaux > 0)
				{
					var tmp1 = 0, tmp2 = 0;
					if (this.CoupOrientation)
					{
						tmp1 = Joueur.Bloc.Width + 4;
						tmp2 = 12;
					}
					else
					{
						tmp1 = -16 - 4;
						tmp2 = -12;
					}
					NbCarreaux--;
					new Projectile(sprCarreau, 16, 2, Joueur.Bloc.X + Joueur.Bloc.MovX + tmp1, Joueur.Bloc.Y + 12, tmp2, 0.5, 
						       ForceR.Valeur, 60, false, false, 
				                       undefined, 0, 0, 0, 0);
				}
			}		
			if (this.PresseCoup)
				this.PresseCoup = false;
			if (this.PresseHaut)
				this.PresseHaut = false;
			if (this.PresseGauche)
				this.PresseGauche = false;
			if (this.PresseDroite)
				this.PresseDroite = false;
		},
		Draw: function()
		{
			if (Joueur.Vie <= 0)
				return;
			var arme;
			switch (this.Arme)
			{
				case 0:
					arme = this.Epee;
					break;
				case 1:
					arme = this.Arbalete;
					break;
				default:
					arme = this.Epee;
					break;
			}
			if (Joueur.AMal <= 0 || Joueur.AMal % 2 === 0)
				DrawImage(arme, 
						  Joueur.getSourceX(), Joueur.getSourceY(), Joueur.SourceWidth, Joueur.SourceHeight, 
						  Math.round(Joueur.Bloc.X + Joueur.ImageDecalX - Camera.X), 
						  Math.round(Joueur.Bloc.Y + Joueur.ImageDecalY - Camera.Y), 
						  Joueur.SourceWidth, Joueur.SourceHeight);	
		}
	}
	
} // end VARIABLES
{ // LOOPS

	window.addEventListener('keydown', function(pEvent)
	{
		Controlleur.Presse(pEvent.keyCode);
	}, false);
	window.addEventListener('keyup', function(pEvent)
	{
		Controlleur.Relache(pEvent.keyCode); 
	}, false);
	
	var tmrLoad = 10;
	var Draw = function()
	{
		if (Ready && MapName != undefined)
		{
			BG.Draw();
			for (var index = 0; index < Objets.length; index++)
				Objets[index].Draw();
			MG.Draw();
			for (var index = 0; index < Etres.length; index++)
				Etres[index].Draw();
			for (var index = 0; index < Projectiles.length; index++)
				Projectiles[index].Draw();
			Controlleur.Draw();
			for (var index = 0; index < Eaux.length; index++)
				Eaux[index].Draw();
			for (var index = 0; index < SFXs.length; index++)
				SFXs[index].Draw();
			FG.Draw();
			
			if (enPause)
			{
				context.globalAlpha = 0.7;
				context.fillStyle = '#000';
				context.fillRect(0, 0, width, height);
				context.globalAlpha = 1;
				context.font = '14px Geneva';
				context.fillStyle = '#fff';
				context.fillText("PAUSED", width / 2 - 26, height / 2 - 8);
				context.font = '12px Geneva';
				context.fillStyle = '#aaa';
				context.fillText("Press 'esc' to continue", width / 2 - 50, height / 2 + 8);
			}
		
			if (DepuisMort > 0)
			{
				context.globalAlpha = 1 - 60 / (DepuisMort + 60);
				
				context.fillStyle = '#000';
				context.fillRect(0, 0, width, height);
				context.font = '14px Geneva';
				context.fillStyle = '#f00';
				context.fillText("GAME OVER", width / 2 - 38, height / 2 - 8);
				context.font = '12px Geneva';
				context.fillStyle = '#aaa';
				context.fillText("Refresh the page to start again from the last checkpoint", width / 2 - 132, height / 2 + 8);
				
				context.globalAlpha = 1;
			}
		
			for (var index = 0; index < UI.length; index++)
				UI[index].DrawUI();
			Vie.Draw();
			{ // NB CARREAUX
				DrawImage(sprNbCarreaux, 8, 32);
				context.font = '14px Geneva';
				context.fillStyle = '#fff';
				context.fillText(NbCarreaux + ' / ' + MaxCarreaux, 28, 46);
			} // end NB CARREAUX
			{ // Or
				DrawImage(sprOr, 8, 56);
				context.font = '14px Geneva';
				context.fillStyle = '#fff';
				context.fillText(NbOr + ' / ' + MaxOr, 28, 70);
			} // end Or
			Force.X = width - 40;
			Force.Draw();
			ForceR.X = width - 40;
			ForceR.Draw();
			Resistance.X = width - 40;
			Resistance.Draw();
			// Text box
			if (BoxText != '')
			{
				DrawImage(sprTextBox, 0, 280);
				context.font = '14px Geneva';
				context.fillStyle = '#fff';
				var tmp = BoxText.split('@');
				for (var index = 0; index < tmp.length; index++)
				{
					context.fillText(tmp[index], 50, 325 + index * 20);
				}
				
				context.font = '12px Geneva';
				if (BoxSpeaker instanceof Achat)
				{
					context.fillText('Press "B" to buy', 492, 440);
					context.fillStyle = '#fd3';
					context.font = '16px Geneva';
					DrawImage(sprOr, 492, 318);
					context.fillText(BoxSpeaker.Valeur, 514, 330);
				}
				else
					context.fillText('Press "B" to continue', 492, 440);
				if (BoxSpeaker.Image !== undefined &&
					BoxSpeaker.getSourceX  !== undefined &&
					BoxSpeaker.getSourceY  !== undefined &&
					BoxSpeaker.SourceWidth !== undefined &&
					BoxSpeaker.SourceHeight !== undefined)
				{
					DrawImage(BoxSpeaker.Image, 
							  BoxSpeaker.getSourceX(), BoxSpeaker.getSourceY(), BoxSpeaker.SourceWidth, BoxSpeaker.SourceHeight, 
							  540 - BoxSpeaker.SourceWidth / 2, 370 - BoxSpeaker.SourceHeight / 2,
							  BoxSpeaker.SourceWidth, BoxSpeaker.SourceHeight);
				}
				else if (BoxSpeaker instanceof Image)
					DrawImage(BoxSpeaker, 540 - BoxSpeaker.width / 2, 370 - BoxSpeaker.height / 2 );
				else if (BoxSpeaker instanceof Achat)
					BoxSpeaker.Item.Draw(544 - BoxSpeaker.Item.Width / 2, 374 - BoxSpeaker.Item.Height / 2);
				else if (!isNaN(BoxSpeaker))
					DrawImage(sprGrille, 0, BoxSpeaker * 48, 48, 48, 540 - 24, 370 - 24, 48, 48);
			}
				
			if (tmrLoad > 0)
			{
				context.fillStyle = '#0' + Math.round(tmrLoad / 10) + '' + Math.round(tmrLoad / 10);
				context.fillRect(0, 0, width, height);
				tmrLoad--;
			}
			else if (CheckPointText > 0)
			{
				context.globalAlpha = CheckPointText / 60;
				context.fillStyle = '#fff';
				context.font = '14px Geneva';
				context.lineWidth = 3;
				context.strokeStyle = '#000';
				
				context.strokeText('Checkpoint', width / 2 - 32, height - 32);
				context.fillText('Checkpoint', width / 2 - 32, height - 32);
				
				CheckPointText--;
			}
		}
	}

	var Clear = function()
	{
		context.fillStyle = '#000';
		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.rect(0, 0, width, height);
		context.closePath();
		context.fill();
		if (BG != undefined)
		{
			context.fillStyle = Background;
			context.beginPath();
			context.rect(-Camera.X, -Camera.Y, BG.WidthPX, BG.HeightPX);
			context.closePath();
			context.fill();
		}
	}

	var Update = function()
	{
		if (!Ready || tmrLoad > 0)
			return;
		if (!enPause)
		{
			for (var index = Etres.length - 1; index >= 0; index--)
			{
				if (Etres[index].Bloc.X < width * 1.5 + Camera.X && Etres[index].Bloc.X + Etres[index].Bloc.Width >  Camera.X - width / 2 &&
					Etres[index].Bloc.Y < height * 1.5 + Camera.Y && Etres[index].Bloc.Y + Etres[index].Bloc.Height >  Camera.Y - height / 2)
				{	
					Etres[index].Update();
				}
			}
			for (var index = Objets.length - 1; index >= 0; index--)
			{
				Objets[index].Update();
			}	
			for (var index = Projectiles.length - 1; index >= 0; index--)
			{
				Projectiles[index].Update();
			}	
				
			// Interface
			Vie.Valeur = Joueur.Vie;
			Vie.Maximum = Joueur.VieMax;
			if (Joueur.Vie <= 0)
				DepuisMort++;
			if (BG.WidthPX < width)
				Camera.X = BG.WidthPX / 2 - width / 2;
			else
				Camera.X = Math.min(BG.WidthPX - width, Math.max(0, Joueur.Bloc.X + Joueur.Bloc.Width * 0.5 - width * 0.5));
			if (BG.HeightPX < height)
				Camera.Y = BG.HeightPX / 2 - height / 2;
			else
				Camera.Y = Math.min(BG.HeightPX - height, Math.max(0, Joueur.Bloc.Y + Joueur.Bloc.Height * 0.5 - height * 0.5));
			Shake.Update();
			Controlleur.Update();
		}
	
		if (QueueLoad != undefined)
			LoadMap(QueueLoad, QueueX, QueueY);
	}

	var GameLoop = function()
	{
		width = documentElement.offsetWidth;
		height = documentElement.offsetHeight;
		documentElement.width = width;
		documentElement.height = height;

		Clear();
		Update();
		Draw();
		gLoop = setTimeout(GameLoop, 1000 / 60);
	}

} // end LOOPS

// Initial map loading
LoadMap(getPassMap(), getPassPosX(), getPassPosY());	
GameLoop();
