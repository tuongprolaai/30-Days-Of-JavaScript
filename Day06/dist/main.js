// Exercises: Level 1
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
{
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j <= 10);
}
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
{
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    let j = 10;
    do {
        console.log(j);
        j--;
    } while (j >= 0);
}
// 3. Iterate 0 to n using for loop
{
    const n = 10;
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
}
// 4. Write a loop that makes the following pattern using console.log():
for (let i = 0; i < 7; i++) {
    let temp = "";
    for (let j = 0; j <= i; j++) {
        temp += "#";
    }
    console.log(temp);
}
// 5. Use loop to print the following pattern:
for (let i = 0; i < 11; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
// 6. Using loop print the following pattern
console.log("i\ti^2\ti^3");
for (let i = 0; i < 11; i++) {
    const x = i ** 2;
    const y = i ** 3;
    console.log(`${i}\t${x}\t${y}`);
}
// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0)
            count++;
    }
    if (count === 2)
        console.log(i);
}
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
{
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
}
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
{
    let sumE = 0;
    let sumO = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0)
            sumE += i;
        else if (i % 2 !== 0)
            sumO += i;
    }
    console.log(`The sum of all evensfrom 0 to 100 is ${sumE}. And the sum of all odds from 0 to 100 is ${sumO}`);
}
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumE = 0;
let sumO = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0)
        sumE += i;
    else if (i % 2 !== 0)
        sumO += i;
}
console.log([sumE, sumO]);
// 13. Develop a small script which generate array of 5 random numbers
{
    const arrNumberRandom = [];
    for (let i = 1; i <= 5; i++) {
        arrNumberRandom.push(Math.floor(Math.random() * 10 + 1));
    }
    console.log(arrNumberRandom);
}
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
{
    const arrNumberRandom = [];
    for (let i = 1; i <= 5; i++) {
        const numRandom = Math.floor(Math.random() * 10 + 1);
        if (!arrNumberRandom.includes(numRandom))
            arrNumberRandom.push(numRandom);
    }
    console.log(arrNumberRandom);
}
// 15. Develop a small script which generate a six characters random id:
let id = "";
while (id.length < 6) {
    const xRandom = Math.floor(Math.random() * (122 - 48 + 1) + 48);
    if ((xRandom >= 48 && xRandom <= 57) ||
        (xRandom >= 65 && xRandom <= 90) ||
        (xRandom >= 97 && xRandom <= 122)) {
        id += String.fromCharCode(xRandom);
    }
}
console.log(id);
// Exercises: Level 2
// 1. Develop a small script which generate any number of characters random id:
{
    let id = "";
    const temp = Math.floor(Math.random() * 10 + 1);
    while (id.length < temp) {
        const xRandom = Math.floor(Math.random() * (122 - 48 + 1) + 48);
        if ((xRandom >= 48 && xRandom <= 57) ||
            (xRandom >= 65 && xRandom <= 90) ||
            (xRandom >= 97 && xRandom <= 122)) {
            id += String.fromCharCode(xRandom);
        }
    }
    console.log(id);
}
// 2. Write a script which generates a random hexadecimal number.
{
    let id = "#";
    while (id.length < 6) {
        const xRandom = Math.floor(Math.random() * (122 - 48 + 1) + 48);
        if ((xRandom >= 48 && xRandom <= 57) ||
            (xRandom >= 65 && xRandom <= 90) ||
            (xRandom >= 97 && xRandom <= 122)) {
            id += String.fromCharCode(xRandom);
        }
    }
    console.log(id);
}
// 3. Write a script which generates a random rgb color number.
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(`rgb(${r},${g},${b})`);
}
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];
// 4. Using the above countries array, create the following new array.
{
    const countriesTemp = [];
    for (let country of countries) {
        countriesTemp.push(country.toUpperCase());
    }
    console.log(countriesTemp);
}
// 5. Using the above countries array, create an array for countries length'.
{
    const countriesTemp = [];
    for (let country of countries) {
        countriesTemp.push(country.length);
    }
    console.log(countriesTemp);
}
// 6. Use the countries array to create the following array of arrays:
{
    const countriesTemp = [];
    for (let country of countries) {
        const countryTemp = [];
        countryTemp.push(country);
        countryTemp.push(country.slice(0, 3).toUpperCase());
        countryTemp.push(country.length);
        countriesTemp.push(countryTemp);
    }
    console.log(countriesTemp);
}
// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
{
    const countriesTemp = [];
    for (let country of countries) {
        if (country.includes("land")) {
            countriesTemp.push(country);
        }
    }
    if (countriesTemp.length === 0) {
        console.log("All these countries are without land");
    }
    else {
        console.log(countriesTemp);
    }
}
// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
{
    const countriesTemp = [];
    for (let country of countries) {
        if (country.endsWith("ai")) {
            countriesTemp.push(country);
        }
    }
    if (countriesTemp.length === 0) {
        console.log("These are countries ends without ia");
    }
    else {
        console.log(countriesTemp);
    }
}
// 9. Using the above countries array, find the country containing the biggest number of characters.
let maxLengthCountry = countries[0];
for (let country of countries) {
    if (maxLengthCountry.length < country.length)
        maxLengthCountry = country;
}
console.log(maxLengthCountry);
// 10. Using the above countries array, find the country containing only 5 characters.
let countriesTemp = [];
for (let country of countries) {
    if (country.length === 5)
        countriesTemp.push(country);
}
console.log(countriesTemp);
// 11. Find the longest word in the webTechs array
let maxLengthWeb = webTechs[0];
for (let web of webTechs) {
    if (maxLengthWeb.length < web.length)
        maxLengthWeb = web;
}
console.log(maxLengthWeb);
// 12. Use the webTechs array to create the following array of arrays:
{
    const webTemp = [];
    for (let web of webTechs) {
        const wTemp = [];
        wTemp.push(web);
        wTemp.push(web.length);
        webTemp.push(wTemp);
    }
    console.log(webTemp);
}
// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
{
    let stackTemp = "";
    for (let stack of mernStack) {
        stackTemp += stack[0];
    }
    console.log(stackTemp);
}
// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
{
    const webTechs = [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
    ];
    for (const tech of webTechs) {
        console.log(tech);
    }
}
// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
{
    const fruits = ["banana", "orange", "mango", "lemon"];
    const reversedFruits = [];
    for (let i = fruits.length - 1; i >= 0; i--) {
        reversedFruits.push(fruits[i]);
    }
    console.log(reversedFruits);
}
// 16. Print all the elements of array as shown below.
{
    const fullStack = [
        ["HTML", "CSS", "JS", "React"],
        ["Node", "Express", "MongoDB"],
    ];
    for (const stack of fullStack) {
        for (const tech of stack) {
            console.log(tech.toUpperCase());
        }
    }
}
// Exercises: Level 3
// 1. Copy countries array(Avoid mutation)
{
    const countriesCoppy = [...countries];
}
// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
{
    const countriesCoppy = [...countries].sort();
}
// 3. Sort the webTechs array and mernStack array
{
    const webTechsCoppy = [...webTechs].sort();
    const mernStackCoppy = [...mernStack].sort();
}
// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
{
    const countriesWithLand = [];
    for (const country of countries) {
        if (country.toLowerCase().includes("land")) {
            countriesWithLand.push(country);
        }
    }
}
// 5. Find the country containing the hightest number of characters in the countries array
{
    let longestCountry = "";
    for (const country of countries) {
        if (country.length > longestCountry.length) {
            longestCountry = country;
        }
    }
    console.log(longestCountry);
}
// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
{
    const countriesWithLand = [];
    for (const country of countries) {
        if (country.toLowerCase().includes("land")) {
            countriesWithLand.push(country);
        }
    }
    console.log(countriesWithLand);
}
// 7. Extract all the countries containing only four characters from the countries array and print it as array
{
    const fourLetterCountries = [];
    for (const country of countries) {
        if (country.length === 4) {
            fourLetterCountries.push(country);
        }
    }
    console.log(fourLetterCountries);
}
// 8. Extract all the countries containing two or more words from the countries array and print it as array
const multiWordCountries = [];
for (const country of countries) {
    if (country.includes(" ")) {
        multiWordCountries.push(country);
    }
}
console.log(multiWordCountries);
// 9. Reverse the countries array and capitalize each country and stored it as an array
{
    const countriesCoppy = [];
    for (let country of countries) {
        country = country.toUpperCase();
        countriesCoppy.push(country);
    }
    console.log(countriesCoppy);
}
export {};
//# sourceMappingURL=main.js.map