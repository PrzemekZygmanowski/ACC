import React from 'react';
import CSS from 'csstype';
import { DialogHeaderT } from '../interfaces/interfaces';

const DialogHeaderS: CSS.Properties = {
  display: 'flex',
};
const IconsS: CSS.Properties = {
  position: 'fixed',
  right: '5%',
};

const DialogHeader = ({ title, children }: DialogHeaderT) => {
  return (
    <div style={DialogHeaderS}>
      <div>
        <h2>{title}</h2>
      </div>
      <div style={IconsS}>{children}</div>
    </div>
  );
};

export default DialogHeader;
