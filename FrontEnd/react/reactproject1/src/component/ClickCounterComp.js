import { Component, Fragment } from "react";
import MyHocComp from "./MyHocComp";
class ClickCounterComp extends Component {
    
    render(){
        return(
            <Fragment>
                <p>Count : {this.props.count}</p>
                <button type="button" onClick={this.props.incrementCounter}>count++</button>
            </Fragment>
        );
    }
}

export default MyHocComp(ClickCounterComp , 2);