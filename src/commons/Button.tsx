import React from 'react';
import { ButtonT } from './interfaces/interfaces';

export const Button = ({ className, onClick, label }: ButtonT) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

