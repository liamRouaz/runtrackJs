function afficherJoursSemaines() {
    var jours_semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    return jours_semaine;
}

var jours = afficherJoursSemaines();
for (var i = 0; i < jours.length; i++) { //lenght renvoie la longeur de la chaine de character
    console.log(jours[i]);
}
