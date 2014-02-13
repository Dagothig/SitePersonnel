{ // SPRITES

	var sprWave1 = new Image(),
		sprWave2 = new Image(),
		sprFishSmall = new Image(),
		sprFishMedium = new Image(),
		sprFishBig = new Image(),
		sprExplosion = new Image(),
		sprShipExplosion = new Image(),
		sprUI = new Image(),
		sprLightning = new Image(),
		sprCloud1 = new Image(),
		sprCloud2 = new Image(),
		sprCloud3 = new Image(),
		sprBuilding1 = new Image(),
		sprSun = new Image(),
		
		sprSmallWoodHull = new Image(),
		sprLargeWoodHull = new Image(),
		sprLongHull = new Image(),
		sprSmallWoodMast = new Image(),
		sprSmallSail = new Image(),
		sprEtheralSail = new Image(),
		sprOar = new Image(),
		sprNet = new Image(),
		sprAverageCannon = new Image(),
		sprAverageShot = new Image(),
		sprSmallBallista = new Image(),
		sprSmallShaft = new Image(),
		sprBombard = new Image(),
		sprBombardShot = new Image(),
		
		sprBuy = new Image(),
		sprBuyPart = new Image(),
		sprSell = new Image(),
		sprRest = new Image(),
		sprAccept = new Image(),
		sprRefuse = new Image(),
		sprNext = new Image(),
		sprBack = new Image(),
		sprMnuNet = new Image(),
		sprMnuSail = new Image(),
		sprMnuOar = new Image(),
		sprMnuCannon = new Image(),
		sprMnuHull = new Image(),
		sprSelect = new Image(),
		sprLeaveShop = new Image(),
		
		sprTitleScreen = new Image(),
		sprGameOver = new Image(),
		sprWin = new Image();
		
	sprWave1.src = "Assets/Wave1.png";
	sprWave2.src = "Assets/Wave2.png";
	sprFishSmall.src = "Assets/FishSmall.png";
	sprFishMedium.src = "Assets/FishMedium.png";
	sprFishBig.src = "Assets/FishBig.png";
	sprExplosion.src = "Assets/Explosion.png";
	sprShipExplosion.src = "Assets/ShipExplosion.png";
	sprUI.src = "Assets/UI.png";
	sprLightning.src = "Assets/Lightning.png";
	sprCloud1.src = "Assets/Cloud1.png";
	sprCloud2.src = "Assets/Cloud2.png";
	sprCloud3.src = "Assets/Cloud3.png";
	sprBuilding1.src = "Assets/Building1.png";
	sprSun.src = "Assets/Sun.png";
	
	sprSmallWoodHull.src = "Assets/SmallWoodHull.png";
	sprLargeWoodHull.src = "Assets/LargeWoodHull.png";
	sprLongHull.src = "Assets/LongHull.png";
	sprSmallWoodMast.src = "Assets/SmallWoodMast.png";
	sprSmallSail.src = "Assets/SmallSail.png";
	sprEtheralSail.src = "Assets/EtheralSail.png";
	sprOar.src = "Assets/Oar.png";
	sprNet.src = "Assets/Net.png";
	sprAverageCannon.src = "Assets/AverageCannon.png";
	sprAverageShot.src = "Assets/AverageShot.png";
	sprSmallBallista.src = "Assets/SmallBallista.png";
	sprSmallShaft.src = "Assets/SmallShaft.png";
	sprBombard.src = "Assets/Bombard.png";
	sprBombardShot.src = "Assets/BombardShot.png";

	sprBuy.src = "Assets/Buy.png";
	sprBuyPart.src = "Assets/BuyPart.png";
	sprSell.src = "Assets/Sell.png";
	sprRest.src = "Assets/Rest.png";
	sprAccept.src = "Assets/Accept.png";
	sprRefuse.src = "Assets/Refuse.png";
	sprNext.src = "Assets/Next.png";
	sprBack.src = "Assets/Back.png";
	sprMnuNet.src = "Assets/mnuNet.png";
	sprMnuSail.src = "Assets/mnuSail.png";
	sprMnuOar.src = "Assets/mnuOar.png";
	sprMnuCannon.src = "Assets/mnuCannon.png";
	sprMnuHull.src = "Assets/mnuHull.png";
	sprSelect.src = "Assets/Select.png";
	sprLeaveShop.src = "Assets/LeaveShop.png";
	
	sprTitleScreen.src = "Assets/TitleScreen.png";
	sprGameOver.src = "Assets/GameOver.png";
	sprWin.src = "Assets/Win.png";

} // end SPRITES
{ // VARIABLES

	var	DocumentElement = document.getElementById('c'),
		Width = DocumentElement.offsetWidth,
		Height = DocumentElement.offsetHeight,
		Context = DocumentElement.getContext("2d"),
		
		CamX = 0, CamY = 0,
		ShakeDuration = 0, ShakeStrength = 0,
		minDistExplored = 0, maxDistExplored = 0,
		
		Buildings = new Array(),
		Ships = new Array(),
		Waves = new Array(),
		Fishes = new Array(),
		Projectiles = new Array(),
		FishSchools = new Array(),
		
		Sails = new Array(),
		Cannons = new Array(),
		Nets = new Array(),
		Hulls = new Array(),
		
		DarkSky = '#235',
		LessDarkSky = '#148',
		AverageSky ='#06b',
		LessBrightSky = '#08d',
		BrightSky = '#0af',
		
		Weather = 0.15;
		UntilWeatherChange = 60,
		WaterLevel = 80,
		Lightning = undefined, 
		SinceLightning = -1,
		
		Error = "",
		ErrorDuration = -1,
		BlackDuration = -1,
		
		Gold = 500,
		Pause = true, OnTitleScreen = sprTitleScreen,
		InShop = undefined, ShopMenu = "intro", ShopSubMenu = "none", ShopList = Nets, ShopListIndex = -1;
		
		ctrLeft = false, ctrRight = false, ctrFish = false, 
		ctrEnterShop = false, ctrCannon = false, ctrS = false,
		pressLeft = false, pressRight = false, pressFish = false,
		pressCannon = false, pressS = false;
	
	DocumentElement.width = Width;
	DocumentElement.height = Height;

} // end VARIABLES
{ // METHODS

	function MakeError(pError)
	{
		Error = pError;
		ErrorDuration = 60;
	}

	function Shake()
	{
		ShakeDuration = 10;
		ShakeStrength = 30;
	}

	function NewGame()
	{
		while (Buildings.length > 0)
			Buildings.pop();
		while (Ships.length > 0)
			Ships.pop();
		while (Waves.length > 0)
			Waves.pop();
		while (Fishes.length > 0)
			Fishes.pop();
		while (Projectiles.length > 0)
			Projectiles.pop();
		while (FishSchools.length > 0)
			FishSchools.pop();
			
		new Building(sprBuilding1, -30, 320, 320);
		Player = new Ship(Hulls[0], 0, 480);
		Player.Net = new Net(Nets[0]);
		Player.Sails = Sails[0];
		Gold = 100;
	}

} // end METHODS
{ // CLASSES

	function Point(pX, pY, pOrientation)
	{
		this.X = pX;
		this.Y = pY;
		this.Orientation = pOrientation;
	}
	
	{ // FOR SHIPS
		
		function Mast(pImage, pX, pY, pWidth, pHeight)
		{
			this.Image = pImage;
			this.X = pX;
			this.Y = pY;
			this.Width = pWidth;
			this.Height = pHeight;
			
			Mast.prototype.Draw = function(pX, pY, pSailSpeed, pBoatSpeed, pSail, pHullWidth)
			{
				var tmp = 0, x, y = this.Y + pY - CamY;
				if (pBoatSpeed < 0)
				{
					tmp = this.Width;
					x = pHullWidth + (pX) - this.X - CamX - this.Width;
				}
				else
					x = pX + this.X - CamX;
				Context.drawImage(this.Image, tmp, 0, 
								   this.Width, this.Height, 
								   Math.round(x), Math.round(y),
								   this.Width, this.Height);
				
				if (pSail instanceof Sail)
					pSail.Draw(x, y, pSailSpeed, pBoatSpeed);
			}
		}
		
		function Sail(pImage, pWidth, pHeight, pDecalX, pDecalY, pSpeed, pName, pCost)
		{
			this.Image = pImage;
			this.Width = pWidth;
			this.Height = pHeight;
			this.DecalX = pDecalX;
			this.DecalY = pDecalY;
			this.Speed = pSpeed;
			this.AnimY = 0;
			
			this.Name = pName;
			this.Cost = pCost;
			
			Sails.push(this);
			
			Sail.prototype.Draw = function(pX, pY, pSailSpeed, pBoatSpeed)
			{
				var speed = Math.abs(pSailSpeed) / (this.Speed * 2);
				if (speed < 1)
					this.AnimY = 0;
				else if (speed < 3)
					this.AnimY = 1;
				else 
					this.AnimY = 2;
				if (pBoatSpeed < 0)
				{
					Context.drawImage(this.Image, this.Width, this.AnimY * this.Height, this.Width, this.Height, 
									  Math.round(pX - this.DecalX), Math.round(pY + this.DecalY), this.Width, this.Height);
				}
				else
				{
					Context.drawImage(this.Image, 0, this.AnimY * this.Height, this.Width, this.Height, 
									  Math.round(pX + this.DecalX), Math.round(pY + this.DecalY), this.Width, this.Height);
				}
			}
		}
		
		var Oar =
		{
			Image : sprOar,
			Width : 200,
			Height : 120,
			
			Draw : function(pX, pY, pAnimY)
			{
				Context.drawImage(this.Image, 0, pAnimY * this.Height, this.Width, this.Height, 
								  Math.round(pX - CamX - (this.Width * 0.5)), Math.round(pY - CamY - 8), this.Width, this.Height);
			}
		}
		
		function Net(pNetType)
		{
			this.Image = pNetType.Image;
			this.Width = pNetType.Width;
			this.Height = pNetType.Height;
			this.Capacity = pNetType.Capacity;
			this.Anim = 8;
			this.AnimY = -1;
			
			this.Ship;
			this.DecalX;
			this.DecalY;
			this.X;
			this.Y;
			
			Net.prototype.TryCatch = function(pShip, pDecalX, pDecalY)
			{
				this.Ship = pShip;
				this.DecalX = pDecalX;
				this.DecalY = pDecalY;
				Projectiles.push(this);
				this.AnimY = 0;
			}
			Net.prototype.Update = function()
			{
				this.Ship.MovX *= 0.5;
				if (this.Anim > 0)
					this.Anim--;
				else
				{
					this.Anim = 8;
					this.AnimY++;
					if (this.AnimY == 4)
					{
						var fishes = 0;
						for (var index = Fishes.length - 1; index >= 0; index--)
						{
							if (fishes + Fishes[index].Size / 24 <= this.Capacity &&
								this.X + this.Width - 8 > Fishes[index].X &&
								this.X + 32 < Fishes[index].X + Fishes[index].Size)
							{
								fishes += Fishes[index].Size / 24;
								if (Fishes[index].FishSchool != undefined)
									Fishes[index].FishSchool.Amount--;
								Fishes[index].Dispose();
							}
						}
						this.Ship.FishAmount += fishes;
						this.Ship.FishAmount = Math.min(this.Ship.Hull.Capacity, this.Ship.FishAmount);
					}
				}
				this.X = this.Ship.X + this.DecalX;
				this.Y = this.Ship.Y + this.DecalY;
				if (this.AnimY > 5)
				{
					Projectiles.splice(Projectiles.indexOf(this), 1);
					this.Anim = 8;
					this.AnimY = -1;
				}
			}
			Net.prototype.Draw = function()
			{
				Context.drawImage(this.Image, 0, this.AnimY * this.Height, this.Width, this.Height,
								  Math.round(this.X + this.DecalX - CamX), Math.round(this.Y + this.DecalY - CamY), this.Width, this.Height);
			}
		}
		function NetType(pImage, pWidth, pHeight, pCapacity, pName, pCost)
		{
			this.Image = sprNet;
			this.Width = pWidth;
			this.Height = pHeight;
			this.Capacity = pCapacity;
			
			this.Name = pName;
			this.Cost = pCost;
			
			Nets.push(this);
		}
		
		function Cannon(pX, pY, pOrientation, pCannonType)
		{
			this.Image = pCannonType.Image;
			this.X = pX;
			this.Y = pY;
			this.Width = pCannonType.Width;
			this.Height = pCannonType.Height;
			this.Orientation = pOrientation
			
			this.CannonballImage = pCannonType.CannonballImage;
			this.CannonballSize = pCannonType.CannonballSize;
			this.Strength = pCannonType.Strength;
			this.Recoil = pCannonType.Recoil;
			this.ReloadTime = pCannonType.ReloadTime;
			this.Reload = 0;
			
			Cannon.prototype.Draw = function(pX, pY, pBoatSpeed, pHullWidth)
			{
				var sx = 0, sy = 0, shipOrientation = pBoatSpeed >= 0;
				if (this.Orientation != shipOrientation)
					sx = this.Width;
				if (this.Reload > 0)
				{
					sy = this.Height;
					this.Reload--;
				}
				if (pBoatSpeed >= 0)
					Context.drawImage(this.Image, sx, sy, this.Width, this.Height, Math.round(pX + this.X - CamX), Math.round(this.Y + pY - CamY), this.Width, this.Height);
				else
					Context.drawImage(this.Image, sx, sy, this.Width, this.Height, Math.round(pX + pHullWidth - this.Width - this.X - CamX), Math.round(this.Y + pY - CamY), this.Width, this.Height);
			}
			Cannon.prototype.Fire = function(pBoat)
			{
				var x = 0, y = this.Y + pBoat.Y + this.Height * 0.5 - this.CannonballSize * 0.5, orientation = 0;
				if (!this.Orientation)
					orientation = -1;
				else
					orientation = 1;
				if (pBoat.Orientation == 1)
					x += this.X + pBoat.X + this.Width * (orientation + 1 ) /2;
				else if (pBoat.Orientation == -1)
					x += pBoat.X + pBoat.Hull.Width - this.Width * (orientation + 1) / 2 - this.X - this.CannonballSize;
					
				new Cannonball(this.CannonballImage, x, y, 
							   this.Strength * pBoat.Orientation * orientation + pBoat.MovX, -this.Strength * 0.1, 
							   this.CannonballSize);
				if (this.Recoil > 2)
				{
					Shake();
					new SFX(sprExplosion, x - 32 + this.CannonballSize * 0.5, y - 32 + this.CannonballSize * 0.5, 64, 64);
				}
				this.Reload = this.ReloadTime;
				pBoat.MovX -= pBoat.Orientation * orientation * this.Recoil * pBoat.Hull.Weight;
			}
		}
		function CannonType(pImage, pWidth, pHeight, pCannonballImage, pCannonballSize, pStrength, pRecoil, pReloadTime, pName, pCost)
		{
			this.Image = pImage;
			this.Width = pWidth;
			this.Height = pHeight;
			
			this.CannonballImage = pCannonballImage;
			this.CannonballSize = pCannonballSize;
			this.Strength = pStrength;
			this.Recoil = pRecoil;
			this.ReloadTime = pReloadTime;
			
			this.Name = pName;
			this.Cost = pCost;
			
			Cannons.push(this);
		}
		
		function Cannonball(pImage, pX, pY, pSpeedX, pSpeedY, pSize)
		{
			this.Image = pImage;
			this.X = pX;
			this.Y = pY;
			this.MovX = pSpeedX;
			this.MovY = pSpeedY;
			this.Size = pSize;
			
			Projectiles.push(this);		
			Cannonball.prototype.Draw = function()
			{
				Context.drawImage(this.Image, Math.round(this.X - CamX), Math.round(this.Y - CamY));
			}
			Cannonball.prototype.Update = function()
			{
				this.X += this.MovX;
				this.Y += this.MovY;
				this.MovY += 1;
				if (this.Y > 480)
					this.Dispose();
				this.ColCheck();
			}
			Cannonball.prototype.ColCheck = function()
			{
				for (var index = 0; index < Ships.length; index++)
					if (this.X + this.Size > Ships[index].X &&
						this.X < Ships[index].X + Ships[index].Hull.Width &&
						this.Y + this.Size > Ships[index].Y &&
						this.Y < Ships[index].Y + Ships[index].Hull.Height)
					{
						this.Dispose();
						if (Ships[index] === Player)
							Ships[index].Health -= (Math.abs(this.MovX - Ships[index].MovX) * this.Size) / 50;
						else
							Ships[index].Health -= (Math.abs(this.MovX - Ships[index].MovX) * this.Size) / 25;
						if (Ships[index] != Player && Ships[index].Health <= 0)
							Gold += Ships[index].Hull.Cost * 4;
						Ships[index].MovX += this.MovX * Ships[index].Hull.Weight * 0.25;
						Shake();
						new SFX(sprExplosion, this.X + this.Size * 0.5 - 32, this.Y + this.Size * 0.5 - 32, 64, 64);
					}
			}
			Cannonball.prototype.Dispose = function()
			{
				Projectiles.splice(Projectiles.indexOf(this), 1);
			}
		}
		
		function Hull(pImage, pWidth, pHeight, pMasts, pOarPositions, pCannonPositions, pStrength, pCapacity, pWeight, pName, pCost)
		{
			this.Image = pImage;
			this.Width = pWidth;
			this.Height = pHeight;
			this.Masts = pMasts
			this.OarPositions = pOarPositions;
			this.CannonPositions = pCannonPositions;
			
			this.Strength = pStrength;
			this.Capacity = pCapacity;
			this.Weight = pWeight;
			
			this.Name = pName;
			this.Cost = pCost;
			
			Hulls.push(this);
			
			Hull.prototype.Draw = function(pX, pY, pSailSpeed, pSpeed, pOars, pOarAnimY, pCannons, pSails)
			{
				for (var index = 0; index < this.Masts.length; index++)
					this.Masts[index].Draw(pX, pY, pSailSpeed, pSpeed, pSails, this.Width);
				for (var index = 0; index < pCannons.length; index++)
					pCannons[index].Draw(pX, pY, pSpeed, this.Width);
				tmp = 0;
				if (pSpeed < 0)
					tmp = this.Width;
				Context.drawImage(this.Image, tmp, 0, this.Width, this.Height, Math.round(pX - CamX), Math.round(pY - CamY), this.Width, this.Height);
			}
			Hull.prototype.DrawOars = function(pX, pY, pSpeed, pOarAnimY)
			{
					for (var index = 0; index < this.OarPositions.length; index++)
						if (pSpeed >= 0)
							Oar.Draw(pX + this.OarPositions[index].X, pY + this.OarPositions[index].Y, pOarAnimY);
						else
							Oar.Draw(pX + this.Width - this.OarPositions[index].X, pY + this.OarPositions[index].Y, pOarAnimY);
			}
		}
	
	} // end FOR SHIPS
	function Ship(pHull, pX, pY)
	{
		this.Hull = pHull;
		this.Net = undefined;
		
		this.FishAmount = 0;
		this.Health = this.Hull.Strength;
		
		this.X = pX;
		this.Y = pY;
		this.MovX = 0;
		this.SailSpeed;
		this.MovY = 0;
		this.Moving = 0;
		this.Orientation = -1;
		
		this.Oars = false;
		this.OarAnimY = 0,
		this.OarAnim = 6;
		
		this.Sails = undefined;
		
		this.AINextPoint = undefined;
		
		this.Cannons = new Array();
		
		Ships.push(this);
		
		Ship.prototype.TryCatch = function()
		{
			if (this.Net == undefined)
				return;
			if (this.Net.AnimY == -1)
			{
				this.Net.TryCatch(this, 48, 16);
			}
		}
		Ship.prototype.Fire = function()
		{
			for (var index = 0; index < this.Cannons.length; index++)
				if (this.Cannons[index].Reload <= 0)
				{
					this.Cannons[index].Fire(this);
					return;
				}
		}
		Ship.prototype.Draw = function()
		{
			this.Hull.Draw(this.X, this.Y, this.MovX, this.Orientation, this.Oars, this.OarAnimY, this.Cannons, this.Sails);
			if (this.Oars)
			{
				if (this.OarAnim > 0)
					this.OarAnim--;
				else
				{
					if (this.MovX < -1 || this.MovX > 1)
						this.OarAnim = Math.min(12, Math.max(4, 30 / Math.abs(this.MovX)));
					else
						this.OarAnim = 12;
					if (this.MovX < -0.5)
						this.OarAnimY--;
					else if (this.MovX > 0.5)
						this.OarAnimY++;
					while (this.OarAnimY > 6)
						this.OarAnimY -=7;
					while (this.OarAnimY < 0)
						this.OarAnimY +=7;
				}
				if (this.OarAnimY == 0 || this.OarAnimY == 1 || this.OarAnimY == 6)
					this.DrawOars();
			}
		}
		Ship.prototype.DrawOars = function()
		{
			this.Hull.DrawOars(this.X, this.Y, this.Orientation, this.OarAnimY);
		}
		Ship.prototype.Update = function()
		{
			{ // WAVES
			var seaLevel = 480 - WaterLevel, highestWave = 0;
			for (var index = 0; index < Waves.length; index++)
			{
				if (highestWave < Waves[index].Size * 24 && 
				   (Waves[index].AnimY == 3 || Waves[index].AnimY == 4) &&
				    Waves[index].X + 32 * Waves[index].Size >= this.X && 
					Waves[index].X <= this.X + this.Hull.Width && 
					this.Y + this.Hull.Height > 480 - WaterLevel - Waves[index].Size * 48)
					highestWave = Waves[index].Size * 24;
			}
			this.MovY += 1.5;
			if (this.Y + this.Hull.Height - 32 > seaLevel - highestWave)
				this.MovY -= 2;
			} // end WAVES
			{ // MOVEMENT
			
				var speed = 0;
				if (this.Sails != undefined)
					speed += this.Sails.Speed * this.Hull.Masts.length;
				speed *= this.Hull.Weight * Weather;
				this.SailSpeed = speed;
				if (this.Oars)
				{
					speed += this.Hull.OarPositions.length * 0.04 * (1 + this.Hull.Weight)/2;
				}
				this.MovX += speed * this.Moving;
			
			} // end MOVEMENT
			
			this.MovY *= 0.75;
			this.MovX *= 0.975;
			this.LastMovY = this.MovY;
			if (!this.ColCheck(this.X + this.MovX) || true)
				this.X += this.MovX;
			this.Y += this.MovY;
			this.Y = this.Y * (0.5 + Weather * 0.5) + (seaLevel - this.Hull.Height + 32) * (0.5 - Weather * 0.5);
			if (this.Health <= 0)
			{
				new SFX(sprShipExplosion, this.X + this.Hull.Width * 0.5 - 128, this.Y + this.Hull.Height * 0.5 - 128, 256, 256);
				this.Dispose();
			}
			if (this != Player)
				this.AI();
		}
		Ship.prototype.ColCheck = function(pX)
		{
			for (var index = 0; index < Ships.length; index++)
				if (Ships[index] != this && pX + this.Hull.Width > Ships[index].X && 
											pX < Ships[index].X + Ships[index].Hull.Width)
					return true;
			return false;
		}
		Ship.prototype.Dispose = function()
		{
			Ships.splice(Ships.indexOf(this), 1);
		}		
		Ship.prototype.AI = function()
		{
			if ((this.Health / this.Hull.Strength) < (0.9 - this.Cannons.length * 0.1))
			{
				if (this.X - Player.X > 0)
				{
					this.Moving = 1;
					this.Orientation = 1;
				}
				else
				{
					this.Moving = -1;
					this.Orientation = -1;
				}
			}
			else
			{
				if (Math.random() < 0.005)
					this.TryCatch();
					
				if (this.AINextPoint == undefined || Math.abs(this.X - this.AINextPoint) < this.Hull.Width * 0.25)
					if (this.Cannons.length >= 1)
					{
						if (Math.abs(this.X - Player.X) > 600)
							this.AINextPoint = this.X + (Player.X - this.X) * 0.75;
						else
							this.AINextPoint = (Math.random() - 0.5) * 1600 + this.X;
					}
					else
					{
						this.AINextPoint = (Math.random() - 0.5) * 6400 + Player.X;
					}
				if (this.AINextPoint - this.X > 0)
				{
					this.Moving = 1;
					this.Orientation = 1;
				}
				else
				{
					this.Moving = -1;
					this.Orientation = -1;
				}
			}
			if (this.Cannons.length > 0 && Math.abs(this.X - Player.X) < 500 && Math.random() < 0.1)
				this.Fire();
			if (Math.abs(this.X - Player.X) > 6400)
				this.Dispose();
		}
		
	}
	
	function Wave(pX)
	{
		this.X = pX + CamX;
		this.Size = Math.max(Math.random(), 0.5);
		this.MovX = (this.Size - 0.75) * 3 * (1 * Math.max(Weather, 0.1));
		this.Size *= 1 + Weather * 2;
		this.Y = 480 - WaterLevel - 48 * this.Size;
		this.Anim = 8;
		this.AnimY = 0;
		Waves.push(this);
		Wave.prototype.Draw = function()
		{	
			this.Y = 480 - WaterLevel - 48 * this.Size + 1;
			if (this.MovX > 0)
				Context.drawImage(sprWave1, 0, this.AnimY * 48 + 1, 96, 48 - 1, 
				Math.round(this.X - CamX), Math.round(this.Y - CamY), 96 * this.Size, 48 * this.Size);
			else
				Context.drawImage(sprWave2, 0, this.AnimY * 48 + 1, 96, 48 - 1, 
				Math.round(this.X - CamX), Math.round(this.Y - CamY), 96 * this.Size, 48 * this.Size);
		}
		Wave.prototype.Update = function()
		{
			this.X += this.MovX;
			if (this.Anim > 0)
				this.Anim--;
			else
			{
				this.Anim = 8;
				this.AnimY++;
			}
			if (this.AnimY >= 6)
				this.Dispose();
		}		
		Wave.prototype.Dispose = function()
		{
			Waves.splice(Waves.indexOf(this), 1);
		}
	}
	
	function Cloud(pX)
	{
		this.X = pX + CamX;
		this.Y = Math.random() * 64
		this.Duration = Math.random() * 320;
		this.MovX = (Math.random() - 0.5);
		Projectiles.push(this);
		
		Cloud.prototype.Draw = function()
		{	
			if (Weather < 0.33)
				Context.drawImage(sprCloud1, Math.round(this.X - CamX), Math.round(this.Y - CamY));
			else if (Weather < 0.66)
				Context.drawImage(sprCloud3, Math.round(this.X - CamX), Math.round(this.Y - CamY));
			else
				Context.drawImage(sprCloud2, Math.round(this.X - CamX), Math.round(this.Y - CamY));
		}
		Cloud.prototype.Update = function()
		{
			this.X += this.MovX;
			if(this.Duration > 0)
				this.Duration--;
			else
				this.Dispose();
		}		
		Cloud.prototype.Dispose = function()
		{
			Projectiles.splice(Projectiles.indexOf(this), 1);
		}
	}
	
	function Fish(pX, pSize, pFishSchool)
	{
		this.FishSchool = pFishSchool;
	
		this.X = pX;
		this.Y = 480 - WaterLevel + Math.random() * (WaterLevel - pSize);
		this.MovX = (Math.random() - 0.5) * pSize / 12;
		this.MovY = (Math.random() - 0.5) * pSize / 48;
		this.AnimY = 0;
		this.Anim = 20;
		this.Size = pSize;
		this.Image = sprFishSmall;
		if (this.Size == 24)
			this.Image = sprFishSmall;
		else if (this.Size == 48)
			this.Image = sprFishMedium;
		else if (this.Size == 96)
			this.Image = sprFishBig;
			
		Fishes.push(this);
		
		Fish.prototype.Draw = function()
		{
			sx = 0;
			if (this.MovX < 0)
				sx = this.Size;
			Context.drawImage(this.Image, sx, this.AnimY * this.Size, this.Size, this.Size, 
				              Math.round(this.X - CamX), Math.round(this.Y - CamY), this.Size, this.Size);
		}
		Fish.prototype.Update = function()
		{
		    if (this.Anim > 0)
				this.Anim--;
			else
			{
				this.Anim = 20;
				this.AnimY++;
			}
			if (this.AnimY >= 4)
				this.Dispose();
			this.X += this.MovX;
			this.Y += this.MovY;
			if (this.Y < 480 - WaterLevel)
				this.Y = 480 - WaterLevel;
		}		
		Fish.prototype.Dispose = function()
		{
			Fishes.splice(Fishes.indexOf(this), 1);
		}
	}

	function FishSchool(pX, pAmount, pSize)
	{
		this.X = pX;
		this.Amount = pAmount;
		this.Size = pSize;
		
		FishSchools.push(this);
		
		FishSchool.prototype.Update = function()
		{
			if (this.Amount <= 0)
				this.Dispose();
			if (Math.random() < this.Amount / 200)
				new Fish(Math.random() * this.Amount * this.Size + this.X, this.Size, this);
		}
		FishSchool.prototype.Dispose = function()
		{
			FishSchools.splice(FishSchools.indexOf(this), 1);
		}
	}
	
	function SFX(pImage, pX, pY, pWidth, pHeight)
	{
		this.Image = pImage;
		this.X = pX;
		this.Y = pY;
		this.Width = pWidth;
		this.Height = pHeight;
		this.Anim = 4;
		this.AnimY = 0;
		
		Projectiles.push(this);
		
		SFX.prototype.Draw = function()
		{	
			Context.drawImage(this.Image, 0, this.AnimY * this.Height, this.Width, this.Height, 
				              Math.round(this.X - CamX), Math.round(this.Y - CamY), this.Width, this.Height);
		}
		SFX.prototype.Update = function()
		{
			if (this.Anim > 0)
				this.Anim--;
			else
			{
				this.Anim = 8;
				this.AnimY++;
			}
			if (this.AnimY >= 4)
				this.Dispose();
		}		
		SFX.prototype.Dispose = function()
		{
			Projectiles.splice(Projectiles.indexOf(this), 1);
		}
	}
	
	function Building(pImage, pX, pWidth, pHeight)
	{
		this.Image = pImage;
		this.X = pX;
		this.Y = 480 - WaterLevel - pHeight;
		this.Width = pWidth;
		this.Height = pHeight;
		
		this.ValueFish = 10;
		this.ValueParts = 100;
		
		Buildings.push(this);
		
		Building.prototype.Draw = function()
		{
			Context.drawImage(this.Image, Math.round(this.X - CamX), Math.round(this.Y - CamY));
		}
	}
	
} // end CLASSES
{ // GAME VARIABLES

	{ // Small wooden hull
		var swhMasts = new Array();
		swhMasts.push(new Mast(sprSmallWoodMast, 76, -39, 96, 120));
		var swhOarPositions = new Array();
		swhOarPositions.push(new Point(88, 72));
		var swhCannonPositions = new Array();
		swhCannonPositions.push(new Point(208, 48, true));
		new Hull(sprSmallWoodHull, 240, 120, swhMasts, swhOarPositions, swhCannonPositions, 80, 10, 1, "Small Wood Hull", 5);
	}
	{ // Large wooden hull
		swhMasts = new Array();
		swhMasts.push(new Mast(sprSmallWoodMast, 64, -100, 96, 120));
		swhOarPositions = new Array();
		swhOarPositions.push(new Point(48, 128));
		swhOarPositions.push(new Point(88, 128));
		swhOarPositions.push(new Point(168, 128));
		swhOarPositions.push(new Point(208, 128));
		swhCannonPositions = new Array();
		swhCannonPositions.push(new Point(250, 80, true));
		swhCannonPositions.push(new Point(240, 110, true));
		swhCannonPositions.push(new Point(-20, 80, false));
		new Hull(sprLargeWoodHull, 280, 180, swhMasts, swhOarPositions, swhCannonPositions, 160, 25, 0.4, "Large Wood Hull", 12);
	}	
	{ // Large wooden hull
		swhMasts = new Array();
		swhMasts.push(new Mast(sprSmallWoodMast, 22, -46, 96, 120));
		swhMasts.push(new Mast(sprSmallWoodMast, 80, -56, 96, 120));
		swhMasts.push(new Mast(sprSmallWoodMast, 139, -46, 96, 120));
		swhOarPositions = new Array();
		swhCannonPositions = new Array();
		swhCannonPositions.push(new Point(246, 30, true));
		new Hull(sprLongHull, 250, 100, swhMasts, swhOarPositions, swhCannonPositions, 120, 15, 0.75, "Long Hull", 8.5);
	}
	
	new NetType(sprNet, 120, 120, 1, "Tiny Net", 1.5);
	new NetType(sprNet, 120, 120, 2, "Small Net", 2.5);
	new NetType(sprNet, 120, 120, 5, "Large Net", 4.5);
	new NetType(sprNet, 120, 120, 10, "Huge Net", 6.5);
	
	new Sail(sprSmallSail, 96, 120, 8, -3, 0.5, "Cloth Sail", 2.5);
	new Sail(sprSmallSail, 96, 120, 8, -3, 0.6, "Fine Cloth Sail", 3);
	new Sail(sprEtheralSail, 96, 120, 8, -3, 0.75, "Etheral Sail", 7.5);
	
	new CannonType(sprSmallBallista, 36, 24, sprSmallShaft, 2, 45, 1, 60, "Small Ballista", 2);
	new CannonType(sprAverageCannon, 48, 32, sprAverageShot, 12, 30, 4, 300, "Average Cannon", 6);
	new CannonType(sprBombard, 54, 41, sprBombardShot, 24, 75, 12, 420, "Bombard", 14);
	
	var Player;
	NewGame();
}
{ // GAME LOOPS
	
	window.addEventListener('keydown', function(pEvent)
	{
		switch(pEvent.keyCode)
		{
			case 65:
			if (!ctrLeft)
				pressLeft = true;
			ctrLeft = true;
			break;
			case 68:
			if (!ctrRight)
				pressRight = true;
			ctrRight = true;
			break;
			case 70:
			if (!ctrFish)
				pressFish = true;
			ctrFish = true;
			break;
			case 83:
			if (!ctrS)
				pressS = true;
			ctrS = true;
			break;
			case 81:
			if (!ctrCannon)
				pressCannon = true;
			ctrCannon = true;
			break;
			case 69:
			if (!ctrEnterShop)
				for (index = 0; index < Buildings.length; index++)
					if (Buildings[index].X < Player.X + Player.Hull.Width && 
						Buildings[index].X + Buildings[index].Width > Player.X)
					{
						if (InShop == undefined)
						{
							Player.MovX *= 0.01;
							Pause = true;
							InShop = Buildings[index];
							ShopMenu = "intro";
						}
						else
						{
							Pause = false;
							InShop = undefined;
						}
					}
			ctrEnterShop = true;
			break;
		}
	}, false);
	window.addEventListener('keyup', function(pEvent)
	{
		switch(pEvent.keyCode)
		{
			case 65:
			ctrLeft = false;
			break;
			case 68:
			ctrRight = false;
			break;
			case 70:
			ctrFish = false;
			break;
			case 83:
			ctrS = false;
			break;
			case 81:
			ctrCannon = false;
			break;
			case 69:
			ctrEnterShop = false;
			break;
		}
	}, false);
	
	var Draw = function()
	{
		{ //GAME
			Context.drawImage(sprSun, Math.min(640 - 64, Math.max(0, 320 - 32 - CamX / 100)), -32 - CamY);
			// Buildings
			for (var index = 0; index < Buildings.length; index++)
				Buildings[index].Draw();
			// Ships
			for (var index = 0; index < Ships.length; index++)
				Ships[index].Draw();
			// Waves
			for (var index = 0; index < Waves.length; index++)
				Waves[index].Draw();
			// Water
			Context.fillStyle = '#103476';
			Context.beginPath();
			Context.rect(0, 480 - WaterLevel - CamY, 640, WaterLevel + CamY);
			Context.closePath();
			Context.fill();
			// Fishes
			for (var index = 0; index < Fishes.length; index++)
				Fishes[index].Draw();
			// Oars
			for (var index = 0; index < Ships.length; index++)
				if (Ships[index].Oars && Ships[index].OarAnimY != 0 && Ships[index].OarAnimY != 1 && Ships[index].OarAnimY != 6)
				Ships[index].DrawOars();
			// Projectiles
			for (var index = 0; index < Projectiles.length; index++)
				Projectiles[index].Draw();
				
			// Lightning
			if (SinceLightning > 0)
				Context.drawImage(sprLightning, Math.round(Lightning - CamX), -CamY);
				
			if (SinceLightning == 0)
			{
				Context.fillStyle = '#fff';
				Context.beginPath();
				Context.rect(0, 0, Width, Height);
				Context.closePath();
				Context.fill();
			}
			
			if (BlackDuration > 0)
			{
				BlackDuration --;
				Context.fillStyle = '#000';
				Context.beginPath();
				Context.rect(0, 0, 640, 480);
				Context.closePath();
				Context.fill();
			}
		} // end GAME
		{ // UI
		
		Context.fillStyle = '#654';
		Context.beginPath();
		Context.rect(0, 0, 204, 108);
		Context.closePath();
		Context.fill();
		Context.fillStyle = '#987';
		Context.beginPath();
		Context.rect(4, 4, 196, 100);
		Context.closePath();
		Context.fill();
		Context.drawImage(sprUI, 8, 6);
		Context.fillStyle = '#A00';
		Context.font="24pt Arial";
		Context.fillText(Player.Health, 48, 32);
		Context.fillStyle = '#36A';
		Context.fillText(Player.FishAmount, 48, 64);
		Context.fillStyle = '#FD4';
		Context.fillText(Gold + "$", 48, 96);
		
		// Shop
		if (InShop != undefined)
		{
			Context.drawImage(sprLeaveShop, 640 - 64, 480 -64);
			Context.fillStyle = '#654';
			Context.beginPath();
			Context.rect(192, 176, 256, 128);
			Context.closePath();
			Context.fill();
			Context.fillStyle = '#987';
			Context.beginPath();
			Context.rect(196, 180, 248, 120);
			Context.closePath();
			Context.fill();
				
			if (ShopMenu == "intro")
			{
				Context.fillStyle = '#000';
				Context.font="12pt Arial";
				Context.fillText("Welcome, what can I do for you?", 208, 200);
				
				Context.drawImage(sprBuy, 218, 230);
				Context.drawImage(sprSell, 303, 230);
				Context.drawImage(sprRest, 388, 230);
			}
			else if (ShopMenu == "buy")
			{
				Context.fillStyle = '#000';
				Context.font="12pt Arial";
				Context.fillText("What would you like to buy?", 228, 200);
				
				if (ShopSubMenu == "hull")
					Context.drawImage(sprMnuHull, 298, 204);
				else if (ShopSubMenu == "sail")
					Context.drawImage(sprMnuSail, 298, 204);
				else if (ShopSubMenu == "oars")
					Context.drawImage(sprMnuOar, 298, 204);
				else if (ShopSubMenu == "cannon")
					Context.drawImage(sprMnuCannon, 298, 204);
				else if (ShopSubMenu == "net")
					Context.drawImage(sprMnuNet, 298, 204);
				
				Context.drawImage(sprBack, 228, 254);
				Context.drawImage(sprSelect, 304, 254);
				Context.drawImage(sprNext, 383, 254);
			}
			else if (ShopMenu == "sell")
			{
				Context.fillStyle = '#000';
				Context.font="12pt Arial";
				Context.fillText("I'll buy your " + Player.FishAmount + " fishes for :", 236, 208);
				Context.font="16pt Arial";
				Context.fillStyle = '#fe3';
				Context.fillText(Player.FishAmount * InShop.ValueFish + "$", 236, 240);
				
				Context.drawImage(sprAccept, 228, 254);
				Context.drawImage(sprRefuse, 383, 254);
			}
			else if (ShopMenu =="rest")
			{
				Context.fillStyle = '#000';
				Context.font="12pt Arial";
				Context.fillText("You can rest for:", 236, 208);
				Context.font="16pt Arial";
				Context.fillStyle = '#fe3';
				Context.fillText("50$", 360, 208);
				
				Context.drawImage(sprAccept, 228, 254);
				Context.drawImage(sprRefuse, 383, 254);
			}
			else
			{		
				Context.fillStyle = '#654';
				Context.beginPath();
				Context.rect(200, 120, 240, 240);
				Context.closePath();
				Context.fill();
				Context.fillStyle = '#987';
				Context.beginPath();
				Context.rect(204, 124, 232, 232);
				Context.closePath();
				Context.fill();	
				
				Context.drawImage(sprBuyPart, 304, 316);
					
				Context.fillStyle = '#000';
				Context.font="12pt Arial";
				Context.fillText("Cost :", 214, 178);
				if (ShopMenu == "oars")
				{
					Context.fillText(Player.Hull.OarPositions.length + " Oar(s)", 214, 146);
					Context.fillStyle = '#fe3';
					Context.font="14pt Arial";
					Context.fillText(InShop.ValueParts * Player.Hull.OarPositions.length + "$", 262, 178);
				}
				else
				{
					Context.fillText(ShopList[ShopListIndex].Name, 214, 146);
					Context.drawImage(sprBack, 228, 316);
					Context.drawImage(sprNext, 383, 316);
				
					Context.fillStyle = '#fe3';
					Context.font="14pt Arial";
					Context.fillText(ShopList[ShopListIndex].Cost * InShop.ValueParts + "$", 262, 178);
				}
				
				Context.fillStyle = '#000';
				Context.font="12pt Arial";
				if (ShopMenu == "hull")
				{
					Context.fillText(ShopList[ShopListIndex].Masts.length + " Mast(s)", 214, 206);
					Context.fillText("Oar capacity "+ ShopList[ShopListIndex].OarPositions.length  , 214, 226);
					Context.fillText("Cannon capacity "+ShopList[ShopListIndex].CannonPositions.length  , 214, 246);
					Context.fillText("Strength capacity "+ShopList[ShopListIndex].Strength  , 214, 266);
					Context.fillText("Weight factor "+ShopList[ShopListIndex].Weight  , 214, 286);
					Context.fillText("Fish capacity " +ShopList[ShopListIndex].Capacity, 214, 306);
				}
				else if (ShopMenu == "sail")
				{
					Context.fillText("Speed factor " + ShopList[ShopListIndex].Speed, 214, 206);
				}
				else if (ShopMenu == "oars")
				{
				}
				else if (ShopMenu == "cannon")
				{
					Context.fillText("Ammo size " + ShopList[ShopListIndex].CannonballSize, 214, 206);
					Context.fillText("Strength capacity " + ShopList[ShopListIndex].Strength, 214, 226);
					Context.fillText("Recoil factor " + ShopList[ShopListIndex].Recoil, 214, 246);
					Context.fillText(ShopList[ShopListIndex].ReloadTime / 60 + " Seconds of reload time", 214, 266);
				}
				else if (ShopMenu == "net")
				{
					Context.fillText(ShopList[ShopListIndex].Capacity + " Fish(es) maximum per haul", 214, 206);
				}
			}
		}
		
		} // end UI
		
		if (OnTitleScreen)
		{
			Context.drawImage(OnTitleScreen, 0, 0);
		}
		
		// Error
		if (ErrorDuration > 0)
		{
			var tmpLength = Error.length * 7 + 24;
			Context.fillStyle = '#fff';
			Context.beginPath();
			Context.rect(320 - tmpLength * 0.5, 208, tmpLength, 64);
			Context.closePath();
			Context.fill();
			Context.fillStyle = '#000';
			Context.beginPath();
			Context.rect(324 - tmpLength * 0.5, 212, tmpLength - 8, 56);
			Context.closePath();
			Context.fill();
			
			Context.fillStyle = '#fff';
			Context.font="12pt Arial";
			Context.fillText(Error, 320 - tmpLength * 0.5 + 8, 244);
		}
	}

	var Clear = function()
	{
		if (Weather < 0.2)
			Context.fillStyle = BrightSky;
		else if (Weather < 0.4)
			Context.fillStyle = LessBrightSky;
		else if (Weather < 0.6)
			Context.fillStyle = AverageSky;
		else if (Weather < 0.8)
			Context.fillStyle = LessDarkSky;
		else
			Context.fillStyle = DarkSky;
		Context.clearRect(0, 0, Width, Height);
		Context.beginPath();
		Context.rect(0, 0, Width, Height);
		Context.closePath();
		Context.fill();
	}

	var Update = function()
	{
		if (OnTitleScreen != undefined)
		{	
			if (pressS)
			{
				OnTitleScreen = undefined;
				Pause = false;
				InShop = undefined;
				NewGame();
			}
			pressS = false;
			return;
		}
		if (!Pause)
		{
			// Shake
			if (ShakeDuration > 0)
			{
				ShakeDuration--;
				CamY = (Math.random() - 0.5) * ShakeStrength;
			}
			else
				CamY = 0;
			// Weather
			if (UntilWeatherChange > 0)
				UntilWeatherChange--;
			else
			{
				UntilWeatherChange = Math.random() * 300;
				Weather += (Math.random() - 0.5) / 5;
				Weather = Math.min(1, Math.max(0, Weather));
			}
			// Set camera
			if (Player instanceof Ship)
			{
				if (Player.Orientation == -1)
					CamX -= (CamX - (Player.X + Player.Hull.Width * 0.5 - 360 - Player.MovX)) / 12;
				else
					CamX -= (CamX - (Player.X + Player.Hull.Width * 0.5 - 280 - Player.MovX)) / 12;
			}
			Player.Moving = 0;
			// Player input
			if (ctrLeft)
			{
				Player.Orientation = -1;
				Player.Moving--;
			}
			if (ctrRight)
			{
				Player.Orientation = 1;
				Player.Moving++;
			}
			if (ctrFish)
				Player.TryCatch();
			if (ctrCannon)
				Player.Fire();
			// Wave creation
			if (Math.random() < 0.2 + Math.abs(Player.MovX) * 0.05)
				new Wave(Math.random() * 860 - 156);
			if (Math.random() < 0.02 + Math.abs(Player.MovX) * 0.005 + Weather / 10)
				new Cloud(Math.random() * 860 - 156);
			if (Math.random() < 0.005)
				new Fish(Math.random() * 860 - 156 + CamX, 24 - CamY, undefined);
			// Fish schools  creation
			while (FishSchools.length < (maxDistExplored - minDistExplored) / 1500)
			{ 
				var tmp = Math.random(), size;
				if (maxDistExplored - minDistExplored < 5000)
					size = 24;
				else
				{
					if (tmp < 0.5)
						size = 24;
					else if (tmp < 0.8)
						size = 48;
					else
						size = 96;
				}
				new FishSchool((Math.random() - 0.5) * 1200 + Player.X, Math.random() * (800 / size), size); 
			}
			// Buildings creation
			while (Buildings.length < (maxDistExplored - minDistExplored) / 10000)
			{ 
				var building = new Building(sprBuilding1,(Math.random() - 0.5) * 1200 + Player.X, 320, 320); 
				building.ValueFish = Math.round(Math.random() * (10 + (maxDistExplored - minDistExplored) / 1000));
				building.ValueParts = 10 + 10 * Math.round(Math.random() * 10);
			}
			// Boats creation
			while (Ships.length < 6)
				if (Math.random() < 0.01)
				{
					var type = Math.random(), ship;
					if (type < (Gold - 1500) / 8000)
					{ // Pirate
						ship = new Ship(Hulls[Math.round(Math.random() * (Hulls.length - 1))], 
									   (Player.X + Math.random() - 0.5) * 8000, 300);
						if (Math.random() < 0.5)
							ship.Oars = true;
						ship.Sails = Sails[Math.round(Math.random() * (Sails.length - 1))];
						var tmp = ship.Hull.CannonPositions;
						for (var index = 0; index < tmp.length; index++)
							if (Math.random() < 0.4)
								ship.Cannons.push (new Cannon(tmp[index].X, tmp[index].Y, tmp[index].Orientation,
															  Cannons[Math.round(Math.random() * (Cannons.length - 1))]));
					}
					else
					{ // Fisherman
						ship = new Ship(Hulls[0], Player.X + (Math.random() - 0.5) * 12000, 300);
						ship.Sails = Sails[0];
						ship.Net = new Net(Nets[0]);
					}
				}
			// Updating stuff
			for (var index = Waves.length - 1; index >= 0 ; index--)
				Waves[index].Update();
			for (var index = Ships.length - 1; index >= 0 ; index--)
				Ships[index].Update();
			for (var index = Fishes.length - 1; index >= 0 ; index--)
				Fishes[index].Update();
			for (var index = Projectiles.length - 1; index >= 0 ; index--)
				Projectiles[index].Update();
			for (var index = FishSchools.length - 1; index >= 0 ; index--)
				if (Math.abs(FishSchools[index].X - Player.X) < 640)
					FishSchools[index].Update();
					
			if (SinceLightning >= 0)
				SinceLightning++;
			if (SinceLightning >= 5)
			{
				for (var index = Ships.length - 1; index >= 0 ; index--)
					if (Lightning > Ships[index].X && Lightning < Ships[index].X + Ships[index].Hull.Width)
					{
						Ships[index].Health -= Math.random() * 30;
						new SFX(sprExplosion, Lightning + 16, 320, 64, 64);
					}
				Lightning = undefined;
				SinceLightning = -1
			}
			if (Weather >= 0.9 && Math.random() < 0.01)
			{
				Shake();
				Lightning = (Math.random() - 0.5) * 1280 + Player.X;
				SinceLightning = 0;
			}
					
			if (Player.X < minDistExplored)
				minDistExplored = Player.X;
			if (Player.X > maxDistExplored)
				maxDistExplored = Player.X;
				
			Player.Health = Math.round(Player.Health);
			if (Player.Health <= 0 && Math.random() < 0.01)
				OnTitleScreen = sprGameOver;
			if (Gold >= 10000)
				OnTitleScreen = sprWin;
		}
		else if (InShop != undefined)
		{	
			if (ShopMenu == "intro")
			{
				if (pressLeft)
				{
					ShopMenu = "buy";
					ShopSubMenu = "hull";
					ShopList = Hulls
				}
				else if (pressS)
					ShopMenu = "sell";
				else if (pressRight)
					ShopMenu = "rest";
			}			
			else if (ShopMenu == "buy")
			{
				if (ShopSubMenu == "hull")
				{
					if (pressLeft)
					{
						ShopSubMenu = "net";
						ShopList = Nets;
					}
					else if (pressRight)
					{
						ShopSubMenu = "sail";
						ShopList = Sails;
					}
				}				
				else if (ShopSubMenu == "sail")
				{
					if (pressLeft)
					{
						ShopSubMenu = "hull";
						ShopList = Hulls;
					}
					else if (pressRight)
						ShopSubMenu = "oars";
				}	
				else if (ShopSubMenu == "oars")
				{
					if (pressLeft)
					{
						ShopSubMenu = "sail";
						ShopList = Sails;
					}
					else if (pressRight)
					{
						ShopSubMenu = "cannon";
						ShopList = Cannons;
					}
				}	
				else if (ShopSubMenu == "cannon")
				{
					if (pressLeft)
						ShopSubMenu = "oars";
					else if (pressRight)
					{
						ShopSubMenu = "net";
						ShopList = Nets;
					}
				}	
				else if (ShopSubMenu == "net")
				{
					if (pressLeft)
					{
						ShopSubMenu = "cannon";
						ShopList = Cannons;
					}
					else if (pressRight)
					{
						ShopSubMenu = "hull";
						ShopList = Hulls;
					}
				}
				if (pressS)
				{
					if (ShopSubMenu == "oars" || ShopList.length > 0)
					{
						if (ShopSubMenu == "oars" && Player.Oars)
						{
							MakeError("Your ship already has oars");
							InShop = undefined;
							Pause = false;
						}
						ShopMenu = ShopSubMenu;
						ShopListIndex = 0;
					}
				}
			}
			else if (ShopMenu == "sell")
			{
				if (pressLeft)
				{
					Gold += Player.FishAmount * InShop.ValueFish;
					Player.FishAmount = 0;
					InShop = undefined;
					Pause = false;
				}
				else if (pressRight)
				{
					InShop = undefined;
					Pause = false;
				}
			}
			else if (ShopMenu == "rest")
			{
				if (pressLeft)
				{
					if (Gold >=	50)
					{
						Gold -= 50;
						Weather = Math.random();
						Player.Health = Player.Hull.Strength;
						BlackDuration = 30;
					}
					else
					{
						MakeError("Not enough gold");
					}
					InShop = undefined;
					Pause = false;
				}
				else if (pressRight)
				{
					InShop = undefined;
					Pause = false;
				}
			}
			else
			{
				if (ShopMenu != "oars")
				{
					if	(pressLeft)
						ShopListIndex--;
					if	(pressRight)
						ShopListIndex++;
					while (ShopListIndex < 0)
						ShopListIndex += ShopList.length;
					while (ShopListIndex >= ShopList.length)
						ShopListIndex -= ShopList.length;
				}
				if (ShopMenu == "hull")
				{
					if (pressS)
					{
						var cost = ShopList[ShopListIndex].Cost * InShop.ValueParts;
						if (Gold >= cost)
						{
							BlackDuration = 10;
							Gold -= cost;
							Gold += Player.Hull.Cost * (InShop.ValueParts / 1.5);
							Player.Hull = ShopList[ShopListIndex];
							Player.Health = Player.Hull.Strength;
							Player.Oars = false;
							Player.Sails = undefined;
							Player.Net = undefined;
							while (Player.Cannons.length > 0)
								Player.Cannons.pop();
						}
						else
							MakeError("Not enough gold");
						InShop = undefined;
						Pause = false;
					}
				}
				else if (ShopMenu == "sail")
				{
					if (pressS)
					{
						var cost = ShopList[ShopListIndex].Cost * InShop.ValueParts;
						if (Gold >= cost)
						{
							BlackDuration = 10;
							Gold -= cost;
							Player.Sails = ShopList[ShopListIndex];
						}
						else
							MakeError("Not enough gold");
						InShop = undefined;
						Pause = false;
					}
				}
				else if (ShopMenu == "oars")
				{
					if (pressS)
					{
						var cost = Player.Hull.OarPositions.length * InShop.ValueParts;
						if (Gold >= cost)
						{
							BlackDuration = 10;
							Gold -= cost;
							Player.Oars = true;
						}
						else
							MakeError("Not enough gold");
						InShop = undefined;
						Pause = false;
					}
				}
				else if (ShopMenu == "cannon")
				{
					if (pressS)
					{
						var cost = ShopList[ShopListIndex].Cost * InShop.ValueParts;
						if (Gold >= cost)
						{
							var cans = Player.Hull.CannonPositions;
							if (Player.Cannons.length >= cans.length)
								MakeError("Loadout already full");
							else
							{
								BlackDuration = 10;
								Player.Cannons.push(new Cannon(cans[Player.Cannons.length].X, 
													cans[Player.Cannons.length].Y, 
													cans[Player.Cannons.length].Orientation, 
													ShopList[ShopListIndex]));
								Gold -= cost;
							}
						}
						else
							MakeError("Not enough gold");
						InShop = undefined;
						Pause = false;
					}
				}
				else if (ShopMenu == "net")
				{
					if (pressS)
					{
						var cost = ShopList[ShopListIndex].Cost * InShop.ValueParts;
						if (Gold >= cost)
						{
							BlackDuration = 10;
							Gold -= cost;
							var net = ShopList[ShopListIndex]
							Player.Net = new Net(net);
						}
						else
							MakeError("Not enough gold");
						InShop = undefined;
						Pause = false;
					}
				}
			}
		}
	
	
		if (ErrorDuration > 0)
			ErrorDuration--;
		pressLeft = false;
		pressRight = false;
		pressFish = false;
		pressS = false;
		pressCannon = false;
	}

	var GameLoop = function()
	{
		Width = DocumentElement.offsetWidth;
		Height = DocumentElement.offsetHeight;
		DocumentElement.width = Width;
		DocumentElement.height = Height;

		Clear();
		Update();
		Draw();
		gLoop = setTimeout(GameLoop, 1000 / 60);
	}

	GameLoop();
} // end GAME LOOPS