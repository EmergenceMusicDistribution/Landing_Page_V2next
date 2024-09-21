import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


export const ReusableForm = ({ onSubmit, schema, fields }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  return (
    <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div className='' key={field.name}>
          <label className='text-gray-400'>{field.label}</label>
          <div className='space-y-1'>
          <input className={`bg-[#1e1f26] w-full  border rounded-md py-3.5 px-2 text-white ${errors[field.name] && 'border border-red-500'}  `}{...register(field.name)} type={field.type} />
          {errors[field.name] && <p className='text-red-500 text-sm'>{errors[field.name]?.message}</p>}
          </div>
        </div>
      ))}
      <button className='bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 relative top-2 rounded-full w-full uppercase' type="submit">Submit</button>
    </form>
  );
};
