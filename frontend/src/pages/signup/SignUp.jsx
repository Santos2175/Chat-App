import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckBox from './GenderCheckBox.jsx';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { fullName, username, password, confirmPassword, gender } = inputs;

  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };
  return (
    <div className='flex felx-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'></span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Enter fullname'
              className='w-full input input-bordered h-10'
              name='fullName'
              value={fullName}
              onChange={handleChange}
            />
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
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter password again'
              className='w-full input input-bordered h-10'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={gender}
          />

          <Link
            to='/login'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button
              className='btn btn-block btn-sm mt-2 border border-x-slate-700'
              disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// STARTER CODE FOR THIS FILE
// import React from 'react';
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return (
//     <div className='flex felx-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up <span className='text-blue-500'></span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Enter fullname'
//               className='w-full input input-bordered h-10'
//             />
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Enter username'
//               className='w-full input input-bordered h-10'
//             />
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               type='password'
//               placeholder='Enter password'
//               className='w-full input input-bordered h-10'
//             />
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Enter password again'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           <GenderCheckBox />

//           <a
//             href='#'
//             className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Already have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 border border-x-slate-700'>
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
