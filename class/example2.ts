class Person2 {
  public constructor(private _name: string, private age: number) {}

  get name() {
    return this._name + " Lee";
  }

  set name(n: string) {
    console.log("set");
    this._name = n;
  }
}

const p2: Person2 = new Person2("Mark", 39);
console.log(p2.name);
p2.name = "abc";
console.log(p2.name);
