/*
Lista de Exercícios de lógica em JavaScript
1-Verificar se um número é par ou ímpar
Crie um programa que receba um número e verifique se ele é par ou ímpar:
2-Verificar se um número é positivo, negativo ou zero
Crie um programa que verifique se um número é positivo, negativo ou zero.
3-Soma de números de 1 a N
Crie um programa que calcule a soma de todos os números inteiros de 1 até um número N
informado pelo usuário.
4-Verificar se um número é primo
Crie uma função que verifica se um número é primo. Um número primo é aquele que só pode
ser dividido por 1 e por ele mesmo.
5-Contar quantas vezes uma letra aparece em uma palavra
Crie um programa que conte quantas vezes uma letra aparece em uma palavra.
6- Inverter uma string
Crie um programa que inverta uma string (sequência de caracteres).
*/

/* Exercicio 1 */
/*
let a = 3;

if(a%2 === 0) {
    console.log("Par")
} else {
    console.log("Impar")
}
*/

/* Exercicio 2 */
/*
let a = 0;

if(a < 0) {
    console.log("menor que 0")
} else if (a === 0) {
    console.log("igual a zero")
} else if (a > 0) {
    console.log("maior que zero")
}
*/

/* Exercicio 3 */

let n = 22;

for(let i=1; i <= n; i++){
    var numeros=0
    var numeros= numeros + i

    console.log(numeros)
}

/* Exercicio 4 */

/*
let a = 7;

if(a/1 === a & a/a === 1) {
    console.log("Primo")
} else {
    console.log("Não é primo")
}
*/

/* Exercicio 6 */

/*
let a = "Oi professor"

a = a.split('').reverse().join('')

console.log(a)
*/