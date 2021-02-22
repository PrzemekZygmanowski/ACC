import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import {
  TextInput,
  Label,
  InputWrapper,
  SubmitButton,
} from '../../../commons/FormComponents';

interface myFormValues {
  projectTitle: string;
  weatherStation: string;
}

const InputS = {
  display: 'flex',
  flexDirection: 'column',
};
const NewProjectForm = () => {
  const initialValues: myFormValues = { projectTitle: '', weatherStation: '' };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <InputWrapper className=''>
            <Label label='Nazwa projektu' name='projectTitle' />
            <TextInput
              name='projectTitle'
              type='text'
              placeholder='Nazwa projektu'
            />
          </InputWrapper>
          <InputWrapper className=''>
            <Label
              label='Najbliższa stacja meterologiczna'
              name='weatherStation'
            />
            <TextInput
              name='weatherStation'
              type='text'
              placeholder='Najbliższa stacja meterologiczna'
            />
          </InputWrapper>
          <SubmitButton className='' type='submit' label='Zapisz' />
        </Form>

        {/* <Button className='' onClick={onSubmit} label='Zapisz'></Button> */}
      </Formik>
    </>
  );
};

export default NewProjectForm;
