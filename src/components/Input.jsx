import React from 'react'

export const Input = ({ label,type, value, onChange}) => {
 


  return (
    <>
    <label className='flex flex-col'>
    <p>{label}</p>

    <input 
    type={type}
    placeholder="Type Here ..."
    className='rounded border-2 text-sm p-1 pl-2 bg-neutral-100 border-neutral-300'
    value={value}
    onChange={onChange} />

    </label>
    </>
  )
}

