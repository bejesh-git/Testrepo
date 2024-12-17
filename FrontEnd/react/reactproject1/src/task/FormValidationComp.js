import React, { useState } from 'react'
import rightImg from "../asserts/images/right.png"
import wrongImg from "../asserts/images/wrong.png"


function FormValidationComp() {

    const [user, changeUser] = useState(
        {
            fname: "",
            password: "",
            cpassword: "",
            email: "",
            contact: "",
            terms: false
        }
    );

    const changeInput = (event) => {
        const { type, name, value } = event.target;
        changeUser({ ...user, [name]: value });
        name == "password" && checkMatch();
    }


    const checkForm = (event) => {
        event.preventDefault();
        const { fname, password, cpassword, email, contact, terms } = user;

        // Full Name
        if (fname.trim() == "") {
            window.alert("Name is Required");
            return false;
        }
        if (!fname.match("^[a-zA-Z ]{3,20}$")) {
            window.alert("InValid Name");
            return false;
        }

        // Email
        if (email.trim() == "") {
            window.alert("Email is Required");
            return false;
        }
        if (!email.match("^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")) {
            window.alert("Invalid Email");
            return false;
        }

        // Password



        if(password.trim() == ""){
            window.alert("Provide a password");
            return false;
        }
        

        
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?!.*\s).{8,15}$/.test(password)) {
            window.alert("In Valid Password");
            return false;
        }

        if(cpassword.trim() == ""){
            window.alert("Confirm the password");
            return false;
        }
        if(password != cpassword){
            window.alert("password must be same");
            return false;
        }
        

        if(contact == ""){
            window.alert("Provide a contact");
            return false;
        }
        if(!/^[0-9]{10,10}$/.test(contact)){
            window.alert("Invalid number");
            return false;
        }
        
        if(terms == false){
            window.alert("Please accept term");
            return false;
        }

        
    }
    function checkMatch() {
        const {password} = user;
        console.log("insside checkmatch function");

        document.getElementById('cond1').src = (!password.match("^(?=.*[0-9]).{1,}$")) ?  wrongImg : rightImg;
        document.getElementById('cond2').src = (!password.match("^(?=.*[a-z]).{1,}$")) ?  wrongImg : rightImg;
        document.getElementById('cond3').src = (!password.match("^(?=.*[A-Z]).{1,}$")) ?  wrongImg : rightImg;
        document.getElementById('cond4').src = (!password.match("^(?=.*[@#$%^&-+=()]).{1,}$")) ?  wrongImg : rightImg;
        document.getElementById('cond5').src = (!(/^(?!.*\s).*$/.test(password))) ?  wrongImg : rightImg;
        document.getElementById('cond6').src = (!password.match("^.{8,15}$")) ?  wrongImg : rightImg;
    }



    return (
        <div>

            <form onSubmit={checkForm} className='text-danger'>
                <div className='mt-3'>
                    <label  style={{width:"150px"}} >Full Name : </label>
                    <input className='border-info' type='text' name="fname" value={user.fname} onChange={changeInput}></input>
                </div>
                <div className='mt-3'>
                    <label style={{width:"150px"}}>Email : </label>
                    <input className='border-info' type='text' name="email" value={user.email} onChange={changeInput}></input>
                </div>
                <div className='mt-3'>
                    <label style={{width:"150px"}}>Password :</label>
                    <input className='border-info' type='password' name="password" value={user.password} onChange={changeInput}></input>
                </div>
                <div style={{position:"relative",left:"50px", width:"300px"}}  className='mt-3'>
                    <div><img id='cond1' style={{width:"20px", marginRight:"5px"}}></img>Digit</div>
                    <div><img id='cond2' style={{width:"20px", marginRight:"5px"}}></img>Lowercase</div>
                    <div><img id='cond3' style={{width:"20px", marginRight:"5px"}}></img>Uppercase</div>
                    <div><img id='cond4' style={{width:"20px", marginRight:"5px"}}></img>Special Character</div>
                    <div><img id='cond5' style={{width:"20px", marginRight:"5px"}}></img>No Space</div>
                    <div><img id='cond6' style={{width:"20px", marginRight:"5px"}}></img>Length : 8-15</div>
                </div>
                <div className='mt-3'>
                    <label style={{width:"150px"}}>Confirm Password :</label>
                    <input className='border-info' type='password' name="cpassword" value={user.cpassword} onChange={changeInput}></input>
                </div>
                <div className='mt-3'>
                    <label style={{width:"150px"}}>Contact : </label>
                    <input className='border-info' type='tel' name="contact" value={user.contact} onChange={changeInput}></input>
                </div>

                <div className='mt-3 text'>
                    <input className='border-info' type='checkbox' name="terms" value={user.terms} onChange={changeInput}></input>{" "}Accept Terms and Condition
                </div>

                <button type='submit' className='btn btn-primary'>submit form</button>
            </form>
        </div>
    )
}

export default FormValidationComp;
