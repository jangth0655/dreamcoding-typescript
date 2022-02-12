// javascript
function jsAdd(num1, num2) {
  return num1 + num2;
}

// Typescript
function add(num1: number, num2: number): number {
  return num1 + num2;

  // promise
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript promise
  function tsFetchNum(id): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      resolve(100);
    });
  }
}
