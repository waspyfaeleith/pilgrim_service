import React  from 'react';
import {Link} from 'react-router-dom';
import DateFromSQLDate from '../helpers/DateFromSQLDate.js';
import TimeFromSQLDate from '../helpers/TimeFromSQLDate.js';
import YellowTShirtNameList from '../yellowTShirts/YellowTShirtNameList.js'

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
      Out With: <YellowTShirtNameList yellowTShirts = {props.outing.yellowTShirts} />
      <p><TimeFromSQLDate status="Out" dateTime={props.outing.timeOut}/></p>
      <p> <TimeFromSQLDate status="In" dateTime={props.outing.timeIn}/></p>
    </React.Fragment>
  )
}

export default Outing;
