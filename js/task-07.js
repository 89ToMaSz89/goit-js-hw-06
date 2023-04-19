const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeSize(){
    text.style.fontSize = `${this.value}px`;
}

input.addEventListener('input', changeSize);
