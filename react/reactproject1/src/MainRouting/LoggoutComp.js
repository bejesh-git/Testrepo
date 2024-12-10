import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoggoutComp() {
    let nav = useNavigate();

    const loggout = ()=>{
        
    }

    return (
        <div>
            <h2>loggout</h2>
            {
                loggout()
            }
        </div>
    )
}

export default LoggoutComp;
