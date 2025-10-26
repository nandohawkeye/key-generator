import genKey from './generators';

const generatedKeyLabel = document.querySelector('.key-generated-label');
const qtdCaracters = document.querySelector('.qtd-caracters');
const chkCapitalLetters = document.querySelector('.chk-capital-letters');
const chkLowercase = document.querySelector('.chk-lowercases');
const chkNumbers = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const genKeyButton = document.querySelector('.key-gen-button');

export default () => {
  genKeyButton.addEventListener('click', () => {
    generatedKeyLabel.innerHTML = gen();
  });
};

function gen() {
  const key = genKey(
    qtdCaracters.value,
    chkCapitalLetters.checked,
    chkLowercase.checked,
    chkNumbers.checked,
    chkSymbols.checked
  );

  return key || 'Selecione algo';
}