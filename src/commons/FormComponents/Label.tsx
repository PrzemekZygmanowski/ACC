import React from 'react';
import { LabelT } from '../interfaces/interfaces';

export const Label = ({ name, label }: LabelT) => {
  return <label htmlFor={name}>{label}</label>;
};

