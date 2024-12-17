import { Component, Fragment } from "react";
import MyHocComp from "./MyHocComp";

class HowerCounterCom extends Component {
    
    render(){

        return(
            <div className="border border-primary">
                <p>Count : {this.props.count}</p>
                <h1 onMouseOver={this.props.incrementCounter} id="mouse-over-h1">Hover on me to increment</h1>
            </div>
        );
    }
}

export default MyHocComp(HowerCounterCom, 5);