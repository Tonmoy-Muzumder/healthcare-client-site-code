import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';

const Shops = () => {
    const [shops, setShops] = useState([]);

    useEffect(() =>{
        fetch('shops.json')
        .then(result => result.json())
        .then(data => setShops(data))
        .catch(
            (error) => {
              console.log(error);
            }
          )       
    }, []);

    return (
        <div id="shops">
           <div className="my-3 text-start container"><h1>Medicine</h1>
            <p>You can Buy Medicine in our Shop</p>
            </div>
            <div className="container">
                <div className="row">
                {
                    shops.map(shop=> <Shop
                        key={shop.id}
                        shop={shop}
                    ></Shop>)
                }
                </div>
            </div>
        </div>
    );
};

export default Shops;