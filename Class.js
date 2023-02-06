/*
   * TypeScript supports object-oriented programming features like classes, interfaces, etc.
   * TypeScript supports concept class.
   *
*/
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
var Car = /** @class */ (function () {
    //Constructor: Responsible for allocating memory for the object.
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    ;
    return Car;
}());
var obj = new Car("Engine 1");
console.log("Reading attribute value Engine as: " + obj.engine);
obj.disp();
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student1 = new Student("Ayushi", 22);
console.log(student1);
student1.dob = 16;
console.log(student1);
//Data Hiding
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "Hello";
        this.str2 = "world";
    }
    Encapsulate.prototype.print = function () {
        console.log(this.str2);
    };
    return Encapsulate;
}());
var obje = new Encapsulate();
console.log(obje.str);
//console.log(obje.str2);
obje.print();
var parentclass = /** @class */ (function () {
    function parentclass(member1) {
        this.member2 = "member2";
        this.member1 = member1;
    }
    return parentclass;
}());
var childclass = /** @class */ (function (_super) {
    __extends(childclass, _super);
    function childclass(member1) {
        return _super.call(this, member1) || this;
    }
    childclass.prototype.method = function () {
        console.log(this.member1);
    };
    return childclass;
}(parentclass));
var object = new childclass("Hello");
object.method();
