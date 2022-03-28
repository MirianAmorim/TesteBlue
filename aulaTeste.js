// // *** Método MAP ***

// const numeros = [1, 4, 9];

// const raiz = numeros.map (Math.sqrt);
// console.log(raiz);
// const dobro = numeros.map( (num) => {
//     return (num) * 2;
// });
// console.log(dobro);
const material = [
    {nome: "Lápis", valor: 2 },
    {nome: "Caderno", valor: 15 },
    {nome: "Caneta", valor: 7 },
    {nome: "Agenda", valor: 18 },
    {nome: "Régua", valor: 3 },
    {nome: "Borracha", valor: 1 },
];

const inflacao = material.map( (item) => {
    return (item.valor) * 1.50;
});
console.log(inflacao);
console.log(material);
console.table(material);




