{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //public, private, protected
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; //instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 내부 상태 변경
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      console.log(`grinding beans for ${shots}`);
    }

    private preheat(): void {
      console.log("heating up....");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots); // grind coffee
      this.preheat();
      return this.extract(shots);
    }
    clean() {
      console.log("cleaning the machine");
    }
  }

  //CafeLatteMachine
  class CafeLatteMachine extends CoffeeMachine {
    constructor(public readonly serialNumber: string, beans: number) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  //SweetCoffeeMaker
  class SweetCoffeeMaker extends CoffeeMachine {
    private sugar(): void {
      console.log("add sugar");
    }
    protected extract(shots: number): CoffeeCup {
      super.clean();
      this.sugar();
      return {
        shots,
        sugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CafeLatteMachine("1", 16),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log(`-------------------------`);
    machine.makeCoffee(1);
  });
}
