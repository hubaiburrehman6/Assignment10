function ValidateFirstName(fieldId) {
    if (document.getElementById(fieldId).value === "Hubaib") {
    alert("Correct Name");
    }
    else{
       alert("Incorrect Name");
    }
   }
   function ValidateLastName(fieldId) {
    if (document.getElementById(fieldId).value === "Ur Rehman") {
    alert("Correct Name");
    }
    else if(document.getElementById(fieldId).value === "") {
       alert("This is Required");
    }
    else{
        alert("Please enter valid last name")
    }
   }
function checkAddress(fieldId) {
     if (document.getElementById(fieldId).value === "hubaiburrehman6@gmail.com") {
     alert("Email address is correct.");
     }
     else{
        alert("Invalid Email Address");
     }
    }

    function fillCity() {
        var cityName;
        var zipEntered = document.getElementById("zip").value
        switch (zipEntered) {
        case "75950" :
        cityName = "KARACHI FEDERAL B AREA";
        break;
        case "75290" :
        cityName = "KARACHI GULISTAN-E-JOUHAR (KP-2023) ";
         break;
         case "75300" :
         cityName = "KARACHI GULSHAN-E-IQBAL  ";
         }
         document.getElementById("city").value = cityName;
         }
    // Phone Number
   //  function phonenumber(fieldId)
   //  {
   //    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
   //    if((fieldId.value.match(phnumber)){
   //          {
   //        return true;
   //          }
   //        else
   //          {
   //          alert("message");
   //          return false;
   //          }
   //  }