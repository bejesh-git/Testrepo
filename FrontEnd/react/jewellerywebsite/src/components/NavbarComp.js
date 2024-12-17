import { Link } from "react-router-dom";
import { IMAGE } from "../database/IMAGE"
import { fontFamily, textAlign } from "@mui/system";

function NavBarComp() {
    const imgstyle = {
        height: "100px"
    }

    const logotext = {
        fontSize: "100px",
        fontFamily: "Edwardian Script ITC",

    }
    const logotext2 = {
        fontSize: "50px",
        fontFamily: "Edwardian Script ITC",
        position: "relative",
        left: "150px",
        top: "-50px"


    }

    const navbarstyle = {
        backgroundImage: `url(${IMAGE.mainimages2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "300px",
        textAlign: "center"
    }


    const homeButtonsstyle = {
        width: "200px"
    }


    return (
        <div>
            <div className="container">
                {/* <nav class="navbar bg-body-tertiary fixed-top"> */}
                <nav class="navbar fixed-top" >
                    <div class="container-fluid"  >
                        <Link class="navbar-brand" to="/index/home" >
                            <img src={IMAGE.GTR_LOGO} className="rounded-circle" style={imgstyle}></img>
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

            <div style={navbarstyle} >

                <span style={logotext} >Sriram Jewellers</span> <br></br>
                <span style={logotext2}><b>Chennai</b></span>
            </div>

            <div className="">
                <div className="row" style={{ paddingTop: "10px", paddingBottom: "10px", justifySelf: "center" }}>
                    <Link to="/index/home" className="col">
                        <button className="btn btn-outline-dark" style={homeButtonsstyle}>Home</button>
                    </Link>
                    <Link to="/index/about" className="col">
                        <button className="btn btn-outline-dark" style={homeButtonsstyle}>About</button>
                    </Link>
                    <Link to="/index/products" className="col">
                        <button className="btn btn-outline-dark" style={homeButtonsstyle}>Jewellary</button>
                    </Link>
                    <Link to="/index/contact" className="col">
                        <button className="btn btn-outline-dark" style={homeButtonsstyle}>ContactUs</button>
                    </Link>
                </div>

               
                    
               
            </div>
        </div>
    );
}

export default NavBarComp;