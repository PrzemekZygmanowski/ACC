import React from "react";
import { LinkIcon } from "../../../commons/LinkIcon";
import { ButtonIcon } from "../../../commons/ButtonIcon";
import { faCog, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/styles.scss";
import { deleteRoom } from "../reducers/roomsActions";
import { useDispatch } from "react-redux";

interface RoomLiElement {
  id: string;
  name: string;
  area: string;
  temperature: string;
}

export const Room = ({ id, name, area, temperature }: RoomLiElement) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteRoom(id));
  };

  return (
    <li className="room">
      <div>
        {" "}
        <span>{id}</span>
        <span>{name}</span>
        <span>{area}</span>
        <span>{temperature}</span>
      </div>
      <div className="room_btns">
        {" "}
        <LinkIcon className="edit-room-btn" to={`/room/${id}`} icon={faCog} />
        <ButtonIcon
          className="delete-room-btn"
          onClick={() => handleDelete(id)}
          icon={faTrash}
        />
      </div>
    </li>
  );
};
