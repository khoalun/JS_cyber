// a. Finding sum of all number in an array.

var a = [3, -5, -6, 5, 12, -4];
var tong = 0;

for (var item of a) {
  tong += item;
}
console.log(tong);
// c. Finding sum of of number in an array
var a = [3, -5, -6, 5, 12, -4, -4];

var sumOdd = 0;

for (var item2 of a) {
  if (item2 % 2 !== 0) {
    sumOdd += item2;
  }
}
console.log(sumOdd);

// b. Finding the largest negative number of an array .

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
  }
  // show all negative number  solution 1,2 
  // for (i = 0; i < newArray.length; i++) {
  //   index = newArray[i];

  //   console.log(" ( " + index + " , " + a[index] + " ) ");
  //  }
  for (var item of newArray) {
     console.log(" ( " + item + " , " + a[item] + " ) ");
  }

} else {
  console.log("Array dont have negative number");
}
