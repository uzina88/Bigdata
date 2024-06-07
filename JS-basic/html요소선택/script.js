// html #hello 찾아오기
// querySelector('.클래스 이름')
// getElementById('아이디 이름')
let hello = document.getElementById('hello');
let ChangeBtn = document.getElementById('txt-change-btn');
// console.log(hello, ChangeBtn)

hello.innerHTML = '안녕?';
hello.style.color = 'green';

// ChangeBtn 클릭 했을 때, html 'Hello', color -> blue
// addEventListener('click', () => {}) | function => 같음
ChangeBtn.addEventListener('click',() => {
    hello.innerHTML = 'Hello';
    hello.style.color = 'blue';
})

// querySelectorAll: 클래스 모두 찾는다.
let items = document.querySelectorAll('.item');
// console.log(items)

// Vanilla Js -------------------------------------------------
document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';

// j-Query ----------------------------------------------------
$('.item').css('color','red');

// 반복문 for -------------------------------------------------
// for(let i = 0; i <= items.length; i++){
//     items[i].innerHTML ='for 반복문';
// }

// 배열 반복 forEach ------------------------------------------
// 배열.forEach((item) => { })
// items.forEach((item) => {
//     item.innerHTML = '반복문';
// })

// 자료형 -----------------------------------------------------
// Numbur
let num = 5;
// ''가 들어가면 String 으로 인식
let num1 = '5';
let txt = '안녕하세요!';

// 숫자, 문자, 변수
// 문자열은 따옴표 안에
console.log(num1)
console.log(typeof(num1))
console.log(typeof('txt'));
console.log(txt);

// Array 배열, Object
// 여러가지 값을 한번에 담을 때
// Array : []
// Object : {}

let arr = ['jina', 333, 'ㅎㅎㅎ', txt];
console.log(arr[3])

// {key : value}
let tel = 01033087940;

let obj = {
    이름 : '유지나',
    전화 : tel,
    주소 : '대전광역시 대덕구 비래동'
}
console.log(obj.전화)
// 결과값 : 유지나



let hi = '안녕하세요 저는';
let name = '유지나';

// 변수, 문자열
// `` backtick ${변수명}
let my = hi + name + '입니다';
let my1 = `안녕하세요 저는 ${name} 입니다`;

// 문자열
// ''
// ""
// ``
console.log(hi, name)
console.log(my)
console.log(my1)

// 매개변수(parameter)로 이름값
function info(myName){
    console.log(`안녕하세요 저는 ${myName} 입니다`);
}
info('유지나'); // 함수 호출(매개변수 값 전달)


// 배열(Array), Object | [], {}
// 배열 원하는 값, 배열이름[num], 배열의 시작은 0부터

// Object 원하는 값, 오브젝트 이름.키값
// key : value, key : value
// 여러 값을 입력하고 싶을 때는 ,로 구분

// 변수, 문자열
// 문자열 : '', "", `` (따옴표, 큰따옴표, 백틱)

// 문자열 사이에 변수 바인딩 방법은 2가지
// + : 변수 + '문자열'
// ex) '안녕' + name(변수) + '나는' + age(변수)

// `` : 백틱 안에 문자열 입력 후 변수는 ${변수}
// ex) `` : `안녕 ${name} 나는 ${age}

// Parameter(매개변수)
// 함수를 호출할 때 함수에 넘겨주는 값
