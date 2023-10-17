import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {name,chef,price,image} = useLoaderData();
    return (
      <div className="px-20 py-10 bg-[url('/11.png')]">
        <div className="card lg:card-side bg-[#f4f3f07a] shadow-xl">
          <figure>
            <img
              src={image}
              alt="Album"
              className='md:ml-20 w-80 h-auto'
            />
          </figure>
          <div className="card-body pt-20 font-rancho">
            <h2 className="card-title text-yellow-800">Name: <span className='text-lg font-semibold text-yellow-700'>{name}</span></h2>
            <h2 className="card-title text-yellow-800">Chef: <span className='text-lg font-semibold text-yellow-700'>{chef}</span></h2>
            <h2 className="card-title text-yellow-800">Supplier:<span className='text-lg font-semibold text-yellow-700'></span></h2>
            <h2 className="card-title text-yellow-800">Taste: <span className='text-lg font-semibold text-yellow-700'></span></h2>
            <h2 className="card-title text-yellow-800">Category:<span className='text-lg font-semibold text-yellow-700'></span> </h2>
            <h2 className="card-title text-yellow-800">Price:<span className='text-lg font-semibold text-yellow-700'>{price}</span></h2>
           
            
            <div className="card-actions justify-end">
              <Link to='/'><button className="btn bg-[#D2B48C;]">Go Home</button></Link>
            </div>
          </div>
        </div>
        <div className='mt-20'>
            <Contact></Contact>
        </div>
      </div>
    );
};

export default Details;