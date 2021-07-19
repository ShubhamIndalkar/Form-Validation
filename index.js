console.log("Hello")

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validUser = false;

console.log(name, email, phone)

name.addEventListener('blur', () => {
    console.log("name is blured")
    
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = name.value
    if (regex.test(str)) {
        console.log("Your Name is Valid..");
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log("Your Name is not Valid..");
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur', () => {
    console.log("email is blured")
    // Validate email here

    // let regex = /^([_\.\-0-9a-z-A-Z]){0,100}@([_\.\-0-9a-zA-Z]){0,10}\.([a-zA-Z]){2,7}$/            // This is 1st method 
    let regex = /^([_\.\-0-9a-z-A-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/                          // This is another method 
    let str = email.value
    if (regex.test(str)) {
        console.log("Your email is Valid..");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log("Your email is not Valid..");
        email.classList.add('is-invalid');    
        validEmail = false   
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blured")
    // Validate phone here

    let regex = /^[0-9]{10}$/
    let str = phone.value
    if (regex.test(str)) {
        console.log("Your phone is Valid..");
        phone.classList.remove('is-invalid');
        validPhone = true   
    }
    else {
        console.log("Your phone is not Valid..");
        phone.classList.add('is-invalid');
        validPhone = false   
    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=> {
    e.preventDefault();
    console.log("You clicked on Submit....")
    console.log(validUser,validEmail,validPhone)

    // Submit your form here
    let failure = document.getElementById('failure');
    let success = document.getElementById('success');

    if (validUser && validEmail && validPhone){
        console.log('Phone, email and user are valid. Submitting the form');

        success.classList.add('show');
        failure.classList.remove('show');
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');

        failure.classList.add('show');
        success.classList.remove('show');
    }
})































