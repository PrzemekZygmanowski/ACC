import React from 'react';
import { LabelT } from '../interfaces/interfaces';

const Label = ({ name, label }: LabelT) => {
  return <label htmlFor={name}>{label}</label>;
};

export default Label;
