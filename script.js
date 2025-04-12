// Form parent elements:
const usersInputs = document.querySelector('#usersInputs');
const usersInputs2 = document.querySelector('#usersInputs2');
const usersInputs3 = document.querySelector('#usersInputs3');

// Round-Buttons navagation elements:
const updateBtn = document.querySelector('.roundBtn1');
const addNewBtn = document.querySelector('.roundBtn2');
const reviewBtn = document.querySelector('.roundBtn3');

// List of user inputs:
let nickname, username, email, phone, sslcMark, hlscMark, occupation, address, pincode;

// Round-Buttons navagation Click-Events:
updateBtn.addEventListener('click', function(){
    usersInputs.style.display = "block"
    usersInputs2.style.display = "none"
    usersInputs3.style.display = "none"
    console.log("Click 1");
})

addNewBtn.addEventListener('click', function(){
    usersInputs2.style.display  = "block"
    usersInputs.style.display   = "none"
    usersInputs3.style.display  = "none"
    console.log("Click 2");
})

reviewBtn.addEventListener('click', function(){
    usersInputs3.style.display  = "block"
    usersInputs2.style.display  = "none"
    usersInputs.style.display   = "none"
    console.log("Click 3");
})

// Form-1 Script program:
const nextBtn1 = document.querySelector('.nextBtn1');

nextBtn1.addEventListener('click', function(e) {
    e.preventDefault();

    nickname = document.querySelector('#nickname').value;
    username = document.querySelector('#username').value;
    email = document.querySelector('#email').value;
    phone = document.querySelector('#number').value;

    // console.log(nickname, username, email);
    if(!nickname.trim()){
        document.getElementById('error-nickname').textContent = 'Nickname is required';
        return;
    }

    if(!email.trim() || !isValidEmail(email)){
        document.getElementById('error-email').textContent = 'Please enter a valid email address';
        return;
    }

    if(!username.trim()){
        document.getElementById('error-username').textContent = 'Username is required';
        return;
    }

    if(!phone.trim() || !isValidPhone(phone)){
        document.getElementById('error-phoneNumber').textContent  = 'Please enter a valid phone number';
        return;
    }

    
    alert('Registration successful!');
    tempStorage()
    // console.log(nickname, username, email, phone);
    usersInputs2.style.display  = "block"
    usersInputs3.style.display  = "none"
    usersInputs.style.display   = "none"    
})


// Email & Phone Validation function:
function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone){
    return /^(0|[+91]{3})?[7-9][0-9]{9}$/.test(phone);
}


// Form-2 Script program:
const nextBtn2 = document.querySelector('.nextBtn2');

nextBtn2.addEventListener('click', function(e) {
    e.preventDefault()

    sslcMark = document.querySelector('#sslcEducation').value;
    hlscMark = document.querySelector('#hlscEducation').value;
    occupation = document.querySelector('#occupation').value;
    address = document.querySelector('#address').value;
    pincode = document.querySelector('#pincode').value;

    if(!sslcMark.trim()){
        document.getElementById('error-sslcMark').textContent  = '10th precentage is required';
        return
    }

    if(!hlscMark.trim()){
        document.getElementById('error-hslcMark').textContent  = '12th precentage is required';
        return
    }

    if(!occupation.trim()){
        document.getElementById('error-Occupation').textContent  = 'Occupation mark is required';
        return
    }

    if(!address.trim()){
        document.getElementById('error-Address').textContent  = 'Address mark is required';
        return
    }

    if(!pincode.trim()){
        document.getElementById('error-Pincode').textContent  = 'Pincode mark is required';
        return
    }

    alert('Registration successful!');
    tempStorage()
    // console.log(sslcMark ,hlscMark ,occupation ,address, pincode);
    usersInputs3.style.display  = "block"
    usersInputs2.style.display  = "none"
    usersInputs.style.display   = "none" 
})

// Submit function script & Storing permanent at localStorage:
const submitButton = document.querySelector('.submitBtn');

submitButton.addEventListener('click', function(){
    
    let store = JSON.parse(localStorage.getItem('usersValues') || '[]');

    console.log(store);
    
    const usersData = {
        Nickname: nickname,
        Username: username,
        Email: email,
        Phone: phone,
        SslcMark: sslcMark,
        HLSCMark: hlscMark,
        Occupation: occupation,
        Address: address,
        Pincode: pincode
    }
    // Pushing object into JSON to store in localStorage
    store.push(usersData);

    // Getting localstorage data
    localStorage.setItem('usersValues', JSON.stringify(store));
    // console.log(store);
    localStorage.removeItem('temps')
})

// Temporary storing at localStorage:
function tempStorage(){
    // let temp = JSON.parse(localStorage.getItem('temps'));

    nickname = document.querySelector('#nickname').value;
    username = document.querySelector('#username').value;
    email = document.querySelector('#email').value;
    phone = document.querySelector('#number').value;
    sslcMark = document.querySelector('#sslcEducation').value;
    hlscMark = document.querySelector('#hlscEducation').value;
    occupation = document.querySelector('#occupation').value;
    address = document.querySelector('#address').value;
    pincode = document.querySelector('#pincode').value;

    let tempData = {
        Nickname: nickname || '',
        Username: username || '',
        Email: email || '',
        Phone: phone || '',
        SslcMark: sslcMark || '',
        HLSCMark: hlscMark || '',
        Occupation: occupation || '',
        Address: address || '',
        Pincode: pincode || '',
    }
    // temp.push(tempData);

    localStorage.setItem('temps', JSON.stringify(tempData));
    // console.log(tempData);
}

// Retrieve data from Temporary storage:
window.addEventListener('load', function(){
    let savedData = JSON.parse(localStorage.getItem('temps'));

    // console.log(savedData.Nickname)
    
    if(savedData){
        document.querySelector('#nickname').value = savedData.Nickname || '';
        document.querySelector('#username').value = savedData.Username || '';
        document.querySelector('#email').value = savedData.Email || '';
        document.querySelector('#number').value = savedData.Phone;
        document.querySelector('#sslcEducation').value = savedData.SslcMark || '';
        document.querySelector('#hlscEducation').value = savedData.HLSCMark || '';
        document.querySelector('#occupation').value = savedData.Occupation || '';
        document.querySelector('#address').value = savedData.Address || '';
        document.querySelector('#pincode').value = savedData.Pincode || '';
    }
})
