import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineWarning } from 'react-icons/ai';

export const ReusableForm = ({ onSubmit, schema, fields }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div className='' key={field.name}>
          <label className='text-gray-400'>{field.label}</label>
          <div className='space-y-1 '>
            <div className={`flex items-center border rounded-md ${errors[field.name] && 'border border-red-500'} pl-2 pr-4`}>
          <input placeholder={`Enter ${field.label}`} className={`bg-[#1e1f26] text-sm w-full appearance-none py-3.5 focus:outline-none  text-white `}{...register(field.name)} type={field.type} />
          {errors[field.name] && <AiOutlineWarning size={23} className='text-red-500'/>}
            </div>
          {errors[field.name] && <p className='text-red-500 text-sm'>{errors[field.name]?.message}</p>}
          </div>
        </div>
      ))}
      <button className='bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 relative top-2 rounded-full w-full uppercase' type="submit">Submit</button>
    </form>
  );
};
