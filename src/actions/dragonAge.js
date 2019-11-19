import { getCharacter } from '../services/dragonAgeApi';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchCharactersPromise,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_DONE
] = createAction('FETCH_CHARACTERS', getCharacter);
