class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  private constructor() {}
}

const aa = ClassName.getInstance();
const bb = ClassName.getInstance();

console.log(aa === bb);
