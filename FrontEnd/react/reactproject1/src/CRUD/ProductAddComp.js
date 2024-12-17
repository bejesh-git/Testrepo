import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProductAddComp() {
    const nav = useNavigate();

    const[product, setProduct] = useState({
        pname:"",
        pquantity:"",
        pcompany:"",
        pprice:""
    })

    const handleChange =(event)=> {
        const {name, type, value} = event.target;
        setProduct({...product, [name]:value});
    }

    const submitData = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost:8888/products", product).then(()=>{
            window.alert("Added Successfully");
            nav("/dashboard/product");
        }).catch((error)=>{});
    }



    return (
        <div>
            {/* <h2>This is ProductAddComp</h2> */}

            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={submitData}>
                        <div className='p-2'>
                            <label>Name </label>
                            <input type="text" className="form-control" name='pname' value={product.pname} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>Price </label>
                            <input type="text" className="form-control" name="pprice" value={product.pprice} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>Company </label>
                            <input type="text" className="form-control" name='pcompany' value={product.pcompany} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>Quantity </label>
                            <input type="text" className="form-control" name='pquantity' value={product.pquantity} onChange={handleChange} ></input>
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
            
        </div>
    )
}

export default ProductAddComp;
