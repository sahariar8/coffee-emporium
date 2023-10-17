import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="bg-[url('/404.gif')] h-[600px] w-[800px] mt-20 bg-cover bg-center max-w-screen-xl mx-auto">
            <NavLink to="/"><button className='font-rancho text-yellow-800 text-2xl mx-auto block px-4 py-2 rounded-lg font-bold bg-[#ECEAE3]'>Go To home</button></NavLink>
            
        </div>
    );
};

export default Error;