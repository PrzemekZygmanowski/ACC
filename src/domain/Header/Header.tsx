import React, { useState } from 'react';
import '../../styles/Header.scss';
import { Button} from '../../commons/Button';
import {  ButtonIcon } from '../../commons/ButtonIcon';
import {  Link} from '../../commons/NavLink';
import { NavMenu } from '../../commons/NavMenu';
import { HeaderHelpDialog } from './HeaderHelpDialog';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [isHelpDialogOpen, setHelpDialogOpen] = useState(false);

  const openHelpDialog = () => {
    setHelpDialogOpen(!isHelpDialogOpen);
  };
  return (
    <header className='header'>
      <h1 className='header__h1'>Kalkulator Zysków Ciepła</h1>
      <h2 className='header__h2'>
  
        Oblicz jaką moc powinien mieć Twój klimatyzator
        </h2>
        <NavMenu className='startMenu'>
          <Link className='linkBtn' label='Zaczynamy' to='/start' />
          </NavMenu>
    
      <ButtonIcon
        className='iconBtn'
        onClick={openHelpDialog}
        icon={faQuestionCircle}
      />
      <HeaderHelpDialog isOpen={isHelpDialogOpen} onClick={openHelpDialog} />
    </header>
  );
};
