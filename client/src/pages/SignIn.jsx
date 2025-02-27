import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  signInStart, 
  signInSuccess, 
  signIFailure 
} from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx';

export default function SignUp() {

const [formData, setFormData]=useState({});
const {loading, error}=useSelector((state)=>state.user);
const navigate =useNavigate();
const dispatch =useDispatch();

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
  });
};
const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
    dispatch(signInStart());
    const res = await fetch('/api/auth/singin',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success===false){
      dispatch(signIFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/');
  }catch(error){
    dispatch(signIFailure(error.message));
  }
};

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign In</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
          <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            {loading ? 'Loading...': 'Sign In'}
          </button>
          <OAuth/>
        </form>
        <div className="text-center mt-4">
        <Link to='/forgot-password'>
            <span className='text-blue-700 font-semibold underline text-lg'>Esqueceu a senha?</span>
          </Link>
        </div>
        <div className="flex gap-2 mt-5">
          <p>Dont have an account?</p>
          <Link to={"/sign-up"}>
          <span className="text-blue-700">Sing Up</span>
          </Link>
        </div>
        
        {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}
