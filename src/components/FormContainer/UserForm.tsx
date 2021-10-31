import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Input from '../Input/Input';
import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';
import { monthOptions, yearOptions } from '../../data/dropdownData';
import { emailValidation, textValidation } from '../../utils/utils';
import classes from './UserForm.module.scss';

type eventParam =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

const UserForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [currentJob, setCurrentJob] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValidMonth, setIsValidMonth] = useState(false);
  const [isValidYear, setIsValidYear] = useState(false);

  //const [isTouched, setIsTouched] = useState(false);
  let isValidEmail = emailValidation(email);
  let isValidJob = textValidation(currentJob, 80);
  let isValidName = textValidation(name);
  let isValidSurname = textValidation(surname);
  const nameProgress = isValidName ? 1 : 0;
  const surnameProgress = isValidSurname ? 1 : 0;
  const monthProgress = isValidMonth ? 1 : 0;
  const yearProgress = isValidYear ? 1 : 0;
  const emailProgress = isValidEmail ? 1 : 0;
  const jobProgress = isValidJob ? 1 : 0;
  const progressSlicePerField = Math.ceil(100 / 6);
  const progress =
    progressSlicePerField *
    (nameProgress +
      surnameProgress +
      monthProgress +
      yearProgress +
      emailProgress +
      jobProgress);

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

  const handleEmailEntry = (e: eventParam) => {
    const emailAddress = e.target.value;
    setEmail(emailAddress);
  };

  const handleCurrentJobEntry = (e: eventParam) => {
    const currJob = e.target.value;
    setCurrentJob(currJob);
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidData =
      isValidName &&
      isValidSurname &&
      isValidEmail &&
      isValidMonth &&
      isValidYear &&
      isValidJob;

    if (isValidData) {
      console.log({
        name,
        surname,
        email,
        currentJob,
        birthData: { month, year },
      });
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.FormContainer}>
      <h1>Registration Form</h1>
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
        placeholder='Please enter your surname...'
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
      <Input
        type='text'
        value={email}
        onChange={handleEmailEntry}
        isValid={isValidEmail}
        label='Email'
        placeholder='Please enter your email address...'
      />
      <Input
        type='text'
        value={currentJob}
        onChange={handleCurrentJobEntry}
        isValid={isValidJob}
        label='Current Job (Please do not use special characters (ex: &amp;,?,!)'
        placeholder='Please enter your current job...'
      />
      {progress < 100 && (
        <Button type='button' disabled>
          Please Complete Form
        </Button>
      )}
      {progress >= 100 && <Button type='submit'>Register</Button>}
    </form>
  );
};

export default UserForm;
