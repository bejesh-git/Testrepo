import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import { Link, Outlet } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';


import { Button, Modal } from 'react-bootstrap';

function ProductDashComp() {
    const [product, setProduct] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true);
        setShow(val);
    }

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get("http://localhost:8888/products").then((res) => {
            setProduct(res.data);
        }).catch((error) => { })
    }

    const editFun = (id) => {
        window.alert(`Edit button clicked ${id}`);
    }


    const deleteFun = (id) => {
        // window.alert(`Delete button clicked ${id}`);
        let conf = window.confirm("Do you want to Delete it");
        conf && axios.delete(`http://localhost:8888/products/${id}`).then(() => {
            getData();
        }).catch((error) => { });
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
                        product.map((val, index) => {
                            return <tr key={val.id}>
                                <td>{index + 1}</td>
                                <td>{val.pname}</td>
                                <td>{val.pprice}</td>
                                <td>{val.pcompany}</td>
                                <td>{val.pquantity}</td>
                                <td>
                                    <button type='button' onClick={()=>handleShow(val)} className='btn btn-outline-info'><InfoIcon></InfoIcon></button>
                                    <Link to={`/dashboard/editproduct/${val.id}`} className='btn btn-outline-success' >
                                        <EditIcon></EditIcon>
                                    </Link>

                                    <button type='button' onClick={() => { deleteFun(val.id) }} className='btn btn-outline-danger'>
                                        <DeleteIcon></DeleteIcon>
                                    </button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{show.pname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Name : </span><strong>{show.pname}</strong>   <br></br>
                    <span>Price : </span><strong>{show.pprice}</strong>   <br></br>
                    <span>Company : </span><strong>{show.pcompany}</strong>   <br></br>
                    <span>Quantity : </span><strong>{show.pquantity}</strong>   <br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductDashComp;
