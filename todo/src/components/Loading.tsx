import React from 'react';
import { CircularProgress } from '@material-ui/core';

interface IProps {
  shown: boolean;
}

const Loading: React.FC<IProps> = props => {
  if (!props.shown) {
    return null;
  }
  return <CircularProgress />;
};

export default Loading;
