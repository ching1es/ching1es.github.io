const loginForm = document.querySelector("#sign");
const loginInput = document.querySelector("#sign input");
const welcome = document.querySelector("#welcome");
const icon = document.querySelector("#login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

//**input*/
function inputsubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value); /////////.value
    welcomeUser();
}

function welcomeUser(){
    const username = localStorage.getItem(USERNAME_KEY);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    icon.classList.remove(HIDDEN_CLASSNAME);
    welcome.innerHTML = `Welcome ${username} !`;
    welcome.classList.remove(HIDDEN_CLASSNAME);
}

const nameValue = localStorage.getItem(USERNAME_KEY);

if(nameValue === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", inputsubmit);
}else {
    welcomeUser();
}





