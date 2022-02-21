// Access reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_NEWS':
      return (state = { ...state, value: !state.value });

    case 'TOGGLE_VIDEO':
      return (state = { ...state, vid: !state.vid });

    default:
      return state;
  }
};

export default reducer;
