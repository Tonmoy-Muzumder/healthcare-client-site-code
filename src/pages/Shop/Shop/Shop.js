import React from 'react';
import { Link } from 'react-router-dom';

const Shop = ({shop}) => {
    const { img, name, price,ratting } = shop;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="my-5">
          <img src={img} alt="" />
         <div style={{height: 270}} className='container bg-primary py-5'>
         <div className="text-white">
         <h2>{name}</h2>
         <h3>{ratting}</h3>
         <h6 >{price}</h6>
         </div>
        <div >
            <Link to="/login"><button style={{height: 50, width: 200}} className="bg-white my-3 text-primary">ADD TO CART</button></Link>
        </div>

         </div>
          </div>
        </div>
    );
};

export default Shop;