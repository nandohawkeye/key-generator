const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genCapitalLetters = () => String.fromCharCode(rand(65, 91));
const genLowercase = () => String.fromCharCode(rand(97, 123));
const genNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}!@#$%*()_+=-';
const genSymbol = () => symbols[rand(0, symbols.length)];

export default function genKey(qtd, capitalLetters, lowerCases, numbers, symbols) {
  const keyArray = [];
  qtd = Number(qtd);

  for(let i = 0; i < qtd; i++) {
    capitalLetters && keyArray.push(genCapitalLetters());
    lowerCases && keyArray.push(genLowercase());
    numbers && keyArray.push(genNumber());
    symbols && keyArray.push(genSymbol());
  }

  return keyArray.join('').slice(0, qtd);
}