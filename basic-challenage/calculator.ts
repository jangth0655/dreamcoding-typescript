/**
 * Let's make calculator
 */

/* enum OPERATION {
  Add = "add",
  Subtraction = "subtraction",
  Multiply = "multiply",
  Divide = "divide",
  Remainder = "remainder",
} */

// enum 보다는 타입으로 정하는 것이 좋다.

type Command = "add" | "subtraction" | "multiply" | "divide" | "remainder";

function calculator(operation: Command, a: number, b: number): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtraction":
      return a - b;

    case "multiply":
      return a * b;

    case "divide":
      return a / b;

    case "remainder":
      return a % b;
    default:
      throw Error("Unknown Command");
  }
}

console.log(calculator("add", 1, 3));
console.log(calculator("subtraction", 3, 1));
console.log(calculator("multiply", 4, 2));
console.log(calculator("divide", 4, 2));
console.log(calculator("remainder", 5, 2));
