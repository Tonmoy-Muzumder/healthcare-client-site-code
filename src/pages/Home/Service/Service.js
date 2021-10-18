import React from 'react';
import { Link } from 'react-router-dom';
import {} from 'react-router-dom';

const Service = ({ service }) => {
    const { id,  name, description, img } = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12  g-3">
            <img className='img-fluid'style={{height: 300}} src={img} alt="" />
            <div className='text-start my-3'>
            <h3 className='fs-1'>{name}</h3>
            <p className="my-3 fs-5">{description}</p>
            <Link to={`/details/${id}`}>
                <button className="btn btn-warning">VIEW DETAILS - {name.toLowerCase()}</button>
            </Link>
            </div>
           
        </div>
    );
};

export default Service;