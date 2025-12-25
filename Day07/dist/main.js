// Exercises: Level 1
// 1. Declare a function fullName and it print out your full name.
{
    const fullName = () => {
        console.log("Do Phuc Tuong");
    };
}
// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
{
    const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
}
// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
{
    const addNumbers = (valueA, valueB) => valueA + valueB;
}
// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
{
    const areaOfRectangle = (length, width) => length * width;
}
// 5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
{
    const perimeterOfRectangle = (length, width) => 2 * (length + width);
}
// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
{
    const volumeOfRectPrism = (l, w, h) => l * w * h;
}
// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
{
    const areaOfCircle = (r) => {
        const area = Math.PI * r * r;
        return area;
    };
}
// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
{
    const circumOfCircle = (r) => 2 * Math.PI * r;
}
// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
{
    const calculateDensity = (mass, volume) => mass / volume;
}
// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
{
    const calculateSpeed = (distance, time) => distance / time;
}
// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
{
    const calculateWeight = (mass, gravity = 9.81) => mass * gravity;
}
// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
{
    const convertCelsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
}
// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
{
    function calculateBMI(weight, height) {
        const bmi = weight / (height * height);
        if (bmi < 18.5) {
            return `BMI: ${bmi} - Underweight (Thiếu cân)`;
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            return `BMI: ${bmi} - Normal weight (Bình thường)`;
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            return `BMI: ${bmi} - Overweight (Thừa cân)`;
        }
        else {
            return `BMI: ${bmi} - Obese (Béo phì)`;
        }
    }
}
// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
    const m = month.toLowerCase();
    if (["december", "january", "february"].includes(m))
        return "Winter";
    if (["march", "april", "may"].includes(m))
        return "Spring";
    if (["june", "july", "august"].includes(m))
        return "Summer";
    if (["september", "october", "november"].includes(m))
        return "Autumn";
    return "Tháng không hợp lệ";
};
// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
{
    const findMax = (a, b, c) => {
        return a > b ? (a > c ? a : c) : b > c ? b : c;
    };
}
// Exercises: Level 2
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
{
    function solveLinEquation(a, b, c, x) {
        if (b === 0) {
            if (a === 0) {
                return c === 0 ? "Phương trình vô số nghiệm" : "Phương trình vô nghiệm";
            }
            return `Đường thẳng đứng tại x = ${-c / a}`;
        }
        const y = -(a * x + c) / b;
        return y;
    }
}
// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
{
    function solveQuadEquation(a, b, c) {
        if (a === undefined || b === undefined || c === undefined) {
            return 0;
        }
        if (a === 0) {
            return b !== 0 ? [-c / b] : "Không phải phương trình";
        }
        const delta = b * b - 4 * a * c;
        if (delta > 0) {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return [x1, x2];
        }
        else if (delta === 0) {
            const x = -b / (2 * a);
            return [x];
        }
        else {
            return "Phương trình vô nghiệm thực";
        }
    }
}
// 3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
{
    const printArray = (arr) => {
        arr.forEach((value) => console.log(value));
    };
}
// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
{
    function showDateTime() {
        const now = new Date();
        const date = String(now.getDate()).padStart(2, "0");
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const formattedTime = `${date}/${month}/${year} ${hours}:${minutes}`;
        console.log(formattedTime);
    }
}
// 5. Declare a function name swapValues. This function swaps value of x to y.
{
    function swapValues(x, y) {
        [x, y] = [y, x];
        console.log(`x = ${x}, y = ${y}`);
    }
}
// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
{
    function reverseArray(arr) {
        const newArray = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            newArray.push(arr[i]);
        }
        return newArray;
    }
}
// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
{
    function capitalizeArray(arr) {
        const result = [];
        for (const item of arr) {
            result.push(item.toUpperCase());
        }
        return result;
    }
}
// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
{
    function removeItem(index, arr) {
        const newArray = [...arr];
        newArray.splice(index, 1);
        return newArray;
    }
}
// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(n) {
    let evens = 0;
    let odds = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evens++;
        }
        else {
            odds++;
        }
    }
    console.log(`The number of odds are ${odds}`);
    console.log(`The number of evens are ${evens}`);
}
// Exercises: Level 3
// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
{
    function userIdGeneratedByUser() {
        const charLength = Number(prompt("Enter number of characters:"));
        const idCount = Number(prompt("Enter number of IDs to generate:"));
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < idCount; i++) {
            let newId = "";
            for (let j = 0; j < charLength; j++) {
                newId += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            console.log(newId);
        }
    }
}
// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
{
    function arrayOfHexaColors(count) {
        const chars = "0123456789abcdef";
        const colors = [];
        for (let i = 0; i < count; i++) {
            let hex = "#";
            for (let j = 0; j < 6; j++) {
                hex += chars[Math.floor(Math.random() * chars.length)];
            }
            colors.push(hex);
        }
        return colors;
    }
}
// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
{
    function arrayOfRgbColors(count) {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            colors.push(`rgb(${r},${g},${b})`);
        }
        return colors;
    }
}
// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
{
    function convertHexaToRgb(hexa) {
        let hex = hexa.replace("#", "");
        if (hex.length === 3) {
            hex = hex
                .split("")
                .map((char) => char + char)
                .join("");
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgb(${r},${g},${b})`;
    }
}
// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
{
    function convertRgbToHexa(r, g, b) {
        const toHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };
        return "#" + toHex(r) + toHex(g) + toHex(b);
    }
}
// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
{
    function generateColors(type, count) {
        const chars = "0123456789abcdef";
        const colors = [];
        for (let i = 0; i < count; i++) {
            if (type.toLowerCase() === "hexa") {
                let hex = "#";
                for (let j = 0; j < 6; j++) {
                    hex += chars[Math.floor(Math.random() * chars.length)];
                }
                colors.push(hex);
            }
            else if (type.toLowerCase() === "rgb") {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                colors.push(`rgb(${r},${g},${b})`);
            }
        }
        return count === 1 ? colors[0] : colors;
    }
}
// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
{
    function shuffleArray(arr) {
        const newArr = [...arr];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }
}
// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
{
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
{
    function isEmpty(val) {
        if (val === undefined || val === null) {
            return true;
        }
        if (typeof val === "string" || Array.isArray(val)) {
            return val.length === 0;
        }
        if (typeof val === "object") {
            return Object.keys(val).length === 0;
        }
        return false;
    }
}
export {};
//# sourceMappingURL=main.js.map