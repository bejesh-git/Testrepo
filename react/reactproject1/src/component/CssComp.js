import React, { Fragment } from "react";
import cssFile from "../css/csscomp2.module.css"
import "../css/csscomp.css";
import ChildCom from "./ChildCom";


class CssComp extends React.Component{
    circle = {
        width : "200px",
        height : "200px",
        borderRadius : "50%",
        border: "1px solid black",
        margin:"auto",
        alignContent:"center"
    }
    render(){
        return(
            <Fragment>
                <h2 style={{color:"blue"}}>Css Componenet</h2>
                <p style={this.circle}>Content</p>

                <p className="txtPrimary">external 1</p>
                <p className="txtDange">external 2</p>
                <div className={cssFile.special}>Module Css</div>

                

            </Fragment>
        );
    }
}

export default CssComp;