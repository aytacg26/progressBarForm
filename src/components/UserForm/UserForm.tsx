import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Input from '../Input/Input';
import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';
import { sendData, formData } from '../../Interfaces/FormInterfaces';
import { useProgress } from '../../Hooks/useProgress';
import { monthOptions, yearOptions } from '../../data/dropdownData';
import classes from './UserForm.module.scss';

interface IProps {
  sendData: (data: sendData) => void;
  clearForm?: boolean;
  data: formData;
}

type eventParam =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

const UserForm = ({ sendData, clearForm, data }: IProps) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    currentJob: '',
    month: '',
    year: '',
  });

  const [hasTouchedName, setHasTouchedName] = useState(false);
  const [hasTouchedSurname, setHasTouchedSurname] = useState(false);
  const [hasTouchedMonth, setHasTouchedMonth] = useState(false);
  const [hasTouchedYear, setHasTouchedYear] = useState(false);
  const [hasTouchedEmail, setHasTouchedEmail] = useState(false);
  const [hasTouchedJob, setHasTouchedJob] = useState(false);

  useEffect(() => {
    if (clearForm) {
      setFormData({
        name: '',
        surname: '',
        email: '',
        currentJob: '',
        month: '',
        year: '',
      });
    } else {
      setFormData({ ...data });
    }
    //eslint-disable-next-line
  }, [clearForm, data]);

  const { name, surname, email, currentJob, month, year } = formData;
  const {
    isValidEmail,
    isValidJob,
    isValidName,
    isValidSurname,
    isValidMonth,
    isValidYear,
    progress,
  } = useProgress(formData);

  const formEntryHandler = (e: eventParam) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    switch (name) {
      case 'name':
        !hasTouchedName && setHasTouchedName(true);
        break;
      case 'surname':
        !hasTouchedSurname && setHasTouchedSurname(true);
        break;
      case 'month':
        !hasTouchedMonth && setHasTouchedMonth(true);
        break;
      case 'year':
        !hasTouchedYear && setHasTouchedYear(true);
        break;
      case 'email':
        !hasTouchedEmail && setHasTouchedEmail(true);
        break;
      default:
        !hasTouchedJob && setHasTouchedJob(true);
        break;
    }
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
      sendData({
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
        onChange={formEntryHandler}
        isValid={hasTouchedName ? isValidName : true}
        label='Name'
        placeholder='Please enter your name...'
        name='name'
      />
      <Input
        type='text'
        value={surname}
        onChange={formEntryHandler}
        isValid={hasTouchedSurname ? isValidSurname : true}
        label='Surname'
        placeholder='Please enter your surname...'
        name='surname'
      />
      <DropDown
        options={monthOptions}
        emptyText='Select Month'
        label='Birth Month'
        onChange={formEntryHandler}
        isValid={hasTouchedMonth ? isValidMonth : true}
        value={month}
        name='month'
      />
      <DropDown
        options={yearOptions}
        emptyText='Select Year'
        label='Birth Year'
        onChange={formEntryHandler}
        isValid={hasTouchedYear ? isValidYear : true}
        value={year}
        name='year'
      />
      <Input
        type='text'
        value={email}
        onChange={formEntryHandler}
        isValid={hasTouchedEmail ? isValidEmail : true}
        label='Email'
        placeholder='Please enter your email address...'
        name='email'
      />
      <Input
        type='text'
        value={currentJob}
        onChange={formEntryHandler}
        isValid={hasTouchedJob ? isValidJob : true}
        label='Current Job (Please do not use special characters (ex: &amp;,?,!)'
        placeholder='Please enter your current job...'
        name='currentJob'
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
