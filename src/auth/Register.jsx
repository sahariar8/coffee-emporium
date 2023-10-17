import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error,setError] = useState();

    const handleRegister = e =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const photoURL = form.image.value;
            const email = form.email.value;
            const password = form.password.value;
            const check = form.check.checked;
            console.log(name,photoURL,email,password,check);
            setError('');
            if(password.length < 6){
                setError('Password Should be 6 charecters or Longer ')
                return;
            }
            else if(!/^(?=.*[A-Z])(?=.*[\W_]).*$/.test(password)){
                setError('Password should have at least one Uppercase and One Special Charecter');
                return;
            }

            createUser(email,password)
            .then(result=>{
                updateProfile(result.user,{
                    displayName:name,
                    photoURL:photoURL
                })
                .then(result=>{
                    console.log(result.user)
                })
                .catch()
                console.log(result.user);
                Swal.fire(
                    'Good job!',
                    'Registration Successfully Completed',
                    'success'
                  )
                  navigate('/login');
            })
            .catch(error=>{
                const err = error.message;
                setError(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                  })
            })
    }

    return (
        <div className="bg-[url('/13.jpg')] min-h-screen pt-10">
        <form onSubmit={handleRegister} className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-[#F4F3F0] sm:p-20">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-yellow-800">Sign Up</h1>
          </div>
          <div className="form-group pt-5">
            <div className="form-field">
              <label className="form-label font-semibold text-slate-600">Full Name</label>
                <div className='form-control py-2'>
                    <input
                    placeholder="Name here"
                    type="text"
                    name='name'
                    required
                    className="input input-bordered max-w-full"
                />
                </div>
            </div>
            <div className="form-field">
              <label className="form-label font-semibold text-slate-600">Photo URL</label>
                <div className='form-control py-2'>
                    <input
                    placeholder="Photo url"
                    type="text"
                    name='image'
                    required
                    className="input input-bordered max-w-full"
                />
                </div>
            </div>
            <div className="form-field">
              <label className="form-label font-semibold text-slate-600">Email address</label>
                <div className='form-control py-2'>
                    <input
                    placeholder="Enter Email"
                    type="email"
                    name='email'
                    required
                    className="input input-bordered max-w-full"
                />
                </div>
            </div>
            <div className="form-field">
              <label className="form-label font-semibold text-slate-600">Password</label>
              <div className="form-control py-2">
                <input
                  placeholder="Type Password"
                  type="password"
                  name='password'
                  required
                  className="input input-bordered max-w-full"
                />
                <p className='text-sm font-bold text-red-600'>{error}</p>
              </div>
            </div>
            <div className="form-field ">
              <div className=" flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" name='check' className="checkbox" required />
                  <a href="#">Remember me</a>
                </div>
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn btn-primary w-full">
                  Sign in
                </button>
              </div>
            </div>

            <div className="form-field pt-2">
              <div className="flex justify-start">
                <a className="text-sm font-semibold">
                  Already have an account? <a href="/login" className='link link-primary'>Sign In.</a>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Register;