import React from 'react';
import '../../styles/Dialog.scss';
import { Dialog, NavLink, NavMenu } from '../../commons';
import { DialogHeader } from '../../commons/dialog/DialogHeader';
import { DialogContent } from '../../commons/dialog/DialogContent';
import { DialogFooter } from '../../commons/dialog/DialogFooter';

const NotFound = () => {
  return (
    <Dialog className='startDialog'>
      <DialogHeader title='Ups...' isButton={false} />
      <DialogContent>
        <p>Pracuje jeszcze nad tym ;)</p>
      </DialogContent>
      <DialogFooter>
        <NavMenu className=''>
          {' '}
          <NavLink className='mainBtn' label='Powrót' to='/' />
        </NavMenu>
      </DialogFooter>
    </Dialog>
  );
};
export default NotFound;
