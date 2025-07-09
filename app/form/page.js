'use client';

import { useForm } from 'react-hook-form';

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="First Name" />
      {errors.firstName && <p>This field is required</p>}

      <input type="submit" value="Submit" />
    </form>
  );
}
