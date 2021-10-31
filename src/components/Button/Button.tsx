import React from 'react';
import classes from './Button.module.scss';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: JSX.Element | string;
  disabled?: boolean;
}

const Button = ({ children, type, disabled }: IProps) => {
  return (
    <button
      type={type}
      className={`${classes.Button} ${disabled && classes.Disabled}`}
    >
      {children}
    </button>
  );
};

export default Button;
