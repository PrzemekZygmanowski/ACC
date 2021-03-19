import React from 'react';
import '../../../commons/MenuStyle.scss';
import '../../../styles/Form.scss';
import { Formik, Form } from 'formik';
import {
  Input,
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
        <Form className='form_container'>
          <InputWrapper className='input_wrapper'>
            <Label label='Nazwa projektu' name='projectTitle' />
            <Input
              name='projectTitle'
              type='text'
              placeholder='Nazwa projektu'
            />
          </InputWrapper>
          <InputWrapper className='input_wrapper'>
            <Label
              label='Najbliższa stacja meterologiczna'
              name='weatherStation'
            />
            <Input
              name='weatherStation'
              type='text'
              placeholder='Najbliższa stacja meterologiczna'
            />
          </InputWrapper>
          <SubmitButton className='submitBtn' type='submit' label='Zapisz' />
        </Form>
      </Formik>
    </>
  );
};

export default NewProjectForm;