const reset = document.querySelector("button");
const number = document.querySelector(".number");
const counter = document.querySelector("#count");

let count = 0;

function increase() {
    count = count + 1;
    number.innerHTML = count; 
};

function Reset() {
    count = 0;
    number.innerHTML = count; 
};
