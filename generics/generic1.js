"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
function hello(message) {
    return message;
}
console.log(hello("Mark").length);
console.log(hello(39).length);
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric("Mark").length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));
