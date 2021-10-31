import React from 'react';
import classes from './Input.module.scss';

interface IProps {
  label?: string;
  isValid?: boolean;
  placeholder?: string;
  type: string;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  isValid,
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
}: IProps) => {
  return (
    <div className={classes.formGroup}>
      {label && <label>{label}</label>}
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={!isValid ? `${classes.invalid}` : ''}
      />
    </div>
  );
};

export default Input;
