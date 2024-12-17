import React, { useState } from 'react'
import NavbarComp from "./NavbarComp"
import FooterComp from "./FooterComp"
import { Outlet } from 'react-router-dom';

export const Context = React.createContext()

function MainIndexComp() {
    let margintop = {
        marginTop : "0px"
    };

    const [isLoggedin, setisLoggedin] = useState(false);
    return (
        <div>
            <Context.Provider value={[isLoggedin, setisLoggedin]}>
                <div className=''><NavbarComp /></div>
                <div className='' style={margintop}> <Outlet /> </div>
                <div className='' style={margintop}><FooterComp /></div>
            </Context.Provider>

        </div>
    );
}

export default MainIndexComp;
