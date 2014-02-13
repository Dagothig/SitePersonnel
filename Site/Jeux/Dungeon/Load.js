var passwordLength = 20, Son = true, Musique = true, Fullscreen = true;
function createDiv(pIdName)
{
	var tmpDiv;

	tmpDiv = document.createElement('div');
	tmpDiv.setAttribute('id', pIdName);
	document.body.appendChild(tmpDiv);
}

createDiv('gauche');
createDiv('haut');
createDiv('droite');
createDiv('bas');

function getPassword()
{
	var tmp = window.location.toString().split('?');
	if (tmp.length < 2)
		return undefined;
	var params = (tmp[1]).split('&');
	for (var index = 0; index < params.length; index++)
		if (params[index].split('=')[0] === 'password')
		{
			if (params[index].split('=')[1].length < passwordLength)
				return undefined;
			return params[index].split('=')[1];
		}
	return undefined;
}
function setPassword(pSection, pMap, pX, pY, 
					 pForce, pForceR, pResistance, pMaxHP, pHP, 
					 pMaxFleches, pFleches, pMaxOr, pOr, pQuest)
{
	Password = String.fromCharCode(valeur_CharCode(pSection)) +
			   String.fromCharCode(valeur_CharCode(pMap)) +
			   String.fromCharCode(valeur_CharCode(Math.floor(pX / 62))) +
			   String.fromCharCode(valeur_CharCode(pX % 62)) +
			   String.fromCharCode(valeur_CharCode(Math.floor(pY / 62))) +
			   String.fromCharCode(valeur_CharCode(pY % 62)) +
			   String.fromCharCode(valeur_CharCode(pForce)) +
			   String.fromCharCode(valeur_CharCode(pForceR)) +
			   String.fromCharCode(valeur_CharCode(pResistance)) +
			   String.fromCharCode(valeur_CharCode(pMaxHP)) +
			   String.fromCharCode(valeur_CharCode(pHP)) +
			   String.fromCharCode(valeur_CharCode(Math.floor(pMaxFleches / 62))) +
			   String.fromCharCode(valeur_CharCode(pMaxFleches % 62)) +
			   String.fromCharCode(valeur_CharCode(Math.floor(pFleches / 62))) +
			   String.fromCharCode(valeur_CharCode(pFleches % 62)) +
			   String.fromCharCode(valeur_CharCode(Math.floor(pMaxOr / 62))) +
			   String.fromCharCode(valeur_CharCode(pMaxOr % 62)) +
			   String.fromCharCode(valeur_CharCode(Math.floor(pOr / 62))) +
			   String.fromCharCode(valeur_CharCode(pOr % 62)) +
			   String.fromCharCode(valeur_CharCode(pQuest));
}
var Password = getPassword()

function setSettings()
{
	Fullscreen = false;
	Musique = false;
	Son = false;
	document.getElementById('fullscreen').checked = false;
	document.getElementById('music').checked = false;
	document.getElementById('sound').checked = false;
	var tmp = window.location.toString().split('?');
	if (tmp.length < 2)
		return;
	var params = (tmp[1]).split('&');
	for (var index = 0; index < params.length; index++)
		if (params[index].split('=')[0] === 'music')
		{
			Musique = true;
			document.getElementById('music').checked = true;
		}
		else if (params[index].split('=')[0] === 'sound')
		{
			Son = true;
			document.getElementById('sound').checked = true;
		}
		else if (params[index].split('=')[0] === 'fullscreen')
		{
			Fullscreen = true;
			document.getElementById('fullscreen').checked = true;
		}
}

