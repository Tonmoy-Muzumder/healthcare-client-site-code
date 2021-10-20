import { useState, useEffect } from 'react';
import Doctor from "../../../pages/Doctors/Doctor/Doctor"

const Doctors = () => {
   const [doctors, setDoctors] = useState([]);

   useEffect(() =>{
       fetch('doctors.json')
       .then(result => result.json())
       .then(data => setDoctors(data))
       .catch(
        (error) => {
          console.log(error);
        }
      )
   }, []);
   
    return (
        <div id="doctors">
            <div className="my-3 text-start container"><h1>Head of Departments</h1>
            <p>The Best Doctor in our Hospital</p>
            </div>
            <div className="container">
                <div className="row">
                {
                    doctors.map(doctor=> <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
                </div>
            </div>
        </div>
    );
};

export default Doctors;