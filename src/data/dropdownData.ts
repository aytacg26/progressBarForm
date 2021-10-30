export const monthOptions = [
  { value: 'Jan', text: 'January', id: 'month-0001-jan' },
  { value: 'Feb', text: 'February', id: 'month-0002-feb' },
  { value: 'Mar', text: 'March', id: 'month-0003-mar' },
  { value: 'Apr', text: 'April', id: 'month-0004-apr' },
  { value: 'May', text: 'May', id: 'month-0005-may' },
  { value: 'Jun', text: 'June', id: 'month-0006-jun' },
  { value: 'Jul', text: 'July', id: 'month-0007-jul' },
  { value: 'Aug', text: 'August', id: 'month-0008-aug' },
  { value: 'Sep', text: 'September', id: 'month-0009-sep' },
  { value: 'Oct', text: 'October', id: 'month-0010-oct' },
  { value: 'Nov', text: 'November', id: 'month-0011-nov' },
  { value: 'Dec', text: 'December', id: 'month-0012-dec' },
];

const createYearOptions = (minAge: number, maxAge: number) => {
  const today = new Date();
  const todayYear = today.getFullYear();

  const startYear = todayYear - minAge;
  const endYear = todayYear - maxAge;
  const options = [];

  for (let i = startYear; i >= endYear; i--) {
    const option = {
      value: i.toString(),
      text: i.toString(),
      id: `year-val-${i}`,
    };

    options.push(option);
  }

  return options;
};

export const yearOptions = createYearOptions(18, 98);
