const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
// const countries:string[] = ['Finland', 'Sweden', 'Norway']
// Exercises:Level 1
// 1. create an empty set
const emptySet = new Set();
// 2. Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
}
// 3. Remove an element from a set
numberSet.delete(3);
// 4. Clear a set
numberSet.clear();
// 5. Create a set of 5 string elements from array
const fruits = ["Apple", "Banana", "Orange", "Mango"];
const fruistSet = new Set(fruits);
// 6. Create a map of countries and number of characters of a country
const countrieS = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const countriesMap = new Map();
for (const country of countrieS) {
    countriesMap.set(country, country.length);
}
// Exercises:Level 2
// 1. Find a union b
const unionSet = new Set([...a, ...b]);
// 2. Find a intersection b
const intersectionSet = new Set(a.filter(num => b.includes(num)));
// 3. Find a with b
const differenceSet = new Set(a.filter(num => !b.includes(num)));
// Exercises:Level 3
// 1.  How many languages are there in the countries object file.
import { countries } from "./countries_data.js";
let arrayLang = [];
countries.forEach(country => {
    arrayLang = [...arrayLang, ...country.languages];
});
const setLang = new Set(arrayLang);
console.log(setLang.size);
//# sourceMappingURL=main.js.map