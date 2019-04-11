import React  from 'react';
import {Link} from 'react-router-dom';
import DateFromSQLDate from '../helpers/DateFromSQLDate.js';
import TimeFromSQLDate from '../helpers/TimeFromSQLDate.js';
import YellowTShirtList from '../yellowTShirts/YellowTShirtList.js'

const Outing = (props) => {

  if(!props.outing){
    return null;
  }

  return (
    <React.Fragment>
      <Link to = {"/outings/" + props.outing.id} className="name">
      Outing:{props.outing.id}
      </Link>
      <p> Date: <DateFromSQLDate dateTime={props.outing.timeOut}/></p>
      <p>Pilgrim: {props.outing.pilgrim.name}</p>
      Out With: <YellowTShirtList yellowTShirts = {props.outing.yellowTShirts} />
      <p> Time Out: <TimeFromSQLDate dateTime={props.outing.timeOut}/></p>
      <p> Time In: <TimeFromSQLDate dateTime={props.outing.timeIn}/></p>
    </React.Fragment>
  )
}

export default Outing;
