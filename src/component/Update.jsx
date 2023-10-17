import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Update = () => {
    const navigate = useNavigate();
    const {_id,name,chef,price,category,taste,image,supplier} = useLoaderData();

    const handleUpdate = e =>{

        e.preventDefault();
        const form = e.target;
        const name = form.cname.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const image = form.image.value;
        const updateCoffee = {name,chef,supplier,taste,category,price,image}
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('data update',data)
            if(data.modifiedCount > 0){
              Swal.fire(
                'Good job!',
                'Coffee Updated Successfully',
                'success'
              )
              navigate('/');
            }
           
        })
    }
    return (
        <div className="bg-[url('/13.jpg')] py-24">
        <section class="max-w-4xl p-5 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 font-rancho">
          <h2 class="pb-1 text-lg font-rancho md:text-3xl font-semibold text-yellow-800 capitalize dark:text-white text-center">
          Update Coffee Details
          </h2>
          <h3 className='text-sm text-yellow-900 px-8 pt-3 pb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h3>

          <form onSubmit={handleUpdate}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-yellow-700 dark:text-gray-200" for="username">
                  Name
                </label>
                <input
                 name='cname'
                  type="text"
                  placeholder='Enter Coffee Name'
                  defaultValue={name}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-yellow-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Chef
                </label>
                <input
                  name='chef'
                  type="text"
                  placeholder='Enter Chef Name'
                  defaultValue={chef}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-yellow-700 dark:text-gray-200" for="username">
                  Supplier
                </label>
                <input
                  name='supplier'
                  type="text"
                  placeholder='Enter Supplier Name'
                  defaultValue={supplier}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-yellow-700 dark:text-gray-200"
                  for="emailAddress"
                >
                 Taste
                </label>
                <input
                 name='taste'
                  type="text"
                  placeholder='Enter Coffee Taste'
                  defaultValue={taste}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-yellow-700 dark:text-gray-200" for="password">
                 Category
                </label>
                <input
                 name='category'
                  type="text"
                  placeholder='Enter Coffee Category'
                  defaultValue={category}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-yellow-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                Price
                </label>
                <input
                  name='price'
                  type="text"
                  placeholder='Enter Coffee Price'
                 defaultValue={price}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div>
            <div className='w-full mt-2 py-2'>
                <label
                  class="text-yellow-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Photo
                </label>
                <input
                  name='image'
                  type="text"
                  placeholder='Photo URL'
                  defaultValue={image}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-yellow-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type='submit'>
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default Update;