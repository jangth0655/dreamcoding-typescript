interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log(`part time!!`);
  }

  workPartTime() {}
}

class DayTimeEmployee {
  workPartTime() {}
}

//❌ 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 ❌
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
const hello = new DayTimeEmployee();
ellie.workFullTime;
bob.workPartTime;

const ellieAfterPay = pay<FullTimeEmployee>(ellie);
const bobAfterPay = payBad(bob);

interface Object {
  [title: string]: string | number;
}

const obj1: Object = {
  name: "ellie",
  age: 123,
};

const obj2: Object = {
  animal: "horse",
};

const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

console.log(getValue(obj2, "animal"));
