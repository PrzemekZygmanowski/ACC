export const CURRENT_ROOM = 'CURRENT_ROOM';

export const setCurrentRoom = (id: number) => {
  return {
    type: CURRENT_ROOM,
    payload: { id },
  };
};
