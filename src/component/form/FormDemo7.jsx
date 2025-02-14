import React from 'react';
import { useForm } from 'react-hook-form';

export const FormDemo7 = () => {
    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => console.log(data);
    
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <h1>BOOK APPOINTMENT</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input type='text' {...register('name')} />
          </div>
          <div>
            <label>Date</label>
            <input type='date' {...register('date')} />
          </div>
          <div>
            <label>Time</label>
            <input type='time' {...register('time')} />
          </div>
          <div>
            <label>Reason</label>
            <input type='text' {...register('reason')} />
          </div>
          <div>
            <input type='submit' value='Book Now' />
          </div>
        </form>
      </div>
    );
  };