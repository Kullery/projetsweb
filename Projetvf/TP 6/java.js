function total() {
    let t1 = document.getElementById('p1').value * document.getElementById('q1').value;
    let t2 = document.getElementById('p2').value * document.getElementById('q2').value;
    let t3 = document.getElementById('p3').value * document.getElementById('q3').value;

    document.getElementById('t1').value = t1.toFixed(2);
    document.getElementById('t2').value = t2.toFixed(2);
    document.getElementById('t3').value = t3.toFixed(2);

    let grandTotal = t1 + t2 + t3;

    document.getElementById('totalAmount').innerText = grandTotal.toFixed(2);
}

function reset() {
    document.getElementById('a1').value = '';
    document.getElementById('p1').value = '';
    document.getElementById('q1').value = '';
    document.getElementById('t1').value = '';

    document.getElementById('a2').value = '';
    document.getElementById('p2').value = '';
    document.getElementById('q2').value = '';
    document.getElementById('t2').value = '';

    document.getElementById('a3').value = '';
    document.getElementById('p3').value = '';
    document.getElementById('q3').value = '';
    document.getElementById('t3').value = '';

    document.getElementById('totalAmount').innerText = '0.00';
}

function back1(){
    window.location.href = '../index.html';
}