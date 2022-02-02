// Access reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return (state = {
        value: !state.value,
      });

    default:
      return state;
  }
};

export default reducer;
