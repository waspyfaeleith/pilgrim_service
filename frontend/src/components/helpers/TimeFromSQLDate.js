import React  from 'react';

const TimeFromSQLDate = (props) => {
  if(!props.dateTime){
    return null;
  }

  if(!props.status){
    return null;
  }

  const dateTime = new Date(props.dateTime);
  const hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <React.Fragment>
        Time {props.status}: {hours}:{minutes}
    </React.Fragment>
  )


}

export default TimeFromSQLDate;
