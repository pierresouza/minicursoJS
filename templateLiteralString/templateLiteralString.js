const ireland = {
  live: "Dublin",
  love: "Galway",
};

const text = "Eu moro em" + ireland.live + "e sou apaixonado por" + ireland.love;

const newText = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}`;

const fruits = "banana" + `\n` + "orange" + `\n` + "apple"; // o `\n faz com uma quebra de linha seja feita igu o br no html`

const newFruits = `banana, orange, apple`;

console.log(newFruits); // I live in Dublin but I love Galway
