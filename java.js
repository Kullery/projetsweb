function liencv(){
    window.open('cv-duhesme-louis.pdf', '_blank');
}

function liencertifs(){
    window.location.href = 'certifs.html';
}

function liencontacts(){
    window.location.href = 'contacts.html';
}

function retour(){
    window.location.href = 'index.html';
}
function lienprojets(){
    window.location.href = 'Projetvf/index.html';
}

function back1(){
    window.location.href = '../index.html';
}
let animationInterval; // Stocker l'intervalle
let images = [
    'blackbglambo.jpeg',
    'lambo3.jpg',
    'cherrylambo.jpg',
    'lambo4.jpg',
    'lambo5.avif'
]; // Liste des images d'arrière-plan
let currentIndex = 0;

function startBackgroundAnimation() {
    // Assurez-vous qu'aucune animation précédente n'est en cours
    stopBackgroundAnimation();

    animationInterval = setInterval(() => {
        // Appliquer l'image suivante
        currentIndex = (currentIndex + 1) % images.length;
        document.body.style.backgroundImage = `url(${images[currentIndex]})`;
        document.body.style.transition = 'background-image 1s ease-in-out'; // Slide doux
    }, 5000); // Changement toutes les 5 secondes
}

function stopBackgroundAnimation() {
    clearInterval(animationInterval); // Arrêter l'animation
    currentIndex = 0; // Réinitialiser l'index
    document.body.style.backgroundImage = 'url(blackbglambo.jpeg)'; // Remettre le fond par défaut
    document.body.style.transition = 'none'; // Annuler la transition
}