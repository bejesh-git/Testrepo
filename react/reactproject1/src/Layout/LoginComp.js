import axios from "axios";
import "../css/LoginCom.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {


    const nav = useNavigate();

    const uidRef = useRef();
    const upswdRef = useRef();
    
    const checkData = () => {
        axios.get("http://localhost:8888/user").then((res)=>{
            console.log(res.data);
            
            let enteredPassword = upswdRef.current.value;
            let enteredUserId = uidRef.current.value;


            let serverdata = res.data.filter((val, index)=>{
                return val.userid == enteredUserId && val.userpass == enteredPassword
            })

            if(serverdata.length){
                window.alert("Loggin Successfull");

                sessionStorage.setItem("user", enteredUserId);
                nav("/dashboard");
            }
            else{
                window.alert("Invlid User");
                upswdRef.current.value = "";
                uidRef.current.value = "";
            }

           

        }).catch((error)=>{});
    }

    return (
        <div >
            <div className="mainContainer">
                
                <form className="logginForm">
                <h2>Loggin </h2>
                    <label>User : </label>
                    <input ref={uidRef} type="text" className="form-control" name="userid" id="userid"></input> <br></br>
                    <label className="">Password : </label>
                    <input ref={upswdRef} type="text" className="form-control" name="userpass" id="userpass"></input>
                    <buttton className="btn btn-primary mt-3"  onClick={checkData} >Submit</buttton>
                </form>
            </div>
        </div>
    );
}
export default LoginComp;