import { Component } from "react";

class EmpDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            empDetails: [
                {
                    "empid": 4580,
                    "empname": "Sriram",
                    "emppost": "software developer",
                    "empsal": 25000,
                    "empcontact": 9877884937,
                    "empaddress": "Chennai"
                },
                {
                    "empid": 4581,
                    "empname": "Anjali",
                    "emppost": "project manager",
                    "empsal": 45000,
                    "empcontact": 9877884938,
                    "empaddress": "Bangalore"
                },
                {
                    "empid": 4582,
                    "empname": "Ravi",
                    "emppost": "data analyst",
                    "empsal": 30000,
                    "empcontact": 9877884939,
                    "empaddress": "Hyderabad"
                },
                {
                    "empid": 4583,
                    "empname": "Priya",
                    "emppost": "UI/UX designer",
                    "empsal": 28000,
                    "empcontact": 9877884940,
                    "empaddress": "Mumbai"
                },
                {
                    "empid": 4584,
                    "empname": "Karthik",
                    "emppost": "backend developer",
                    "empsal": 32000,
                    "empcontact": 9877884941,
                    "empaddress": "Pune"
                },
                {
                    "empid": 4585,
                    "empname": "Meera",
                    "emppost": "HR manager",
                    "empsal": 40000,
                    "empcontact": 9877884942,
                    "empaddress": "Delhi"
                },
                {
                    "empid": 4586,
                    "empname": "Vikram",
                    "emppost": "network engineer",
                    "empsal": 35000,
                    "empcontact": 9877884943,
                    "empaddress": "Kolkata"
                },
                {
                    "empid": 4587,
                    "empname": "Lakshmi",
                    "emppost": "QA tester",
                    "empsal": 27000,
                    "empcontact": 9877884944,
                    "empaddress": "Chennai"
                },
                {
                    "empid": 4588,
                    "empname": "Arjun",
                    "emppost": "full stack developer",
                    "empsal": 38000,
                    "empcontact": 9877884945,
                    "empaddress": "Bangalore"
                },
                {
                    "empid": 4589,
                    "empname": "Divya",
                    "emppost": "business analyst",
                    "empsal": 33000,
                    "empcontact": 9877884946,
                    "empaddress": "Hyderabad"
                }
            ]

        }
    }

    render(){
        const {empDetails} = this.state;

        return(
            <table>
                <thead>
                    <tr className="border border-dark">
                        <th>Id</th><th>Name</th><th>salary</th><th>Post</th><th>Contact</th><th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {empDetails.map((val, index)=>{
                        return <tr className="">
                                    <td className="p-2">{val.empid}</td><td className="p-2">{val.empname}</td><td className="p-2">{val.empsal}</td><td className="p-2">{val.emppost}</td><td className="p-2">{val.empcontact}</td><td className="p-2">{val.empaddress}</td>
                                </tr>
                    })}
                </tbody>
            </table>
        );
    }


}

export default EmpDetails;