import React from 'react';

function Emoji(props) {
  const { emoji } = props;
  return (
    <span aria-label="" role="img">
      {emoji}
    </span>
  );
}

export default Emoji;
