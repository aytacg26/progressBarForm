import React, { Fragment } from 'react';
import Success from '../Success/Success';
import Error from '../Error/Error';
import classes from './SuccessErrorWindow.module.scss';

interface IProps {
  success: boolean;
  error: boolean;
  successMessage?: string;
  errorMessage?: string;
  footerMessageOnError?: string;
  footerMessageOnSuccess?: string;
}

const SuccessErrorWindow = ({
  success,
  error,
  successMessage,
  errorMessage,
  footerMessageOnError,
  footerMessageOnSuccess,
}: IProps) => {
  return (
    <Fragment>
      {success && (
        <div className={`${classes.TopMessage} ${classes.Success}`}>
          <h3>{successMessage}</h3>
        </div>
      )}
      {error && (
        <div className={`${classes.TopMessage} ${classes.Error}`}>
          <h3>{errorMessage}</h3>
        </div>
      )}
      <div className={classes.AnimationSection}>
        {success && <Success />}
        {error && <Error />}
      </div>

      <div
        className={`${classes.BottomMessage} ${
          success ? classes.Success : classes.Error
        }`}
      >
        {success && <p>{footerMessageOnSuccess}</p>}
        {error && <p>{footerMessageOnError}</p>}
      </div>
    </Fragment>
  );
};

export default SuccessErrorWindow;
