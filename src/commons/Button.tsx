import React from 'react';
import './Buttons.scss';
import { ButtonT } from './interfaces/interfaces';

const Button = ({ className, onClick, label }: ButtonT) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
