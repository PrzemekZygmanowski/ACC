import React from 'react';
import { InputWrapperT } from '../interfaces/interfaces';

export const InputWrapper = ({ className, children }: InputWrapperT) => {
  return <div className={className}>{children}</div>;
};

