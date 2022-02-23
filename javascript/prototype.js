const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); //true

const array = [];
console.log(array);
// array -> array프로토 -> object를 상속한다.

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  //함수는 만들어지는 인스턴스마다 생성되기때문에 = Instance member level
  /*  this.makeCoffee = (shots) => {
    console.log("making ... Coffee");
  }; */
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making ... Coffee");
};
// 기본적으로 오브젝트를 상속하고 있다.
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
