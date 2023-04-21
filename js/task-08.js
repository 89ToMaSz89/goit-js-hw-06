const form = document.querySelector('.login-form');
const fieldName = form.querySelectorAll('input');

console.log(fieldName);

const handleDefaultAction = (event) => {
    event.preventDefault();

    for(let i=0; i<fieldName.length; i++){
        if(fieldName[i].value === " "){
        fieldName[i].textContent = "Proszę o uzupełnienie pola";
        }
    }
}

form.addEventListener('submit', handleDefaultAction);

