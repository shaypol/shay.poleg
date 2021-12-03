function myFunction(){
    // let emailCheck = document.getElementById("EmailIn").checkValidity()
    // let emailMessage = ""
    // if (email){
    //     emailMessage = "Email Validated";
    // }
    // else{
    //     emailMessage = "Please re-enter Email input";
    // }
    // document.getElementById("email").innerHTML = emailMessage;
    // if (emailCheck){
    //     alert("Email Validated")
    // }
    const inpObj = document.getElementById("email");
    if (!inpObj.checkValidity()) {
    document.getElementById("email").innerHTML = inpObj.validationMessage;
    } else {
    document.getElementById("email").innerHTML = "Email is valid!";
       }
   // }
}

