import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { AiOutlineWarning } from 'react-icons/ai';

export const ReusableForm = ({ onSubmit, schema, fields, isLoading }) => {
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
            <div className={`${errors[field.name] && ' border-red-500'}`}>
          <input placeholder={`Enter ${field.label}`} className={`bg-[#1e1f26] rounded-md text-[0.87
            rem] w-full appearance-none py-3.5 border px-2 focus:outline-none text-white ${errors[field.name] && ' border-red-500'} `}{...register(field.name)} type={field.type} />
          {/* {errors[field.name] && <AiOutlineWarning size={23} className='text-red-500 mr-2'/>} */}
       
            </div>
          {errors[field.name] && <p className='text-red-500 text-sm'>{errors[field.name]?.message}</p>}
          </div>
        </div>
      ))}
      {/* <p className='text-red-500 text-center'>{errorMessage}</p> */}
      <button disabled={isLoading} className='bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 relative top-2 rounded-full w-full uppercase' type="submit"> {isLoading ? 'Loading...' : 'Submit'} </button>
    </form>
  );
};
