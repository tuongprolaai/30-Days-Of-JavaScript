const a:number[] = [4, 5, 8, 9]
const b:number[] = [3, 4, 5, 7]
// const countries:string[] = ['Finland', 'Sweden', 'Norway']
// Exercises:Level 1
// 1. create an empty set
const emptySet :Set<string> = new Set();

// 2. Create a set containing 0 to 10 using loop
const numberSet: Set<number> = new Set();
for(let i:number = 0; i <= 10; i++){
    numberSet.add(i);
}

// 3. Remove an element from a set
numberSet.delete(3);

// 4. Clear a set
numberSet.clear();

// 5. Create a set of 5 string elements from array
const fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];
const fruistSet: Set<string> = new Set(fruits);

// 6. Create a map of countries and number of characters of a country
const countrieS: string[] = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const countriesMap: Map<string, number> = new Map();
for (const country of countrieS) {
  countriesMap.set(country, country.length);
}

// Exercises:Level 2
// 1. Find a union b
const unionSet: Set<number> = new Set([...a, ...b]);

// 2. Find a intersection b
const intersectionSet: Set<number> = new Set(a.filter(num=>b.includes(num)));

// 3. Find a with b
const differenceSet: Set<number> = new Set(a.filter(num=>!b.includes(num)));

// Exercises:Level 3
// 1.  How many languages are there in the countries object file.
import {countries} from "./countries_data";
let arrayLang: string[] = [];
countries.forEach(country=>{
    arrayLang = [...arrayLang, ...country.languages];
})
const setLang: Set<string> = new Set(arrayLang);
console.log(setLang.size);