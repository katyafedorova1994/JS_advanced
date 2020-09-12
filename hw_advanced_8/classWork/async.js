/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/



async function getData() {
  let res = await fetch('http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2');
  let data = await res.json();
  
  return data;
}
async function initTable() {
  const data = await getData();
  new Table(document.querySelector('body'), data);
}

initTable();


class Table {
  constructor(body,data) {
      this.data = data;
      this.body = body;

      this.Build();
  }
  
  Build(){

      document.body.appendChild(this.BuildHeader());
      document.body.appendChild(this.BuildBody());
  }

  BuildHeader() {
      let tableHead = document.createElement('thead');

      tableHead.innerHTML = `
          <tr>
              <th>#</th>
              <th>Company</th>
              <th>Balance</th>
              <th>Показать дату регистрации</th>
              <th>Показать адресc</th>
          </tr>
      `;

      return tableHead;
  }

  BuildBody() {
      let tableBody = document.createElement('tbody');

      this.data.forEach( (item, i) => {
          let bodyRow = document.createElement('tr');
          bodyRow.innerHTML = `
              <td>${i}</td>
              <td>${item.company}</td>
              <td>${item.balance}</td>
              <td>
                  <button class="_btnRegistrationDate">show/hide</button>
                  <span class="hidden-data">${item.registered}</span>
              </td>
              <td>
                  <button class="_btnAddress">show/hide</button>
                  <span class="hidden-data">
                      country: ${item.address.country},
                      <br>
                      city: ${item.address.city},
                      <br>
                      street: ${item.address.city}, ${item.address.house}
                  </span>
              </td>
          `;

          bodyRow.querySelector('._btnRegistrationDate').addEventListener('click', (e) => {
              e.target.classList.toggle('show');
          });

          bodyRow.querySelector('._btnAddress').addEventListener('click', (e) => {
              e.target.classList.toggle('show');
          });

          tableBody.appendChild(bodyRow);
      });

      return tableBody;
  }
}        





// async function getUserWithFriends(){
//   const getUserResponse = await fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2")
//   const users = await getUserResponse.json();

//   const selectedUserName = users[0];
//   console.log(selectedUserName);

//   const getUserFriends = await fetch("http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2");
//   const UserFriends = await getUserFriends.json();

//   console.log(UserFriends);
//   let { age, name, gender } = selectedUserName;
//   const CombinedUser = {
//     age,
//     name,
//     gender,
//     friends: UserFriends[0].friends
//   };
//   return CombinedUser;
// }

// let UserWithFriends = getUserWithFriends();
//     UserWithFriends.then( data => console.log('Final Person:', data));