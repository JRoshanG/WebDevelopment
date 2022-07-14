function validateSubscribe() {
    var fname = document.forms["subscribe"]["fname"].value;
    var lname = document.forms["subscribe"]["lname"].value;
    var email = document.forms["subscribe"]["email"].value;

    if(fname == "" || lname == "" || email == ""){
        alert("All field are Required, Try Again")
    }
    else{
        alert("Thank you for Subscription")
    }
    

}