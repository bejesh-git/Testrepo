import { Component } from "react";
import ChildCom from "./ChildCom";
import MyPureComp from "./MyPureComp";
import MyMemoCom from "./MyMemoCom";

class ParentComp extends Component {
    constructor(props) {
        super();
        this.state = {
            empName : "Manoj",
            empSal : 50000
        }
    }

    changeName = () => {
        let newName = document.getElementById('inputName').value;
        this.setState(()=>({empName:newName}));
    }
    changeSalary = () => {
        let newSalary = document.getElementById('inputSalary').value;
        this.setState(()=>({empSal:newSalary}));
    }


    render(){
        console.log("ParentComp");

        const {empName, empSal} = this.state;
        const {gender, contact} = this.props;

        
        return(
            <>
                <p>Name <strong>{empName}</strong> Salary <strong>{empSal}</strong></p>
                <p>Gender {gender} Cantact {contact}</p>

                <label htmlFor="inputName">Name : </label>
                <input type="type" id="inputName" name="inputName" style={{margin:"30px"}}></input>
                <label htmlFor="inputSalary">Salary : </label>
                <input type="type" id="inputSalary" name="inputSalary"></input>   <br></br>

                <button type="button" onClick={this.changeName} style={{margin:"30px"}} className="btn btn-outline-danger">Change Name</button>
                <button type="button" onClick={this.changeSalary} className="btn btn-outline-danger">Change Salary</button>

                <hr>                
                </hr>

                <ChildCom name={empName} sal={empSal}  changename={this.changeName} changesalary={this.changeSalary}/>

                <MyPureComp name={empName}/>

                <MyMemoCom name={empName}/>
            </>

        
        );
    }
}

export default ParentComp;