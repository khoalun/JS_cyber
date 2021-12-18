"use strict";

// a. Finding sum of all number in an array.
var a = [3, -5, -6, 5, 12, -4];
var tong = 0;

for (var _i = 0, _a = a; _i < _a.length; _i++) {
  var item = _a[_i];
  tong += item;
}

console.log(tong); // c. Finding sum of of number in an array

var a = [3, -5, -6, 5, 12, -4, -4];
var sumOdd = 0;

for (var _i2 = 0, _a2 = a; _i2 < _a2.length; _i2++) {
  var item = _a2[_i2];

  if (item % 2 != 0) {
    sumOdd += item;
  }
}

console.log(sumOdd); // b. Finding the largest negative number of an array .

var a = [5, -5, -6, 5, 12, -4, -4];
var firstOddNumber = -1;

for (var i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    firstOddNumber = i;
    break;
  }
}

var maxOddNumber = firstOddNumber;

if (firstOddNumber != -1) {
  for (var i = firstOddNumber + 1; i < a.length; i++) {
    if (a[i] < 0 && a[i] > a[maxOddNumber]) {
      maxOddNumber = i;
    }
  }

  var newArray = [];

  for (var i = maxOddNumber; i < a.length; i++) {
    if (a[i] === a[maxOddNumber]) {
      newArray.push(i);
    }
  } // show all negative number  solution 1,2
  // for (i = 0; i < newArray.length; i++) {
  //   index = newArray[i];
  //   console.log(" ( " + index + " , " + a[index] + " ) ");
  //  }


  for (var _i3 = 0, _newArray = newArray; _i3 < _newArray.length; _i3++) {
    var item = _newArray[_i3];
    console.log(" ( " + item + " , " + a[item] + " ) ");
  }
} else {
  console.log("Array dont have negative number");
} // d.Finding largest number in an array


var b = [5, -5, -6, 5, 12, -4, -4, 12, 12];
var numberMax = 0;

for (var i = 0; i < b.length; i++) {
  if (b[i] > b[numberMax]) {
    numberMax = i;
  }
} // checking same number


var newLargestArray = [];

for (var i = numberMax; i < b.length; i++) {
  if (b[i] === b[numberMax]) {
    newLargestArray.push(i);
  }
} // display all number of newarray solution 1, solution 2


for (var _i4 = 0, _newLargestArray = newLargestArray; _i4 < _newLargestArray.length; _i4++) {
  var item = _newLargestArray[_i4];
  console.log("Largest number of an array: " + b[item] + " located at " + item);
} // for (var i = 0; i < newLargestArray; i++) {
//   var index = newLargestArray[i];
//   console.log("Largest located at: " + index + " value " + b[index]);
// }
//Finding largest number by function and sumof3number


function findingLargest(a, b, c) {
  var number = a;

  if (b > number) {
    number = b;
  }

  if (c > number) {
    number = c;
  }

  return number;
}

function sumNumber(a, b, c) {
  return a + b + c;
}

function onClick() {
  var result = findingLargest(2, 3, 4);
  var total = sumNumber(3, 5, 6);
  console.log(result);
  console.log(total);
}

onClick();

function averageScore(math, physic, chemical) {
  return (math + physic + chemical) / 3;
}

function validateScore(good, bad, average) {
  if (averageScore > 8) {
    return "Good";
  } else if (6 < averageScore < 8) {
    return "Normal";
  } else {
    return "Bad";
  }
}

function onChange() {
  var result = averageScore(9, 8, 8);
  var qualify = validateScore(averageScore);
  console.log(result);
  console.log(qualify);
}

onChange();