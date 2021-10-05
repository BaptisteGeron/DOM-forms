//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
let userFirstName = document.getElementsByTagName('input')[0];
let firstNamePlace = document.getElementById('display-firstname');

userFirstName.addEventListener('keyup', copyInput);

function copyInput() {
   let userFirstNameInput = userFirstName.value;
   firstNamePlace.textContent = userFirstNameInput;
}

//Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
let userAge = document.getElementsByTagName('input')[1];
let hiddenUnder18 = document.getElementById('a-hard-truth');
userAge.addEventListener('keyup', checkAge);

function checkAge() {
    if (parseInt(userAge.value)>=18){
        hiddenUnder18.style.visibility='visible';
    }
    else {
        hiddenUnder18.style.visibility='hidden';
    }
}

//Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
let userPassword = document.getElementsByTagName('input')[2];
let userPasswordConfirmation = document.getElementsByTagName('input')[3];

userPassword.addEventListener('keyup', passCheck);
function passCheck() {
if (userPassword.value.length<6) {
    console.log(userPassword.value.length);
userPassword.style.backgroundColor= 'red';
}
else {
    userPassword.style.backgroundColor= 'white';
}
}
userPasswordConfirmation.addEventListener('keyup', passConfirmCheck)
function passConfirmCheck() {
    if (userPasswordConfirmation.value!=userPassword.value) {
        userPasswordConfirmation.style.backgroundColor= 'red'
    }
    else {
        userPasswordConfirmation.style.backgroundColor= 'white'; 
    }
}

//Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
let userCheckbox = document.getElementById('toggle-darkmode');

userCheckbox.addEventListener('change', themeSelector);

function themeSelector(e) {
    if (e.target.value == "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black";

    }
}
