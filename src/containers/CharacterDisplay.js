import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharactersPromise } from '../actions/dragonAge';
import Character from '../components/quote/Character';
import { getCharacter, getCharacterLoading } from '../selectors/dragonage';

const DisplayCharacter = () => {
  const character = useSelector(getCharacter);
  console.log(character);
  
  const loading = useSelector(getCharacterLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersPromise());
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <Character character={character} />
  );

};

export default DisplayCharacter;
