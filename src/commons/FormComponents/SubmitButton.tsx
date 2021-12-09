import React from 'react';
import { SubmitT } from '../interfaces/interfaces';

export const SubmitButton = ({ className, type, label }: SubmitT) => {
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
};

