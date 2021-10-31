import { emailValidation, textValidation } from '../utils/utils';

interface IForm {
  name: string;
  surname: string;
  email: string;
  currentJob: string;
  month: string;
  year: string;
}

//Not a reusable hook, it can be just used for this type of forms
export const useProgress = (formData: IForm) => {
  const { name, surname, email, currentJob, month, year } = formData;

  let isValidEmail = emailValidation(email);
  let isValidJob = textValidation(currentJob, 5, 80);
  let isValidName = textValidation(name);
  let isValidSurname = textValidation(surname);
  let isValidYear = year.length > 0;
  let isValidMonth = month.length > 0;
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

  return {
    isValidName,
    isValidSurname,
    isValidEmail,
    isValidJob,
    isValidYear,
    isValidMonth,
    progress,
  };
};
