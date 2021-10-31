import React, { useState, useEffect } from 'react';
import { sendData } from '../../Interfaces/FormInterfaces';
import WindowContainer from '../WindowContainer/WindowContainer';
import SuccessErrorWindow from '../SuccessErrorWindow/SuccessErrorWindow';
import UserForm from '../UserForm/UserForm';

const FormContainer = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [dataSend, setDataSend] = useState(false);
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    currentJob: '',
    month: '',
    year: '',
  });
  const showForm = !success && !error;

  useEffect(() => {
    let timer: any;

    if (error || success) {
      timer = setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [success, error]);

  const formDataHandler = (data: sendData) => {
    setData({
      name: data.name,
      surname: data.surname,
      email: data.email,
      currentJob: data.currentJob,
      month: data.birthData.month,
      year: data.birthData.year,
    });

    //send data to server, in case of success, successRes will be true, else will be false;
    let successRes = true;
    //on success
    if (successRes) {
      setSuccess(true);
      setDataSend(true);
      console.log(data);
    } else {
      setError(true);
    }
  };

  return (
    <WindowContainer>
      {showForm ? (
        <UserForm sendData={formDataHandler} clearForm={dataSend} data={data} />
      ) : (
        <SuccessErrorWindow
          success={success}
          error={error}
          successMessage='You are registered successfully'
          errorMessage='Unexpected Error Occured, Please try again later'
          footerMessageOnSuccess='This is a small information message on Success (optional)'
          footerMessageOnError='This is a small information message on Error (optional)'
        />
      )}
    </WindowContainer>
  );
};

export default FormContainer;
