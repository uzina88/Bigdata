//Javascript 변수명(낙타표기법)
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.popup-open-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');

// funciton () {}
// popupOpenBtn 클릭시 popup에 is-active class Add
popupOpenBtn.addEventListener('click', function(){
  popup.classList.add('is-active');
})

// popupCloseBtn 클릭시 popup에 is-active class remove
popupCloseBtn.addEventListener('click', function(){
  popup.classList.remove('is-active');
})



// siderbar
// let sidebar = document.querySelector('.sidebar');
// let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
// let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
// // console.log(sidebarOpenBtn)

// // sidebarOpenBtn 클릭시 sidebar에 is-active class Add
// sidebarOpenBtn.addEventListener('click', function(){
//   sidebar.classList.add('is-active');
// })
// // sidebarOpenBtn 클릭시 sidebar에 is-active class remove
// sidebarCloseBtn.addEventListener('click', function(){
//   sidebar.classList.remove('is-active');
// })


// 함수 소괄호 안 : 매개변수
function plus (){
  // 실행 할 코드
}