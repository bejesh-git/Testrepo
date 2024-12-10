import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMAGE, IMAGESTR } from '../../database/IMAGE';

function ProductMaterialComp() {
    const [isTime, setIsTime] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {material} = useParams();

    useEffect(() => {
        getData();
        setTimeout(()=>setIsTime(true),3000);
    }, [])

    const getData = () =>{
        axios.get("http://localhost:8888/products")
            .then((res) => {
                // setProducts(res.data);
                setFilteredProducts(res.data.filter((val, index) => {
                    return val.material == material;
                }));
            })
            .catch((eror) => { });
            return;
    }     
        

    return (
        <div>
            
            {/* <h2>Product Material comp : </h2> */}
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
                                                {console.log(IMAGESTR[val.imagename])}
                                                <img src={IMAGESTR[val.imagename]} class="card-img-top" alt="..." />

                                                <div class="card-body">
                                                    <h5 class="card-title">{`${val.material} ${val.category}`}</h5>
                                                    <p class="card-text">&#8377;{val.price}</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return(
                                        <div className='col-4'>
                                        <div class="card" aria-hidden="true">
                                            <img src={IMAGE.GTR_LOGO} class="card-img-top" alt="..." style={{height:"200px", width:"200px"}}/>
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

export default ProductMaterialComp;
