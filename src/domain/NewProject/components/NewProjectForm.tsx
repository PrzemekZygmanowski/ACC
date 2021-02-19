import React from 'react';
import { TextInput } from '../../../commons/Input';

const NewProjectForm = () => {
  return (
    <>
      <TextInput
        label='First Name'
        name='firstName'
        type='text'
        placeholder='Jane'
      />
    </>
  );
};

export default NewProjectForm;
