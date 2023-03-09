function checksubmit(){

  let checkcondition = true;

  //name Validation

  let name = document.querySelector("#name").value;
  let spacename = name.trim();
  
  let enteredName = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
  if(!enteredName.test(name) || spacename == "")
  {
    document.querySelector(".name-error").innerHTML = "Name should be letters !";
    checkcondition = false;
  }else{
   document.querySelector(".name-error").innerHTML = "";
  }

  // email validation 

    let email = document.querySelector("#email").value;
    
    let enteredEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!enteredEmail.test(email) || email == "")
    {
      document.querySelector(".email-error").innerHTML = "Email field is empty or Invalied Email !";
      checkcondition = false;
    }else{
     document.querySelector(".email-error").innerHTML = "";
    }

  //subject validation
    
    let subject = document.querySelector("#subject").value;
     let spacesubject = subject.trim();
    if(spacesubject=="")
    {
      document.querySelector(".sub-error").innerHTML = "Subject field is important !";
      checkcondition = false;
    }else{
     document.querySelector(".sub-error").innerHTML = "";
    }

  // message validation

    let message = document.querySelector("#message").value;
    let spacemessage = message.trim();
    if(spacemessage=="")
    {
      document.querySelector(".message-error").innerHTML = "Message field is important !";
      checkcondition = false;
    }else{
     document.querySelector(".message-error").innerHTML = "";
    }

  //  validate all 

    if((spacename=="") && (email=="") && (spacesubject=="") && (spacemessage==""))
    {
      document.querySelector(".error").innerHTML = "Please fill all the fields !";
      checkcondition = false;
      return false
    }else{
     document.querySelector(".error").innerHTML = "";
    }

    if(checkcondition == true)
    {
      document.querySelector("#message").innerHTML = "";
      return true
    }
   }
   
 $("#submit-form").submit((e)=>{
   e.preventDefault()
   $.ajax({
       url:"https://script.google.com/macros/s/AKfycbzJUuan7r1QuVtz3pWtHRqiqKVhPt7jLBADcc_QuLdY_kyU0o87k3V6XFvoVH3BixpCOg/exec",
       data:$("#submit-form").serialize(),
       method:"POST",
       success:function(response){
           alert("Form submitted successfully")
           window.location.reload()
           //window.location.href="https://google.com"
       },
       error:function(err){
           alert("Something Error")

       }
   })
})