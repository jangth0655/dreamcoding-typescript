{
  /**
   * Enum , javascript에는 없는 문법
   */
  enum DAYS {
    Monday, //0
    Tuesday, // 1
    Wednesday, // 2
    Saturday, // 3
    Sunday, //4
  }
  console.log(DAYS.Monday);

  // enum 보다는 유니온 타입을 이용하는 것이 좋다.
  type DaysOfWeeks = "Monday" | "Tuesday" | "Wednesday";
  let day: DaysOfWeeks = "Monday";
}
