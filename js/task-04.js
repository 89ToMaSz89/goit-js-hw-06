const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"');
const counter = document.querySelector('#value');

let counterValue = 0;

const clickButtonIncrement = () => {    // function increments of counter
    counterValue += 1;
    counter.textContent = counterValue;
}

const clickButtonDecrement = () => {    // function decrements of counter
    counterValue -= 1;
    counter.textContent = counterValue;
}

buttonIncrement.addEventListener("click", clickButtonIncrement);
buttonDecrement.addEventListener("click", clickButtonDecrement);
