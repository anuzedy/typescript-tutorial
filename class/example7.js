"use strict";
class Parent7 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
// const p7 = new Parent7("Mark", 39);
// p7.print();
class Child extends Parent7 {
    constructor(age) {
        super("Mark Jr.", age);
        this.gender = "male";
        this.printName();
    }
}
const c = new Child(1);
c.print();
