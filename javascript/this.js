// JS에서 this란 호출한 사람의 문맥을 나타내는 것
console.log(this); // window

function simpleFunc() {
  console.log(this); //window
}

// 글로벌에서 함수를 호출하는 것은 window에 있는것을 호출하는 것과 동일하다.
simpleFunc();

console.clear();

class Counter {
  const = 0;
  increase = function () {
    console.log(this); // 생성된 객체
  };
}
// this -> counter를 가리킨다.
const counter = new Counter();
counter.increase();
const caller = counter.increase(); //let,const는 윈도우에 등록되어 있지 않다. this의 정보를 잃어버리게 된다.
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
