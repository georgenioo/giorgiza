document.addEventListener('DOMContentLoaded', function(){
    document.forms['logform'].onsubmit =validateform
})
 function validateform() {
    let u = document.forms['logform']['fusername'].value;
    let p = document.forms['logform']['fpassword'].value;

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

  
