const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${input.value}px`;

function changeSize(){
    text.style.fontSize = `${input.value}px`;
}

input.addEventListener('input', changeSize);
