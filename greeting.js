const greetingForm = document.querySelector(".greetingForm");
const greetingInput = document.querySelector(".greetingInput");
const greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askName();
    }else{
        paintGreeting(currentUser);
    }
}

function askName(){
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit",handleSubmit);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = greetingInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text){
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello! What's up! ${text}`;
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function init(){
    loadName();
    
}
init();