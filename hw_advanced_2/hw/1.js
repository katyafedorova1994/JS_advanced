
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

  var buttonContainer = document.getElementById("buttonContainer");

  buttonContainer.onclick = function(e){
    if(e.target.classList.contains("showButton")){
      
      var data = e.target.dataset.tab; 
    
      var tabContainer = document.querySelector(".tabContainer");
      
      var list = tabContainer.querySelectorAll(".tab");
      list.forEach(function(item){
        if (item.dataset.tab == data)
        {
          item.classList.add("active");
        }
      });
    }
  }

    function hideAllTabs () {
    var closebtn = document.createElement('button');
    closebtn.id = 'close';
    closebtn.innerHTML = "Close";
    closebtn.style.background ="green";
    header = document.querySelector("header");
    header.appendChild(closebtn);

    closebtn.onclick = function() {
        var list = document.querySelectorAll(".tab");
        list.forEach(function(item) {
          item.classList.remove('active');
        })
      }
    } 
  
    hideAllTabs();



  


  
  
  
  
    
  
  

  


