import React from 'react';

const Hero = () => {
    return (
        <div className="w-full bg-center bg-cover md:h-[38rem] bg-[url('/3.png')] " >
        <div className="flex items-center pr-12 md:pr-20 w-full h-full bg-gray-900/40 py-8">
            <div className='w-3/6'></div>
            <div className="text-center text-white md:w-3/6">
            <h1 className="text-2xl md:text-3xl font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                <h2 className='text-sm  pt-6 text-gray-400'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</h2>
                <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-slate-800 capitalize transition-colors duration-300 transform bg-[#E3B577;] rounded-md lg:w-auto hover:bg-yellow-700 focus:outline-none focus:bg-yellow-400">Learn More</button>
            </div>
        </div>
    </div>
    );
};

export default Hero;