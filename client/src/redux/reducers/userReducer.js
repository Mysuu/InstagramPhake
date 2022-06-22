const inittialState = {
  users: [],
};

export const usersReducer = (state = inittialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS": {
      return {};
    }
    default:
      return state;
  }
};
