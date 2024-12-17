import React from 'react'
import { Link } from 'react-router-dom';
import { IMAGE } from '../../database/IMAGE';
import { MATERIAL } from '../GlobalValuesComp';

function ProductMainComp() {
    let sideimagestyle = {
        width: "300px",
        height: "400px",

    }

    return (
        <div>
            {/* <h2>Product main comp</h2> */}
            {/* <Link to="/index/category">By category</Link> */}
            <div className='row'>
                <div className='col-4' >
                    <div className='mt-2 p-3' style={{ textAlign: "end", backgroundColor: "beige", color : "darkbrown"}}>
                        <ul class="state_rates"><b>
                            
                            <li>GOLD - 22k -  1 g  - Rs7115</li>
                            <li>SILVER -  1 g  - Rs100</li>
                            </b></ul>
                    </div>

                </div>
                <div className='col-8'>
                    <div className='container mt-2 p-3' style={{ textAlign: "start", backgroundColor: "beige" }}>
                        <div style={{ width: "100%", display: "inline-block" }}>This is Show Short Description<br></br>
                            <span style={{ fontSize: "30px" }}>Featured Categorys</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <div className='row'>

                    <div className="col-4">
                        <div class="card mb-3">
                            <div class="card-body" style={{ overflow: "hidden", }}>
                                <h5 class="card-title">Gold {"  "} <Link to={`/index/material/${MATERIAL.GOLD}`}>Click Here</Link></h5>
                                <Link to={`/index/material/${MATERIAL.GOLD}`} >
                                    <img src={IMAGE.materialgold} style={sideimagestyle}></img><br></br>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div class="card mb-3" >
                            <div class="card-body" style={{ overflow: "hidden" }}>
                                <h5 class="card-title">Silver {"  "} <Link to={`/index/material/${MATERIAL.SILVER}`}>Click Here</Link></h5>
                                <Link to={`/index/material/${MATERIAL.SILVER}`} >
                                    <img src={IMAGE.materialsilver} style={sideimagestyle}></img><br></br>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div class="card mb-3" >
                            <div class="card-body" style={{ overflow: "hidden" }}>
                                <h5 class="card-title">Diamond {"  "} <Link to={`/index/material/${MATERIAL.DIAMOND}`}>Click Here</Link></h5>
                                <Link to={`/index/material/${MATERIAL.DIAMOND}`} >
                                    <img src={IMAGE.materialdiamond} style={sideimagestyle}></img><br></br>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductMainComp;
