{
  /**
   * Intersection Types: &
   */

  type Student = {
    result: string;
    name: string;
    score: number;
  };

  type Worker = {
    result: string;
    employeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  interWork({
    name: "ellie",
    score: 1,
    employeeId: 123,
    work: () => {},
    result: "start",
  });

  /*   function interWork(person: Student | Worker) {
    console.log(person.result);
  }

  interWork({
    name: "ellie",
    score: 1,
    employeeId: 123,
    work: () => {},
    result: "start",
  }); */
}
