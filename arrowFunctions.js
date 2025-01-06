const ireland = ["Dublin", "Galway", "Cork"];

const loveArrow = ireland.map(function (name) {
  //Função anônima
  return `I love ${name}`;
});

const loveArrowSingle = ireland.map((name) => {
  //Arrow function
  `I love ${name}`;
});

const loveArrowOneLine = ireland.map((name) => `I love ${name}`);

const loveChain = ireland.filter((name) => name === "Dublin").map((name) => `I love ${name}`);

console.log(loveChain);
