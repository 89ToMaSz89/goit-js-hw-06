const form = document.querySelector('.login-form');
const {elements: {email, password} } = form;

const handleSubmit = (event) => {
    event.preventDefault();

    if(email.value === ""){
        email.value = "Please complate the field of form";
    }
    if(password.value === ""){
        password.value = "Please complate the field of form";
    }
console.log(event.currentTarget);
    
console.log(` Email: ${email.value} \n password: ${password.value}`);
event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);  
