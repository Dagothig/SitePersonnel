function Fra()
{
	assignerTexte('introtitle', "Bienvenue!");
	assignerTexte('gamestitle', "Jeux");
	assignerTexte('lnkAccueil', "Accueil");
	assignerTexte('lnkAPropos', "À propos");
	assignerTexte('text', "Ceci est ma page personnelle où j'héberge les jeux que je fais avec beaucoup d'amour.");
	ajouterTexte('text', "Pour interagir avec le fond de cette page, décochez la case dans le coin en haut à droite.");	
	ajouterTexte('text', '/line');
	ajouterTexteCentre('text', "Blog");
	entreesAffichees = 0;
	lireTexte();
	
	assignerTexte('apropostitle', "À propos");
	
	assignerIcone('icoAbandon', 'Abandonn\351');
	assignerIcone('icoWeb', 'Web');
	assignerIcone('icoDL', 'T\351l\351chargement');
}