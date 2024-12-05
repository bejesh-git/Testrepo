
import { useState } from "react";

function UseStateHooks() {

    const [empState, changeState] = useState({name:"User", sal:12344});

    const updateName = () =>{
        let userName = document.getElementById('userName').value;
        changeState({name:userName, sal:empState.sal});
    }


    return ( 
        <div>
            <h5>UseStateHooks</h5>

            <p>Hello {empState.name} your salary will be {empState.sal}</p>

            <input className="border border-primary" id="userName" name="userName"></input>
            <button type="button" onClick={()=>updateName()}>Confirm Name</button>
        </div>
     );
}

export default UseStateHooks;