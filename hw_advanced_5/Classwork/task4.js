/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

var UserText = document.getElementById('text-to-work');
var UserSelectStap = document.getElementById('encrypt-step');
var UserStep = Number(UserSelectStap.value);
var result = document.getElementById('output');
var Encrypt = document.getElementById('encrypt-btn');
var Decrypt = document.getElementById('decrypt-btn');
var Reset = document.getElementById('btn-reset');
var TextToWork;
var pos;


var Numbers = ['0','1','2','3','4','5','6','7','8','9'];

var EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];

var EngAlfUpEncrypt = Array(26); 
var EngAlfLowerEncrypt = Array(26);
var NumbersEncrypt = Array(10);

initEncrypt();

UserSelectStap.addEventListener('change', function() {
  UserStep = Number(this.value);
  initEncrypt();
});

function initEncrypt() {

  NumbersEncrypt = CezarEncrypt(UserStep, Numbers);
  EngAlfUpEncrypt = CezarEncrypt(UserStep, EngAlfUp);
  EngAlfLowerEncrypt = CezarEncrypt(UserStep, EngAlfLower);
}


function CezarEncrypt(stap, arr) {
  var CopyAlf = arr.slice();
  var i = 0;
  
  while ((i + stap) < (CopyAlf.length)) {
    var buff = CopyAlf[i];
    CopyAlf[i] = CopyAlf[i + stap];
    CopyAlf[i + stap] = buff;
    i++;     
  }
  return CopyAlf;
}



function contains(symb, arr) {
  var letter = symb;
  pos = 0;
  for (var i = 0; i < arr.length; i++) {
    if (letter === arr[i]) {
      pos = i;
      return true;
      break;
    }
  }
}

function encrypt(text) {
  var result = '';
  for (var i = 0; i <= text.length; i++) {
    var symbol = text[i];

    if (contains(symbol, Numbers)) {
      symbol = NumbersEncrypt[pos];
      result += symbol;
    }
    if (contains(symbol, EngAlfUp)) {
        symbol = EngAlfUpEncrypt[pos];
        result += symbol;
    }
    if ((contains(symbol, EngAlfLower))) {
        symbol = EngAlfLowerEncrypt[pos];
        result += symbol;
    }
  }
  return result;
}

function decrypt(text) {
  var result = '';
  for (var i = 0; i <= text.length; i++) {
    var symbol = text[i];
    if (contains(symbol, NumbersEncrypt)) {
      symbol = Numbers[pos];
      result += symbol;
    }
    if (contains(symbol, EngAlfUpEncrypt)) {
        symbol = EngAlfUp[pos];
        result += symbol;
    }
    if ((contains(symbol, EngAlfLowerEncrypt))) {
        symbol = EngAlfLower[pos];
        result += symbol;
    }
  }
  return result;
}

Encrypt.addEventListener('click', function() {
  TextToWork = UserText.value;
  result.value = encrypt(TextToWork);
});
Decrypt.addEventListener('click', function() {
  TextToWork = UserText.value;
  result.value = decrypt(TextToWork);
});
Reset.addEventListener('click', function() {
  UserText.value = '';
  result.value = '';
});
