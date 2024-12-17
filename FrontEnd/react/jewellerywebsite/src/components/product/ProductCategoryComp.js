import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductCategoryComp(props) {

    const [isTime, setIsTime] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getData();
        setTimeout(()=>setIsTime(true),1000);
    }, [])

    const getData = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        axios.get("http://localhost:8888/products")
            .then((res) => {
                // setProducts(res.data);
                setFilteredProducts(res.data.filter((val, index) => {
                    return val.material == props.material;
                }));
            })
            .catch((eror) => { });
            return;

    }


    return (
        <div>
            <h2>Product Category comp : </h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>

                        <div className='row'>
                        {
                            filteredProducts.map((val, index) => {
                                if (isTime) {
                                    return (
                                        <div className='col-4'>
                                            <div class="card">
                                                <img src="..." class="card-img-top" alt="..." />

                                                <div class="card-body">
                                                    <h5 class="card-title">{val.imagename}</h5>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return(
                                        <div className='col-4'>
                                        <div class="card" aria-hidden="true">
                                            <img src="..." class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title placeholder-glow">
                                                        <span class="placeholder col-6"></span>
                                                    </h5>
                                                    <p class="card-text placeholder-glow">
                                                        <span class="placeholder col-7"></span>
                                                        <span class="placeholder col-4"></span>
                                                        <span class="placeholder col-4"></span>
                                                        <span class="placeholder col-6"></span>
                                                        <span class="placeholder col-8"></span>
                                                    </p>
                                                    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                                                </div>
                                        </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>

                    </div>
                    <div className='col-2'></div>
                </div>
                
            </div>


        </div>
    )
}

export default ProductCategoryComp;
