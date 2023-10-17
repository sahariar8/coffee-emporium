import React, { useContext } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/ContextProvider";

const Item = ({ item,coffees,setCoffees }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { _id, name, chef, price, image } = item;

  const handleDelete = (_id) => {
    console.log(_id);
    if(user){
         //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete", data);
        if(data.deletedCount > 0){
           Swal.fire("Deleted!", "Coffee deleted Successfully", "success");
           const remaining = coffees.filter(coffee=> coffee._id !== _id);
           setCoffees(remaining);
        }
      });
       
      }
    });
    }else{
      return navigate('/login')
    }
   

    // //
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     fetch(`http://localhost:5000/coffee/${_id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("delete", data);
    //     if(data.deletedCount > 0){
    //        Swal.fire("Deleted!", "Coffee deleted Successfully", "success");
    //        const remaining = coffees.filter(coffee=> coffee._id !== _id);
    //        setCoffees(remaining);
    //     }
    //   });
       
    //   }
    // });

    //
    
  };
  return (
    <div className="card card-side bg-[#f5f4f16e] shadow-xl">
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body flex flex-row justify-between">
        <div className="-ml-10 flex flex-col md:-ml-5 space-y-2">
          <h2 className="card-title text-yellow-900 pt-8 text-sm md:text-lg">
            Name:{" "}
            <span className="text-yellow-700 text-sm md:text-lg">{name}</span>
          </h2>
          <h2 className="card-title text-yellow-900 text-sm md:text-lg">
            Chef:{" "}
            <span className="text-yellow-700 text-sm md:text-lg">{chef}</span>
          </h2>
          <h2 className="card-title text-yellow-900 text-sm md:text-lg">
            Price:{" "}
            <span className="text-yellow-700 text-sm md:text-lg">{price}</span>
          </h2>
        </div>
        <div className="pt-6 md:ml-6">
          <div className="space-y-1 flex flex-col">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-[#D2B48C;]">
                <BsFillEyeFill className="text-white text-xl hover:text-slate-600" />
              </button>
            </Link>
            <Link to={`/coffee/${_id}`}>
              <button className="btn bg-slate-600">
                <BiSolidPencil className="text-xl text-white  hover:text-slate-600" />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600"
            >
              <MdDelete className="text-xl text-white  hover:text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
