import React, { ReactNode } from 'react';
import CSS from 'csstype';
import { ChildrenT } from '../interfaces/interfaces';

const DialogContentS: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
  height: '80%',
  width: '100%',
};

export const DialogContent = ({ children }: ChildrenT) => {
  return <div style={DialogContentS}>{children}</div>;
};
