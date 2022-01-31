const navReducer = (state, action) => {
  switch (action.type) {
    case 'HOME':
      return (state = { value: 'Home', route: action.payload });
    case 'ABOUT':
      return (state = { value: 'About', route: action.payload });
    case 'SERVICES':
      return (state = { value: 'Services', route: action.payload });
    case 'CONTACT':
      return (state = { value: 'Contact', route: action.payload });

    default:
      state;
  }
};

export default navReducer;
