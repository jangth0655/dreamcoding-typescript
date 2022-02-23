import sum from "./module1.js";

// 모듈화 하지 않는다면 기본적으로 글로벌 스코프로 측정된다.
console.log(sum(1, 2)); // console.log(window.add(1, 2));
