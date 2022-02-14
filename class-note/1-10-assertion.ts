{
  /**
   * Type Assertion ❌
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc() as string;
  console.log(result.length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers?.push(2);
}
