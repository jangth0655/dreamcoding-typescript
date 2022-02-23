{
  //either a or b
  interface Either<L, R> {
    lef: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}

    lef(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }

    hey(): string {
      console.log("hey");
      return "hello";
    }
  }

  const either = new SimpleEither<number, string>(4, "hello");
  either.lef();
  either.right();
  either.hey();
}
