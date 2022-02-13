import { User } from "./app.js";

let user;

const signup_form = document.querySelector("#signup_form");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

signup_form.addEventListener("submit", e => {
    e.preventDefault();

    user = new User(email.value, password.value);
    user.signUp(username.value, name.value);
});
