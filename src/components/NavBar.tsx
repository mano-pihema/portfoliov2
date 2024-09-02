import { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

const pages = ['About', 'Projects', 'Contact'];

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className=' sticky top-0 w-full mx-auto  px-4 sm:px-20 bg-opacity-50 backdrop-blur-lg  bg-background z-50'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <div className='container flex items-center space-x-2'>
              <a
                href='#'
                className='text-2xl font-bold transition duration-500 hover:text-blue-400'
              >
                Mano Pihema
              </a>
            </div>

            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md '
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross2 size={30} />
                ) : (
                  <RxHamburgerMenu size={30} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='h-screen md:h-auto items-center justify-center md:flex '>
              {pages.map((link) => {
                return (
                  <li key={link} className='m-5 text-center'>
                    <a
                      key={link}
                      href={'#' + link}
                      className='px-6 py-2 transition duration-500 hover:text-blue-400'
                      onClick={() => setNavbar(!navbar)}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
