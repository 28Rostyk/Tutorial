// function findLongestWord(string) {
//   // Change code below this line
//   const newArray = string.split(" ");
//   console.log(newArray);
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < newArray.length; i += 1) {
//     wordLength = newArray[1].length;
//     console.log(wordLength);

//     if (newArray[i].length > wordLength) {
//       longestWord = newArray[i];
//       console.log(longestWord);
//     }
//   }
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//       console.log(newArray);
//     }
//   }

//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += key;
//       console.log(propCount);
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);
//   const values = Object.values(salaries);

//   totalSalary += values;
//   console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(Object.values(color));
//   console.log(hexColors);
// }

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const array = [];
  for (const product of products) {
    const keys = Object.keys(product);
    if (!keys.includes(propName)) {
      return array;
    }
    array.push(product[propName]);
  }
  console.log(array);
  // Change code above this line
}

getAllPropValues("name");
