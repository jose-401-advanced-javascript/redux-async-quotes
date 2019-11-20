import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_DONE } from '../actions/dragonAge';

const initialState = {
  character: {
    name: '',
    race: '',
    img: '',
    appearances: ''

  },
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return { ...state, character: { ...action.payload } };
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
