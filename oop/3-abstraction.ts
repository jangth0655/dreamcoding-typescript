{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //public, private, protected
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; //instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      //class level
      return new CoffeeMachine(coffeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

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
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CafeLatteMachine("SSSS", 23);
  latteMachine.fillCoffeeBeans(32);
  const coffee = latteMachine.makeCoffee(1);
  console.log(latteMachine);
}
