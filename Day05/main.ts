// 1. Declare an empty array;
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const array5Number: number[] = [1,2,3,4,5,6,7];

// 3. Find the length of your array
console.log(array5Number.length);

// 4. Get the first item, the middle item and the last item of the array
const indexMidle = Math.ceil((array5Number.length - 1)/2);
console.log(`First item: ${array5Number[0]}, Midle item: ${array5Number[indexMidle]} and Last item: ${array5Number[array5Number.length - 1]}`);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes: unknown[] = ["Tuong",24,true, [1,2,3]];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies: string[] = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
const indexMidleCompany = Math.ceil((itCompanies.length - 1)/2);
console.log(`Fist company: ${itCompanies[0]}, Middle company: ${itCompanies[indexMidleCompany]} and Last company: ${itCompanies[itCompanies.length - 1]}`);

// 10. Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0]?.toUpperCase());
console.log(itCompanies[1]?.toUpperCase());
console.log(itCompanies[2]?.toUpperCase());
console.log(itCompanies[3]?.toUpperCase());
console.log(itCompanies[4]?.toUpperCase());
console.log(itCompanies[5]?.toUpperCase());
console.log(itCompanies[6]?.toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const imtCompany: string = "IMT";
if(itCompanies.includes(imtCompany)){
  console.log(imtCompany);
}else{
  console.log(`${imtCompany} is not found.`);
}

// 14. Filter out companies which have more than one 'o' without the filter method
const result: string[] = [];
if(itCompanies[0] &&  itCompanies[0]?.toLowerCase().split("o").length > 2) result.push(itCompanies[0]!);
if(itCompanies[1] &&  itCompanies[1]?.toLowerCase().split("o").length > 2) result.push(itCompanies[1]!);
if(itCompanies[2] &&  itCompanies[2]?.toLowerCase().split("o").length > 2) result.push(itCompanies[2]!);
if(itCompanies[3] &&  itCompanies[3]?.toLowerCase().split("o").length > 2) result.push(itCompanies[3]!);
if(itCompanies[4] &&  itCompanies[4]?.toLowerCase().split("o").length > 2) result.push(itCompanies[4]!);
if(itCompanies[5] &&  itCompanies[5]?.toLowerCase().split("o").length > 2) result.push(itCompanies[5]!);
if(itCompanies[6] &&  itCompanies[6]?.toLowerCase().split("o").length > 2) result.push(itCompanies[6]!);
console.log(result);

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.sort().reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 19. Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length/2);
console.log(itCompanies.slice(middleIndex, middleIndex+1));

// 20. Remove the first IT company from the array
itCompanies.shift();

// 21. Remove the middle IT company or companies from the array;
itCompanies.slice(middleIndex, middleIndex+1);

// 22. Remove the last IT company from the array
itCompanies.pop();

// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);

// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import {countries} from "./countries.js";
import {webTechs}  from "./web_techs.js";

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words: string[] = text.replace(/[\p{P}]/gu, "").split(" ");
console.log(words);
console.log(words.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart:string[] = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");
if(!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf("Honey"),1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes("Ethiopia")){
  console.log("ETHIOPIA");
}else{
  countries.push("Ethiopia");
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes("Sass")){
  console.log("Sass is a CSS preprocess");
}else{
  webTechs.push("Sass");
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

// Exercise: Level 3
// 1. The following is an array of 10 students ages:
const ages: readonly number[] = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
const sortedAges = [...ages].sort();
const minAges = Math.min(...sortedAges);
const maxAges = Math.max(...sortedAges);
console.log(sortedAges);
console.log(maxAges);
console.log(minAges);

// Find the median age(one middle item or two middle items divided by two)
const ageMiddle = Math.floor(sortedAges.length/2);
if(sortedAges.length % 2 !== 0){
  console.log(sortedAges[ageMiddle]);
} else{
  console.log((sortedAges[ageMiddle - 1]! + sortedAges[ageMiddle + 1]!) / 2);
}

// Find the average age(all items divided by number of items)
const totalAges = ages.reduce((accumulator, currentValue)=> accumulator + currentValue);
const averageAge = totalAges/ages.length;
console.log(averageAge);

// Find the range of the ages(max minus min)
console.log(maxAges - minAges);

// Compare the value of (min - average) and (max - average), use abs() method
const diffMin = Math.abs(minAges - averageAge);
const diffMax = Math.abs(maxAges - averageAge);
if(diffMin > diffMax){
  console.log("min-average > max-average");
}else if(diffMin < diffMax){
  console.log("min-average < max-average")
}else{
  console.log("min-average = max-average")
}

// 1. Slice the first ten countries from the countries array
console.log(countries.slice(0,10)); 

// 2. Find the middle country(ies) in the countries array
const middleCountry = Math.floor(countries.length / 2);
console.log(countries[middleCountry]);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if(countries.length%2===0){
  console.log(countries.slice(0,middleCountry));
  console.log(countries.slice(middleCountry));
}else if(countries.length%2!==0){
  countries.unshift("VietNam");
}else console.log("Mảng rỗng");
