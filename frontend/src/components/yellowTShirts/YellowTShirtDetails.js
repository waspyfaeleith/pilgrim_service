import React  from 'react';

const YellowTShirtDetails = (props) => {

  if(!props.yellowTShirt){
    return null;
  }

  return (
    <React.Fragment>
      <p>Name: {props.yellowTShirt.name}</p>
      <p>Group: {props.yellowTShirt.group}</p>

    </React.Fragment>
  )
}

export default YellowTShirtDetails;
