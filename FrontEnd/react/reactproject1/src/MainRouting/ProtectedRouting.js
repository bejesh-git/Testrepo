import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouting({Component}){

    const nav = useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav("/")
        }
    }, [])

    return(
        <div>
            {/* <h2>Protected Routing</h2> */}
            <Component/>

        </div>
    );
}
export default ProtectedRouting;