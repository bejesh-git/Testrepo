import { Component } from "react";

class EventComp extends Component{

    greeting = () => {
        window.alert("Hello Everyone");
    }


    welcome = (...names) => {
        window.alert(`welcome ${names}`);
    }




    render(){
        return (
            <div>
                <h2>Event Component</h2>
                <button type="button" onClick={this.greeting}>Greet</button>
                <button type="button" onDoubleClick={()=>this.welcome("AJay","Anbu","Raheem")}>welcome</button>

                <p class="event-para" onMouseOver={()=>this.welcome("Abdur","Niyaz","Mahammad")}>Hover Over me</p>
            </div>
        );
    }
    
}

export default EventComp;