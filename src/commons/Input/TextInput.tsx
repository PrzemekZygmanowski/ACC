import React from 'react';
import { useField } from 'formik';
import { TextInputT } from '../interfaces/interfaces';

const TextInput = ({ label, props }: TextInputT) => {
  //
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
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

export default TextInput;
