import React from 'react';
import classes from './WindowContainer.module.scss';

interface IProps {
  children: JSX.Element | string | JSX.Element[];
}

const WindowContainer = ({ children }: IProps) => {
  return <div className={classes.WindowContainer}>{children}</div>;
};

export default WindowContainer;
