import React from 'react';
import { useHistory } from 'react-router-dom';


const Service = ({ service }) => {
    const { id,  name, description, img } = service;

    const history = useHistory();

    const handleSingleServiceClick = () => {
        history.push(`/details/${id}`)
    }
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="my-5">
            <img style={{height: 300}} className='img-fluid' src={img} alt="" />
            <div className='text-start my-3'>
            <h3 className='fs-1'>{name}</h3>
            <p className="my-3 fs-5">{description}</p>

            <button onClick={handleSingleServiceClick} className="btn btn-warning">VIEW DETAILS - {name.toLowerCase()}</button>
            </div>
            </div>
           
        </div>
    );
};

export default Service;