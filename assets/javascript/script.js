document.getElementById("saveBtn").addEventListener("click", function () {
    window.location.reload();
  });

function myFunction() {

  let name = document.getElementById("name").value;
  let nameError = document.getElementById("nameerror");
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("mailerror");
  let password = document.getElementById("password").value;
  let passError = document.getElementById("passworderror");
  let rePassword = document.getElementById("repassword").value;
  let rePassError = document.getElementById("re-passworderror");
  let dob = document.getElementById("dob").value;
  let dobError = document.getElementById("doberror");
  let phone = document.getElementById("phone").value;
  let phoneError = document.getElementById("phoneerror");
  let course = document.getElementById("course").value;
  let courseError = document.getElementById("courseerror");
  let genderError = document.getElementById("gendererror");
  let checkGen = document.querySelector('input[name="gender"]:checked');
  let country=document.getElementById("country").value;
  let countryError=document.getElementById("countryerror");
  
  let  isvalid = true;




  if (name.length == 0) {
    nameError.innerHTML = "Please enter name";
    nameError.style.color = "red";
    isvalid = false;
  }
  else if (!/^[A-Z]/.test(name)) {
    nameError.innerHTML = "Name must start with capital letter";
    nameError.style.color = "red";
     isvalid = false;
  }
  else if (/[0-9]/.test(name)) {
    nameError.innerHTML = "numbers  are  not allowed";
    nameError.style.color = "red";
     isvalid = false;
  }
 else if (/[@#&*]/.test(name)) {
    nameError.innerHTML = "special characters are not allowed";
    nameError.style.color = "red";
     isvalid = false;
  }
  else if (name.length < 3) {
    nameError.innerHTML = "Name must be at least 3 characters";
    nameError.style.color = "red";
    isvalid = false;
  }
   

  else {
    nameError.innerHTML = "";

  }


  if (email.length == 0) {
    emailError.innerHTML = "enter your email id";
    emailError.style.color = "red";
     isvalid = false;
  }


  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerHTML = "please enter this format 'ex@gmail.com'";
    emailError.style.color = "red";
    isvalid = false;
  } else {
    emailError.innerHTML = "";

  }


  if (password.length == 0) {
    passError.innerHTML = "Enter your password";
    passError.style.color = "red";
     isvalid = false;
  }
  else if (!/[A-Z]/.test(password)) {
    passError.innerHTML = "Add uppercase letter";
    passError.style.color = "red";
     isvalid= false;
  }
  else if (!/[a-z]/.test(password)) {
    passError.innerHTML = "Add lowercase letter";
    isvalid= false;
  }
  else if (!/[0-9]/.test(password)) {
    passError.innerHTML = "Add number";
     isvalid = false;
  }
  else if (!/[*#@&]/.test(password)) {
    passError.innerHTML = "Add special character";
    isvalid = false;
  }
  else if (password.length < 8) {
    passError.innerHTML = "Minimum 8 characters";
     isvalid = false;
  }
  else {
    passError.innerHTML = "";

  }

  if (rePassword.length == 0) {
    rePassError.innerHTML = "please enter conform password";
    rePassError.style.color = "red";
     isvalid = false;
  }

  else if (password !== rePassword) {
    rePassError.innerHTML = "Passwords do not match";
    rePassError.style.color = "red";
     isvalid = false;
  }
  else {
    rePassError.innerHTML = "";

  }



  let birthDate = new Date(dob);
  let age = new Date().getFullYear() - birthDate.getFullYear();

  if (dob.length == 0) {
    dobError.innerHTML = "Enter DOB";
    dobError.style.color = "red";
    isvalid = false;
  }

  else if (age < 18) {
    dobError.innerHTML = "Age must be 18+";
    dobError.style.color = "red";
     isvalid = false;
  }
  else {
    dobError.innerHTML = "";

  }

 
  if (phone.length == 0) {
    phoneError.innerHTML = "enter your phone number";
    phoneError.style.color = "red";
     isvalid= false;
  }
  else if (!/^[6-9]\d{9}$/.test(phone)) {
    phoneError.innerHTML = "please enter first number is start with 6-9 number";
    phoneError.style.color = "red";
     isvalid = false;
  }
  else {
    phoneError.innerHTML = "";

  }



  if (course.length == 0) {
    courseError.innerHTML = "Select course";
    courseError.style.color = "red";
     isvalid = false;
  }
  else {
    courseError.innerHTML = "";

  }
  

  if (checkGen == null) {
    genderError.innerHTML = "Select gender";
    genderError.style.color = "red";
     isvalid = false;
  }
  else {
    genderError.innerHTML = "";

  } 
  
  if (country.length == 0) {
    countryError.innerHTML = "Select country";
   countryError.style.color = "red";
    isvalid = false;
  }
  else {
    countryError.innerHTML = "";

  }

  

 if (isvalid) {
    const modal = new bootstrap.Modal(document.getElementById("myModal"));
    modal.show();
  };


}

