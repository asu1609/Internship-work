/*
   * TypeScript supports object-oriented programming features like classes, interfaces, etc.
   * TypeScript supports concept class.
   * 
*/


class Car{
    //field: Any variable declared in class.
    engine: string;

    //Constructor: Responsible for allocating memory for the object.
    constructor(engine:string){
        this.engine = engine;
    }

    disp():void {
        console.log("Engine is : " + this.engine);
    };
}

var obj = new Car("Engine 1");
console.log("Reading attribute value Engine as: " + obj.engine);
obj.disp();

class Student{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

var student1 = new Student("Ayushi", 22);
console.log(student1);

//adding new properties with prototype
interface Student{
    dob:number;
}

student1.dob = 16;
console.log(student1);

//Data Hiding
class Encapsulate{
    str:string = "Hello";
    private str2:string = "world";
    print(){
        console.log(this.str2);
    }
}

var obje = new Encapsulate();
console.log(obje.str);
//console.log(obje.str2);
obje.print();

class parentclass{
    protected member1:string;
    member2: string = "member2";
    constructor(member1:string){
        this.member1 = member1;
    }
}

class childclass extends parentclass{
    constructor(member1:string){
        super(member1);
    }
    method(){
        console.log(this.member1);
    }
}

var object = new childclass("Hello");
object.method();