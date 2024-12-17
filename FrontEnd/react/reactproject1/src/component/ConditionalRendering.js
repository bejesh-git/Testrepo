import { Component } from "react";

class ConditionalRendering extends Component {
    constructor(parameters) {
        super();

        this.state = {
            isCond:true
        }
    }

    changeState = () =>{
        if(this.state.isCond)
            this.setState({isCond:false});
        else
            this.setState({isCond:true});

    }

    render(){
        
             
                // return (this.state.isCond) ?
                //         (<div>
                //             <h2>Admin Logged in</h2>
                //             <button type="button" onClick={this.changeState}>User</button>
                //         </div>)
                //         :
                //         (<div>
                //             <h2>User Logged in</h2>
                //             <button type="button" onClick={this.changeState}>Admin</button>
                //         </div>)

                return this.state.isCond && <h2>Loggin Successfull</h2>
             
    }
}

export default ConditionalRendering;