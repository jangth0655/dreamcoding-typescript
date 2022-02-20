{
  // 재사용을 높일 수 있는 것이 map타입
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type VideoReadonly = {
    readonly title: string;
    readonly author: string;
    readonly description: string;
  };

  // 타입 오브젝트 정의 안에서 []를 이용하면 키를 하나하나씩 돌 수 있다. for in
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {};
  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {};

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: "hello",
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type ProxyFy<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  const videoProxy: ProxyFy<Video> = {
    title: {
      get() {
        return "title";
      },
      set(valeu: string) {},
    },
    author: {
      get() {
        return "title";
      },
      set(valeu: string) {},
    },
    description: {
      get() {
        return "title";
      },
      set(valeu: string) {},
    },
  };
}
