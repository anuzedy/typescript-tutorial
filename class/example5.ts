class Person5 {
  private static CITY = "Seoul";
  public static hello() {
    console.log("안녕하세요", Person5.CITY);
  }
}

const p5 = new Person5();
// p5.hello();

Person5.hello();
// Person5.CITY;
