//Walidacje formularza

const inputs = document.querySelectorAll('#input')
const formSubmitButton = document.querySelector('.button');
const validationWindow  = document.querySelector('.validation-alert');
const emailInput = document.querySelector('.email');

const checkInputsForEmptyness = () => {
    formSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        inputs.forEach((input)=>{
            if ((input.value === " ") || (input.value === "")){
                openValidationWindow()
                setTimeout(closeValidationWindow, 5000);
                highlightWrongInput(input);
            } else {
                highlightRemove(input);
            }
        })
        validateEmail(emailInput.value) ? alert('true') : highlightWrongInput(emailInput);
    })
}

function openValidationWindow(){
    validationWindow.classList.add('active-window');
}

function closeValidationWindow(){
    validationWindow.classList.remove('active-window');
}

function highlightWrongInput(item){
    item.classList.add('highlight-red');
    // console.log(item, item.classList);
}

function highlightRemove(item){
    item.classList.remove('highlight-red');
    // console.log(item, item.classList);
}

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


checkInputsForEmptyness()
