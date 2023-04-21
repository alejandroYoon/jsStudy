/*
변수 위치 찾기
변수 a는 main 함수 안에서 사용된다
변수 b는 dom api selector로 다른 이벤트에서 사용된다
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다
변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.
*/

let a = 10;

// let b = document.querySelector(".on"); // js에서는 사용되지 않는다.

function solution(beforeC) {
  const d = +1;
  const afterC = beforeC * d;
  return afterC;
}

function parse() {}

function main() {
  const c = "32";
  const e = solution(c) + a;
  return e;
}

console.log(main());
