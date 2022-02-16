{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  // Fancy 우유 거품기
  class FancyMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  // 최고급 우유 거품기
  class ColdMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  // no milk
  class NoMilk implements milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // no Sugar
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //설탕 제조기
  class CandySugar implements SugarProvider {
    private getSugar(): void {
      console.log("Getting some sugar candy 🍬");
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return { ...cup, sugar: true };
    }
  }

  // Sugar Mixer
  class SugarMixer implements SugarProvider {
    private getSugar(): void {
      console.log("Getting some sugar jar 🔥");
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return { ...cup, sugar: true };
    }
  }

  //public, private, protected
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; //instance level

    constructor(
      coffeeBeans: number,
      private milk: milkFrother,
      private sugar: SugarProvider
    ) {
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

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}`);
      return {
        shots,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots); // grind coffee
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
    clean() {
      console.log("cleaning the machine");
    }
  }

  //Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilkMaker = new NoMilk();

  //sugar
  const candySugar = new CandySugar();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //machine
  const sweetCandyMachine = new CoffeeMachine(12, noMilkMaker, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilkMaker, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, fancyMilkMaker, sugar);
}
