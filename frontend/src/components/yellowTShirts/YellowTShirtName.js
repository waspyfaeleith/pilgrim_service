import React  from 'react';

const YellowTShirtName = (props) => {

  if(!props.yellowTShirt){
    return null;
  }

  return (
    <React.Fragment>
      <p>{props.yellowTShirt.name}</p>
    </React.Fragment>
  )
}

export default YellowTShirtName;
