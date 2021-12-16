"use strict";
const person = {
    name: "Mark",
    age: 39,
};
function getProp(obj, key) {
    return obj[key];
}
getProp(person, "age");
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, "name", "Anna");
