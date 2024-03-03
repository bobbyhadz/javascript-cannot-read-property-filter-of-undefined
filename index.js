// TypeError: Cannot read property 'filter' of Undefined in JS

// EXAMPLE 1 - Initialize the variable to an empty array

const fromDb = undefined;

const arr = fromDb || [];

const result = arr.filter(element => element);
console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the variable stores an array

// const arr = undefined;

// if (Array.isArray(arr)) {
//   const result = arr.filter(element => element);
//   console.log(result);
// } else {
//   // 👇️ this runs
//   console.log('The variable does NOT store an array');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use the ternary operator

// const arr = undefined;

// const result = arr ? arr.filter(element => element) : [];

// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 4 - Solve the error when working with classes

// class Person {
//   // ✅ initialize colors
//   colors = [];

//   constructor(countries) {
//     // ✅ initialize countries from parameters
//     this.countries = countries;
//   }

//   filterColors() {
//     this.colors.filter(color => color === 'blue');
//   }

//   filterCountries() {
//     this.countries.filter(country => country === 'Chile');
//   }
// }

// const p1 = new Person(['Chile', 'Mexico', 'Peru']);

// p1.filterCountries();
// p1.filterColors();
