document.addEventListener('DOMContentLoaded', function(){
    document.forms['signform'].onsubmit =validateform
})

 function validateform() {
    let u = document.forms['signform']['fusername'].value;
    let e = document.forms['signform']['femail'].value;
    let p = document.forms['signform']['fpassword'].value;

   
    if(e == ""){
        alert("Email must be filled out");
        return false;
    }  
    if(u == ""){
        alert("Username must be filled out");
        return false;
    }
    if(p ==""){
        alert("Password must be filled out");
        return false;
    }
    return true;
  }
  

  
