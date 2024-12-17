import { Component } from "react";

class MyCounterComp extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment = () => {
        this.setState((preState)=>({count:preState.count+1}));
    }
    decrement = () => {
        this.setState((preState)=>({count:preState.count-1}));
        
    }
    reset = () => {
        this.setState(()=>({count:0}));

    }



    render(){
        return(
            <div>
                <div className="txtPrimary">Value : {this.state.count}</div>
                <button className="btn btn-primary" type="button" onClick={this.increment}>count++</button>
                <button className="btn btn-primary" type="button" onClick={this.decrement}>count--</button>
                <button className="btn btn-danger" type="button" onClick={this.reset}>reset</button>
            </div>
        );
    }
}

export default MyCounterComp;