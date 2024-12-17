const UserComp = (props) =>{

    const {user} = props;

    if(user == "Raheem"){
        throw Error("Not a User");
    }

    return(
        <div>
            <h2>Welcome, {user}</h2>
        </div>
    );

}

export default UserComp;
