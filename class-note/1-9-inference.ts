{
  /**
   * Type Inference <-> 타입을 명시하는 것이 좋다.
   */
  let text = "hello"; // 타입을 유추할 수 있다.
  text = "hi";

  function print(message = "hello") {
    console.log(message);
  }

  print("hello");

  function add(x: number, y: number): number {
    return x + y;
  }

  const result: number = add(1, 2);
}
