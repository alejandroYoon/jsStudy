const users = [
    {
      id: 1,
      name: "문다은",
      age: 20,
      height: 165,
    },
    {
      id: 2,
      name: "윤진섭",
      age: 24,
      height: 177,
    },
    {
      id: 3,
      name: "윤국현",
      age: 22,
      height: 175,
    },
    {
      id: 4,
      name: "배상아",
      age: 23,
      height: 168,
    },
  ];
  
  // 1번 문제
  // {id: 5, name: "이지형", age: 19, height: 200} 데이터를 추가하기
  /* 
  [
      { id: 1, name: '문다은', age: 20, height: 165 },
      { id: 2, name: '윤진섭', age: 24, height: 177 },
      { id: 3, name: '윤국현', age: 22, height: 175 },
      { id: 4, name: '배상아', age: 23, height: 168 },
      { id: 5, name: '이지형', age: 19, height: 200 }
  ]
  */

users.push(
    {
        id: 5,
        name: "이지형",
        age: 19,
        height: 200
    }
)
console.log(users)
  
// 2번 문제
// 객체의 데이터를 통해 해당 값만 출력하기
  // [ { id: 4, name: '배상아', age: 23, height: 168 } ]

users.forEach (person => {
  if (person.id === 4){
    console.log(person);
  }
});

  // 3번 문제
  // 객체의 해당 데이터 값만 수정하기
  // 데이터중 name이 '윤진섭'에 해당하는 height만 190으로 데이터를 변경하고
  // 나머지 데이터들까지 모두 출력한다.
  
  /*
  [
    { id: 1, name: '문다은', age: 20, height: 165 },
    { id: 2, name: '윤진섭', age: 24, height: 190 },
    { id: 3, name: '윤국현', age: 22, height: 175 },
    { id: 4, name: '배상아', age: 23, height: 168 }
  ]
  */

// users.filter(users => users.name === "윤진섭");

// console.log(users)

  // 4번 문제
  // height가 170 이하인 user만 출력하시오
  
  /*
  [
    { id: 1, name: '문다은', age: 20, height: 165 },
    { id: 4, name: '배상아', age: 23, height: 168 }
  ]
  */
  
let over170 = users.filter(user => user.height <= 170).map(user => user);
console.log(over170);

  // 5번 문제 (심화)
  // name의 첫 글자가 '윤'으로 시작하는 이름만 출력하시오
  
  /*
  [
    { id: 2, name: '윤진섭', age: 24, height: 177 },
    { id: 3, name: '윤국현', age: 22, height: 175 }
  ]
  */

  