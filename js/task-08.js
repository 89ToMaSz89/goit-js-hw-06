const form = document.querySelector('#login-form');

function handleSubmit(event){
    event.preventDefault();
}

form.addEventListener("submit", handleSubmit);

// const handle = (event) => {
//     event.preventDefault();
// }

// form.addEventListener('submit', handle);