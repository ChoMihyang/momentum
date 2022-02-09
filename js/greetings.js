const loginForm         = document.querySelector("#login-form");
const loginInput        = document.querySelector("#login-form input");
const greeting          = document.querySelector("#greeting");

const HIDDEN_CLASSNAME  = "hidden";
const USERNAME_KEY      = "username";

function onLoginSubmit(event){
    event.preventDefault();                         // 브라우저의 기본 동작 (새로 고침) 실행 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);      // hidden이라는 class name 추가
    const username = loginInput.value;              // 유저 이름 저장
    localStorage.setItem(USERNAME_KEY, username);   // Storage 내 유저 정보 저장
    printGreetings(username);   
}

function printGreetings(username){  
    greeting.innerText = `Hello ${username}`;       // id name이 'greeting'인 h1 태그 내 username을 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);    // h1의 class name을 제거함으로써 화면에 표시되도록 함
}

const savedUsername = localStorage.getItem(USERNAME_KEY);   // Storage 내 저장된 유저 정보를 가져온 후 저장

// Storage 내 유저 정보 저장 유무에 따라
// 로그인 form 화면 또는 Greeting 화면 나타내기
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    printGreetings(savedUsername);
}
