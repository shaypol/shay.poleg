function validateEmail() {
  const inpObj = document.getElementById("Email");
  if (!inpObj.checkValidity()) 
  {
    document.getElementById("email_validation").innerHTML = inpObj.validationMessage;
  }
  else{
    document.getElementById("email_validation").innerHTML = "Email is valid";
  }
}
