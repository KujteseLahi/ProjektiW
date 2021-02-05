function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  function validateForm() {

    var username = document.contactForm.username.value;
    var password = document.contactForm.password.value;
   
 
      var usernameErr = passwordErr  = true;
  
    
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
  
    if(( usernameErr || passwordErr ) == true) {
         return false;
      } else {
         
          var dataPreview = "You've entered the following details: \n" +
                            "Username: " + username + "\n" +
                            "Password: " + password + "\n" ;
          
      }
};