const form = document.querySelector('.login-form');
const {elements: {email, password} } = form;

const paragraph = document.createElement("p");

const handleSubmit = (event) => {
    event.preventDefault();

    if((email.value === "") || (password.value === "")){
        form.append(paragraph);
        paragraph.textContent = "All fields must be completed!";
        paragraph.style.color = "red";
    }else{
        paragraph.remove();
    }
    
console.log(` Email: ${email.value} \n password: ${password.value}`);
event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);  
