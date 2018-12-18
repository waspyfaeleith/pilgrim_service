import React  from 'react';
import {Link} from 'react-router-dom';

const YellowTShirt = (props) => {

  if(!props.yellowTShirt){
    return null;
  }

  return (
    <React.Fragment>
        <Link to = {"/yellowTShirts/" + props.yellowTShirt.id} className="name">
          {props.yellowTShirt.name}
        </Link>
      <p>Group: {props.yellowTShirt.group}</p>

    </React.Fragment>
  )
}

export default YellowTShirt;
