function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  function validateForm() {
  
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var username = document.contactForm.username.value;
    var password = document.contactForm.password.value;
    var confirmPassword = document.contactForm.confirmPassword.value;
  
      var nameErr = emailErr = usernameErr = passwordErr = confirmPasswordErr = true;
  
      
      if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
                      
        var regex = new RegExp("(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})");
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
      
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if(username == "") {
      printError("usernameErr", "Please enter your username");
  } else {
    var regex = /[a-z0-9\_\-]{8,}$/;
    
      if(regex.test(username) === false) {
          printError("usernameErr", "At least 8 characters");
      } else {
          printError("usernameErr", "");
          usernameErr = false;
      }
  }
    if(password == "") {
      printError("passwordErr", "Please enter your password");
  } else {
      
      var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(regex.test(password) === false) {
          printError("passwordErr", "6 to 12 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
      } else{
          printError("passwordErr", "");
          passwordErr = false;
      }
  }
  if(confirmPassword == "") {
    printError("confirmPasswordErr", "Please enter your password");
  } else if((confirmPassword == password) == false){
    printError("confirmPasswordErr", "Please enter a validpassword");
  }else{
    printError("confirmPasswordErr", "");
    confirmPasswordErr = false;
  
  }
  
    if((nameErr || emailErr || usernameErr || passwordErr || confirmPasswordErr ) == true) {
         return false;
      } else {
          
          var dataPreview = "You've entered the following details: \n" +
                            "Full Name: " + name + "\n" +
                            "Email Address: " + email + "\n" +
                            "Username: " + username + "\n" +
                            "Password: " + password + "\n" +
                            "Confirm Password: " + confirmPassword + "\n" ;
  
              
          
      }
};