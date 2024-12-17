import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFoundComp() {
    return (
        <div>
            <div>Are you lost</div>
            <div>Go to <strong>HOME</strong> page</div>
            <Link to="/index/home">Click here</Link>
        </div>
    )
}

export default PageNotFoundComp;
