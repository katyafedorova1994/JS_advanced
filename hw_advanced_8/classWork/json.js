
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/

let myForm = document.getElementById('myForm');
let convertToJSON = document.getElementById('convertToJSON');

convertToJSON.addEventListener('click', (e) => {
    e.preventDefault();
    let obj = {};

    let inputsArr = Array.from(myForm.i).filter( x => x.name !== '');

    inputsArr.forEach( item => {
        obj[item.name] = item.value;
    })

    console.log(JSON.stringify(obj));
});

let parseForm = document.getElementById('parseForm');
let btnParseJSON = document.getElementById('parseJSON');

btnParseJSON.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(parseForm.name.value);
})
