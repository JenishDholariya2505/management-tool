const initState = {
  Post: [],
  loading: false,
  error: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_POST_REQUEST':
      state = {
        Post: [],
        loading: true,
      };
      break;
    case 'GET_POST_SUCCESS':
      state = {
        loading: false,
        Post: action.payload,
      };
      break;
    case 'GET_POST_FAILURE':
      state = {
        loading: false,
        error: action.payload.error,
      };
      break;
    case 'POST_DELETE_REQUEST':
      state = {
        Post: [],
        loading: true,
      };
      break;
    case 'POST_DELETE_SUCCESS':
      state = {
        loading: false,
        Post: action.payload,
      };
      break;
  }
  return state;
};