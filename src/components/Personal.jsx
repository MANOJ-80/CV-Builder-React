import React, { useState } from 'react';
import { Input } from './Input'; 

const Personalfields = [
  { label: "Full name", type: "text", key: "name" },
  { label: "Email", type: "email", key: "email" },
  { label: "Phone", type: "tel", key: "phone" },
  { label: "Address", type: "text", key: "address" },
];

export const Personal = ({formData, setFormData}) => {


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
    <div className="flex flex-col space-y-4 p-4">
      <h2 className="text-lg font-semibold">Personal Details</h2>
      {Personalfields.map((field) => (
        <Input
          key={field.key}
          label={field.label}
          type={field.type}
          value={formData[field.key]}
          onChange={handleChange(field.key)}
        />
      ))}
      {/* Add submit and edit buttons */}
      <div className='flex justify-center gap-10'>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-30"
      onClick={handleSubmit}>
        Submit
      </button>
      <button type='' className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded w-30'>Edit</button>
      </div>
     
    </div>
  );
};
