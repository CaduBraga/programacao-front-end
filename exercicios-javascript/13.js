let linhas = 7;
let desenho = "";

for (let i = 1; i <= linhas; i++) {
  desenho += "*".repeat(i) + "\n";
}

console.log(desenho);