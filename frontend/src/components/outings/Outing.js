import React  from 'react';
import DateFromSQLDate from '../helpers/DateFromSQLDate.js';
import TimeFromSQLDate from '../helpers/TimeFromSQLDate.js';
import YellowTShirtList from '../yellowTShirts/YellowTShirtList.js'

const Outing = (props) => {

  //console.log("Outing:",props.outing);
  if(!props.outing){
    return null;
  }
  //console.log("Pilgrim:", props.outing.pilgrim)

  return (
    <React.Fragment>
      <p> Date: <DateFromSQLDate dateTime={props.outing.timeOut}/></p>
      <p>Pilgrim: {props.outing.pilgrim.name}</p>
      Out With: <YellowTShirtList yellowTShirts = {props.outing.yellowTShirts} />
      <p> Time Out: <TimeFromSQLDate dateTime={props.outing.timeOut}/></p>
      <p> Time In: <TimeFromSQLDate dateTime={props.outing.timeIn}/></p>
    </React.Fragment>
  )
}

export default Outing;
