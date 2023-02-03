/*Variable that holds an object.*/

let employee:object;

employee = {
    firstname: "Ayushi",
    Lastname: "Upadhyay",
    age: 21
};

console.log(employee);

/*Property of an object is not accessed using object */

/*Other way of declaring*/
 
let employees: {
    firstname: string,
    lastname: string,
    age: number
};

employees = {
    firstname: "Ayushi",
    lastname: "Upadhyay",
    age: 21
};

console.log(employees);
console.log(employees.age);