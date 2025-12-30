var _a;
// Exercises: Level 1
// 1. Store you first name, last name, age, country, city in your browser localStorage.
var person = {
    firstName: "Do",
    lastName: "Phuc Tuong",
    age: 24,
    country: "VietNam",
    city: "DakLak"
};
localStorage.setItem("person", JSON.stringify(person));
// Exercises: Level 2
// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
var student = {
    firstName: "Do",
    lastName: "Phuc Tuong",
    age: 24,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
    country: "VietNam",
    enrolled: true
};
localStorage.setItem("student", JSON.stringify(student));
console.log(localStorage.getItem("student"));
var storedStudent = JSON.parse((_a = localStorage.getItem("student")) !== null && _a !== void 0 ? _a : "");
console.log(storedStudent);
