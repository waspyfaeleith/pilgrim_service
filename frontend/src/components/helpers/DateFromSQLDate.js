import React  from 'react';

const DateFromSQLDate = (props) => {
  if(!props.dateTime){
    return null;
  }

  const dateTime = new Date(props.dateTime);
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;

  return (
    <React.Fragment>
        {day} / {month}
    </React.Fragment>
  )


}

export default DateFromSQLDate;
