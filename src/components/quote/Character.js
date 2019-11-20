import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) =>  {
  const appearancesElement = character.appearances.map((appearance, i) => (
    <li key={i}>{appearance}</li>
  ));
  return (
    <figure>
      <img src={character.img} alt={character.name} />
      <figcaption>{character.name}</figcaption>
      <p>{character.race}</p>
      <ul>
        {appearancesElement}
      </ul>
    </figure>

  );
}
;

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    appearances: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

export default Character;
