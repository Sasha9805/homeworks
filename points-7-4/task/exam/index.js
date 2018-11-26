// Главная ф-я
function getCountNumber(start, end) {
	var arr = [];
  var count = 0;
  for (var i = start; i <= end; i++) {
    arr = decimalToBinary(i);
    if (isTwoUnits(arr)) {
      count++;
    }
  }
  
  if (count == 0) {
    return false;
  }
  else {
    return count;
  }
}

// Ф-я, переводящая число из десятичной в двоичную систему счисления
function decimalToBinary(number) {
  var numberCopy = number;
  var arr = [];

  while (numberCopy >= 1) {
    digit = numberCopy % 2;
    arr.push(digit);
    numberCopy = Math.floor(numberCopy / 2);
  }
  return arr.reverse();
}

// Ф-я, проверяющая, есть ли 2 единицы в двоичном числе
function isTwoUnits(arrOfNumbers) {
  var counter = 0;
  for (var i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] == 1) {
      counter++;
    }
    if (counter > 2) {
      return false;
    }
  }

  if (counter > 2 || counter < 2) {
    return false;
  }
  else {
    return true;
  }
}


module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
		task: getCountNumber
}