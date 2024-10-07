document.getElementById("submitButton").addEventListener("click", displayShare);

document.getElementById("dismissButton").addEventListener("click", displayShare);

var submitted = 0;

function displayShare () {

    var originalDiv = document.getElementById("container");
    var newDiv = document.getElementById("successMessage");


    console.log("Set vars")

    if (submitted === 0) {   
        
        if (email.validity.typeMismatch) {
            document.querySelector(".mainText span").classList.remove("hidden");
            document.querySelector(".mainText input").classList.add("alert")
          }
          
        else if (email.validity.valueMissing) {
            document.querySelector(".mainText span").classList.remove("hidden"); 
            document.querySelector(".mainText input").classList.add("alert")
        } else {

            var emailAddress = document.getElementById("email").value;

            document.querySelector(".mainText span").classList.add("hidden")
            originalDiv.classList.add("hidden");
            newDiv.classList.remove("hidden"); 
            document.querySelector(".successMessage span").innerHTML=(emailAddress);
            submitted = 1;

        console.log ("First Section ran")

        }} else {

        originalDiv.classList.remove("hidden");
        newDiv.classList.add("hidden"); 
        submitted = 0;
        document.querySelector("input").value="";
        document.querySelector(".mainText input").classList.remove("alert");

        console.log ("Second Section ran")

    }
        };


