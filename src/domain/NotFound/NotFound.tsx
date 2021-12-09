import React from 'react';
import '../../styles/Dialog.scss';
import { Dialog, } from '../../commons/Dialog';
import {  Link } from '../../commons/NavLink';
import {  NavMenu } from '../../commons/NavMenu';
import { DialogHeader } from '../../commons/dialog/DialogHeader';
import { DialogContent } from '../../commons/dialog/DialogContent';
import { DialogFooter } from '../../commons/dialog/DialogFooter';

export const NotFound = () => {
  return (
    <Dialog className='startDialog'>
      <DialogHeader title='Ups...' isButton={false} />
      <DialogContent>
        <p>Pracuje jeszcze nad tym ;)</p>
      </DialogContent>
      <DialogFooter>
        <NavMenu className=''>
          {' '}
          <Link className='mainBtn' label='Powrót' to='/' />
        </NavMenu>
      </DialogFooter>
    </Dialog>
  );
};
