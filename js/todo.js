const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList  = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement;          // 삭제하고자 하는 li요소 저장
    li.remove();
}

function paintToDo(newTodo){
    const li    = document.createElement("li");     // li태그 요소 생성
    const span  = document.createElement("span");   // span태그 요소 생성
    span.innerText = newTodo;                       // 입력한 to do 를 span태그에 나타내기
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);                           // li태그 내 span태그 추가
    li.appendChild(button);
    todoList.appendChild(li);                       // todoList(ul)요소 내 li태그 추가
}

function handleToDoSubmit(event){
    event.preventDefault();                         // 브라우저 기본 동작(새로고침) 막기
    const newTodo = toDoInput.value;               
    toDoInput.value = "";                          
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);