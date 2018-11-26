var out = document.getElementById("out");
var minNumber = 1;
var maxNumber = 100;

function isSimple(number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

for (var i = minNumber + 1; i < maxNumber; i++) {
  if (isSimple(i)) {
    out.innerHTML += "Число " + i + " -простое. Делители этого числа: " + 1 + " и " + i + "<br>";
  }
}