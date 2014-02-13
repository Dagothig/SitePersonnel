var nbEntrees = 3;
var entreesAffichees = 0;
var entreesChargees = 0;
var entreesACharger = Math.min(nbEntrees, 1);

var derniereEntree;
var entrees = [];
var isIE = navigator.appName === 'Microsoft Internet Explorer';
function assignerTexte(pNom, pTexte)
{
	document.getElementById(pNom).innerHTML = pTexte;
}
function assignerIcone(pNom, pText)
{
	var icones = document.getElementsByClassName(pNom);
	for (var index = 0; index < icones.length; index++)
		icones[index].innerHTML = '<span class="tooltip">' + pText + '</span>';
}
function ajouterTexte(pNom, pTexte)
{
	if (pTexte === "/line")
		document.getElementById(pNom).innerHTML = document.getElementById(pNom).innerHTML + "</br><hr>";
	else
		document.getElementById(pNom).innerHTML = document.getElementById(pNom).innerHTML + "</br>" + pTexte;
}
function ajouterTexteCentre(pNom, pTexte)
{
	document.getElementById(pNom).innerHTML = document.getElementById(pNom).innerHTML + "</br><div style='width:100%; text-align:center; margin-bottom:-1em'>" + pTexte + "</div>";
}
function lireTexte()
{
	if (entreesChargees !== entreesAffichees)
		setTimeout(lireTexte, 10);
	for (var index = entreesChargees -  entreesAffichees; index > 0; index--)
	{
		entrees[entrees.length - index]();
		entreesAffichees++;
	}
}
function chargerEntree(num)
{
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'Langues/Entree' + num + '.js';
	document.getElementsByTagName('head')[0].appendChild(script);
	script.numPage = num;
	if (isIE)
	{
		script.onreadystatechange = function()
		{
			if (this.readyState == 'complete')
			{
				entreesChargees++;
				if (this.numPage - 1 > nbEntrees - entreesACharger)
					chargerEntree(this.numPage - 1);
				lireTexte();
			}
		}
	}
	else
	{
		script.onload = function()
		{
			entreesChargees++;
			if (this.numPage - 1 > nbEntrees - entreesACharger)
				chargerEntree(this.numPage - 1);
			lireTexte();
		}
	}
}
function chargerEntrees()
{
	chargerEntree(nbEntrees);
					
	if (entreesACharger === nbEntrees)
		document.getElementById('prochainesEntrees').style.display='none';
}
function chargerNouvellesEntrees(pNombre)
{
	chargerEntree(nbEntrees - entreesACharger);
	entreesACharger += pNombre;
	if (entreesACharger === nbEntrees)
		document.getElementById('prochainesEntrees').style.display='none';
}
var oldLang;
function changementLangue(sender)
{
	if (oldLang !== undefined)
		oldLang.className = oldLang.className.replace(' activeLang', '');
	oldLang = sender;
	if (sender.className.indexOf(' activeLang') === -1)
		sender.className += ' activeLang';
}
changementLangue(document.getElementById('fra'));