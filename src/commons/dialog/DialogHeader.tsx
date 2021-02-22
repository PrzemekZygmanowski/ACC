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

const DialogHeader = ({ title, children, isButton }: DialogHeaderT) => {
  return (
    <div style={DialogHeaderS}>
      <div>
        <h2>{title}</h2>
      </div>
      {isButton ? <div style={IconsS}>{children}</div> : <></>}
    </div>
  );
};

export default DialogHeader;
