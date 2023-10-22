import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import Items from './Items';
import Gallery from './Gallery';
import Contact from './Contact';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coffees = useLoaderData();
   

    return (
        <div>
            <div className="bg-[url('/15.jpg')]">
                <h1 className='text-white font-rancho md:text-4xl py-3 text-center font-semibold'>Espresso Emporium</h1>
            </div>
            <Hero></Hero>
            <Banner></Banner>
            <Items citems={coffees}></Items>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;