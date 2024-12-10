import { Outlet } from "react-router-dom";
import NavComp from "./NavComp"
import FooterComp from "./FooterComp";

function MainDashBoard() {

    

    return (
        <div className="container">
            {/* <h2 >Dash Board</h2>  */}
            <div className="card border-info mt-5">
                <div className="card-header border-info">
                    <NavComp />
                </div>
                <div className="card-body border-info">
                    <Outlet />
                </div>
                <div className="card-footer border-info">
                    <FooterComp />
                </div>
            </div>
        </div>
    );
}

export default MainDashBoard;