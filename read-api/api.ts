{
  Array;
  [1, 2].map;

  type Student = {
    passed: boolean;
  };

  const students: Student[] = [
    { passed: true },
    { passed: true },
    { passed: true },
    { passed: false },
    { passed: true },
  ];

  const result = students.every((student) => student.passed);
  console.log(result);

  class Animal {}
  class Cat extends Animal {
    isCat: boolean = true;
  }
  class Dog extends Animal {
    isDog: boolean = false;
  }

  const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
  }
  const cat = animals.every<Cat>(isCat);
  console.log(cat);
}
