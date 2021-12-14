abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}

// new AbstractPerson();

class Person8 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person8();

p.setName("abcd");
