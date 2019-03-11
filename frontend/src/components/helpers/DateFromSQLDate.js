import React  from 'react';

const DateFromSQLDate = (props) => {
  if(!props.dateTime){
    return null;
  }

  const dateTime = new Date(props.dateTime);
  const day = dateTime.getDate();
  const month = dateTime.getMonth();

  return (
    <React.Fragment>
        <p>{day} / {month}</p>
    </React.Fragment>
  )


}

export default DateFromSQLDate;
