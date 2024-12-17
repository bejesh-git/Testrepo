import { Link } from "react-router-dom";
import {IMAGE} from "../database/IMAGE"

function NavBarComp() {
    const imgstyle = {
        height:"40px"
    }

    const logotext = {
        fontSize : "30px",
        position:"relative",
        top : "5px",
        padding:"10px"
    }

    return (
        <div>
            <div className="container">
                <nav class="navbar bg-body-tertiary fixed-top">
                    <div class="container-fluid">
                        <Link class="navbar-brand" href="#">
                            <img src={IMAGE.GTR_LOGO} className="rounded-circle" style={imgstyle}></img>
                            <span style={logotext}>GTR Jewellers</span>
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Where to</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li>
                                                <hr class="dropdown-divider"></hr>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            <div className="container" style={{marginTop:"80px"}}>
                <div className="row">
                <Link to="/index/home" className="col">
                    <button className="btn btn-outline-dark" style={{width:"200px"}}>Home</button>
                </Link>
                <Link to="/index/about" className="col">
                    <button className="btn btn-outline-dark" style={{width:"200px"}}>About</button>
                </Link>
                <Link to="/index/products" className="col">
                    <button className="btn btn-outline-dark" style={{width:"200px"}}>Jewellary</button>
                </Link>
                <Link to="/index/contact" className="col">
                    <button className="btn btn-outline-dark" style={{width:"200px"}}>ContactUs</button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBarComp;