import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Details = () => {

    const {serviceId} = useParams();
    const [detail, setDetail] = useState([]);
    const [singleItem, setSingleItem] = useState([]);

    

    useEffect(()=>{
        const url ='/services.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
        
        .catch(
            (error) => {
              console.log(error);
            }
          )
    },[]);

    useEffect(()=>{
                    const itemDetail = detail.find(d => d.id == serviceId);
                    setSingleItem(itemDetail);
    },[detail]);

    return (
        <div>
            <br />
            <h1>Service Details Of : {serviceId}</h1>
            <br />
            <br />
            <img className="img-fluid" src={singleItem?.img} alt="" />
            <div className="container text-start">
            <h1>{singleItem?.name}</h1>
            <br />
            <h6>{singleItem?.description}</h6>
            <br />
            <br />
            <h3>{singleItem?.tittle}</h3>
            <hr />
            
            <br />
            <h6>Tips : {singleItem?.tips}</h6>
            
            <br />
            <h6>For more Info : {singleItem?.info}</h6>
            </div>
            
        </div>
    );
};

export default Details;