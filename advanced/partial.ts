{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "hight" | "low";
  };

  // 기존의 타입중에서 부분적인 것만 허용하고 싶을 때
  function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn typescript",
    description: "study hard",
    label: "study",
    priority: "hight",
  };

  const updated = updateToDo(todo, { priority: "low" });
  console.log(updated);
}
