// Array

console.log(" 5. ----------- 문다은 ")
  let input_data1 = ["웹페", "이지", "단순", "한보", "조기"];
  let a = input_data1[0]
  let b = input_data1[1]
  console.log(a+b); // 웹페이지
  //   output = 웹페이지


  console.log(" 6. ----------- 배상아 ")

  let input_data2 = ["웹페", "이지", "단순", "한보", "조기"];
  let output_data2 = input_data2
  console.log(output_data2); // ["단순", "화보"]


  console.log(" 7. ----------- 윤진섭 ")

  let input_data3 = [1, 2, 3, 4, 5];
  const output_data3 = input_data3[4];
  console.log(output_data3); // 5

  const output_data3_1 = input_data3[input_data3.length - 1];
  console.log(output_data3_1); // 5


  console.log(" 7. ----------- 문다은 ")

  // for 사용
  let input_data4 = [1, 2, 3, 4, 5];
  console.log(input_data4); // [11,12,13,14,15]


  console.log(" 8. ----------- 배상아 ")

  // forEach 사용
  let input_data5 = [10, 20, 30, 40, 50];
  console.log(input_data5); // [5, 10, 15, 20, 25]


  console.log(" 9. ----------- 윤진섭 ")

  // map 사용

  // let input_data6 = [10, 20, 30, 40, 50];
  // input_data6.splice(0,1,1,2,3);
  // input_data6.splice(4,3,25);
  // output_data6 = input_data6
  // console.log(output_data6); // [1, 2, 3, 20, 25]


  let input_data6 = [10, 20, 30, 40, 50];
  input_data6.splice(0,1,1,2,3);
  input_data6.splice(4,3,25)
  output_data6 = input_data6.map(item => input_data6)[0];
  console.log(output_data6); // [1, 2, 3, 20, 25]







  console.log(" 10. ----------- 문다은 ")

  let input_data7 = [10, 20, 30, 40, 50];
  console.log(output_data7); // [30, 40]


  console.log(" 11. ----------- 배상아 ")

  let input_data8 = [10, 20, 30, 40, 50];
  console.log(input_data8); // [10, 20, 50]


  console.log(" 12. ----------- 윤진섭 ")

  let input_data9 = [10, 20, 30, 40, 50];
  console.log(output_data9); // 3 *인덱스 번호


  console.log(" 13. ----------- 문다은 ")

  let input_data10 = "오늘 날씨는 매우 맑음";
  console.log(output_data10); // ["오늘", "날씨는", "매우", "흐림"]


  console.log(" 14. ----------- 배상아 ")

  // '=' 금지
  let input_data = "오늘 날씨는 매우 맑음";
  console.log(output_data11); // ["내일", "날씨는", "매우", "맑음]

