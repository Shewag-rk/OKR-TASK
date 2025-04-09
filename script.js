const usersInputs = document.querySelector('#usersInputs');
let usersInputs2 = document.querySelector('#usersInputs2');
let usersInputs3 = document.querySelector('#usersInputs3');


const firstBtn = document.querySelector('.firstBtn');
const secondBtn = document.querySelector('.secondBtn');
const thirdBtn = document.querySelector('.thirdBtn');

const errorMessage = document.querySelector('#errorMessage')

// Next buttons
const nextBtn1 = document.querySelector('.nextBtn1');
const nextBtn2 = document.querySelector('.nextBtn2');


// Form change button actions
firstBtn.addEventListener('click', ()=>{
    usersInputs.style.display = "block"
    usersInputs2.style.display = "none"
    usersInputs3.style.display = "none"
    console.log("Click 1");
})

secondBtn.addEventListener('click', ()=>{
    usersInputs2.style.display  = "block"
    usersInputs.style.display   = "none"
    usersInputs3.style.display  = "none"
    console.log("Click 2");
})

thirdBtn.addEventListener('click', ()=>{
    usersInputs3.style.display  = "block"
    usersInputs2.style.display  = "none"
    usersInputs.style.display   = "none"
    console.log("Click 3");
})


nextBtn1.addEventListener('click', function(e) {
    e.preventDefault();

    // nickname = document.querySelector('#nickname').value;
    // username = document.querySelector('#username').value;
    // email = document.querySelector('#email').value;
    // phone = document.querySelector('#number').value;

    // // console.log(nickname, username, email);
    // if(!nickname.trim()){
    //     displayError('Nickname is required');
    //     return;
    // }

    // if(!username.trim()){
    //     displayError('Username is required');
    //     return;
    // }

    // if(!email.trim() || !isValidEmail(email)){
    //     displayError('Please enter a valid email address');
    //     return;
    // }
    // if(!phone.trim() || !isValidPhone(phone)){
    //     displayError('Please enter a valid phone number');
    //     return;
    // }

    
    // alert('Registration successful!');
    // console.log(nickname, username, email, phone);
    usersInputs2.style.display  = "block"
    usersInputs.style.display   = "none"
    usersInputs3.style.display  = "none"    
})



function displayError(message){
    errorMessage.innerHTML += `
    <small class = "error">${message}</small>;
    `
}

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone){
    return /^(0|[+91]{3})?[7-9][0-9]{9}$/.test(phone);
}


// Form seconde script:

const sslMark = document.querySelector('#sslEducation');
const hlscMark = document.querySelector('#hlscEducation');
const occupation = document.querySelector('#occupation');
const address = document.querySelector('#address');
const pincode = document.querySelector('#pincode');

nextBtn2.addEventListener('click', function() {
    
})