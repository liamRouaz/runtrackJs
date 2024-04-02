// Fonction de mélange des images
function shuffleImages() {
    let allcards = document.getElementsByClassName("card-img");
    for (let i = allcards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = allcards[i].src;
        allcards[i].src = allcards[randomIndex].src;
        allcards[randomIndex].src = temp;
    }
}

// Récupération du bouton
let shuffleButton = document.getElementById("shuffleButton");

// Ajout d'un gestionnaire d'événements de clic au bouton
shuffleButton.addEventListener("click", function() {
    shuffleImages();
});

