import React from "react";

const MyMemoCom = ({name}) =>{
    console.log("MyMemo Comp");
    return(
        <>
            <h2>Memo Comp</h2>
            <p>{name}</p>
        </>
    );
}

export default React.memo(MyMemoCom);