var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
var age = 250;
var isMarried = true;
var student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
};
var txt = "{\n    \"Alex\": {\n        \"email\": \"alex@alex.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 30\n    },\n    \"Asab\": {\n        \"email\": \"asab@asab.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"Redux\",\n            \"MongoDB\",\n            \"Express\",\n            \"React\",\n            \"Node\"\n        ],\n        \"age\": 25,\n        \"isLoggedIn\": false,\n        \"points\": 50\n    },\n    \"Brook\": {\n        \"email\": \"daniel@daniel.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"React\",\n            \"Redux\"\n        ],\n        \"age\": 30,\n        \"isLoggedIn\": true,\n        \"points\": 50\n    },\n    \"Daniel\": {\n        \"email\": \"daniel@alex.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"Python\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 40\n    },\n    \"John\": {\n        \"email\": \"john@john.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"React\",\n            \"Redux\",\n            \"Node.js\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": true,\n        \"points\": 50\n    },\n    \"Thomas\": {\n        \"email\": \"thomas@thomas.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"React\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 40\n    },\n    \"Paul\": {\n        \"email\": \"paul@paul.com\",\n        \"skills\": [\n            \"HTML\",\n            \"CSS\",\n            \"JavaScript\",\n            \"MongoDB\",\n            \"Express\",\n            \"React\",\n            \"Node\"\n        ],\n        \"age\": 20,\n        \"isLoggedIn\": false,\n        \"points\": 40\n    }\n}\n";
// Exercises level 1
// 1. Change skills array to JSON using JSON.stringify()
var skillJSON = JSON.stringify(skills);
// 2. Stringify the age variable
var ageJSON = JSON.stringify(age);
// 3. Stringify the isMarried variable
var isMarriedJSON = JSON.stringify(isMarried);
// 4. Stringify the student object
var studentJSON = JSON.stringify(student);
// Exercises Level 2
// 1. Stringify the students object with only firstName, lastName and skills properties
{
    var studentJSON_1 = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
}
// Exercises Level 3
// 1. Parse the txt JSON to object.
var txtJSON = JSON.parse(txt);
console.log(txtJSON);
// 2. Find the user who has many skills from the variable stored in txt.
var maxSkills = 0;
var userWithMostSkills = '';
for (var user in txtJSON) {
    var numSkills = txtJSON[user].skills.length;
    if (numSkills > maxSkills) {
        maxSkills = numSkills;
        userWithMostSkills = user;
    }
}
console.log("User with most skills: ".concat(userWithMostSkills));
console.log("Number of skills: ".concat(maxSkills));
console.log("Skills: ".concat(txtJSON[userWithMostSkills].skills));
