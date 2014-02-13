var	DocumentElement = document.getElementById('c'),
	Width = DocumentElement.offsetWidth,
	Height = DocumentElement.offsetHeight,
	Context = DocumentElement.getContext("2d");
DocumentElement.width = Width;
DocumentElement.height = Height;	

var Draw = function()
{

}

var Update = function()
{

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

GameLoop();