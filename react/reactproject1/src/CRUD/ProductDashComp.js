import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import { Link, Outlet } from 'react-router-dom';

function ProductDashComp() {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        getData();
    }, [])

    const getData = () => {
        axios.get("http://localhost:8888/products").then((res)=>{
            setProduct(res.data);
        }).catch((error)=>{})
    }

    const editFun =(id) =>{
        window.alert(`Edit button clicked ${id}`);
    }


    const deleteFun = (id) =>{
        // window.alert(`Delete button clicked ${id}`);
        let conf = window.confirm("Do you want to Delete it");
        conf && axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
            getData();
        }).catch((error)=>{});
    }

    return (
        <div>
            <h2>This is ProductDashComp</h2>
            <Link to="/dashboard/addproduct" className='btn btn-primary mt-3 mb-3'>
                <AddIcon></AddIcon> Add
            </Link>
            
            <table className='table table-hover table-bordered table-striped'>

                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        product.map((val, index)=>{
                            return <tr key={val.id}>
                                        <td>{index+1}</td>
                                        <td>{val.pname}</td>
                                        <td>{val.pprice}</td>
                                        <td>{val.pcompany}</td>
                                        <td>{val.pquantity}</td>
                                        <td>
                                            <Link to={`/dashboard/editproduct/${val.id}`} className='btn btn-outline-success' >
                                               <EditIcon></EditIcon>
                                            </Link>
                                            
                                            <button type='button' onClick={()=>{deleteFun(val.id)}} className='btn btn-outline-danger'>
                                               <DeleteIcon></DeleteIcon>
                                            </button>
                                        </td>
                                    </tr>
                        })
                    }

                </tbody>


            </table>
        </div>
    )
}

export default ProductDashComp;
