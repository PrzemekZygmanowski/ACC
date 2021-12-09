import React from 'react';
import { useField, FieldHookConfig } from 'formik';

export const Input = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className='text_input'
        {...field}
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

