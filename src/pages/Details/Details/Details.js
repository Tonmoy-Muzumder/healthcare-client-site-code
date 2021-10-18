import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ service }) => {
    const {serviceId} = useParams();
    // const {  name, description, img } = service;
    return (
        <div>
            <h1>details of : {serviceId}</h1>
            
        </div>
    );
};

export default Details;