import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';


const NavComp = () =>{
    
    const nav = useNavigate();

    const loggout = () => {
        if (window.confirm("Do you want to loggout?")) {
            sessionStorage.clear();
            nav("/")
        }
    }

    return(
        <div>
            {/* <h2>Nav Comp</h2> */}

            <Link to="" className="btn btn-outline-info me-2">App</Link>
            <Link to="favcolor" className="btn btn-outline-info me-2">FavColor</Link>
            <Link to="task/1" className="btn btn-outline-info me-2">Task1</Link>
            <Link to="task/2" className="btn btn-outline-info me-2">Task2</Link>
            <Link to="task/3" className="btn btn-outline-info me-2">Task3</Link>
            
            <Link to="reacthooks" className="btn btn-outline-info me-2">ReactHooks</Link>
            <Link to="formval" className="btn btn-outline-info me-2">Form Vali</Link>
            <Link to="formassign" className="btn btn-outline-info me-2">Form Assignment</Link>
            
            <Link to="product" className="btn btn-outline-info me-2">Product</Link>
            
            <Link to="caurosal" className="btn btn-outline-info me-2">Caurosal</Link>
            <Link to="datalist" className="btn btn-outline-info me-2">Datalist</Link>
            <button  className="btn btn-outline-info me-2" onClick={loggout} style={{float:"right"}}><LogoutIcon/></button>
        </div>
    );
}
export default NavComp;