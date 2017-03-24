function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var usernameLength = userEntered.length;
  
  if (usernameLength < 6)
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (userEntered.indexOf(' ') > 0)
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must NOT contain any spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  var passEntered = document.getElementById("pass").value;
  var passLowered = passEntered.toLowerCase();

  if (passLowered == "password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must NOT be the word \"password\".";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passEntered == userEntered)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must NOT be the same as the Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passEntered.length < 6 || passEntered.length > 20)
  {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
