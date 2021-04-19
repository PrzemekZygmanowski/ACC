import React from 'react';
import { Formik, Form } from 'formik';
import {
  Input,
  Label,
  InputWrapper,
  SubmitButton,
} from '../../../commons/FormComponents';

interface myFormValues {
  roomName: string;
  roomArea: number;
  roomTemperature: number;
}

const NewRoomForm = () => {
  const initialValues: myFormValues = {
    roomName: '',
    roomArea: 0,
    roomTemperature: 0,
  };

  const valuetext = (value: number) => {
    return `${value}°C`;
  };

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
            <Label label='Nazwa pomieszczenia' name='roomName' />
            <Input
              name='roomName'
              type='text'
              placeholder='Nazwa pomieszczenia'
            />
          </InputWrapper>
          <InputWrapper className='input_wrapper'>
            <Label label='Powierzchnia' name='roomArea' />
            <Input name='roomArea' type='number' placeholder='Powierzchnia' />
          </InputWrapper>
          <InputWrapper className='input_wrapper'>
            <Label label='Temperatura' name='roomTemperature' />
            <Input
              name='roomTemperature'
              type='number'
              placeholder='Temperatura'
            />
          </InputWrapper>
          <SubmitButton className='submitBtn' type='submit' label='Zapisz' />
        </Form>
      </Formik>
    </>
  );
};

export default NewRoomForm;
