import React, { useState, useEffect } from 'react';
import classes from './ProgressBar.module.scss';

interface IProps {
  progressValue: number;
}

const ProgressBar = ({ progressValue }: IProps) => {
  const [currentVal, setCurrentValue] = useState(progressValue);

  useEffect(() => {
    let timer: any;
    if (currentVal < progressValue) {
      timer = setTimeout(() => {
        setCurrentValue((prevState) => prevState + 1);
      }, 45);
    }

    if (progressValue < currentVal && currentVal !== 0) {
      timer = setTimeout(() => {
        setCurrentValue((prevState) => prevState - 1);
      }, 45);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentVal, progressValue, setCurrentValue]);

  return (
    <div className={classes.ProgressContainer}>
      <div className={classes.Progress} style={{ width: `${currentVal}%` }} />
      <span style={{ color: progressValue >= 50 ? '#fff' : '#4e4e4e' }}>
        {currentVal}%
      </span>
    </div>
  );
};

export default ProgressBar;
