const initialState = {
  message: '',
  result: null
}

const decrypt = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_DECRYPT_MESSAGE':
      return {
        ...state,
        message: payload
      }

    case 'SET_DECRYPT_RESULT':
      return {
        ...state,
        result: payload
      }
  
    default:
      return state;
  }
}

export default decrypt;