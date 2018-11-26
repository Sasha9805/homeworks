// Возраст и подписка по умолчанию
var validAge = 18;
var validSubscr = true;
// Пользовательские параметры
var userName, userAge, userSubscr;
// Варианты выбора подписки
var selectedList = document.getElementById("subscr").options;
// Получаем кнопку
var btnAccess = document.getElementById("access");

// Получаем начальные параметры
function getInfo() {
  userName = document.getElementById("user-name").value;
  userAge = document.getElementById("user-age").value;
  userAge = parseInt(userAge);
  userSubscr = false;

  for (var i = 0; i < selectedList.length; i++) {
    if (selectedList[i].selected && selectedList[i].value == "yes") {
      userSubscr = true;
    }
  }
  
  console.log("Возраст: " + userAge);
  console.log("Имя пользователя: " + userName);
  console.log("Есть ли подписка? " + userSubscr);
}

// Ф-я проверки доступа к сайту у пользователя
function getResult(age, name, subscription) {
  if (age >= validAge && subscription) {
    console.log("Пользователь " + name + " допущен(-а) к сайту!");
  }
  else {
    console.log("Пользователь " + name + " не допущен(-а) к сайту!");
  }
}

// Клик мышью по кнопке
btnAccess.addEventListener("click", function () {
  getInfo();
  getResult(userAge, userName, userSubscr);
});

// console.log(selectedList);