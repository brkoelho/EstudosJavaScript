// Percorrer o array começando do último pulando de dois em dois.
// Começar do penúltimo elemento.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = numeros.length - 2; i >= 0; i = i -= 2) {
    console.log(numeros[i]);
}
