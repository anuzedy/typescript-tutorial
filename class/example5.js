"use strict";
class Person5 {
    static hello() {
        console.log("안녕하세요", Person5.CITY);
    }
}
Person5.CITY = "Seoul";
const p5 = new Person5();
// p5.hello();
Person5.hello();
// Person5.CITY;
