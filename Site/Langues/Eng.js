function Eng()
{
	assignerTexte('introtitle', "Welcome!");
	assignerTexte('gamestitle', "Games");
	assignerTexte('lnkAccueil', "Home");
	assignerTexte('lnkAPropos', "About");
	assignerTexte('text', "This is my personnal page where I host the games I make with lots of love.");
	ajouterTexte('text', "To interact with the background of this page, uncheck the box in the top-right corner.");
	ajouterTexte('text', '/line');
	ajouterTexteCentre('text', "Blog (untranslated, in french)");
	entreesAffichees = 0;
	lireTexte();
	
	assignerIcone('icoAbandon', 'Abandonned');
	assignerIcone('icoWeb', 'Web');
	assignerIcone('icoDL', 'Download');
}