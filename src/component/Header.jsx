import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/ContextProvider';
import Swal from 'sweetalert2';


const Header = () => {
    const {user,userLogOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        userLogOut()
        .then(()=>{
            Swal.fire(
                'Good job!',
                'Sign Out Successfully',
                'success'
              )
              navigate('/login')
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
              })
        })
    }
    return (
         <div className="bg-[url('/13.jpg')] flex justify-between max-w-screen-xl mx-auto font-semibold text-yellow-800">
        <div className="w-3/4 flex gap-2 md:gap-5 items-center ml-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/categories">Category</NavLink>
          <NavLink to="/details">Details</NavLink>
        </div>
        <div className="">
          {user ? (
            <div className='flex items-center'>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
            <div>
                <h3 className='mr-5'>{user?.displayName}</h3>
            </div>
            </div>
            
          ) : (
            <NavLink to='/login'>
                <button className='btn btn-ghost'>Login</button>
            </NavLink>
          )}
        </div>
      </div>
    );
};

export default Header;