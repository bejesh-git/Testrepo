import React, { Component } from 'react'

export class MyFavColorComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             color:"blue",
        }
    }
    

    // static getDerivedStateFromProps(props){
    //     return{
    //         color: props.newColor
    //     }
    // }
    
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"tomato"})
    //     }, 2000)
    // }

    
    shouldComponentUpdate(){
        return true;
    }

    changeColor = () => {
        this.setState({color:"yellow"});
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("beforeupdate").innerHTML = `Before update ${prevState.color}`;
    }
    
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML = `after update ${this.state.color}`;        
    }

    render() {
        return (
            <div style={{width:"200px", height:"200px", backgroundColor:`${this.state.color}`}}>
                <button type='button' onClick={()=>this.changeColor()}>Change</button>

                <div id='beforeupdate'></div>
                <div id='afterupdate'></div>
            </div>
        )
    }
}

export default MyFavColorComp


