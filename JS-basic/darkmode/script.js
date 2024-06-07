// let header = document.querySelector('.header');
// let logo = document.querySelector('.logo');
// let darkBtn = document.querySelector('.mode-btn');
//console.log(header, logo, darkBtn)

// function darkbtnopen(){
//     if(darkBtn.innerHTML === "Dark") {
//         header.classList.add('dark');
//         logo.classList.add('dark');
//         darkBtn.classList.add('dark');
//         darkBtn.innerHTML = "Light";
//     } else {
//         header.classList.remove('dark');
//         logo.classList.remove('dark');
//         darkBtn.classList.remove('dark');
//         darkBtn.innerHTML = "Dark";
//     }
// }
// darkBtn.addEventListener('click', darkbtnopen);


// if else 문 -----------------------------------------------------
// // mode-btn class안 텍스트를 가져온다.
// // 텍스트가 dark 일 경우(조건)
// let modeBtn = document.querySelector('.mode-btn');

// function modeToggle(){
//     //변수 선언
//     let modeTxt = modeBtn.innerHTML;
//     let header = document.querySelector('header');

//     if(modeTxt === "Dark"){
//         //텍스트를 Light로 바꾼다.
//         modeBtn.innerHTML = "Light";
//         // header 태그에 dark class add
//         header.classList.add('dark');
//     } else {
//          //텍스트를 Dark로 바꾼다.
//          modeBtn.innerHTML = "Dark";
//          // header 태그에 dark class remove
//          header.classList.remove('dark');
//     }

// }

// // mode-btn 클릭하면 (클릭 이벤트)
// modeBtn.addEventListener('click', modeToggle);


// count 홀수 짝수문 ---------------------------------------------
// mode-btn class안 텍스트를 가져온다.
// 텍스트가 dark 일 경우(조건)
let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle(){
    //변수 선언
    let modeTxt = modeBtn.innerHTML;
    let header = document.querySelector('header');

    //count = count + 1;
    //클릭하면 1씩 증가
    count += 1;
    console.log(count)
    // 1,3,5,7 => Darkmode 홀수
    // 2,4,6,8 => Lightmode 짝수

    if(count % 2 == 0){
        // this = modeBtn 이다.
        // 짝수일 때 다크모드 remove
        this.innerHTML = 'Dark';
        header.classList.remove('dark');
    } else {
        // 홀수일 때 다크모드 add
        this.innerHTML = 'Light';
        header.classList.add('dark');
    }

}
modeBtn.addEventListener('click', modeToggle);
