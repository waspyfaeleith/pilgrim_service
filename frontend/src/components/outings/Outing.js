import React  from 'react';
import DateFromSQLDate from '../helpers/DateFromSQLDate.js';
import TimeFromSQLDate from '../helpers/TimeFromSQLDate.js';

const Outing = (props) => {

  console.log(props.outing);
  if(!props.outing){
    return null;
  }

  return (
    <React.Fragment>
      <p> Date: <DateFromSQLDate dateTime={props.outing.timeOut}/></p>
      <p> Time Out: <TimeFromSQLDate dateTime={props.outing.timeOut}/></p>
      <p> Time In: <TimeFromSQLDate dateTime={props.outing.timeIn}/></p>
    </React.Fragment>
  )
}

export default Outing;
