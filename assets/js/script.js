function checksubmit()
   {
     let checkcondition = true;

     //name Validation

     let name = document.querySelector("#name").value;
     let spacename = name.trim();
     
     let enteredName = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
     if(!enteredName.test(name) || spacename == "")
     {
       document.querySelector(".name-error").innerHTML = "Name should be letters !";
       checkcondition = false;
     }

     // email validation 

       let email = document.querySelector("#email").value;
       
       let enteredEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       if(!enteredEmail.test(email) || email == "")
       {
         document.querySelector(".email-error").innerHTML = "Email field is empty or Invalied Email !";
         checkcondition = false;
       }

     //subject validation
       
       let subject = document.querySelector("#subject").value;
        let spacesubject = subject.trim();
       if(spacesubject=="")
       {
         document.querySelector(".sub-error").innerHTML = "Subject field is important !";
         checkcondition = false;
       }

     // message validation

       let message = document.querySelector("#message").value;
       let spacemessage = message.trim();
       if(spacemessage=="")
       {
         document.querySelector(".message-error").innerHTML = "Message field is important !";
         checkcondition = false;
       }

     //  validate all 

       if((spacename=="") && (email=="") && (spacesubject=="") && (spacemessage==""))
       {
         document.querySelector(".error").innerHTML = "Please fill all the fields !";
         checkcondition = false;
         return false
       }

       if(checkcondition == true)
       {
        document.querySelector(".error").style.display = "block";
         document.querySelector(".error").innerHTML = "Success !";
         return true
       }
   }

