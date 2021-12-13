class Person3 {
  public readonly name: string = "Mark";
  private readonly country: string;
  public constructor(private _name: string, private age: number) {
    this.country = "Korea";
  }
  hello() {
    // this.country = "China";
  }
}

const p3: Person3 = new Person3("Mark", 39);
console.log(p3.name);
// p3.name = "abc";
console.log(p3.name);
