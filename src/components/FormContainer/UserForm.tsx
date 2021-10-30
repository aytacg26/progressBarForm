import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Input from '../Input/Input';
import DropDown from '../DropDown/DropDown';
import { monthOptions, yearOptions } from '../../data/dropdownData';
import classes from './UserForm.module.scss';

type eventParam =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

const UserForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValidMonth, setIsValidMonth] = useState(false);
  const [isValidYear, setIsValidYear] = useState(false);
  //const [isTouched, setIsTouched] = useState(false);
  let isValidName = name.length >= 2;
  let isValidSurname = surname.length >= 2;
  const nameProgress = isValidName ? 1 : 0;
  const surnameProgress = isValidSurname ? 1 : 0;
  const monthProgress = isValidMonth ? 1 : 0;
  const yearProgress = isValidYear ? 1 : 0;
  const progress =
    nameProgress * 25 +
    surnameProgress * 25 +
    monthProgress * 25 +
    yearProgress * 25;

  const handleNameEntry = (e: eventParam) => {
    setName(e.target.value);
    // setIsTouched(true);
  };

  const handleSurnameEntry = (e: eventParam) => {
    setSurname(e.target.value);
  };

  const handleBirthMonthChange = (e: eventParam) => {
    const selected = e.target.value;
    if (selected.length > 0) {
      setIsValidMonth(true);
    } else {
      setIsValidMonth(false);
    }
    setMonth(selected);
  };

  const handleBirthYearChange = (e: eventParam) => {
    const selected = e.target.value;
    if (selected.length > 0) {
      setIsValidYear(true);
    } else {
      setIsValidYear(false);
    }
    setYear(selected);
  };

  return (
    <form>
      <ProgressBar progressValue={progress} />
      <Input
        type='text'
        value={name}
        onChange={handleNameEntry}
        isValid={isValidName}
        label='Name'
        placeholder='Please enter your name...'
      />
      <Input
        type='text'
        value={surname}
        onChange={handleSurnameEntry}
        isValid={isValidSurname}
        label='Surname'
        placeholder='Please enter your name...'
      />
      <DropDown
        options={monthOptions}
        emptyText='Select Month'
        label='Birth Month'
        onChange={handleBirthMonthChange}
        isValid={isValidMonth}
        value={month}
      />
      <DropDown
        options={yearOptions}
        emptyText='Select Year'
        label='Birth Year'
        onChange={handleBirthYearChange}
        isValid={isValidYear}
        value={year}
      />
    </form>
  );
};

export default UserForm;
