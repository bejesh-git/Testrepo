import React from 'react'
import { IMAGE } from '../../database/IMAGE';
import { Link } from 'react-router-dom';

function HomeMainComp() {
    let imagestyle = {
        height: "600px"
    }

    let sideimagestyle = {
        width:"300px"
    }
    return (
        <div>
            {/* <div>Home main Comp</div> */}

            <div className='container'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <Link to="/index/products">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <img src={IMAGE.homepageimage1} class="d-block w-100" alt="..." style={imagestyle} />
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src={IMAGE.homepageimage2} class="d-block w-100" alt="..." style={imagestyle} />
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src={IMAGE.homepageimage3} class="d-block w-100" alt="..." style={imagestyle} />
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src={IMAGE.homepageimage4} class="d-block w-100" alt="..." style={imagestyle} />
                            </div>
                        </Link>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='container mt-3 p-5' style={{ textAlign: "center", backgroundColor: "beige" }}>
                <div style={{ width: "100%", display: "inline-block" }}><span style={{ fontSize: "30px" }}>Our Exclusives</span><br></br>
                    GTR celebrates every occasion of life through its mindfully designed adornments that reflect tradition, culture and intricacy of craftsmanship embodied in exclusive ranges of quality jewellery.
                </div>
            </div>

            <Link to="/index/products">
            <div className='container mt-4'>
                <div className='row justify-content-around'>
                    <div className="col-4" style={{width:"max-content"}}>
                        <img src={IMAGE.sideimage1} style={sideimagestyle}></img>
                    </div>
                    <div className="col-4" style={{width:"max-content"}}>
                        <img src={IMAGE.sideimage2} style={sideimagestyle}></img>
                    </div>
                    <div className="col-4" style={{width:"max-content"}}>
                        <img src={IMAGE.sideimage3} style={sideimagestyle}></img>
                    </div>
                    
                </div>
            </div>
            </Link>
            
            
            <div className='container mt-3 p-5' style={{ textAlign: "center", backgroundColor: "beige" }}>
                <div style={{ width: "100%", display: "inline-block" }}><span style={{ fontSize: "30px" }}>QUALITY OF WINE</span><br></br>
                SHOP BY CATEGORY
                </div>
            </div>
            
            <Link to="/index/products">
            <div className='container mt-4'>
                <div className='row justify-content-around'>
                    <div className="col-4" style={{width:"max-content"}}>
                        <img src={IMAGE.sideimage4} style={sideimagestyle}></img>
                    </div>
                    <div className="col-4" style={{width:"max-content"}}>
                        <img src={IMAGE.sideimage5} style={sideimagestyle}></img>
                    </div>
                    <div className="col-4" style={{width:"max-content"}}>
                        <img src={IMAGE.sideimage6} style={sideimagestyle}></img>
                    </div>
                    
                </div>
            </div>
            </Link>

        </div>
    )
}

export default HomeMainComp;
