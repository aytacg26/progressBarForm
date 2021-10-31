# A React Form with Progress Bar

This form will be a user form (can be any form), but in this sample,
it is a user form (a dummy), which will contain user name, surname,
birth month, birth year, email address, country, city and current job
fields, whenever a field filled by user, if the entered value is valid,
progress bar will move forward, and if user deletes the value at filed,
it will move backward. Not completed yet, but will be completed within
2 days (at free times).

For form, after completion of all validations etc. instead of multi useState,
it will be refactored to useReducer.

Click [here](https://aytacg26.github.io/progressBarForm/) to see the working example of form.
data is not being send any server, currently for any registration it uses static true value,
in case of any server error (in real usage), it will show error window and will not clear the
form.

Click [here](https://aytacg26.github.io/progressBarForm/)
