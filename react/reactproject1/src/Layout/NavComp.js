import { Link } from "react-router-dom";


const NavComp = () =>{
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
        </div>
    );
}
export default NavComp;