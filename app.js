const loginForm         = document.querySelector("#login-form");
const loginInput        = document.querySelector("#login-form input");
const greeting          = document.querySelector("#greeting");

const HIDDEN_CLASSNAME  = "hidden";

function onLoginSubmit(event){
    event.preventDefault();                         // 브라우저의 기본 동작 실행 막기
    const username = loginInput.value;              // 유저 이름 저장
    localStorage.setItem("username", username);     // Storage 내 유저 정보 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);      // hidden이라는 class name 추가
    greeting.innerText = `Hello ${username}`;       // id name이 'greeting'인 h1 태그 내 username을 추가  
    greeting.classList.remove(HIDDEN_CLASSNAME);    // h1의 class name을 제거함으로써 화면에 표시되도록 함
}

loginForm.addEventListener("submit", onLoginSubmit);