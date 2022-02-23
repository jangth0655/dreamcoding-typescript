{
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const num: number = checkNotNull(5);
  const str = checkNotNull<string>("hello");
  console.log(num);
  console.log(str);
}
