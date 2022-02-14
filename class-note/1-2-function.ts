// javascript
/* function jsAdd(num1, num2) {
  return num1 + num2;
} */

{
  // Typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // promise
  function jsFetchNum(id: number) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript promise
  function tsFetchNum(id: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve");

  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
