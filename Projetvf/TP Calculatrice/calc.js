// Fonction pour effectuer les calculs
function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Veuillez entrer deux nombres valides');
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Impossible de diviser par zéro');
                return;
            }
            result = num1 / num2;
            break;
    }

    // Affichage du résultat
    document.getElementById('result').textContent = 'Résultat: ' + result;
    return result;
}

// Fonction pour permuter les chiffres des deux champs
function invertNumbers() {
    let num1Field = document.getElementById('num1');
    let num2Field = document.getElementById('num2');

    // Permuter les valeurs des deux cases
    let temp = num1Field.value;
    num1Field.value = num2Field.value;
    num2Field.value = temp;
}

// Fonction pour vérifier si le résultat est pair ou impair
function checkParity() {
    let resultText = document.getElementById('result').textContent;
    if (!resultText.includes('Résultat:')) {
        alert('Veuillez d\'abord effectuer un calcul.');
        return;
    }

    let result = parseFloat(resultText.replace('Résultat: ', ''));

    if (isNaN(result)) {
        alert('Veuillez entrer des nombres valides pour effectuer un calcul.');
        return;
    }

    // Vérifier la parité
    let parity = (result % 2 === 0) ? 'pair' : 'impair';
    document.getElementById('parity').textContent = 'Le résultat est ' + parity;
}

function goToLink() {
    window.location.href = "../index.html";
}