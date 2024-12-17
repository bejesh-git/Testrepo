import { useEffect, useState } from "react";

function UseEffectHooksComp() {

    const [age, changeAge] = useState(18);
    const [val, changeVal] = useState(20000);


    // useEffect(()=>{
    //     changeAge(age+1);
    // })

    // useEffect(()=>{
    //     changeAge(age+1);
    // }, [])

    useEffect(()=>{
        changeAge(age+1);
    }, [val])


    return (
        <div>
            <h5>UseEffectHooksComp</h5>
            <p>Age {age} Salary {val}</p>
            <button onClick={()=>changeVal(val+5000)}>Increment Salary</button>
        </div>
    );
}

export default UseEffectHooksComp;