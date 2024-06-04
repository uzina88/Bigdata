// html #hello 찾아오기
// querySelector('.클래스 이름')
// getElementById('아이디 이름')
let hello = document.getElementById('hello');
let ChangeBtn = document.getElementById('txt-change-btn');
// console.log(hello, ChangeBtn)

hello.innerHTML = '안녕?';
hello.style.color = 'green';

// ChangeBtn 클릭 했을 때, html 'Hello', color -> blue
// addEventListener('click', () => {})
ChangeBtn.addEventListener('click',() => {
    hello.innerHTML = 'Hello';
    hello.style.color = 'blue';
})

// querySelectorAll: 클래스 모두 찾는다.
let item = document.querySelectorAll('.item');
console.log(item)

// Vanilla Js
document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';


// j-Query ----------------------------------------------------
$('.item').css('color','red');