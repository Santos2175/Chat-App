import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin.js';
import logo from '../../assets/logo.png';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { username, password } = inputs;
  const { loading, login } = useLogin();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <div className='flex'>
          <h1 className='text-3xl font-semibold text-center text-gray-300 pl-8'>
            Login
            <span className='text-blue-500 ml-3'> Connectify</span>
          </h1>
          <div>
            <img src={logo} alt='Connectify Logo' className=' h-10 w-10' />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full input input-bordered h-10'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <Link
            to='/signup'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Don't have an account?
          </Link>
          <div>
            <button
              className='btn btn-block btn-sm mt-2'
              type='submit'
              disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//STARTER CODE FOR THIS FILE

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Enter username'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Enter Password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>
//           <a
//             href='#'
//             className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Don't have an account?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