function charCode_Valeur(pChar)
{
	var valeur = pChar;
	if (valeur >= 48 && valeur <= 57)
		valeur -= 48;
	else if (valeur >= 97 && valeur <= 122)
		valeur -= 87
	else if (valeur >= 65 && valeur <= 90)
		valeur -= 29;
	return valeur;
}
function valeur_CharCode(pValeur)
{
	var carac = pValeur;
	
	if (carac >= 0 && carac <= 9)
		carac += 48;
	else if (carac >= 10 && carac <= 35)
		carac += 87;
	else if (carac >= 36 && carac <= 61)
		carac += 29;
	else
		carac = 90;
		
	return carac;
}
function getPageURL()
{
	var url = window.location.toString().split('/');
	return url[url.length - 1].split('.')[0];
}
function getPassURL()
{
	var map = charCode_Valeur(Password[0].charCodeAt()).toString();
	var length = 3 - map.length;
	var string = '';
	while (length > 0)
	{
		string = string + '0';
		length--;
	}
	string = string + map;
	return 'Section' + string;
}
function getPassMap()
{
	var map = charCode_Valeur(Password[1].charCodeAt()).toString();
	var length = 3 - map.length;
	var string = '';
	while (length > 0)
	{
		string = string + '0';
		length--;
	}
	string = string + map;
	return ('Map' + string);
}
function getPassPosX()
{
	return (charCode_Valeur(Password[2].charCodeAt()) * 62 + 
		   charCode_Valeur(Password[3].charCodeAt()));
}
function getPassPosY()
{
	return (charCode_Valeur(Password[4].charCodeAt()) * 62 + 
		   charCode_Valeur(Password[5].charCodeAt()));
}
function getPassForce()
{
	return charCode_Valeur(Password[6].charCodeAt());
}
function getPassForceR()
{
	return charCode_Valeur(Password[7].charCodeAt());
}
function getPassResistance()
{
	return charCode_Valeur(Password[8].charCodeAt());
}
function getPassMaxHP()
{
	return charCode_Valeur(Password[9].charCodeAt());
}
function getPassHP()
{
	return charCode_Valeur(Password[10].charCodeAt());
}
function getPassMaxFleches()
{
	return charCode_Valeur(Password[11].charCodeAt()) * 62 +
		   charCode_Valeur(Password[12].charCodeAt());
}
function getPassFleches()
{
	return charCode_Valeur(Password[13].charCodeAt()) * 62 +
		   charCode_Valeur(Password[14].charCodeAt());
}
function getPassMaxOr()
{
	return charCode_Valeur(Password[15].charCodeAt()) * 62 +
		   charCode_Valeur(Password[16].charCodeAt());
}
function getPassOr()
{
	return charCode_Valeur(Password[17].charCodeAt()) * 62 +
		   charCode_Valeur(Password[18].charCodeAt());
}
function getPassQuest()
{
	return charCode_Valeur(Password[19].charCodeAt());
}

function assignPassword()
{
	if (Password !== undefined)
		document.getElementById('password').value = Password;
}
function newGame()
{ 
	var tmpSon = '', tmpMusique = '', tmpFullscreen = '';
	if (Son)
		tmpSon = '&sound=on';
	if (Musique)
		tmpMusique = '&music=on';
	if (Fullscreen)
		tmpFullscreen = '&fullscreen=on';
	window.location = 'Intro.html?password=160i0d1006600001C000' + tmpFullscreen + tmpMusique + tmpSon;
}
function returnToTitle()
{
	var tmpSon = '', tmpMusique = '', tmpFullscreen = '';
	if (Son)
		tmpSon = '&sound=on';
	if (Musique)
		tmpMusique = '&music=on';
	if (Fullscreen)
		tmpFullscreen = '&fullscreen=on';
	window.location = 'Game.html?password=' + getPassword() + tmpFullscreen + tmpMusique + tmpSon;
}
function passwordCheck()
{
	if (document.passwordForm !== undefined)
	{
		Password = document.getElementById('password').value;
		document.passwordForm.action = 'Section.html';
	}
	else
	{
		var tmpSon = '', tmpMusique = '', tmpFullscreen = '';
		if (Son)
			tmpSon = '&sound=on';
		if (Musique)
			tmpMusique = '&music=on';
		if (Fullscreen)
			tmpFullscreen = '&fullscreen=on';
		window.location = 'Section.html' + '?password=' + Password + tmpFullscreen + tmpMusique + tmpSon;
	}
}

function ScreenSwitch()
{
	var game = document.getElementById('game').style;
	if (Fullscreen)
	{
		game.top = '-7px';
		game.left = '-7px';
		game.right = '-7px';
		game.bottom = '-7px';
		game.width = '';
		game.height = '';
		game.marginTop = '';
		game.marginLeft = '';
	}
	else
	{
		game.width = '640px';
		game.top = '50%';
		game.left = '50%';
		game.height = '480px';
		game.marginTop = '-247px';
		game.marginLeft = '-327px';
	}
}