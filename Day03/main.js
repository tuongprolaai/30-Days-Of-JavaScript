console.log("Exercises: Level 1");
console.log(
  "1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types."
);
let firstName = "Do";
let lastName = "Phuc Tuong";
let country = "VietNam";
let city = "DakLak";
let age = 24;
let isMarried = false;
let year = 2025;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log("");
console.log(
  `2. Check if type of '10' is equal to 10: ${typeof "10" === typeof 10}`
);
console.log("");
console.log(
  `3. Check if parseInt('9.8') is equal to 10: ${parseInt("9.8") === 10}`
);
console.log("");
console.log("4. Boolean value is either true or false.");
console.log("4.1 Write three JavaScript statement which provide truthy value.");
console.log(`1 === 1: ${1 === 1}`);
console.log(`5 > 3: ${5 > 3}`);
console.log(`"Tuong" !== "Do": ${"Tuong" !== "Do"}`);
console.log("");
console.log("4.2 Write three JavaScript statement which provide falsy value.");
console.log(`1 !== 1: ${1 !== 1}`);
console.log(`5 < 3: ${5 < 3}`);
console.log(`'Tuong' === 'Do': ${"Tuong" === "Do"}`);
console.log("");
console.log(
  "5. Hãy tìm ra kết quả của các biểu thức so sánh sau không sử dụng console.log(). Sau khi làm xong, hãy xác nhận nó bằng console.log()"
);
console.log(`4 > 3: ${4 > 3}`);
console.log(`4 >= 3: ${4 >= 3}`);
console.log(`4 < 3: ${4 < 3}`);
console.log(`4 <= 3: ${4 <= 3}`);
console.log(`4 == 4: ${4 == 4}`);
console.log(`4 === 4: ${4 === 4}`);
console.log(`4 != 4: ${4 != 4}`);
console.log(`4 !== 4: ${4 !== 4}`);
console.log(`4 != '4': ${4 != "4"}`);
console.log(`4 == '4': ${4 == "4"}`);
console.log(`4 === '4': ${4 === "4"}`);
console.log(
  `Find the length of python and jargon and make a falsy comparison statement: ${
    "python".length > "jargon".length
  }`
);
console.log("");
console.log(
  "6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()"
);
console.log(`4 > 3 && 10 < 12: ${4 > 3 && 10 < 12}`);
console.log(`4 > 3 && 10 > 12: ${4 > 3 && 10 > 12}`);
console.log(`4 > 3 || 10 < 12: ${4 > 3 || 10 < 12}`);
console.log(`4 > 3 || 10 > 12: ${4 > 3 || 10 > 12}`);
console.log(`!(4 > 3): ${!(4 > 3)}`);
console.log(`!(4 < 3): ${!(4 < 3)}`);
console.log(`!(false): ${!false}`);
console.log(`!(4 > 3 && 10 < 12): ${!(4 > 3 && 10 < 12)}`);
console.log(`!(4 > 3 && 10 > 12): ${!(4 > 3 && 10 > 12)}`);
console.log(`!(4 === '4'): ${!(4 === "4")}`);
console.log(
  `There is no 'on' in both dragon and python: ${
    !"dragon".includes("on") && !"python".includes("on")
  }`
);
console.log("");
console.log("7. Use the Date object to do the following activities");
const date = new Date();
console.log(`i. What is the year today?: ${date.getFullYear()}`);
console.log(`ii. What is the month today as a number?: ${date.getMonth()}`);
console.log(`iii. What is the date today?: ${date.getDate()}`);
console.log(`iv. What is the day today as a number?: ${date.getDay()}`);
console.log(`v. What is the hours now?: ${date.getHours()}`);
console.log(`vi. What is the minutes now?: ${date.getMinutes()}`);
console.log(
  `vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.: ${date.getTime()}`
);
console.log("");
console.log("Bài tập: Level 2");
console.log(
  "1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)."
);
const base = Number(prompt("Enter base: "));
const height = Number(prompt("Enter height: "));
console.log(`The area of the triangle is ${0.5 * base * height}`);
console.log("");
console.log(
  "2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)"
);
const sideA = Number(prompt("Enter side a: "));
const sideB = Number(prompt("Enter side b: "));
const sideC = Number(prompt("Enter side c: "));
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`);
console.log("");
console.log(
  "3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))"
);
const lenght = Number(prompt("Enter length: "));
const width = Number(prompt("Enter width: "));
console.log(
  `Area is ${lenght * width} and Perimeter is ${2 * (lenght + width)}`
);
console.log("");
console.log("4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.");
const r = Number(prompt("Enter radius: "));
console.log(`Area is ${Math.PI * Math.pow(r,2)} and Circumference is ${2*Math.PI*r}`);
console.log("");
console.log("5. Calculate the slope, x-intercept and y-intercept of y = 2x -2");
let sl = 2;
let y = 2*0-2;
let x = 2/2;
console.log(`Slope: ${sl}, y: ${y} and x: ${x}`);
console.log("");
console.log("6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)");
let m = (10-2)/(6-2);
console.log(`Slope is: ${m}`);
console.log("");
console.log(`7. Compare the slope of above two questions.: ${sl === m}`);
console.log("");
console.log("8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.");
let x1;
let y1;
// thử x = -5
x1 = -5;
y1 = x1 * x1 + 6 * x1 + 9;
console.log("x =", x1, "=> y =", y1);
// thử x1 = -4
x1 = -4;
y1 = x1 * x1 + 6 * x1 + 9;
console.log("x =", x1, "=> y =", y1);
// thử x1 = -3
x1 = -3;
y1 = x1 * x1 + 6 * x1 + 9;
console.log("x =", x1, "=> y =", y1);
console.log("");
console.log("9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?");
const hours = Number(prompt("Enter hours: "));
const ratePerHour = Number(prompt("Enter rate per hour: "));
console.log(`Your weekly earning is ${hours * ratePerHour}`);
console.log("");
console.log("10. If the length of your name is greater than 7 say, your name is long else say your name is short.");
const myName = "Do Phuc Tuong";
const result = myName.length > 7 ? "Your name is long" : "Your name is short";
console.log(result);
console.log("");
console.log("11. Compare your first name length and your family name length and you should get this output.");
let firstName1 = "Asabeneh";
let lastName1 = "Yetayeh";
let result1 = firstName1 > lastName1 ? "longer than" : firstName1 < lastName1 ? "shorter than" : "equal";
console.log(`Your first name, ${firstName1} is ${result1} your family name, ${lastName1} `);
console.log("");
console.log("12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.");
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you`);
console.log("");
console.log("13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.");
const birthYear = Number(prompt("Enter birth year: "));
const result2 = birthYear >= 18 ? "You are older enough to drive" : `You will be allowed to drive after ${18 - birthYear} years`;
console.log(result2);
console.log("14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years");
let years = prompt("Enter number of years you live: ");
let seconds = years * 365 * 24 * 60 * 60;
console.log("You lived " + seconds + " seconds.");
console.log("15. Create a human readable time format using the Date time object");
let now = new Date();
let year1 = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;
hour = hour < 10 ? "0" + hour : hour;
minute = minute < 10 ? "0" + minute : minute;
console.log("i. YYYY-MM-DD HH:mm");
console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute);
console.log("");
console.log("ii. DD-MM-YYYY HH:mm");
console.log(day + "-" + month + "-" + year + " " + hour + ":" + minute);
console.log("");
console.log("iii. DD/MM/YYYY HH:mm");
console.log(day + "/" + month + "/" + year + " " + hour + ":" + minute);
console.log("");
console.log("Exercises: Level 3")
console.log("1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )YYY-MM-DD HH:mm eg. 20120-01-02 07:05");
console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute);

