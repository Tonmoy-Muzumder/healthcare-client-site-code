import React from 'react';
import Banner from "../Banner/Banner"
import Services from '../../Home/Services/Services'
import Doctors from '../../Doctors/Doctors/Doctors';
import Shops from '../../Shop/Shops/Shops';



const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Shops></Shops>
        </div>
    );
};

export default Home;