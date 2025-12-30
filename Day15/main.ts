// Exercises Level 1
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  name: string;
  age: number;
  color: string;
  legs: number;
  constructor(name: string, age: number, color: string, legs: number) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  introduce(): void {
    console.log(
      `Hi, I am a ${this.color} ${this.name} and I am ${this.age} years old.`
    );
  }
  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    breed: string;
    constructor(name: string, age: number, color: string, breed: string){
        super(name, age, color, 4);
        this.breed = breed;
    }

    bark():void{
        console.log(`${this.name} barks: Woof woof`);
    }
}

class Cat extends Animal{
    breed: string;
    constructor(name: string, age: number, color: string, breed: string){
        super(name, age, color, 4);
        this.breed = breed;
    }
    meow():void{
        console.log(`${this.name} meows: Meow meow`);
    }
// Exercise 2. Override the method you create in Animal class
    makeSound(): void {
        console.log(`${this.name} meow: Meow meow`);
    }
}

const cat = new Cat("Sully", 4, "White", "meow");
cat.makeSound();