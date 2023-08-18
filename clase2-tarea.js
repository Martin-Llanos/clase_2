function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

const operador = prompt('Ingrese + o -');
const numero1 = 1;
const numero2 = 2;

let resultado;
if (operador === '+') {
    resultado = sumar(numero1, numero2);
} else {
    resultado = restar(numero1, numero2);
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
console.log(
    `El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`
);