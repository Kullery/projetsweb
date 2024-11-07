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

    document.getElementById('result').textContent = 'Résultat: ' + result;
    return result;
}

function invertNumbers() {
    let num1Field = document.getElementById('num1');
    let num2Field = document.getElementById('num2');

    let temp = num1Field.value;
    num1Field.value = num2Field.value;
    num2Field.value = temp;
}

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
    
    let parity = (result % 2 === 0) ? 'pair' : 'impair';
    document.getElementById('parity').textContent = 'Le résultat est ' + parity;
}

function goToLink() {
    window.location.href = "../index.html";
}