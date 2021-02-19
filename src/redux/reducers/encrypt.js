const initialState = {
  message: '',
  result: null
}

const encrypt = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ENCRYPT_MESSAGE':
      return {
        ...state,
        message: payload
      }

    case 'SET_ENCRYPT_RESULT':
      return {
        ...state,
        result: payload
      }
  
    default:
      return state;
  }
}

export default encrypt;