"use strict";
class ClassName {
    constructor() { }
    static getInstance() {
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const aa = ClassName.getInstance();
const bb = ClassName.getInstance();
console.log(aa === bb);
