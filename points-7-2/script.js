var width = +prompt("Введите ширину блока:");
var height = +prompt("Введите высоту блока:");
var countOfIter = 10;

function square(w,h) {
  var w_tmp = w;
  for (var i = 0; i < countOfIter; i++) {
    console.log("Итерация " + (i + 1));
    console.log("Ширина: " + w_tmp);
    console.log("Высота: " + h);
    console.log("Площадь: " + w_tmp * h);
    console.log("---------");
    w_tmp += 10;
  }
}

square(width, height);