import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './api/apiSlice';


function DataListComp() {

    const dispatch = useDispatch();
    const data = useSelector((state)=>state.api.data);
    const status = useSelector((state)=>state.api.status);
    const error = useSelector((state)=>state.api.error);
    console.log(data)
    useEffect(()=>{
        dispatch(fetchData())
    }, [])

    let content;

    if(status === "loading"){
        content = <p><span className='spinner-border'></span>Loading...</p>
    }
    else if(status === "success"){
        content = <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    data.map((val, index)=>{
                        {console.log(val)}
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquantity}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    }
    else if(status === "failed"){
        content = <div>
            <h2>Something Happened, Try again</h2>
            {error}
        </div>
    }

    return (
        <div>
            <h2>Data list component</h2>
            {content}
        </div>
    )
}

export default DataListComp;
