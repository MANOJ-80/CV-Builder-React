import React, { useState } from 'react';
import { Input } from './Input'; 

const fields = [
    { label: "Company", type: "text", key: "company" },
    { label: "Position", type: "text", key: "position" },
    { label: "Timeline", type: "text", key: "timeline" },
    { label: "Description", type: "text", key: "description" },
  ];




const Experience = ({formData, setFormData}) => {


      const handleChange = (index, key) => (e) => {
    setFormData((prev) =>
      prev.map((entry, i) =>
        i === index ? { ...entry, [key]: e.target.value } : entry
      )
    );
  };
  


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      const handleAdd = () => {
        setFormData((prev) => ([
         ...prev,
         {
          company: '',
          position: '',
          timeline: '',
          description: ''
         }
      ]));
      };
      
  return (
    <>
     <div className="flex flex-col space-y-4 p-4">
    <h2 className='text-lg font-semibold'>Experience</h2>

    {formData.map((exp, index) => (
          <div key={index} className="">
            {fields.map((field) => (
              <Input
                key={field.key}
                label={field.label}
                type={field.type}
                value={exp[field.key]}
                onChange={handleChange(index, field.key)}
              />
            ))}
          </div>
        ))}
    </div>

    <div className='flex justify-center gap-10'>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-30"
      onClick={handleSubmit}>
        Submit
      </button>
      <button type='' className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded w-30'>Edit</button>
      </div>

      <div className='flex justify-center mt-3'>
        <button onClick={handleAdd} className='bg-amber-400 rounded hover:bg-amber-600 text-white py-2 px-4 w-30'>Add</button>
      </div>
    </>
  )
}

export default Experience