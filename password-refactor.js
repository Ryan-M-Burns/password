const args = process.argv.slice(2).join(' ');

const obfuscate = function(strToObfuscate) {
  let obfuscatedString = '';

  for (let index = 0; index < strToObfuscate.length; index++) {
    let letter = strToObfuscate[index];

    switch (letter) {
    case 'a':
      obfuscatedString += '4';
      break;
    case 'e':
      obfuscatedString += '3';
      break;
    case 'o':
      obfuscatedString += '0';
      break;
    case 'l':
      obfuscatedString += '1';
      break;
    default:
      obfuscatedString += letter;
    }

  }

  return obfuscatedString;
};

const printObfuscatedString = function(userInput) {
  console.log(obfuscate(userInput));
};

printObfuscatedString(args);