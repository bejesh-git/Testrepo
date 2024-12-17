import { useParams } from "react-router-dom";

let FunctionCom = (props) => {
    const {id} = useParams();
    return(
        <div>
            <h2>This is function component with id {id}</h2>
            <p>His name is <u>{props.fname}</u> and working as <u>{props.post}</u></p>
        </div>
    );
}

export default FunctionCom;