const user = {
  name: '김성용',
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

/* 
(1) user[”key”], user.key
(2) Object.keys()
(3) Object.values()
(4) Object.entries()
(5) for in
*/

// 풀이 (1-1) --> [] 로 접근법
console.log("  1-1 --------------------------")
// console.log(user["name"]) // 유저 객체의 프로퍼티중 name 이라는 Key 의 값을 나타낸다. 더블 쿼테이션 이용
// console.log(user['name']) // 유저 객체의 프로퍼티중 name 이라는 Key 의 값을 나타낸다. 싱글 쿼테이션 이용
// console.log(user["name","height","age","name"]) // 유저 객체의 프로퍼티중 여러 key를 나타냈지만, 맨 마지막값만 인식되어 출력된다.
// console.log(user[0]) // 유저 객체의 첫번째 인덱스 값을 출력하려했지만, 인식 안된다.
// console.log(user['0']) // 유저 객체의 첫번째 인덱스 값을 출력하려했지만, 인식 안된다.
// console.log(user["0"]) // 유저 객체의 첫번째 인덱스 값을 출력하려했지만, 인식 안된다.

// 풀이 (1-2) --> 점(.) 으로 접근법 
console.log("  1-2 --------------------------")
// console.log(user)
// console.log(user.name)
// console.log(user.name, user.age)
// console.log(`${user.name}의 나이는 ${user.age} 입니다."`)
// console.log(user.height + 10)



// 풀이 (2) Object.keys()
console.log("  2 --------------------------")
// let a2 = Object.keys(user); // user 라는 객체의 키값을 확인하기 위해 Object.keys 메서드를 사용한다.
// console.log(a2)
// console.log(a2[1]) // 객체의 첫번째 키값이 무엇인지 보기 위해, 배열[1] 을 사용했다.


// 풀이 (3) Object.values()
console.log("  3 --------------------------")
// let a3 = Object.values(user); // user 라는 객체의 프로퍼티에서 값(value) 리스트를 보기위해, Obejct.values 메서드를 사용한다.
// console.log(a3); // 전체 라인을 배열로 출력
// console.log(a3[0]); // 객체의 특정값 접근을 위해, 배열 [0] 을 사용했다.



// 풀이 (4) Object.entries()
console.log("  4 --------------------------")
// let a4 = Object.entries(user); // user 객체를 프로퍼티(키,밸류) 단위로 배열로 출력한다.
// console.log(a4); 
// console.log(user); // 객체명을 바로 출력한다. 배열이 아닌 객체의 중괄호 형태로 출력된다.
// Object.메서드 를 사용하면, 출력이 배열로 된다. 배열의 결과값에 대해서, 배열 메서드 (map, filter 등)를 사용하여 CRUD 할 수 있다. !!



// 풀이 (5) for in
console.log("  5 --------------------------")
// for (let a5 in user){ // for in 문은 객체의 Key 는 알수 있으나, 바로 Value 값을 알 수 없다. for in 문으로 key 값을 뽑아서, console.log 에서 배열로 프로퍼티를 출력한다.
  // console.log(a5+ ": " + user[a5])


// 풀이 (6) for of
console.log("  6 --------------------------")
// for (let e of Object.values(user)){ // for of 문 사용하여, Object.values 로 프로퍼티의 값들에 순회하여 e 변수에 넣고, 출력한다. 
// console.log(e);
// }





// 문제2. 값이 “김성용”인 속성의 key 찾기
// 풀이 2. 김성용 속성 key 찾기
console.log("  문제 2 --------------------------")

function b1 (name2, value2) {
  return Object.keys(name2).find(key => name2[key] === value2 );
}

let key2 = b1(user, '김성용');
console.log(key2);

// user.filter(usr => Object.values(usr)).map(usr => )

// for (let b1 of Object.values(user)){
//   if (b1 === "김성용"){
//     console.log(Object.keys(user))
//   }
// }

// for (let a of Object.entries(user)){
//     console.log(a[1]);
//   // if (a["name"] === "김성용"){
//   //   console.log(a["name"])
//   // }

//   if (Object.values("김성용"))
// }

// for (let b1 in user){
//   console.log(b1 + " :" + user[b1])
// }

// let b1 = Object.entries(user)
// console.log(b1);

// let b2 = b1.filter(usr => usr.name === "김성용")
// console.log(b2);
// console.log(b1.indexOf("김성용"))


// for (let b1 of Object.entries(user)){
//   console.log(b1)
//   let b12 = user.filter(user => user.name === "김성용")
//     console.log(Object.keys(Object.values(b12)))
//   }


// let b1 = Object.entries(user)
// console.log(b1)
// for (let b1 of Object.entries(user)){
//   console.log(b1)
//   console.log(b1.name)
//   if (b1.name === "김성용"){
//     console.log(b1)
//   }
  // if (console.log(b1) === "김성용"){
  //   console.log(Object.keys(user))
  // }
// }

// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
// 풀이 3
console.log("  문제 3 --------------------------")

