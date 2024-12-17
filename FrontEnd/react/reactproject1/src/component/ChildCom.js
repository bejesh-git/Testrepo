const ChildCom = (props) =>{

    const {name, sal, changename, changesalary} = props;

    return(
        <>
            <h2>Child Component</h2>
            <p>Name: <strong>{name}</strong> Salary: <strong>{sal}</strong> </p>

            <button type="button" onMouseOver={changename} style={{margin:"30px"}} className="btn btn-outline-danger">Change Name</button>
            <button type="button" onMouseOver={changesalary} className="btn btn-outline-danger">Change Salary</button>

        </>
    );
}

export default ChildCom;