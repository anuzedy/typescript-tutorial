"use strict";
class Person2 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name + " Lee";
    }
    set name(n) {
        console.log("set");
        this._name = n;
    }
}
const p2 = new Person2("Mark", 39);
console.log(p2.name);
p2.name = "abc";
console.log(p2.name);
