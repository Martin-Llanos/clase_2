function sumar (numeroUno, numeroDos){
    return numeroUno + numeroDos
}
function restar (numeroUno, numeroDos){
    return numeroUno - numeroDos
}
​
const numeroUno = Number(prompt('Ingrese un numero'))
const signo = prompt('ingrese un signo (+ o -)')
const numeroDos = Number(prompt('Ingrese un numero'))
​
let solucion
​
if (signo === '+'){
    solucion = sumar(numeroUno, numeroDos)
    console.log ('El resultado de la suma es ' + solucion )
}
else if (signo === '-'){
    solucion = restar(numeroUno, numeroDos)
    console.log ('El resultado de la resta es ' + solucion )
}