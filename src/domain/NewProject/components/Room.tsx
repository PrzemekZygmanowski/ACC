import React from 'react';
import { LinkIcon, ButtonIcon } from '../../../commons';
import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';

interface RoomT {
  id: number;
  name: string;
  area: number;
  temperature: number;
}
const Room = ({ id, name, area, temperature }: RoomT) => {
  return (
    <li>
      <span>{id}</span>
      <span>{name}</span>
      <span>{area}</span>
      <span>{temperature}</span>
      <div>
        <LinkIcon className='' to='/' icon={faCog} />
        <ButtonIcon
          className=''
          onClick={() => {
            console.log('usun');
          }}
          icon={faTrash}
        />
      </div>
    </li>
  );
};

export default Room;
