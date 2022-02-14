{
  //Array
  const fruits: string[] = ["apple", "banana"];
  const score: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  //Tuple ❌
  let students: [string, number];
  students = ["string", 1];
  students[0]; // string -> 가독성이 떨어진다.
  const [string, number] = students;
  students[string];
}
