const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

function changeOutput(){
    if(this.value < 1){
        outputText.textContent = 'Anonymous';
    }
    else{
        outputText.textContent = this.value;
    }
}

inputText.addEventListener('input', changeOutput);