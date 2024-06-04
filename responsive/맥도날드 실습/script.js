
// 검색창 ----------------------------------------------
// search-btn 클릭 했을 때 search 한테 is-open class add(검색창 열기)
// search-close-btn 클릭 했을 때 search 한테 is-open class remove(검색창 닫기)
// funciton 함수이름 (){}
let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-btn');
let searchCloseBtn = document.querySelector('.search-close-btn');
// console.log(search, searchCloseBtn, searchCloseBtn 관리자 화면에서 확인

function searchOpen(){
    search.classList.add('is-open');
}
function searchClose(){
    search.classList.remove('is-open');
}
searchOpenBtn.addEventListener('click', searchOpen);
searchCloseBtn.addEventListener('click', searchClose);


// 사이드바 --------------------------------------------
// sidebar-open-btn 클릭 했을 때 sidebar 한테 active class add(사이드바 열기)
// overlay 클릭 했을 때 sidebar 한테 active class remove(사이드바 닫기)
let sidebar = document.querySelector('.sidebar');
let overlay = document.querySelector('.overlay');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
// console.log(sidebar, overlay, sidebarOpenBtn)

function sidebarOpen(){
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

function sidebarClose(){
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

sidebarOpenBtn.addEventListener('click', sidebarOpen);
overlay.addEventListener('click', sidebarClose);
//sidebar.addEventListener('mouseleave', sidebarOpen);