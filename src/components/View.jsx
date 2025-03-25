import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Card from './Card';


const View = ({Personal, Education, Experience}) => {
  console.log("Personal",Personal);
  console.log("Education",Education);
  console.log("Experience",Experience);


  console.log("Personal : ",Personal)
  return (

    <>
       {/*Header Section*/}
    <div className='mt-2 space-x-1 text-white rounded bg-[#03045e] h-30 w-full flex flex-col shadow-md shadow-blue-400 itams-center'>
        
        <div className='mt-4'>
          <h2 className="text-4xl text-center font-semibold">{Personal.name}</h2>

        </div>

      <div className='flex gap-15 mt-4 justify-center'>

         <div className='flex gap-2'>
          <MdEmail className='size-6'/>
          <h2 className="text-md text-center font-semibold">{Personal.email}</h2>
         </div>   
        
         <div className='flex gap-2'>
           <BsFillTelephoneFill className='size-6'/>
           <h2 className="text-md text-center font-semibold">{Personal.phone}</h2>
         </div>
        
         <div className='flex gap-2'>
            <FaLocationDot className='size-6' />
            <h2 className="text-md text-center font-semibold">{Personal.address}</h2> 
         </div>

      </div>
        
      </div>

    {/*Education*/}

    <div className='flex flex-col items-center py-8'>

    <div className='flex items-center justify-center bg-gray-200 h-15 w-180 rounded-xl shadow-gray-700 shadow-xl'>
        <h2 className='text-center text-black font-extrabold text-2xl'>Education</h2>
    </div>

   <div className='mt-8'>

   {
      Education.map((data) => (
        <Card data={data}/>
        ))
   }

   </div>


    

    </div>

    
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>



    {/*Experience*/}

    <div className='flex flex-col items-center py-2'>

    <div className='flex items-center justify-center bg-gray-200 h-15 w-180 rounded-xl shadow-gray-700 shadow-xl'>
        <h2 className='text-center text-black font-extrabold text-2xl'>Experience</h2>
    </div>


    <div className='mt-8'>
      {
        Experience.map((data) => (
        <Card data={data}/>
        ))
      }
    </div>

    </div>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  )
}

export default View   