import { Component, PureComponent } from "react";

class MyPureComp extends PureComponent {
    constructor(props) {
        super();
    }

    render(){
        console.log("PureComp");
        
        return(
            <>
                <h2>MyPure Comp</h2>
                <p>{this.props.name}</p>
            </>
        );
    }
}

export default MyPureComp;