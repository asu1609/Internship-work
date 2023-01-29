//Objects
var person = {
    firstname : "Ayushi",
    lastname : "Upadhyay",
    age : 22
};
console.log(person);
//Using new keyword
var object = new Object();
object.name = 'kkjk';
console.log(object);
//doesn't make copy of object
var x = person;
console.log(x.firstname);
x.name = 'Rutavi'
console.log(x.name);
console.log(x);

//for in loop
for(let x in person){
    console.log(x);
}

//delete the property
delete person.name;
console.log(person);
delete x["age"];
console.log(person);

//Nested Objects
var myObj = {
    name: "Ayushi",
    age: 22,
    cars: {
        car1 : "Thar",
        car2 : "BMW"
    }
};
console.log(myObj);
console.log(myObj.cars);
console.log(myObj.cars.car1);
console.log(myObj["cars"]["car1"]);

//object values
console.log(Object.values(person));

//Stringify
console.log(JSON.stringify(person));

//Iterables
for(var x of "Ayushi"){
    console.log(x);
}

for (var x of [1, 2, "kkkl"]){
    console.log(x);
}

/*for (var x of person){
    console.log(x);
}*/

