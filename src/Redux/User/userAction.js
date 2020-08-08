import userType from "./userType";
export const addUser = (user) => {
  return {
    type: userType.ADD_USER,
    payload: user,
  };
};
export const deleteUser = (id) => {
  return {
    type: userType.DELETE_USER,
    payload: id,
  };
};
export const updateUser = (user) => {
  return {
    type: userType.UPDATE_USER,
    payload: user,
  };
};
