var	DocumentElement = document.getElementById('c'),
	Width = DocumentElement.offsetWidth,
	Height = DocumentElement.offsetHeight,
	Context = DocumentElement.getContext('2d');
DocumentElement.width = Width;
DocumentElement.height = Height;	

var sprTest = new Image();
sprTest.src = 'Sprites/Joueur.png';

var Objects = new Array();

function DrawImage(pSprite, pX, pY, pWidth, pHeight, pSourceX, pSourceY, pAlpha)
{
	Context.globalAlpha = pAlpha;
	Context.drawImage(sprTest, pSourceX, pSourceY, pWidth, pHeight, pX, pY, pWidth, pHeight);
}
function DrawText(pText, pX, pY, pColor, pSize, pAlpha)
{
	Context.fillStyle = pColor;
	Context.font = pSize + 'px Geneva';
	Context.globalAlpha = Math.min(1, Math.max(0, pAlpha));
	
	var lines =  pText.split('@');
	for (var index = 0; index < lines.length; index++)
	{
		Context.fillText(lines[index], pX, pY + index * 24);
	}
}
function PopText(pText, pX, pY, pColor, pSize, pDuration, pStartup, pMovX, pMovY)
{
	this.Text = pText;
	this.X = pX;
	this.Y = pY;
	this.Color = pColor;
	this.Size = pSize;
	this.Duration = pDuration;
	this.Startup = pStartup;
	this.MovX = pMovX;
	this.MovY = pMovY;
	this.Alpha = 0;
	
	Objects.push(this);
	
	PopText.prototype.Draw = function()
	{
		if (this.Startup > 0)
			return;
			
		DrawText(this.Text, this.X, this.Y, this.Color, this.Size, this.Alpha);
	}
	PopText.prototype.Update = function()
	{
		if (this.Startup > 0)
		{
			this.Startup--;
			return;
		}
		this.X += this.MovX;
		this.Y += this.MovY;
		this.Duration--;
		if (this.Duration > 40)
		{
			if (this.Alpha < 1)
				this.Alpha += 0.025;
		}
		else if (this.Duration > 0)
		{
			this.Alpha -= 0.025;
		}
		else if (this.Alpha <= 0)
			this.Dispose();
	}
	PopText.prototype.Dispose = function()
	{
		Objects.splice(Objects.indexOf(this), 1);
	}
}
function PopImage(pImage, pX, pY, pWidth, pHeight, pSourceX, pSourceY, pDuration, pStartup, pMovX, pMovY)
{
	this.Image = pImage;
	this.X = pX;
	this.Y = pY;
	this.Width = pWidth;
	this.Height = pHeight;
	this.SourceX = pSourceX;
	this.SourceY = pSourceY;
	this.Duration = pDuration;
	this.Startup = pStartup;
	this.MovX = pMovX;
	this.MovY = pMovY;
	this.Alpha = 0;
	
	Objects.push(this);
	
	PopText.prototype.Draw = function()
	{
		if (this.Startup > 0)
			return;
			
		DrawImage(this.Image, this.X, this.Y, this.Width, this.Height, this.SourceX, this.SourceY, this.Alpha);
	}
	PopText.prototype.Update = function()
	{
		if (this.Startup > 0)
		{
			this.Startup--;
			return;
		}
		this.X += this.MovX;
		this.Y += this.MovY;
		this.Duration--;
		if (this.Duration > 40)
		{
			if (this.Alpha < 1)
				this.Alpha += 0.025;
		}
		else if (this.Duration > 0)
		{
			this.Alpha -= 0.025;
		}
		else if (this.Alpha <= 0)
			this.Dispose();
	}
	PopText.prototype.Dispose = function()
	{
		Objects.splice(Objects.indexOf(this), 1);
	}
}

var Draw = function()
{
	if (Objects === undefined)
		return;
	for (var index = Objects.length - 1; index >= 0; index--)
		Objects[index].Draw();
}

var Update = function()
{
	if (Objects === undefined)
		return;
	for (var index = Objects.length - 1; index >= 0; index--)
		Objects[index].Update();
	if (Objects.length == 0)
	{
		Objects = undefined;
		passwordCheck();
	}
}

var GameLoop = function()
{
	Width = DocumentElement.offsetWidth;
	Height = DocumentElement.offsetHeight;
	DocumentElement.width = Width;
	DocumentElement.height = Height;
	Update();
	Draw();
	gLoop = setTimeout(GameLoop, 1000 / 60);
}

new PopText('In a somewhat close past, in a very close galaxy', 
			8, 32, '#fff', 18, 240, 0, 0.1, 0);
new PopText('There once was a village...',
			24, 48, '#fff', 18, 160, 240, 0.1, 0);
new PopText('and in that village, a man, his nephew and a wonderfully blonde girl.', 
			40, 64, '#fff', 18, 320, 400, 0.1, 0);
new PopText('One day, the girl was kidnapped by obscure forces...', 
			56, 80, '#fff', 18, 240, 720, 0.1, 0);
new PopText('his nephew left, going after her',
			72, 96, '#fff', 18, 240, 960, 0.1, 0);

GameLoop();