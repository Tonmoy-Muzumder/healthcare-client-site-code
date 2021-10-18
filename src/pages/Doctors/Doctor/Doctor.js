import React from 'react';
import { Link } from 'react-router-dom';
const Doctor = ({doctor}) => {
    const { img, name, room, categories } = doctor;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="my-5">
          <img src={img} alt="" />
         <div style={{width: 270}} className='container bg-primary py-5'>
         <div className="text-white">
         <h2>{name}</h2>
         <h3>{categories}</h3>
         <h6 >{room}</h6>
         </div>
        <div >
            <Link to="/login"><button style={{height: 50, width: 200}} className="bg-white my-3 text-primary">BOOK APPOINTMENT</button></Link>
        </div>

         </div>
          </div>
        </div>
       
    );
};

export default Doctor;