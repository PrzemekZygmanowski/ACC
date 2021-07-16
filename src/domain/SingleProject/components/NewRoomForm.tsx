import React from 'react';
import { Formik, Form } from 'formik';
import {
  Input,
  Label,
  InputWrapper,
  SubmitButton,
} from '../../../commons/FormComponents';
import { RoomT } from '../interfaces';

export interface RoomFormT {
  values: RoomT;
  submitNewRoom: (values: RoomT) => void;
}

export const NewRoomForm = ({ values, submitNewRoom }: RoomFormT) => {
  const initialValues: RoomT = {
    id: '',
    roomName: '',
    roomArea: 0,
    roomTemperature: 0,
  };

  return (
    <>
      <Formik initialValues={values || initialValues} onSubmit={submitNewRoom}>
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
