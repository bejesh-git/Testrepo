function validateData() {

    let fname = document.myform.fname;
    let gender = document.myform.gender;
    let pswd = document.myform.pswd
    let email = document.myform.email;
    let contact = document.myform.contact;
    let uedu = document.myform.edu;

    let regName = "^[a-zA-Z ]{3,20}$"
    let uname = fname.value;
    if (uname.trim() === "") {
        window.alert("fullname required");
        return false;
    }
    if (!uname.trim().match(regName)) {
        window.alert("full name must contain only charater min-3 and max-20");
        return false;
    }
    
    
    let isChecked = false; 
    for (let i = 0; i < gender.length; i++) { 
        if (gender[i].checked) { 
            isChecked = true; break; 
        } 
    }
    if (!isChecked) { 
        window.alert("Please select your Gender"); 
        return false; 
    }
    
    
    isChecked = false; 
    for (let i = 0; i < uedu.length; i++) { 
        if (uedu[i].checked) { 
            isChecked = true; break; 
        } 
    }
    if (!isChecked) { 
        window.alert("Please select your qualification"); 
        return false; 
    }
     
    
    let upswd = pswd.value;
    if (upswd.trim() === "" ) {
        window.alert("Password required");
        return false;
    }
    if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?!.*\s).{8,20}$/.test(upswd)){
        window.alert("In Valid Password");
        checkMatch();
        return false;
    }
    else{
        checkMatch();
    }
    
    function checkMatch(){            
        
        if(!upswd.match("^(?=.*[0-9]).{1,}$"))    { document.getElementById('cond1').className = "wrong";}
                                                else{ document.getElementById('cond1').className = "right";}
        if(!upswd.match("^(?=.*[a-z]).{1,}$"))   { document.getElementById('cond2').className = "wrong";}
                                                else{ document.getElementById('cond2').className = "right";}
        if(!upswd.match("^(?=.*[A-Z]).{1,}$"))   { document.getElementById('cond3').className = "wrong";}
                                                else{ document.getElementById('cond3').className = "right";}
        if(!upswd.match("^(?=.*[@#$%^&-+=()]).{1,}$"))   { document.getElementById('cond4').className = "wrong";}
                                                else{ document.getElementById('cond4').className = "right";}
        if(!(/^(?!.*\s).*$/.test(upswd))) { document.getElementById('cond5').className = "wrong";}
                                                else{ document.getElementById('cond5').className = "right";}
        if(!upswd.match("^.{8,20}$"))    { document.getElementById('cond6').className = "wrong";}
                                                else{ document.getElementById('cond6').className = "right";}
    }
    




    let regContact = "^[0-9].{10,11}$" 
    let ucontact = contact.value;
    if (ucontact.trim() === "") {
        window.alert("Contact required");
        return false;
    }
    if (!ucontact.trim().match(regContact)) {
        window.alert("Contact name must contain exactly ten numbers");
        return false;
    }



    return true;

}