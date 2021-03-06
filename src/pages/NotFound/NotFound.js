import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const SadEmoji = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGaZnAyJh-pFzMYYbFUDuSdzk_KtbpTlTbsw&usqp=CAU"
    return (
        
        <div style={{textAlign: 'center', color: 'gray'}}>
            <img src={SadEmoji} alt="" />
            <h1 style={{fontSize: 200,color:'black' }}>404</h1>
            <h3 style={{ color:'black', color: 'red'}}>Oops! Nothing Was Found</h3>
            <p>The link you followed probably broken, or the page has been removed.

</p>

<br />
<br />
<br />
                    <div>
                        <Link to="/home"><button  className='bg-primary text-white fs-4'>Back to Home</button></Link>
                    </div>
        </div>
    );
};

export default NotFound;