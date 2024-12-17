import React from 'react'
import { Link } from 'react-router-dom';
import { IMAGE } from '../database/IMAGE';

function FooterComp() {
    const imgstyle = {
        height: "40px"
    }

    const logotext = {
        fontSize: "30px",
        position: "relative",
        top: "5px",
        padding: "10px"
    }


    return (
        <><div style={{ justifyItems: "center" }}>
            {/* <div>Footer COmp</div> */}
            <div>
                <Link class="navbar-brand" href="#">
                    <img src={IMAGE.GTR_LOGO} className="rounded-circle" style={imgstyle}></img>
                    <span style={logotext}>GTR Jewellers</span>
                </Link>
            </div>
        </div><div>
                <div className='row mt-4' >
                    <div className='col-4' style={{ justifyItems: "center" }}>
                        <div className='Container'>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Terms and Conditon</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Cancellation policy</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Privacy</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Return</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>About Us</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Contact Us</div></Link>
                        </div>
                    </div>
                    <div className='col-4' style={{ justifyItems: "center" }} >

                        <div className='Container'>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Terms and Conditon</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Cancellation policy</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Privacy</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Return</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>About Us</div></Link>
                            <Link to="" style={{ color: "black", textDecoration: "none" }}><div className='p-1'>Contact Us</div></Link>
                        </div>
                    </div>
                    <div className='col-4' style={{ justifyItems: "center", alignContent:"center",}} >

                        <div className='Container' style={{ textAlign:"center"}} >
                            <button type='button' style={{width:"100px"}} className='btn btn-primary m-1'>Android</button><br></br>
                            <button type='button' style={{width:"100px"}} className='btn btn-primary m-1'>IOS</button><br></br>
                        
                            <button type='button' style={{width:"100px"}} className='btn btn-primary m-1'>Instagram</button> <br></br>
                            <button type='button' style={{width:"100px"}} className='btn btn-primary m-1'>Facebook</button>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default FooterComp;
