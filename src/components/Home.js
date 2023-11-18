import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendar,faBox,faUsers,faShoppingCart,faCheckCircle  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Home = () => {
 
   
   const today = new Date();
   const dayOptions = { weekday: 'long' };
   const dayOfWeek = new Intl.DateTimeFormat('en-US', dayOptions).format(today);
   return (
    <>
 <div className="flex flex-wrap gap-4 mt-10 mx-auto w-11/12">
  <div className="flex flex-wrap justify-between w-full">
  
    <div className="flex-col items-center justify-center md:flex-row md:items-start md:text-left mr-4">
      <p className='text-lg md:text-xl font-semibold mb-1 md:mr-4'>Welcome User!</p>
      <span style={{color: "silver"}} className='text-sm text-gray-500 md:text-base'>Here's what's happening with your store today.</span>
    </div>
   
    <div className="flex items-center justify-center space-x-2">
      <div className="flex flex-col items-end">
        <div className="text-sm font-bold">{dayOfWeek}</div>
        <div className="text-xs text-gray-500">
          {today.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
        </div>
      </div>
      <FontAwesomeIcon icon={faCalendar} className="text-blue-500" />
    </div>

  </div>
</div>


<div className="flex flex-wrap justify-center gap-4 mx-auto w-11/12 bg-gray-500 rounded-md ">
<div className= "flex flex-wrap my-5 mx-2">

  
            <div className= "w-full lg:w-1/4 p-2">
                <div className= "flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                    <Link to='/'>
                    <div className= "flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <div className="text-white hover:text-yellow-700 transition duration-500">
      <FontAwesomeIcon icon={faUsers } className="object-scale-down text-1xl md:text-2xl" />
    </div>
                    </div>
                    </Link>
                    <div className= "flex flex-col justify-around flex-grow ml-5 text-white">
                        <div className= "text-xs whitespace-nowrap">
                            Total customers registered
                        </div>
                        <div className= "">
                            100
                        </div>
                    </div>
                    <div className= " flex items-center flex-none text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className= "w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
          
            <div className= "w-full md:w-1/2 lg:w-1/4 p-2 ">
                <div className= "flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                    <div className= "flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <div className="text-white hover:text-yellow-700 transition duration-500">
      <FontAwesomeIcon icon={faBox} className="object-scale-down text-1xl md:text-3xl" />
    </div>
                    </div>
                    <div className= "flex flex-col justify-around flex-grow ml-5 text-white">
                        <div className= "text-xs whitespace-nowrap">
                            Total Products
                        </div>
                        <div className= "">
                            500
                        </div>
                    </div>
                    <div className= " flex items-center flex-none text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className= "w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
            
            <div className= "w-full md:w-1/2 lg:w-1/4 p-2 ">
                <div className= "flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                    <div className= "flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <div className="text-white hover:text-yellow-700 transition duration-500">
      <FontAwesomeIcon icon={faShoppingCart } className="object-scale-down text-1xl md:text-3xl" />
    </div>
                    </div>
                    <div className= "flex flex-col justify-around flex-grow ml-5 text-white">
                        <div className= "text-xs whitespace-nowrap">
                            Total Order 
                        </div>
                        <div className= "">
                            500
                        </div>
                    </div>
                    <div className= " flex items-center flex-none text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className= "w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className= "w-full md:w-1/2 lg:w-1/4 p-2 ">
                <div className= "flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                    <div className= "flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <div className="text-white hover:text-yellow-700 transition duration-500">
      <FontAwesomeIcon icon={faCheckCircle } className="object-scale-down text-1xl md:text-3xl" />
    </div>
                    </div>
                    <div className= "flex flex-col justify-around flex-grow ml-5 text-white">
                        <div className= "text-xs whitespace-nowrap">
                            Compeleted Orders
                        </div>
                        <div className= "">
                            500
                        </div>
                    </div>
                    <div className= " flex items-center flex-none text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className= "w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className= "w-full md:w-1/2 lg:w-1/4 p-2 ">
                <div className= "flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                    <div className= "flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <div className="text-white hover:text-yellow-700 transition duration-500">
      <FontAwesomeIcon icon={faBox} className="object-scale-down text-4xl" />
    </div>
                    </div>
                    <div className= "flex flex-col justify-around flex-grow ml-5 text-white">
                        <div className= "text-xs whitespace-nowrap">
                            Total Product
                        </div>
                        <div className= "">
                            500
                        </div>
                    </div>
                    <div className= " flex items-center flex-none text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className= "w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className= "w-full md:w-1/2 lg:w-1/4 p-2">
                <div className= "flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                    <div className= "flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <div className="text-white hover:text-yellow-700 transition duration-500">
      <FontAwesomeIcon icon={faBox} className="object-scale-down text-4xl" />
    </div>
                    </div>
                    <div className= "flex flex-col justify-around flex-grow ml-5 text-white">
                        <div className= "text-xs whitespace-nowrap">
                            Total Visitor
                        </div>
                        <div className= "">
                            500
                        </div>
                    </div>
                    <div className= " flex items-center flex-none text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className= "w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    </div>
   

    

    </>
       
      
     
   );
 };

export default Home;
