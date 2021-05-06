import React, { FC } from 'react';
import '../../../commons/MenuStyle.scss';
import '../../../styles/Form.scss';
import { Formik, Form } from 'formik';
import {
  Input,
  Label,
  InputWrapper,
  SubmitButton,
  Select,
} from '../../../commons/FormComponents';
import { ProjectValues } from '../interfaces';

export interface newProjectFormT {
  values: ProjectValues;
  onSubmit: (values: ProjectValues) => void;
}

interface cityT {
  id: number;
  name: string;
}
const InputS = {
  display: 'flex',
  flexDirection: 'column',
};
const cities = [
  { id: 1, name: 'Łódź' },
  { id: 2, name: 'Gdańsk' },
  { id: 3, name: 'Toruń' },
];

const NewProjectForm: FC<newProjectFormT> = () => {
  const initialValues: ProjectValues = { projectTitle: '', weatherStation: '' };
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
            <Select name='weatherStation'>
              <option value=''>Najbliższa stacja meterologiczna</option>
              {cities.map((city: cityT) => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </Select>
          </InputWrapper>
          <SubmitButton className='submitBtn' type='submit' label='Zapisz' />
        </Form>
      </Formik>
    </>
  );
};

export default NewProjectForm;
