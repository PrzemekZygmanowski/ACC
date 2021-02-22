import React from 'react';
import { SubmitT } from '../interfaces/interfaces';

const Button = ({ className, type, label }: SubmitT) => {
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
};

export default Button;
