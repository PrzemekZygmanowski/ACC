import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkIconT } from './interfaces/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkIcon = ({ className, icon, to }: LinkIconT) => {
  return (
    <NavLink className={className} to={to}>
      <FontAwesomeIcon icon={icon} />
    </NavLink>
  );
};

export default LinkIcon;
