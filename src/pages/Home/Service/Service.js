import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { id,  name, description, img } = service;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="my-5">
            <img style={{height: 300}} className='img-fluid' src={img} alt="" />
            <div className='text-start my-3'>
            <h3 className='fs-1'>{name}</h3>
            <p className="my-3 fs-5">{description}</p>
            <Link to={`/details/${id}`}>
                <button className="btn btn-warning">VIEW DETAILS - {name.toLowerCase()}</button>
            </Link>
            </div>
            </div>
           
        </div>
    );
};

export default Service;