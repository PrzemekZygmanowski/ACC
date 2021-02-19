import React, { useState } from 'react';
import '../../styles/Header.scss';
import { Button, ButtonIcon } from '../../commons';
import { StartMenu, HeaderHelpDialog } from '..';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHelpDialogOpen, setHelpDialogOpen] = useState(false);
  const openStartDialog = () => {
    setMenuOpen(!isMenuOpen);
  };
  const openHelpDialog = () => {
    setHelpDialogOpen(!isHelpDialogOpen);
  };
  return (
    <header className='header'>
      <h1 className='header__h1'>Kalkulator Zysków Ciepła</h1>
      <h2 className='header__h2'>
        Oblicz jaką moc powinien mieć Twój klimatyzator
      </h2>
      <Button className='mainBtn' label='Zaczynamy' onClick={openStartDialog} />
      <ButtonIcon
        className='iconBtn'
        onClick={openHelpDialog}
        icon={faQuestionCircle}
      />
      <StartMenu isOpen={isMenuOpen} onClick={openStartDialog} />
      <HeaderHelpDialog isOpen={isHelpDialogOpen} onClick={openHelpDialog} />
    </header>
  );
};

export default Header;
