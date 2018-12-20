import React  from 'react';
import {Link} from 'react-router-dom';

const Pilgrim = (props) => {

  if(!props.pilgrim){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/pilgrims/" + props.pilgrim.id} className="name">
          {props.pilgrim.name}
        </Link>
      <p>Room: {props.pilgrim.roomNumber}</p>

    </React.Fragment>
  )
}

export default Pilgrim;
