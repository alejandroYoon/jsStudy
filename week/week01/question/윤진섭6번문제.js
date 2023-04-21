/*
	
문제 만들기

문제 만들기
위와 같은 문제를 예시로 이제는 직접 문제를 만들어보는 것입니다. 동료들과 이야기하여 문제를 만들어보세요 :)
최종 목표

만들고 싶은 기능 정하기

필요한 인풋(입력값)과 아웃풋(출력값) 정하기 3. 인풋과 아웃풋을 토대로 기능 구현하기

문제 형태로 만들어 제출해주세요.

메일로 제출해주시면 됩니다:) 
*/




/*

스타벅스 커피주문 시나리오

memberList = ["문다은", "배상아", "윤국형", "윤진섭", "이지형", "이제율"]
memberMoney = {문다은: 49000, 배상아:194000, 윤국현:35000, 윤진섭:9000, 이지형:560000, 이제율:250000}  // 2조 6명
menu = {슈크림라떼: 6300원, 봄딸기라떼: 6900원, 핑크플라워티: 6100원, 바질셔벗블렌디드 6500원}  // 커피:가격 리스트



1. 회원인지 체크한다. 회원이면 "xxx님 환영합니다." 아니면 "xxx님 회원이 아닙니다" 출력
2. 각자 순서에 맞게 커피를 주문한다. 앞에 2명은 아이스로 주문한다. (+500원)
3. 모두의 커피 가격을 더한다.
4. 부자 2등이 가격을 지불한다.
5. 출력되는 내용은, 첫 주문자 커피이름과 외 "인원수 잔"로 표시한다. ex) 아메리카노 외 5잔/ 토탈금액 / 잔액 

input 두번째 돈많은 사람
input 사람별로 커피를 주문한다.

계산식

output 

*/




실행은 함수(이름) 을 입력하면, 먼저 스타벅스 회원인지 체크한다. memberList 에서 indexOf(), include() 등으로 멤버인지 확인하여, 맞으면 “xxx 님 안녕하세요” 멤버에 없으면 “xxx님 회원가입먼저 하세요” 출력.

vierMenu 함수를 실행하면, 메뉴가 객체 리스트가 출력된다.

슈크림라떼 6,300원

봄딸기라떼 6,900원

핑크플라워티 6,100원

바질셔벗블렌디드 6,500원

 

  3. selectedMenu 함수를 실행하여, 2가지 이상의 메뉴를 선택한다.

  4. 선택한 메뉴의 가격을 더하여, 소지한 금액에서 빼고 메뉴명과 낸금액과 잔액을 출력한다.


*/



// 리터럴방식으로 객체생성

// const memberList = {문다은: 55000, 배상아: 94000, 윤국현: 39000, 윤진섭: 12000, 이지형: 345000, 이제율: 83000};
const memberList = ["문다은", "배상아", "윤국현", "윤진섭", "이지형", "이제율"]
const menu = {슈크림라떼: 6300, 봄딸기라떼: 6900, 핑크플라워티: 6100, 바질셔벗블렌디드: 6500};
// const iceStat = {hot: 0, iced: 500};
// const test01 = {"500"};
// const test02 = {"킹콩"};

console.log ("어서오세요. 스타벅스입니다.");
console.log (memberList.윤진섭);
console.log (memberList["윤국현"]);
console.log (memberList[1]);
console.log ("-----------------");


// console.log(memberList.indexOf("윤진섭"))
// console.log(memberList2.indexOf("윤국현"))
if (memberList.indexOf("윤진섭1") === -1) return "회원이 아닙니다.";


// function checkMember (name1){
//   let result = memberList.indexOf(name1);
//   console.log (result);
// }

// checkMember(memberList["배상아"])



// console.log (test01);
// console.log (test02);

// function checkMember ("userName"){
  
//   let selectMember = memberList.indexOf(userName);
//   console.log(selectMember)
  
// //   if (memberList.indexOf(userName)){
// //     console.log(`${userName}님은 회원이 맞습니다.`)
// //     else {
// //       console.log(`${userName}님은 회원이 아닙니다.`)
// //     }
      
// //   }
// }

// checkMember ("홍길동")



/*
윤국현
1. 회원여부 체크
  --> 환영합니다. 로그인되었습니다.
2. 메뉴선택
  --> 슈크림라떼아이스, 봄딸기라떼아이스, 핑크플라워티, 바질셔벗블렌디드, 슈크림라떼, 핑크플라워티아이스
*/
