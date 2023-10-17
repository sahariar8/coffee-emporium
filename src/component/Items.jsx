import React, { useState } from 'react';
import Item from './Item';
import { GiCoffeeCup }  from 'react-icons/gi'
import { Link } from 'react-router-dom';


const Items = ({items}) => {
  const [coffees,setCoffees] = useState(items)

  
    return (
       <div className="max-w-screen-xl mx-auto py-8 md:py-20">
        <div className="bg-[url('/1.png')]  bg-cover">
          <div className="text-center">
            <h1 className="text-yellow-800 font-rancho text-xs">
              --- Sip & Savor ---
            </h1>
            <h2 className="text-yellow-800 font-rancho text-3xl font-semibold">
              Our Popular Products
            </h2>
            <Link to="/addform">
            <button className="w-full font-rancho px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#E3B577;] rounded-md lg:w-auto hover:bg-yellow-700 focus:outline-none focus:bg-yellow-400">
              <div className="flex flex-row justify-center">
                <h1>Add Coffee</h1>
                <h2 className="ml-1 flex items-center">
                  <GiCoffeeCup className="text-yellow-800" />
                </h2>
              </div>
            </button>
            </Link>
          </div>
          <div className="md:px-20 md:pt-10">
          <div className="grid md:grid-cols-2 gap-8">
              {
              coffees.map(item=><Item item={item} coffees={coffees} setCoffees={setCoffees} ></Item>)
              }
           </div>
           </div>
          
        </div>
        </div>
    );
};

export default Items;