var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercises Level 1
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
var Animal = /** @class */ (function () {
    function Animal(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    Animal.prototype.introduce = function () {
        console.log("Hi, I am a ".concat(this.color, " ").concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal;
}());
// 2. Create a Dog and Cat child class from the Animal Class.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, color, breed) {
        var _this = _super.call(this, name, age, color, 4) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " barks: Woof woof"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, color, breed) {
        var _this = _super.call(this, name, age, color, 4) || this;
        _this.breed = breed;
        return _this;
    }
    Cat.prototype.meow = function () {
        console.log("".concat(this.name, " meows: Meow meow"));
    };
    // Exercise 2. Override the method you create in Animal class
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " meow: Meow meow"));
    };
    return Cat;
}(Animal));
var cat = new Cat("Sully", 4, "White", "meow");
cat.makeSound();
