{
  const obj = {
    name: "ellie",
  };
  // object에 접근 하는 방법
  obj["name"]; // ellie
  obj.name; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // name type -> string

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "ellie",
    gender: "female",
  };
}
