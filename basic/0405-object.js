const webtoons = [
  {
    id: 1,
    title: "신의탑",
    genre: "판타지",
    contribute: {
      writer: "SIU",
      illustrator: "SIU",
      authorship: "SIU",
      company: "naver",
    },
  },

  { 
    name: "Mike", 
    age: 30, 
    sex: "m", 
    school: { 
      title: "seoul", 
      scid: 1990, 
      class: "computer"
    },
  },

  {
    name: "Jane", 
    age: 27, 
    sex: "f", 
    school: {
      title: "busan", 
      scid: 4030, 
      class: "english"
    },
  },
  { 
    name: "Tom", 
    age: 10, 
    sex: "m", 
    school: {
      title: "incheon", 
      scid: 8400, 
      class: "music"
    },
  },





  {
    id: 2,
    title: "전지적 독자 시점",
    genre: "판타지",
    contribute: {
      writer: "싱숑",
      illustrator: "슬리피-C",
      authorship: "싱숑",
      company: "naver",
    },
  },
  {
    id: 3,
    title: "천재 타자가 강속구를 숨김",
    genre: "일상물",
    contribute: {
      writer: "황지성",
      illustrator: "스튜디오MW",
      authorship: "이블라인",
      company: "naver",
    },
  },
  {
    id: 4,
    title: "흑막 여주가 날 새엄마로 만들려고 해",
    contribute: {
      genre: "아침드라마",
      writer: ["이산시", "이지형"],
      illustrator: "하리힌",
      authorship: "목감기",
      company: "naver",
    },
  },
  {
    id: 5,
    title: "벼락승진",
    genre: "일상물",
    contribute: {
      writer: "이모세",
      illustrator: "이모세",
      authorship: "이모세",
      company: "kakao",
    },
  },
  {
    id: 6,
    title: "나혼자만 레벨업",
    genre: "일상물",
    contribute: {
      writer: "현군",
      illustrator: "장성락",
      authorship: "추공",
      company: "kakao",
    },
  },
  {
    id: 7,
    title: "악녀 시어머니를 그만뒀더니, 다들 내게 집착한다",
    genre: "스릴러",
    contribute: {
      writer: "소망",
      illustrator: "소망",
      authorship: "Rana",
      company: "kakao",
    },
  },
];
// 문제 1. 해당 데이터를 추가해주세요
/* 
{
        id: 8,
        title: '프론트앤드 개발자가 되는길',
        genre: '스릴러',
        contribute: {
            writer: '김성용강사',
            illustrator: '김성용강사',
            authorship: '김성용강사',
            company: 'KoreaIT',
        },
},
*/
// console.log(added_list);

// 문제 2. title이 전자적 독자 시점인 webtoon의 정보만 보여주세요.
// console.log(search_list);

// 문제 3. genre이 일상물인 webtoon들의 정보만 보여주세요.
// console.log(search_list);

// 문제 4. naver에서 만든 웹툰들의 정보만 보여주세요.
// console.log(search_list);

// 문제 5. "나혼자만 레벨업"의 genre이 이상합니다. "판타지"로 바꿔주세요.
// console.log(change_list);

// 문제 6. 혼자서 작업하고 있는 즉, writer와 illustrator 같은 webtoon들의 정보만 보여주세요
// console.log(search_list);

// 문제 7. 작가중에 이상하게 이름이 올라가있는 사람을 지워주고 자연스럽게 수정해주세요 해당 작품만 보여주세요
// console.log(change_list);



// ----------------------------------------------------------------------------------
// 문제풀이

// 문제풀이 순서
// 1번 배상아
// 2번 윤진섭
// 3번 문다은
// 4번 배상아
// 5번 윤진섭
// 6번 문다은
// 7번 배상아





console.log(" --------------- 문제풀이 1번 (배상아)")

