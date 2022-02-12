import { User } from "./app.js";

let user;

const login_form = document.querySelector("#login_form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signup = document.querySelector("#signup")

login_form.addEventListener("submit", e => {
    e.preventDefault();

    user = new User(email.value, password.value);
});

signup.addEventListener("click", e => {
    user = new User(email.value, password.value);
})
