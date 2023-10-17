import React from 'react';
import cup1 from '../assets/images/cups/Rectangle 9.png'
import cup2 from '../assets/images/cups/Rectangle 10.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 12.png'
import cup5 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup7 from '../assets/images/cups/Rectangle 15.png'
import cup8 from '../assets/images/cups/Rectangle 16.png'

const Gallery = () => {
   
    return (
        <div className="px-20 py-10 bg-[url('/11.png')]">
            <div className='text-center'>
                <h1 className="text-yellow-800 font-rancho text-xs">Follow Us Now</h1>
                <h2 className="text-yellow-800 font-rancho text-3xl font-semibold pt-2">Follow on Instagram</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 pt-10'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />

            </div>
            
        </div>
    );
};

export default Gallery;