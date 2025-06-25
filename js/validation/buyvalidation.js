document.addEventListener('DOMContentLoaded', function(){
    document.forms['buyform'].onsubmit =validateform
})

 function validateform() {
    let c = document.forms['buyform']['fcard'].value;
    let e = document.forms['buyform']['fdate'].value;
    let s = document.forms['buyform']['fsecurity'].value;

    if(c == ""){
        alert("Card Number must be filled out");
        return false;
    }  
    if(e == ""){
        alert("Expiry Date must be filled out");
        return false;
    }
    if(s ==""){
        alert("Security Code must be filled out");
        return false;
    }
    return true;
  }

  
