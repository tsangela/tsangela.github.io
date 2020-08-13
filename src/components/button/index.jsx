import React from 'react';

import FilledButton from './src/filled-button';
import OutlineButton from './src/outline-button';

export function Button(props) {
  const { type } = props;
  switch (type) {
    case TYPES.outline:
      return <OutlineButton {...props} />;
    default:
      return <FilledButton {...props} />;
  }
}

export const TYPES = {
  filled: 'filled',
  outline: 'outline',
};

export default Button;
