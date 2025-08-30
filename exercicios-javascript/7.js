let palavra = "arara";
let invertida = palavra.split("").reverse().join("");

if (palavra === invertida) {
  console.log("É um palíndromo");
} else {
  console.log("Não é um palíndromo");
}