import React, { useState } from 'react';
import { Input } from './Input'; 


const fields = [
    { label: "Institute", type: "text", key: "institute" },
    { label: "Study", type: "text", key: "study" },
    { label: "Timeline", type: "text", key: "timeline" },
    { label: "Score", type: "text", key: "score" },
  ];

const Education = ({formData, setFormData}) => {



  const handleChange = (key) => (e) => {
    setFormData((prev) => ({
     ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <>
        <div className="flex flex-col space-y-4 p-4">
          <h2 className="text-lg font-semibold">Education</h2>
          {fields.map((field) => (
            <Input
              key={field.key}
              label={field.label}
              type={field.type}
              value={formData[field.key]}
              onChange={handleChange(field.key)}
            />
          ))}
        </div>

        <div className='flex justify-center gap-10'>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-30"
      onClick={handleSubmit}>
        Submit
      </button>
      <button type='' className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded w-30'>Edit</button>
      </div>
    </>
  )
}

export default Education