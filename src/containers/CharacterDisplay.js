import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharactersPromise } from '../actions/dragonAge';
import Character from '../components/quote/Character';
import { getCharacter, getCharacterLoading } from '../selectors/dragonage';
import Loading from '../components/quote/Load';

const DisplayCharacter = () => {
  const character = useSelector(getCharacter);
  const loading = useSelector(getCharacterLoading);
  const dispatch = useDispatch();

  const getNewCharacter = () => {
    dispatch(fetchCharactersPromise());
  };

  useEffect(() => {
    dispatch(fetchCharactersPromise());
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <Character character={character} />
      <Loading more={getNewCharacter} />
    </>
  );

};

export default DisplayCharacter;
