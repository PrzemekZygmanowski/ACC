import React from 'react';
import { InputWrapperT } from '../interfaces/interfaces';

const InputWrapper = ({ className, children }: InputWrapperT) => {
  return <div className={className}>{children}</div>;
};

export default InputWrapper;
