export const emailValidation = (email: string) => {
  const emailRegex =
    //eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //at least 4 chars and at most 128 characters will be accepted
  const hasValidLength = email.length > 4 && email.length <= 128;

  //Regex test:
  const isValidEmail = emailRegex.test(email);

  //No need but check if it has at least one "." dot in domain section
  if (hasValidLength && isValidEmail) {
    const domainSection = email.split('@')[1];
    const hasAtLeastOneDot = domainSection.split('.').length >= 2;

    //if hasValidLength && isValidEmail, the return from this one will give us expected result
    return hasAtLeastOneDot;
  }

  //if it does not enter the above condition, anycase it won't be a valid email
  return false;
};

export const textValidation = (
  text: string,
  minLength: number = 2,
  maxLength: number = 60
) => {
  //eslint-disable-next-line
  const specialCharRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const hasSpecialChars = specialCharRegex.test(text);
  const hasValidLength = text.length >= minLength && text.length <= maxLength;

  return hasValidLength && !hasSpecialChars;
};
