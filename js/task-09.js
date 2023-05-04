function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.body;

function changeColor(){
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}

button.addEventListener('click', changeColor);
