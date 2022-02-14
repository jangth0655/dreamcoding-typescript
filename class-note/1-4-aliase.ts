{
  /**
   * Type Aliases 새로운 타입을 내가 정의할 수 있다.
   */
  type Text = string;
  const name: Text = "TaeHee";
  type Num = number;
  const age: Num = 123;
  type Students = {
    name: string;
    age: number;
  };
  const students: Students = {
    name: "TaeHee",
    age: 12,
  };

  // Literal Types
  type Name = "name";
  let eliieName: Name;
  eliieName = "name";
  type Boal = true;
  const isCat: Boal = true;
}
