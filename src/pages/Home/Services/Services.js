import React, { useEffect, useState } from 'react';

import Service from '../../Home/Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id="services">
            <h2 className="my-5 text-start container">Medical Services</h2>
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