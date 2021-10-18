import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark'>
              <div>
  <h1 className='text-white m-0 mt-5'>LININGS</h1>
  <p style={{color: 'green', marginLeft: 50}}>HEALTH<span style={{color: 'red'}}>CARE</span> </p>
    </div>

    <hr />

    <div className='text-white d-flex justify-content-around text-start'>
        <div>
            <h3>About Linings</h3>
            <p>The Linings staff members are well trained professionals,We will<br /> fax the requested records directly to the qualified doctors <br /> the day before or the day of the appointment.</p>
        </div>

        <div>
            <h3>Departments</h3>
           <div className='text-white'>
           <a href="">Pediatric</a>
            <br />
            <a href="">Cardiology</a>
            <br />
            <a href="">Dentel Care
            </a>
            <br />
            <a href="">Neurology
            </a> <br />
            <a href="">Urology</a>  <br />
            <a href="">Pulmonary</a>  <br />
            <a href="">Х-ray & CT Scan</a>
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
    <hr  />

    <div className='text-white'>
        copyright,2021
    </div>
        </div>
    );
};

export default Footer;



