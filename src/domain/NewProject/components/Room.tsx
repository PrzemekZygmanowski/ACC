import React from 'react';
import { LinkIcon, ButtonIcon } from '../../../commons';
import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/styles.scss';

interface RoomT {
  id: number;
  name: string;
  area: number;
  temperature: number;
}
const Room = ({ id, name, area, temperature }: RoomT) => {
  return (
    <li className='room'>
      <div>
        {' '}
        <span>{id}</span>
        <span>{name}</span>
        <span>{area}</span>
        <span>{temperature}</span>
      </div>
      <div className='room_btns'>
        {' '}
        <LinkIcon className='edit-room-btn' to='/' icon={faCog} />
        <ButtonIcon
          className='delete-room-btn'
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
