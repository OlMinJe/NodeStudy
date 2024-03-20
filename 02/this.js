console.log(this); // {} : 이유는 module.exports === exports === {} 이기 떄문이다.
console.log(this === module.exports); // true

function a() {
  console.log(this === global); // true
}

const b = () => console.log(this === global); // false
// 화살표 함수는 자신을 포함하고 있는 외부 함수 혹은 전역 스코프의 this를 그대로 상속받기 때문에, 자신만의 this를 생성하지 않는다.

a();
b();
