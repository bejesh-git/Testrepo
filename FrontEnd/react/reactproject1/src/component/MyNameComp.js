import React from 'react'

function MyNameComp(props) {
    return (
        <div>
            <h2>About</h2>
            <h2>my name {props.name}</h2>
            <h2>I AM A {props.post}</h2>

        </div>
    )
}

export default MyNameComp;
