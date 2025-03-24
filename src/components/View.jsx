import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


const View = ({Personal, Education, Experience}) => {


  console.log("Personal : ",Personal)
  return (
    <>
    <div className='border mt-2 rounded bg-blue-300 h-30 w-full flex flex-col itams-center'>
        
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

    

    <div className='flex justify-center py-3'>

    <div className='flex items-center justify-center bg-gray-200 h-15 w-180 border border-amber-600'>
        <h2 className='text-center text-black font-extrabold text-2xl'>Education</h2>
    </div>

    </div>

    
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>




    <div className='flex justify-center py-2'>

    <div className='flex items-center justify-center bg-gray-200 h-15 w-180 border border-amber-600'>
        <h2 className='text-center text-black font-extrabold text-2xl'>Experience</h2>
    </div>

    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  )
}

export default View   