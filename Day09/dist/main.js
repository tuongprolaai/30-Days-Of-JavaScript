// Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];
// 1. Explain the difference between forEach, map, filter, and reduce.
// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// 3. Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
    console.log(country);
});
// 4. Use forEach to console.log each name in the names array.
names.forEach((name) => {
    console.log(name);
});
// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => {
    console.log(number);
});
// 6. Use map to create a new array by changing each country to uppercase in the countries array.
{
    const newCountries = countries.map((country) => country.toUpperCase());
    console.log(newCountries);
}
// 7. Use map to create an array of countries length from countries array.
{
    const newCountries = countries.map((country) => country.length);
    console.log(newCountries);
}
// 8. Use map to create a new array by changing each number to square in the numbers array
{
    const newNumbers = numbers.map((number) => number ** 2);
    console.log(newNumbers);
}
// 9. Use map to change to each name to uppercase in the names array
{
    const newNames = names.map((name) => name.toUpperCase());
    console.log(newNames);
}
// 11. Use filter to filter out countries containing land.
{
    const newCountries = countries.filter((country) => country.toLowerCase().includes("land"));
    console.log(newCountries);
}
// 12. Use filter to filter out countries having six character.
{
    const newCountries = countries.filter((country) => country.length === 6);
    console.log(newCountries);
}
// 13. Use filter to filter out countries containing six letters and more in the country array.
{
    const newCountries = countries.filter((country) => country.length >= 6);
    console.log(newCountries);
}
// 14. Use filter to filter out country start with 'E';
{
    const newCountries = countries.filter((country) => country.startsWith("E"));
    console.log(newCountries);
}
// Exercises: Level 2
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
{
    const totalPrice = products.map(p => p.price).filter((price) => typeof price === 'number').reduce((sum, price) => sum + price, 0);
    console.log(totalPrice);
}
// 2. Find the sum of price of products using only reduce reduce(callback))
{
    const totalPrice = products.reduce((total, p) => {
        if (typeof p.price === 'number') {
            return total + p.price;
        }
        return total;
    }, 0);
    console.log(totalPrice);
}
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
{
    function categorizeCountries(countries) {
        const resultCountries = countries.filter((country) => country.includes('land'));
        return resultCountries;
    }
    console.log(categorizeCountries(countries));
}
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
{
    function getNumberStartLetter(countries) {
        const counts = {};
        countries.forEach(country => {
            const firstLetter = country[0].toUpperCase();
            counts[firstLetter] = (counts[firstLetter] || 0) + 1;
        });
        const result = Object.keys(counts).map(letter => ({
            letter,
            count: counts[letter] ?? 0
        }));
        return result;
    }
    console.log(getNumberStartLetter(countries));
}
// Exercises: Level 3
// 1. Find the 10 most spoken languages:
import { countriesData } from "./countries_data.js";
const sortByName = (countriesData) => {
    return [...countriesData].sort((a, b) => a.name.localeCompare(b.name));
};
console.log(sortByName(countriesData));
// 2. Find the n most spoken languages:
function mostSpokenLanguages(countries, top) {
    const langCounts = {};
    countries.forEach(country => {
        country.languages.forEach(lang => {
            langCounts[lang] = (langCounts[lang] || 0) + 1;
        });
    });
    const langArray = Object.keys(langCounts).map(lang => ({
        country: lang,
        count: langCounts[lang]
    }));
    langArray.sort((a, b) => b.count - a.count);
    return langArray.slice(0, top);
}
console.log(mostSpokenLanguages(countriesData, 10));

// 3. Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countries, top) {
    const arr = countries.sort((a, b) => b.population - a.population);
    const populatedCountries = arr.map(country => ({
        country: country.name,
        population: country.population
    }));
    return populatedCountries.slice(0, top);
}
console.log(mostPopulatedCountries(countriesData, 10));
//# sourceMappingURL=main.js.map