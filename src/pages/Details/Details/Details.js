import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import Detail from '../../../pages/Details/Detail/Detail'
// import Data from '../../../../src/details'

const Details = () => {
    
    let {serviceId} = useParams();
    useEffect(()=>{
        const url = `services.json${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(
            (error) => {
              console.log(error);
            }
          )

        // console.log(url)
    },[])
    // console.log(`data${serviceId}`)
    // const singleService = Data.find(data=>data.service === serviceId)

    // let {name} = singleService;
    
    // const [details, setDetails] = useState([]);
    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }, []);

    



    return (
        <div>
            <h1>details of : {serviceId}</h1>
{/* 
            {
                details.find(detail => <Detail
                    key={detail.id}
                    detail={detail}
                ></Detail>)
            } */}
           
         
            
        </div>
    );
};

export default Details;