/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

// const item=55;
// const count=5; 

arr = [ 1, 2,3,4, 5,6,7,8,9,10,11,12,13,14,15];
new_arr = [];
arrLength = arr.length;
console.log(arrLength)

function division(item) {
  for (i=1; i <= arrLength; i++){
    console.log(i);
    newArr.push(arr.splice(0,5));
    let result=0;
    result+=i;
  }
  return newArray;
}

// division(55,5)