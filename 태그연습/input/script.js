let year = document.querySelector('.year');

// 한국 표준시 Korea Standard Time
let kst = new Date();
let getYear = kst.getFullYear(); //연도
let getMonth = kst.getMonth(); //월
let getDate = kst.getDate(); //일


// 1920년도 부터 2024년도 까지 옵션에 추가
// for(let i = 1920; i <= 2024; i++){
for(let i = 1920; i <= getYear; i++){
    // (방법1)
    // 옵션 태그 추가 
    // let options = document.createElement('option');
    // options.innerHTML = i;
    // year.appendChild(options);

    // (방법2)
    let options = `<option>${i}</option>`;
    // 'beforebegin' – 요소 바로 앞에 html을 삽입
    // 'afterbegin' – 요소의 첫 번째 자식 요소 바로 앞에 html을 삽입
    // 'beforeend' – 요소의 마지막 자식 요소 바로 다음에 html을 삽입
    // 'afterend' – 요소 바로 다음에 html을 삽입
    // 추가하고 싶은곳 insertAdjacentHTML('위치',추가할요소)
    year.insertAdjacentHTML('beforeend', options);
    
    // (방법3)
    // Jquery
    // $('.year').append('<option>' + i + '</option>');
}






// for(let i = 1920; i <= 2024; i++){
//     //console.log(i)
//     let option = document.createElement("option");
//     option.value = i;
//     option.text = i;
//     year.appendChild(option);

// }