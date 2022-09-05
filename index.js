const logIn = document.querySelector(".logIn");
const signUp = document.querySelector(".signUp");
const password = document.getElementById("regpwd");
const confirmPassword = document.getElementById("confirmPwd");

const registerCard = document.querySelector(".registerCard");
const mainCard = document.querySelector(".mainCard")

logIn.addEventListener("click", () => {
    registerCard.classList.add("hidden");
    mainCard.classList.remove("hidden");
})

signUp.addEventListener("click", () => {
    mainCard.classList.add("hidden");
    registerCard.classList.remove("hidden");
})

function validatePassword(){
    if (password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Password don't match");
    }else{
        confirmPassword.setCustomValidity("");
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;