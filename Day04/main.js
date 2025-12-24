console.log("Exercises: Level 1");
console.log(
  "1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18."
);
{
  let age = Number(prompt("Enter your age: "));
  if (age >= 18) {
    console.log("You are old enough to drive");
  } else {
    console.log(`You are left with ${18 - age} years to drive.`);
  }
}
console.log("");
console.log(
  "2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input."
);
{
  let myAge = 24;
  let yourAge = Number(prompt("Enter your age: "));
  if (yourAge > myAge) {
    console.log("You are " + (yourAge - myAge) + " years older than me.");
  } else if (yourAge < myAge) {
    console.log("I am " + (myAge - yourAge) + " years older than you.");
  } else {
    console.log("We are the same age.");
  }
}
console.log("");
console.log(
  "3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways"
);
{
  let a = 4;
  let b = 3;

  if (a > b) {
    console.log(a + " is greater than " + b);
  } else {
    console.log(a + " is less than " + b);
  }
  console.log(a > b ? a + " is greater than " + b : a + " is less than " + b);
}
console.log("");
console.log(
  "4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?"
);
{
  let number = Number(prompt("Enter a number:"));

  if (number % 2 === 0) {
    console.log(number + " is an even number");
  } else {
    console.log(number + " is an odd number");
  }
}
console.log("");
console.log("Exercises - Level 2");
console.log(
  "1. Write a code which can give grades to students according to theirs scores:"
);
{
  let score = Number(prompt("Enter score:"));

  if (score >= 80 && score <= 100) console.log("Grade A");
  else if (score >= 70) console.log("Grade B");
  else if (score >= 60) console.log("Grade C");
  else if (score >= 50) console.log("Grade D");
  else console.log("Grade F");
}
console.log("");
console.log(
  "2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :"
);
{
  let month = prompt("Enter month:").toLowerCase();

  if (month === "september" || month === "october" || month === "november") {
    console.log("Autumn");
  } else if (
    month === "december" ||
    month === "january" ||
    month === "february"
  ) {
    console.log("Winter");
  } else if (month === "march" || month === "april" || month === "may") {
    console.log("Spring");
  } else if (month === "june" || month === "july" || month === "august") {
    console.log("Summer");
  } else {
    console.log("Invalid month");
  }
}
console.log("");
console.log(
  "3. Check if a day is weekend day or a working day. Your script will take day as an input."
);
{
  let day = prompt("What is the day today?").toLowerCase();

  if (day === "saturday" || day === "sunday") {
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekend.");
  } else {
    console.log(
      day.charAt(0).toUpperCase() + day.slice(1) + " is a working day."
    );
  }
}
console.log("Exercises: Level 3");
console.log("1. Write a program which tells the number of days in a month.");
{
  let month = prompt("Enter a month:").toLowerCase();
  let year = parseInt(prompt("Enter year:"));

  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (month === "february") {
    console.log(isLeapYear ? "29 days" : "28 days");
  } else if (
    month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november"
  ) {
    console.log("30 days");
  } else {
    console.log("31 days");
  }
}
