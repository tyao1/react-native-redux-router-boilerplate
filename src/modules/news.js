const LOAD = 'NEWS_LOAD';
const LOAD_SUCCESS = 'NEWS_LOAD_SUCCESS';
const LOAD_FAIL = 'NEWS_LOAD_FAIL';

const initialState = {
  data: [],
  loaded: false,
};

export default function news(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
      };
    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
    }),
  };
}
