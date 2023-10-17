import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="bg-[url('/404.gif')] h-[600px] w-[800px] mt-20 bg-cover bg-center max-w-screen-xl mx-auto">
            <NavLink to="/"><h1 className='font-rancho text-yellow-800 text-2xl text-center font-bold'>Go To home</h1></NavLink>
            
        </div>
    );
};

export default Error;