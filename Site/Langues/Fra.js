function Fra()
{
	assignerTexte('introtitle', "Bienvenue!");
	assignerTexte('gamestitle', "Jeux");
	assignerTexte('lnkAccueil', "Accueil");
	assignerTexte('lnkAPropos', "� propos");
	assignerTexte('text', "Ceci est ma page personnelle o� j'h�berge les jeux que je fais avec beaucoup d'amour.");
	ajouterTexte('text', "Pour interagir avec le fond de cette page, d�cochez la case dans le coin en haut � droite.");	
	ajouterTexte('text', '/line');
	ajouterTexteCentre('text', "Blog");
	entreesAffichees = 0;
	lireTexte();
	
	assignerTexte('apropostitle', "� propos");
	
	assignerIcone('icoAbandon', 'Abandonn\351');
	assignerIcone('icoWeb', 'Web');
	assignerIcone('icoDL', 'T\351l\351chargement');
}