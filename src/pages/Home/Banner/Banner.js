import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/Banner/banner1.jpg'
import Banner2 from '../../../images/Banner/banner2.jpg'
import Banner3 from '../../../images/Banner/banner3.jpg'

const Banner = () => {

  

    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img style={{height : 600}}
      className="d-block w-100"
    src={Banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <div style={{color : 'green' }}>
      <h3 style= {{fontSize: 40, margin: 10}}>What Makes Us Better, Makes You Better</h3>
      <p  style= {{fontSize: 20, margin: 10}}>We have made the most advanced, constumizable & user friendly medical theme in the world.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height : 600}}
      className="d-block w-100"
      src={Banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <div style={{textAlign : "left"}}>
      <h3 style= {{fontSize: 40, margin: 10}}>Breakthrough care in <br /> locations  near you</h3>
      <p style= {{fontSize: 20, margin: 10}}>This is open to everyone every day and provides <br />
         primary health care and cutting-edge medicine in a<br />
          central location</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height : 600}}
      className="d-block w-100"
      src={Banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <div style={{textAlign : "left"}}>
      <h3 style= {{fontSize: 40, margin: 10}}>On a Pursuit of Better <br /> Medicine</h3>
      <p style= {{fontSize: 20, margin: 10}}>Our integrated friendly health system is on a <br /> relentless pursuit of better care in the world</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;