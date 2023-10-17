//Walidacje formularza

const inputs = document.querySelectorAll('#input');
const nameInput = document.querySelectorAll('.name');
const formSubmitButton = document.querySelector('.button');
const validationWindow  = document.querySelector('.validation-alert');
const emailInput = document.querySelector('.email');
const successMessage = document.querySelector('.success-message');
const overlay = document.querySelector('.overlay');


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
        validateEmail(emailInput.value) ? successfulFormMessage() : highlightWrongInput(emailInput)&openValidationWindow();
    })
}


function openValidationWindow(){
    validationWindow.classList.add('active-window');
    setTimeout(closeValidationWindow, 5000);
}

function closeValidationWindow(){
    validationWindow.classList.remove('active-window');
}

function highlightWrongInput(item){
    item.classList.add('highlight-red');
}

function highlightRemove(item){
    item.classList.remove('highlight-red');
}

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//successful registration message
function successfulFormMessage(){
    //just in case name corrections
    const name = nameInput[0].value.charAt(0).toUpperCase() + nameInput[0].value.slice(1);
    const surname = nameInput[1].value.charAt(0).toUpperCase() + nameInput[1].value.slice(1);

    const userName = name + " " + surname;

    //open message
    if(checkInputsForEmptyness){
        document.getElementById("success").innerHTML =`${userName}, thank You for your trust!`;
        successMessage.classList.add('active');
        overlay.setAttribute('style', 'display: block');
    }

    //close message
    const btnClose = document.querySelector('.success-message__button');
    btnClose.addEventListener('click', ()=>{
        successMessage.classList.remove('active');
        overlay.removeAttribute('style', 'display: block');
        document.getElementById('form').reset()
    })
}


checkInputsForEmptyness()
