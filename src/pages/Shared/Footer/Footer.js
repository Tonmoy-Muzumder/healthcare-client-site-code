import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark'>
              <div className="my-5">
                <h1 className='text-white m-0'>LININGS</h1>
                    <p style={{color: 'green', marginLeft: 50}}>HEALTH<span style={{color: 'red'}}>CARE</span> </p>
                 </div>

    <hr />

    <div className='text-white d-flex justify-content-evenly text-start fs-6'>
        <div>
            <h3>About Linings</h3>
            <p>The Linings staff members are well trained professionals,We will<br /> fax the requested records directly to the qualified doctors <br /> the day before or the day of the appointment.</p>

        <Link to="">ABOUT US</Link>
        </div>

        <div>
            <h3>Departments</h3>
           <div className='text-white'>
           <Link to="">Pediatric</Link>
            <br />
            <Link to="">Cardiology</Link>
            <br />
            <Link to="">Dentel Care
            </Link>
            <br />
            <Link to="">Neurology
            </Link> <br />
            <Link to="">Urology</Link>  <br />
            <Link to="">Pulmonary</Link>  <br />
            <Link to="">Х-ray & CT Scan</Link>
           </div>
        </div>

        <div>
                <div>
               <h3>Contact Details</h3>
                </div>
                <div>
                    <p>250 Main Street, Mirpur-12, Dhaka. <br />

                        Tell 01634155401 <br />
                        Email: tonmoymuzumder1@gmail.com <br />
                        Website Linings healthcare.com</p> <br />
                </div>
        </div>
    </div>
    <br />
    <hr />

    <div className='text-white'>
        copyright,2021
    </div>
        </div>
    );
};

export default Footer;



