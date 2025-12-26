// Exercises: Level 1
// 1. Create an empty object called dog
{
    const dog = {};
}
// 2. Print the the dog object on the console
{
    const dog = {};
    console.log(dog);
}

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
interface Animal {
    name: string;
    legs: number;
    color: string;
    age: number;
    [key: string]: any;
    bark: () => string;
}
const dog: Animal = {
    name: "Dog",
    legs: 4,
    color: "Yellow",
    age: 4,
    bark() {
        return `woof woof`;
    },
};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// 5.Set new properties the dog object: breed, getDogInfo
dog.breed = "Husky";
dog.getDogInfo = () => {
    console.log(`${dog.name}, ${dog.legs}, ${dog.color}, ${dog.breed}`);
};

// Exercises: Level 2
interface User {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

interface Users {
    [key: string]: User;
}
const users: Users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: "asab@asab.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};
// 1. Find the person who has many skills in the users object.
const findMostSkill = (usersObject: Users): string => {
    let maxSkills = 0;
    let personName = "";
    for (const [name, data] of Object.entries(usersObject)) {
        if (data.skills.length > maxSkills) {
            maxSkills = data.skills.length;
            personName = name;
        }
    }
    return personName;
};

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
const countUsersData = (usersObject: Users) => {
    const usersList = Object.values(usersObject);
    const loggedInCount = usersList.filter((user) => user.isLoggedIn).length;
    const highPointsCount = usersList.filter(
        (user) => user.points >= 50
    ).length;

    return {
        loggedInCount,
        highPointsCount,
    };
};

// 3. Find people who are MERN stack developer from the users object
const findMernDevelopers = (usersObject: Users): string[] => {
    const mernSkills = ["MongoDB", "Express", "React", "Node"];

    return Object.keys(usersObject).filter((name) => {
        const userSkills = usersObject[name]!.skills;
        return mernSkills.every((skill) => userSkills.includes(skill));
    });
};

// 4. Set your name in the users object without modifying the original users object
const myName = "Do Phuc Tuong";
const myData: User = {
    email: "phuctuong123456@gmail.com",
    skills: ["HTML", "CSS", "JS", "TS"],
    age: 24,
    isLoggedIn: true,
    points: 100,
};

const updateUsers: Users = { ...users, [myName]: myData };

// 5. Get all keys or properties of users object
const allKeys: string[] = Object.keys(users);

// 6. Get all the values of users object
const allValues: User[] = Object.values(users);

// Exercises: Level 3
// 1.
interface Entry {
    amount: number;
    description: string;
}
interface PersonAccount {
    firstName: string;
    lastName: string;
    incomes: Entry[];
    expenses: Entry[];
    totalIncome(): number;
    totalExpense(): number;
    accountInfo(): string;
    addIncome(amount: number, description: string): void;
    addExpense(amount: number, description: string): void;
    accountBalance(): number;
}

const personAccount: PersonAccount = {
    firstName: "Do",
    lastName: "Phuc Tuong",
    incomes: [
        { amount: 5000, description: "Salary" },
        { amount: 1000, description: "Bonus" },
    ],
    expenses: [
        { amount: 2000, description: "Rent" },
        { amount: 500, description: "Food" },
    ],

    totalIncome() {
        return this.incomes.reduce((total, inc) => total + inc.amount, 0);
    },

    totalExpense() {
        return this.expenses.reduce((total, exp) => total + exp.amount, 0);
    },

    addIncome(amount, description) {
        this.incomes.push({ amount, description });
    },

    addExpense(amount, description) {
        this.expenses.push({ amount, description });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    },

    accountInfo() {
        return `Account Owner: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Current Balance: ${this.accountBalance()}`;
    },
};
