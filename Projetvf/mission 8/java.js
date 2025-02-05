function afficherCode(id) {
    const codeBox = document.getElementById(id);
    codeBox.style.display = codeBox.style.display === 'block' ? 'none' : 'block';
}

function convertirTemperature() {
    const celsius = prompt("Entrez la température en °C :");
    const fahrenheit = (celsius * 9 / 5) + 32;
    alert(`${celsius}°C = ${fahrenheit}°F`);
}

function augmenterTaille() {
    let texte = document.getElementById('texte');
    let taille = parseInt(window.getComputedStyle(texte).fontSize);
    texte.style.fontSize = (taille + 2) + 'px';
}

function reduireTaille() {
    let texte = document.getElementById('texte');
    let taille = parseInt(window.getComputedStyle(texte).fontSize);
    texte.style.fontSize = (taille - 2) + 'px';
}

function incrementer() {
    let compteur = parseInt(document.getElementById('compteur').textContent);
    document.getElementById('compteur').textContent = compteur + 1;
}

function saluer() {
    const heure = new Date().getHours();
    if (heure < 12) alert("Bonjour");
    else if (heure < 18) alert("Bon après-midi");
    else alert("Bonsoir");
}

function calculerAge() {
    const anneeNaissance = prompt("Entrez votre année de naissance :");
    const anneeActuelle = new Date().getFullYear();
    alert(`Votre âge est : ${anneeActuelle - anneeNaissance}`);
}

function trouverMax() {
    const nombres = prompt("Entrez des nombres séparés par des virgules :").split(",");
    const max = Math.max(...nombres.map(Number));
    alert(`Le nombre maximum est : ${max}`);
}

function compterVoyelles() {
    const texte = prompt("Entrez un texte :").toLowerCase();
    const voyelles = texte.match(/[aeiouy]/g);
    alert(`Nombre de voyelles : ${voyelles ? voyelles.length : 0}`);
}

function calculerPourboire() {
    const montant = parseFloat(prompt("Entrez le montant de l'addition (€):"));
    const pourboire = (montant * 0.15).toFixed(2);
    alert(`Le pourboire recommandé est : ${pourboire} €`);
}

function verifierPairImpair() {
    const nombre = parseInt(prompt("Entrez un nombre:"));
    const resultat = nombre % 2 === 0 ? "pair" : "impair";
    alert(`Le nombre ${nombre} est ${resultat}.`);
}

function calculerCalories() {
    const poids = parseFloat(prompt("Entrez votre poids (kg) :"));
    const temps = parseFloat(prompt("Entrez le temps de course (minutes) :"));
    const calories = (poids * 0.063) * temps;
    alert(`Vous avez brûlé environ ${calories.toFixed(2)} calories.`);
}

function calculerPerimetre() {
    const longueur = parseFloat(prompt("Entrez la longueur du rectangle (cm) :"));
    const largeur = parseFloat(prompt("Entrez la largeur du rectangle (cm) :"));
    const perimetre = 2 * (longueur + largeur);
    alert(`Le périmètre du rectangle est : ${perimetre} cm`);
}

function creerTableau() {
    const taille = parseInt(prompt("Entrez la taille du tableau :"));
    const tableau = [];
    for (let i = 0; i < taille; i++) {
        tableau.push(prompt(`Entrez l'élément ${i+1}:`));
    }
    alert(`Tableau créé: ${tableau.join(', ')}`);
}

function verifierPalindrome() {
    const mot = prompt("Entrez un mot :");
    const motInverse = mot.split('').reverse().join('');
    alert(mot === motInverse ? "Le mot est un palindrome." : "Le mot n'est pas un palindrome.");
}

function convertirBinaire() {
    const nombre = parseInt(prompt("Entrez un nombre :"));
    alert(`Le nombre ${nombre} en binaire est : ${nombre.toString(2)}`);
}

function animerElement() {
    let elem = document.createElement('div');
    elem.textContent = "Je suis animé!";
    elem.style.position = "absolute";
    elem.style.left = "0px";
    elem.style.top = "0px";
    elem.style.backgroundColor = "red";
    elem.style.padding = "10px";
    document.body.appendChild(elem);

    let posX = 0;
    let posY = 0;
    function deplacer() {
        if (posX < window.innerWidth - 100) {
            posX += 5;
            posY += 3;
            elem.style.left = posX + "px";
            elem.style.top = posY + "px";
            requestAnimationFrame(deplacer);
        }
    }
    deplacer();
}