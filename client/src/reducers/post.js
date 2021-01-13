import { GET_POSTS, POST_ERROR } from '../actions/types';

const initialState = {
  post: [],
  post: null,
  loading: true,
  error: {},
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer