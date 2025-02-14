import React from 'react';
import { useForm } from 'react-hook-form';

export const FormDemo8 = () => {
    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => console.log(data);
    
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <h1>CONTACT US</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input type='text' {...register('name')} />
          </div>
          <div>
            <label>Email</label>
            <input type='email' {...register('email')} />
          </div>
          <div>
            <label>Message</label>
            <textarea {...register('message')}></textarea>
          </div>
          <div>
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    );
  };