import { useField, FieldHookConfig, FieldProps } from 'formik';
import React from 'react';

//////////fixme => dont use any///////////
export const Select = ({ ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

