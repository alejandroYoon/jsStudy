
/* 빌트인 객체 */
/* 내장 객체
네이티브 객체 -> Object, Number, Array 객체 생성과 관련된 함수 객체와 메소드로 구성되어있다
호스트 객체 -> window, location, history, document (전역 객체)

==> prototype의 예시

    Array.prototype.division = function(){
        ...
    }
    const arr = [1,2,3,4,5] 
    arr.divsition()


---> 자바스크립트에서 정의하지 않아도 편의성을 위하여 자체적으로 만들어둔 내장 기능
---> 도움을 주기 위해 만든 편리한 객체
console.log()
*/


/* 배열의 생성 */
// Array.from *유사 배열 객체를 배열로 바꾸어주겠다
// 유사 배열 객체 : 객체이지만(Obejct) 배열과 관련된 속성값을 가지고 있는 객체
let obj = {
    0 : "1",
    1 : "2",
    length: 2
}
obj.length
obj[0]

const arr = Array.from(obj);

// 콜백함수가 return하는 값을 요소로 삼는 배열 생성
const newArr = Array.from({length:5}, (el, index, originArr) => {
    return index
});
console.log(newArr)

// Array.of
// () 인자로 들어온 값을 요소로 삼는 배열 생성
const ofArr = Array.of(1,2,3) // [1,2,3]\

// Array.fill
// fill (value, start ,end)
// end 인덱스 직전가지의 값을 채움
const fillArr = Array(10).fill(0, 0, 9);
console.log(fillArr)

const fillArr2 = Array(10).fill().map((el,index) => {
    return index;
})
console.log(fillArr2)
// 0 ~ 9

/* 배열 검사 */
Array.isArray([]) // true
Array.isArray(new Array()) // true
Array.isArray({}) // false
Array.isArray({length:2}) // false
Array.isArray("Array") // false



