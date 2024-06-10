// 복합대입연산자
// 모두 ture 일때 제출되라
let idVeri = pwVeri = pwCVhkVeri = false;



// 아이디 ------------------------------------------------------------------------
let userid = document.getElementById('userid');
let idWarn = document.querySelector('.id-warn');

// keyup : 키를 눌렀다가 놨을 때 발생
userid.addEventListener('focusout', function() {
  // userid.value => input에 입력된 텍스트
  // userid.value.length => input 텍스트 길이
  if(userid.value.length < 8) {
    // 8글자 미만일 때 '아이디를 8글자 이상 입력하세요.' (color : red)
    idWarn.innerHTML = `<span class="txt-red">아이디를 8글자 이상 입력하세요.</span>`;
    } else {
    // 8글자 이상일 때 '멋진 아이디네요!' (color : green)
    idWarn.innerHTML = `<span class="txt-green">멋진 아이디네요!</span>`;
    idVeri = true;
  }
})

// 비밀번호 ------------------------------------------------------------------------
let userpw = document.getElementById('userpw');
let pwWran = document.querySelector('.pw-warn');

userpw.addEventListener('focusout',function(){
  let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  // 비밀번호 자릿수 (최소 8자에서 16자까지)
  // 최소 하나 이상의 영문자 (소문자 or 대문자)
  // 최소 하나 이상의 숫자
  // 최소 하나 이상의 특수문자 (!@#$%^&*?_)
  // pwExp.text(userpw.value)
  // test() : 정규식 일치 여부를 Boolean 값으로 반환한다. ture, false
  if(!pwExp.test(userpw.value)){
    pwWran.innerHTML = `<span class="txt-red">8자에서 16자까지, 영문자, 숫자 및 특수 문자를 포함해야 합니다.</span>`;
  } else {
    pwWran.innerHTML = '';
    pwVeri = ture;
  }
})


// 비밀번호 재확인 -----------------------------------------------------------------
let userPwchk = document.getElementById('user-pwchk');
let pwChkWarn = document.querySelector('.pwchk-warn');

// userpw.value 값과 userPwChk.value 값 비교
userPwchk.addEventListener('focusout',function(){
  if(userpw.value === userPwchk.value){
    // 일치할 때 => '';
    pwChkWarn.innerHTML = '';
    pwCVhkVeri = true;
  } else {
    // 일치하지 않을 때 => 비밀번호가 일치하지 않습니다.
    pwChkWarn.innerHTML = `<span class="txt-red">비밀번호가 일치하지 않습니다.</span>`;
  }
})



// 생년월일 ------------------------------------------------------------------------
let year = document.getElementById('year');
let month = document.getElementById('month');
let date = document.getElementById('date');
// console.log(year,month,date)


let kst = new Date();
// console.log(kst)
let getYear = kst.getFullYear();
// console.log(getYear)

// 1920 i값이 getYear(2024)와 작거나 같을 때 까지
// i를 1씩 더하며 반복
for(let i = 1920; i <= getYear; i++){
  let option = `<option>${i}</option>`;
  year.insertAdjacentHTML('beforeend',option);
}

for(let i = 1; i <= 12; i++){
  let option = `<option>${i}</option>`;
  month.insertAdjacentHTML('beforeend',option);
}

for(let i = 1; i <= 31; i++){
  let option = `<option>${i}</option>`;
  date.insertAdjacentHTML('beforeend',option);
}


// 취미 ------------------------------------------------------------------------
let checkBoxs = document.querySelectorAll('input[type="checkbox"][name="hobby"]');
let MaxCount = 5;

// 5개까지 체크 되도록
// aleart('최대 5개까지만 선택할 수 있습니다.')
// 배열 함수
checkBoxs.forEach((item) => {
  item.addEventListener('change', () => {
    let checkCount = document.querySelectorAll('input[type="checkbox"][name="hobby"]:checked').length;
    if(checkCount > MaxCount){
      item.chekked - false; //6번째 체크박스 체크 해제
      alert ("최대 5개 까지만 가능합니다."); 
    }
  })
})


// 최종 전송
let submitBtn = document.getElementById('submit-btn');
let joinForm = document.getElementById('join-form');

submitBtn.addEventListener('click', (e) => {
  if(idVeri && pwVeri && pwChkVeri) {
    joinForm.submit();
  } else {
    // 기본 속성 제거
    e.preventDefault();
  }
})