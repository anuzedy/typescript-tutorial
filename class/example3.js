"use strict";
class Person3 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
        this.country = "Korea";
    }
    hello() {
        // this.country = "China";
    }
}
const p3 = new Person3("Mark", 39);
console.log(p3.name);
// p3.name = "abc";
console.log(p3.name);
