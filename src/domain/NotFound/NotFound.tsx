import React from 'react';
import '../../styles/Dialog.scss';
import { Dialog, NavLink, NavMenu } from '../../commons';
import {
  DialogHeader,
  DialogContent,
  DialogFooter,
} from '../../commons/dialog/';

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
