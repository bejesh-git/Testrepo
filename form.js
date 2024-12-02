function validateData(){
    
    let uname = document.myform.fname.value;
    let uedu = document.myform.edu;
    document.write(uedu[0]);
    console.log(uedu[0]);
    let regName = "^[a-zA-Z ]{3,20}$"


    if(uname.trim() === ""){
        window.alert("fullname required");
        document.getElementById("fname").focus();
        return false
    }
    if(!uname.trim().match(regName)){
        window.alert("full name must contain only charater min-3 and max-20");
        document.getElementById("fname").focus();
        return false
    }
    
    
    // if(!uedu.includes(true)){
    //     window.alert("Pls Select your Qualification");
    //     return false
    // }



}