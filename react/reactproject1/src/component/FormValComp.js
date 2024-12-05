import React, { useState } from 'react'

function FormValComp() {

    const [user, changeUser] = useState(
        {
            fname : "",
            terms : false
        }
    );

    const changeInput = (event) => {
        const {type, name, value} = event.target;
        changeUser({...user,[name]:value});
        console.log(name);
        console.log(value);
        console.log(event.target);        
    }


    const checkForm = (event) => {
        event.preventDefault();

        window.alert(JSON.stringify(user));
    }
    
    return (
        <div>
            {/* <h2>Form Validation</h2>    */}

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
