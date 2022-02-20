type PositionType = {
  x: number;
  y: number;
};

// 인터페이스는 결합이 가능하다. 각각 정의한것을 합한다.
interface PositionInterface {
  x: number;
  y: number;
}
interface PositionInterface {
  z: number;
}

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];

// 둘다 object  형태로 만들 수 있다.
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  // z 추가
  z: 1,
};

// 클래스에서 구현이 가능하다.

// Extends도 가능하다.
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };
