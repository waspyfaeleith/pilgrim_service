import React  from 'react';

const TimeFromSQLDate = (props) => {
  if(!props.dateTime){
    return null;
  }

  const dateTime = new Date(props.dateTime);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  return (
    <React.Fragment>
        <p>{hours}:{minutes}</p>
    </React.Fragment>
  )


}

export default TimeFromSQLDate;
