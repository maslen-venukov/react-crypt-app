const initialState = '';

const key = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_KEY':
      return payload;
  
    default:
      return state;
  }
}

export default key;