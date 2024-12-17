import { Component } from "react";

class MyStateComp extends Component {
    
    constructor(){
        super();
        this.state= {
            empName : "Abdur",
            empSal : 40000
        }
    }



    changeState = () => {
        this.setState((preState) => ({empSal:preState.empSal+5000}));
    }



    render(){
        return(
            <div>
                <h2>Class Component MyStateComp</h2>
                <p>His Name is {this.state.empName} and salary {this.state.empSal}</p>
                <button type="button" onClick={this.changeState}>Increment</button>
            </div>
        );
    }
}

export default MyStateComp;