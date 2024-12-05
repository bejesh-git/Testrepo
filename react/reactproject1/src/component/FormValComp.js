import React, { useState } from 'react'

function FormValComp() {

    const [user, changeUser] = useState(
        {
            fname : "",
            password:"",
            email:"",
            contact:"",
            terms : false
        }
    );

    const changeInput = (event) => {
        const {type, name, value} = event.target;
        console.log({name:value});      
        changeUser({...user,[name]:value});
    }


    const checkForm = (event) => {
        event.preventDefault();

        window.alert(JSON.stringify(user));
    }
    
    return (
        <div>
            {/* <h2>Form Validation</h2>    */}
            {/* password, email, contact */}

            <form onSubmit={checkForm}>
                <div>
                    <label>Full Name : </label>
                    <input type='text' name="fname" value={user.fname} onChange={changeInput}></input>
                </div>

                <div>
                    <input type='checkbox' name="terms" value={user.terms} onChange={changeInput}></input>
                </div>

                <button type='submit'>submit form</button>
            </form>
        </div>
    )
}

export default FormValComp
