import { Component } from "react";
import UserComp from "./UserComp";

class ErrorBoundaryComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iserror : false
        }
    }

    static getDerivedStateFromError(){
        return{
            iserror : true
        }
    }

    componentDidCatch(error){
        console.log(error);
    }

    render(){
        
        if(this.state.iserror){
            return <UserComp user="Not Allowed"/>
        }
        return this.props.children;
    }

}

export default ErrorBoundaryComp;