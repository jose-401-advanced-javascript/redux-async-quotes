import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ more }) => (
  <button onClick={more}>Get Another Character</button>
);

Loading.propTypes = {
  more: PropTypes.func.isRequired
};

export default Loading;
