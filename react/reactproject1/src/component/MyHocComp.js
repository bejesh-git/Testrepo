import { Component } from "react";

const MyHocComp = (WrapperComp, incr=1) => {

    class Hoc extends Component{
        constructor(props){
            super(props)

            this.state = {
                count:0
            }
        }

        incrementCounter = () =>{
            this.setState((prevState) => ({count:prevState.count+incr}));
        }

        render(){
            return <WrapperComp count={this.state.count} incrementCounter={this.incrementCounter} />
        }
    }

    return Hoc;
}

export default MyHocComp;