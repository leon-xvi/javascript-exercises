let string = 'Animal loots foliated detail of stool lamina.';

const palindromes = (input)  => {
  let cleaned = input.replace(/\W/g, '').toLowerCase();
  let reversed = cleaned.split('').reverse().join('').toString('');
  return cleaned === reversed;
};


console.log(palindromes(string))
// Do not edit below this line
module.exports = palindromes;