webtoons.push(
{
id: 8,
title: '프론트앤드 개발자가 되는길',
genre: '스릴러',
contribute: {
    writer: '김성용강사',
    illustrator: '김성용강사',
    authorship: '김성용강사',
    company: 'KoreaIT',
},
}
)

// 출력방법 1
// let added_list = webtoons[webtoons.length - 1];

// 출력방법 2
//  let added_list = webtoons.at(-1);

// console.log(added_list);






console.log(" --------------- 문제풀이 2번 (윤진섭)")
/* 문제 2. title이 전자적 독자 시점인 webtoon의 정보만 보여주세요.
풀이 : title 이 "전지적 ~" 인것만 뽑기? 전지적 단어를 검색하는 방법은?
1) find() : 순회하며, 요소를 즉시반환하고, 없으면 undefined 반환
2) filter() : 순회하며, true false 를 반환
*/

// 출력방법 1
// let a = webtoons.find(mov => mov.title === "전지적 독자 시점");

// 출력방법 2
// let a = webtoons.filter(mov => mov.title === "전지적 독자 시점");
// console.log(a);





console.log(" --------------- 문제풀이 3번 (문다은)")
// 문제 3. genre이 일상물인 webtoon들의 정보만 보여주세요.
// console.log(search_list);

// let search_list = webtoons.find(mov => mov.genre === "일상물");
// console.log(search_list)


// // 출력방법 1 (for -> 정상)
// for (i=0; i < webtoons.length; i++){
//   if (webtoons[i].genre === "일상물"){
//     console.log(webtoons[i])
//   }
// }

// 출력방법 2 (filter -> 정상)
// let search_list = webtoons.filter(mov => mov.genre === "일상물")
//   console.log(search_list)

// 출력방법 3 (find -> find 로 하면 첫번째 한번만 출력된다. 다른방법은?)
// let search_list = webtoons.find(mov => mov.genre === "일상물")
// console.log(search_list)


// 출력방법 4 (for of -> iterator 속성 컬렉션만 가능하므로, 이번 객체는 사용 못함)
// for (let mov of webtoons){
//   console.log(mov.id + ".  " + mov.title)
// }





console.log(" --------------- 문제풀이 4번 (배상아)")
// 문제 4. naver에서 만든 웹툰들의 정보만 보여주세요.
// console.log(search_list);

// 출력방법 1 (filter -> 정상)
// let search_list = webtoons.filter(mov => mov.contribute.company === "naver")
// console.log(search_list);

// 출력방법 2 (find -> find 는 첫번째값만 출력하고, 반복문 돌지 않아서 적합하지 않다.)
// let search_list = webtoons.find(mov => mov.contribute.company === "naver")
// console.log(search_list)

// 출력방법 3 (find + for 문으로 출력하려는데 왜 안되지?)
// for (i=0; i < webtoons.length; i++){
// let search_list = webtoons[i].find(mov => mov.contribute.company === "naver")
// console.log(search_list)
// }

// 출력방법 4 (forEach -> 정상)
// webtoons.forEach(mov => {
//   if (mov.contribute.company === "naver"){
//   console.log(mov)
//   }
// });







console.log(" --------------- 문제풀이 5번 (윤진섭)")
// 문제 5. "나혼자만 레벨업"의 genre이 이상합니다. "판타지"로 바꿔주세요.
// console.log(change_list);


// 출력방법 1 (find -> 정상)
// let change_list = webtoons.find(mov => mov.title === "나혼자만 레벨업");
//   change_list.genre = "판타지"
// console.log(change_list)

// 출력방법 2 (filter -> filter 는 원본 배열을 바꾸지 못한다. filter 는 신규배열을 만들어 반환한다.)
// let change_list = webtoons.filter(mov => mov.title === "나혼자만 레벨업");
//   change_list.genre = "판타지"
// console.log(change_list)


console.log(" --------------- 문제풀이 6번 (문다은)")
console.log(" --------------- 문제풀이 7번 (배상아)")

