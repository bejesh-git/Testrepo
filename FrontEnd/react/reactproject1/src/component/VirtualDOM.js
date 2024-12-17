import { Component } from "react";

class VirtualDOM extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breakFast : [
                {id:101, name:"idly", price:"30"},
                {id:101, name:"dosa", price:"50"},
                {id:101, name:"pongal", price:"60"},
                {id:101, name:"vada", price:"20"}
            ],

            courses:['java','python','html', 'css', 'javascript']
        }
    }

    render(){
        const {breakFast, courses} = this.state;
        console.log(breakFast);

        return(
            <div>
                <ul>
                    {
                    breakFast.map((val, ind)=>{
                        return <li key={val.id}>{val.name} - &#8377;{val.price}</li>
                    })
                    }
                </ul>
                
                <select>
                    {courses.map((val, index)=>{
                        return <option>{index+1} {val}</option>
                    })}
                </select>

            </div>
        );
    }
}
export default VirtualDOM;