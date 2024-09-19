const initialState = {
  StatusbarColor: 'white',
};

// Reducer function that takes state and action and returns new state
export default function statusbarReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STATUSBAR_COLOR':
      return {
        ...state,
        StatusbarColor: action.payload,
      };
    default:
      return state;
  }
}

// Action creator to change status bar color
export const setStatusbarColor = (color) => ({
  type: 'SET_STATUSBAR_COLOR',
  payload: color,
});
