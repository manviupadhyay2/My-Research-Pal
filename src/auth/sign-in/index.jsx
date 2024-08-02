import { SignIn } from '@clerk/clerk-react';
import React from 'react';

function SignInPage() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-50'>
      <div className='p-6 max-w-md bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-extrabold text-center mb-6'>Welcome Back</h1>
        <SignIn
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px'
          }}
        />
      </div>          
    </div>
  );
}

export default SignInPage;
