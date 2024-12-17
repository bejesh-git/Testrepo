import { Link, Outlet } from "react-router-dom";

function ReactHooksComp() {
    return ( 
        // <h5>
        //     React Hooks Comp
        // </h5>

        <div className="container">
            {/* <h2 >Dash Board</h2>  */}
            <div className="card border-info mt-5">
                <div className="card-header border-info">
                <Link to="useeffect" className="btn btn-outline-info me-2">useeffect</Link>
                <Link to="usestate" className="btn btn-outline-info me-2">usestate</Link>
                </div>
                <div className="card-body border-info">
                    <Outlet />
                </div>              
            </div>
        </div>
     );
}

export default ReactHooksComp;