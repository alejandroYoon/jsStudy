

// 객체 선언
// 나머지 문제들 전부 해당 객체를 복사 붙여넣기해서 사용합니다


// 각각의 id와 name의 값으로 '웹페', '이지' ,'단순' 을 가지고 있는 객체를 만드시오

console.log(" ----------- 객체선언 ")
let obj1 = [
    {
      id : 1,
      name : "웹페"
    },
    {
      id : 2,
      name : "이지"
    },
    {
      id : 3,
      name : "단순"
    },
]

// {
//   객체 접근
//   console.log(output_data); // 이지
// }

// 
//   객체 접근
// console.log(" 윤진섭 ----------- 1-1")
// console.log(obj1[1].name); // 이지

// console.log(" 윤진섭 ----------- 1-2")
// const output_data = obj1[1];
// console.log(output_data);

// console.log(" 윤진섭 ----------- 1-3")
// const output_data2 = obj1[1].name;
// console.log(output_data2);

// console.log("배상아 ----------- 1-4")
// const output_data = obj1[1]["name"];
// console.log(output_data);

// console.log(" 문다은 ----------- 2")
//   객체 값 변경
//   2번째 id의 값을 '이퍼'로 변경하시오
// 
// obj1[1].id="이퍼"
// console.log(obj1[1]);


// console.log(" 배상아 ----------- 3")
//   객체 찾기
  // 3번째 단순만 Key, value를 둘 다 출력하시오

// 방법1
//  let a = obj1.find(item => item.name === "단순")
//  console.log({name: a.name})

// 방법2
// console.log({name: obj1[2].name})



// console.log(" 윤진섭 ----------- 4")
//    const array = [1,2,3,4,5]
  // 위의 배열의 값을 가지고 객체의 '단순'을 출력하시오
// const result = array[1];
//  console.log(result);
//  console.log(obj1[2].name);
  // console.log(obj1[result].name);
