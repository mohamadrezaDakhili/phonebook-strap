import userType from "./userType";

const initialState = {
  users: [],
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userType.ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };

    case userType.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id != payload),
      };

    case userType.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };

    default:
      return state;
  }
};
export default userReducer;
