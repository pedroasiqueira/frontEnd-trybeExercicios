import { nanoid, random } from "nanoid";
import './style.css'

const passwordBrnEl = document.querySelector("button")
const displayPasswordElement = document.querySelector('h2')

passwordBrnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordElement.innerHTML = randomPassword;
})