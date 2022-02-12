{
  // undefined,null 단독으로 사용하지 않는다. ❌
  let name: undefined;

  let age: number | undefined;
  age = undefined;
  age = 1;

  let person: null | number;
  person = 1;
  person = null;

  let hi;
  console.log(typeof hi);
  hi = 1;
  console.log(typeof hi);

  //unKnown ❌
  let notSure: unknown;
  notSure = 0;
  notSure = "hello";

  //any ❌
  let anyThing: unknown;
  anyThing = 0;
  anyThing = "hello";

  //void 아무런 값을 리턴하지 않는다.
  function print(): void {
    console.log("void");
  }

  //never 값을 절대 리턴할 수 없다.
  function throwError(message: string): never {
    //message -> server
    throw new Error(message);
    while (true) {}
  }

  //object❌  원시타입을 제외한 모든 타입을 받을 수 있다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ name: 123 });
}
