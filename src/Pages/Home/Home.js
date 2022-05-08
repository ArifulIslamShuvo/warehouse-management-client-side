import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Inventorys from './Inventorys/Inventorys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventorys></Inventorys>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;