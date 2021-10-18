import React, { useEffect, useState } from 'react';
import Service from '../../Home/Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(
                (error) => {
                  console.log(error);
                }
              )
    }, []);

    return (
        
        <div id="services">
            <div className="my-3 text-start container">
            <h2>Medical Services</h2>
            <p>The Best Services In our Hospital</p>
            </div>
            <div className='container'>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                  
                }
                
            </div>
            </div>
        </div>
    );
};

export default Services;