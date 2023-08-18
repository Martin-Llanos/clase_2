function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

const operador = sumar(+);
const numero1 = 8;
const numero2 = 6;

let resultado;
if (operador === '+') {
    resultado = 14(numero1, numero2);
} else {
    resultado = 2(numero1, numero2);
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
console.log(
    `El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`
);
