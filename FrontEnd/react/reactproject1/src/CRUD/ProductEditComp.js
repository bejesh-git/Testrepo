import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ProductEditComp() {

    const {id} = useParams();
    const nav = useNavigate();
    const [product, setProduct] = useState({
        pname:"",
        pquantity:"",
        pcompany:"",
        pprice:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            setProduct({...product, ...res.data});
        }).catch((error)=>{});
    },[])

    const handleChange =(event)=> {
        const {name, type, value} = event.target;
        setProduct({...product, [name]:value});
    }

    const submitEdit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8888/products/${id}`,product).then(()=>{
            window.alert("Edit Successfull");
        }).catch((error)=>{});
        nav("/dashboard/product");

    }

    return (
        <div>
            <h2>This is ProductEditComp</h2>

            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={submitEdit}>
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

export default ProductEditComp;
