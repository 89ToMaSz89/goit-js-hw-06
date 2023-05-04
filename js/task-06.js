const input = document.querySelector('#validation-input');
const inputDataLength = input.getAttribute("data-length");

const blur = () => {
    
    if((input.value.length < inputDataLength) || (input.value.length > inputDataLength)){
        input.classList.add("invalid");
    }
    else{
        input.classList.add("valid");
    }
}

input.addEventListener('blur', blur);
