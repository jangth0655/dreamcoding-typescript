// 읽을 수  만 있는 타입

{
  type ToDo = {
    title: string;
    description: string;
  };

  // 수정이 가능함 -> 불변성을 유지하는 것이 좋다.
  function display(todo: Readonly<ToDo>) {}
}
