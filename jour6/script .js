// Fonction pour rebooter le monde
function rebooterMonde() {
    var citationsBladeRunner = [
        "Toutes ces choses seront perdues dans le temps, comme les larmes sous la pluie.",
        "Je ne sais pas pourquoi il me racontait cela. Peut-être parce qu'il savait que j'étais capable de le comprendre.",
        "Tu es le chasseur. Tu es la chasseuse.",
        "Éblouissant. La lumière qui brille deux fois plus fort ne dure que la moitié de temps.",
        "Il fait froid dehors pour les réplicants.",
        "J'ai vu des choses que vous, humains, ne pourriez pas croire.",
        "La vie est dur, dur comme le bois dur."
    ];

    var citationAleatoire = citationsBladeRunner[Math.floor(Math.random() * citationsBladeRunner.length)];
    var random = document.getElementById("random")
    random.textContent = citationAleatoire
    // document.getElementById("quote").textContent = citationAleatoire;
}

// Appel de la fonction au chargement de la page
window.onload = function() {
    // Ajout de l'événement au bouton "Rebooter le Monde"
    var rebootBtn = document.getElementById("rebootBtn", "page-link");
    if (rebootBtn) {
        rebootBtn.addEventListener("click", rebooterMonde);
    }
};

//fonction modal
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('myModal');
    if (event.key === 'g' && event.ctrlKey) {
      modal.style.display = 'block';
    } else if (event.key === 'c' && event.ctrlKey) {
      modal.style.display = 'block';
    }
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  });
  
