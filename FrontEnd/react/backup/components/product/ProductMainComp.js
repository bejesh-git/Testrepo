import React from 'react'
import { Link } from 'react-router-dom';
import { IMAGE } from '../../database/IMAGE';

function ProductMainComp() {
    let sideimagestyle = {
        width:"300px"
    }

    return (
        <div>
            {/* <h2>Product main comp</h2> */}
            {/* <Link to="/index/category">By category</Link> */}

            
            <div className='container mt-4'>
                <div className='row justify-content-around'>
                    <Link to="/index/products" style={{width:"max-content",display:"inline-block"}}>
                    <div className="col-4">
                        <img src={IMAGE.sideimage1} style={sideimagestyle}></img>
                    </div>
                    </Link>
                    <Link to="/index/products" style={{width:"max-content",display:"inline-block"}}>
                    <div className="col-4">
                        <img src={IMAGE.sideimage2} style={sideimagestyle}></img>
                    </div>
                    </Link>
                    <Link to="/index/products" style={{width:"max-content",display:"inline-block"}}>
                    <div className="col-4">
                        <img src={IMAGE.sideimage3} style={sideimagestyle}></img>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductMainComp;
