import React from 'react';
import classes from './DropDown.module.scss';

interface IProps {
  options: { value: string; text: string; id: string }[];
  value: string;
  label?: string;
  emptyText?: string;
  isValid?: boolean;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown = ({
  options,
  value,
  label,
  emptyText,
  isValid,
  name,
  onChange,
}: IProps) => {
  return (
    <div className={classes.formGroup}>
      {label && <label>{label}</label>}
      <select
        onChange={onChange}
        className={!isValid ? `${classes.invalid}` : ''}
        value={value}
        name={name}
      >
        <option value=''>{emptyText}</option>
        {options.map((option) => (
          <option value={option.value} key={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
