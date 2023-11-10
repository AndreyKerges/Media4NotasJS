let nota1 = prompt('Digite a primeira nota...');
let nota2 = prompt('Digite a segunda nota...');
let nota3 = prompt('Digite a terceira nota...');
let nota4 = prompt('Digite a quarta nota...');
let somaNotas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4));

mediaNotas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

if (somaNotas < 0 || somaNotas > 40) {
    alert('Verifique as notas que foram colocadas.');
}

else if (mediaNotas < 5) {
    alert('Reprovado!');
}

else if (mediaNotas >= 6) {
    alert('Aprovado!');
}
else if (mediaNotas > 5 || mediaNotas < 6) {
    alert('Recuperação!');
}

alert(`A média entre as notas foi: ${mediaNotas}`)