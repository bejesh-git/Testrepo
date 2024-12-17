import React, {Component} from "react";

class ClassCom extends Component{

    render(){
        return(
          <div>
            <h2>Class Component</h2>  
            <p>His name is <u>{this.props.fname}</u> and working as <u>{this.props.post}</u></p>
          </div>
        );
    }

}

export default ClassCom;