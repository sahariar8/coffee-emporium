import React from 'react';
import pic1 from '../assets/images/icons/1.png'
import pic2 from '../assets/images/icons/2.png'
import pic3 from '../assets/images/icons/3.png'
import pic4 from '../assets/images/icons/4.png'

const Banner = () => {
    return (
        <div className='bg-[#ECEAE3] py-8'>
            <div className='grid md:grid-cols-4'>
                <div className='flex flex-col mb-4'>
                    <div className='flex justify-center'>
                        <img src={pic1} />
                    </div>
                    <div>
                        <h1 className='font-rancho text-center font-semibold text-yellow-800 text-xl pt-2'>Awesome Aroma</h1>
                        <h3 className='font-rancho text-center  text-yellow-800 text-xs pt-1 px-8 '>You will definitely be a fan of the design & aroma of your coffee</h3>
                    </div>
                </div>
                <div className='flex flex-col mb-4'>
                    <div className='flex justify-center'>
                        <img src={pic2} />
                    </div>
                    <div>
                        <h1 className='font-rancho text-center font-semibold text-yellow-800 text-xl pt-2'>High Quality</h1>
                        <h3 className='font-rancho text-center  text-yellow-800 text-xs pt-1 px-8 '>We served the coffee to you maintaining the best quality</h3>
                    </div>
                </div>
                <div className='flex flex-col mb-4'>
                    <div className='flex justify-center'>
                        <img src={pic3} />
                    </div>
                    <div>
                        <h1 className='font-rancho text-center font-semibold text-yellow-800 text-xl pt-2'>Pure Grades</h1>
                        <h3 className='font-rancho text-center  text-yellow-800 text-xs pt-1 px-8 '>The coffee is made of the green coffee beans which you will love</h3>
                    </div>
                </div>
                <div className='flex flex-col mb-4'>
                    <div className='flex justify-center'>
                        <img src={pic4} />
                    </div>
                    <div>
                        <h1 className='font-rancho text-center font-semibold text-yellow-800 text-xl pt-2'>Proper Roasting</h1>
                        <h3 className='font-rancho text-center  text-yellow-800 text-xs pt-1 px-8 '>Your coffee is brewed by first roasting the green coffee beans</h3>
                    </div>
                </div>
            
            
            </div>
        </div>
    );
};

export default Banner;