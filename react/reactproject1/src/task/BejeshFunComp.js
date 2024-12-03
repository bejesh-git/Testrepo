const BejeshFunComp = (props) => {
    return(
        <div>
            <h2>Bejesh Function Component</h2>
            <p>My Name is {props.fname + props.lname}, i am paid {props.salary}.<br></br>
                I am a {props.gender} Living in {props.address}</p>
        </div>
    );
}
                            

export default BejeshFunComp;