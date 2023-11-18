import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faSignOutAlt,faBell ,faEnvelope,faArrowLeft ,faUser } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [prodbar, setProdBar] = useState(false);
  return (
    <>
     <div className="flex antialiased text-gray-900 bg-white dark:bg-dark dark:text-light relative overflow-hidden">
    <div
    className={`${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } fixed inset-y-0 z-10 flex flex-col w-80 transition-transform duration-300 text-white`}
  >
    <svg
      className="absolute inset-0 w-full h-full text-white"
      style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
      preserveAspectRatio="none"
      viewBox="0 0 309 800"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
      />
    </svg>
    <div className={`${
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
  } fixed inset-y-0 z-10 flex flex-col w-80 transition-transform duration-300 text-black`}
  >
      <h1 className="text-2xl font-semibold">Himalaya Enterprises</h1>
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="absolute top-6 right-10 p-2 text-black hover:text-gray-300 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span className="sr-only">Close sidebar</span>
      </button>
      <ul className="mt-10 ml-10 space-y-4">
      
      <li>
   <button onClick={() => setProdBar(!prodbar)} className="flex items-center text-black hover:text-yellow-500">
     <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2" />
     User
   </button>
  
 </li> 
 {prodbar && (
    
    <li className="flex items-center text-black hover:text-yellow-500 ml-8 mt-2">
       <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2" />
      asdf</li>
   )} 
 <li>
        <a href="/" className="flex items-center text-black hover:text-yellow-500">
          <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-2" />
          Logout
        </a>
      </li>
      </ul>
    </div>
  </div>
   <main className="flex flex-col items-end justify-center flex-1 mb-10">
   <button
     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
     className="fixed p-2 text-white bg-black rounded-lg top-5 left-5"
   >
     Menu
   </button>
   
   <header className="px-1 md:px-4 py-2 my-4 md:my-0 shadow bg-black rounded-md p-3">
      <div className="flex justify-between">

        
        

        <div className="flex items-center">
          <button data-messages className="p-1 mr-1 focus:outline-none hover:bg-red-400 hover:rounded-md" type="button">
          <FontAwesomeIcon icon={faBell } className="w-3 h-3 mr-1 md:w-5 md:h-5 text-white" />
          </button>
          <button data-notifications className="p-1 mr-1 focus:outline-none hover:bg-red-400 hover:rounded-md" type="button">
            <FontAwesomeIcon icon={faEnvelope } className='w-3 h-3 mr-1 md:w-5 md:h-5 text-white' />
          </button>
          {isDropdownOpen && (
           <>
               <button data-messages className="p-1 mr-1 focus:outline-none text-xs text-white md:text-white hover:bg-red-400 hover:rounded-md" type="button">
          <FontAwesomeIcon icon={faUser } className="w-3 h-3 mr-1 md:w-5 md:h-5 text-white" />
         User Profile
          </button>
          <button data-notifications className="p-1 mr-1 focus:outline-none text-xs text-white md:text-white hover:bg-red-400 hover:rounded-md" type="button">
            <FontAwesomeIcon icon={faSignOutAlt } className='w-3 h-3 mr-1 md:w-5 md:h-5 text-white' />
            Logout
          </button>
          </>
            )}
          <div
            data-dropdown
            className={`flex items-center px-3 py-2 focus:outline-none hover:bg-gray-200 hover:rounded-md ${isDropdownOpen ? 'bg-gray-200 rounded-md' : ''} `}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {/* User profile information */}
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80"
              alt="Profile"
              className="h-4 w-4 md:h-8 md:w-8 rounded-full"
            />
            <span className="ml-4 text-sm hidden md:inline-block">Jessica Smith</span>
           <FontAwesomeIcon icon={faArrowLeft }  className='w-3 h-3 md:w-5 md:h-3 ml-2'/>

            {/* Dropdown content */}
          
          </div>
        </div>
      </div>
    </header>

  
 </main>
 </div>
 </>
  )
}

export default NavBar