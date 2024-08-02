import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { Link, useLocation } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function Header() {
  const { isSignedIn } = useUser();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Helper function to determine if the link is active
  const isActive = (path) => currentPath === path;

  return (
    <div className='p-3 px-5 flex justify-between items-center shadow-md'>
      <Link to='/dashboard' className='flex items-center'>
        <img src='/logo.svg' alt='Logo' className='cursor-pointer' width={60} height={60} />
        <span className='text-2xl font-bold text-gray-800 ml-3' style={{ fontFamily: 'Roboto, sans-serif' }}>
          MyResearchPal
        </span>
      </Link>
      <div className='flex items-center gap-6'>
        <Link
          to='/'
          className={`font-bold ${isActive('/') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
        >
          Home
        </Link>
        <Link
          to='/aboutUs'
          className={`font-bold ${isActive('/aboutUs') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
        >
          About Us
        </Link>
        <Link
          to='/features'
          className={`font-bold ${isActive('/features') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
        >
          Features
        </Link>
        <Link
          to='/faq'
          className={`font-bold ${isActive('/faq') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
        >
          FAQs
        </Link>
        {isSignedIn ? (
          <>
            <Link to='/dashboard'>
              <Button
                variant='outline'
                className='bg-primary text-white hover:bg-white hover:text-black hover:border-black'
              >
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </>
        ) : (
          <Link to='/auth/sign-in'>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
