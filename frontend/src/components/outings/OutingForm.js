import React from 'react';
import PilgrimSelector from '../pilgrims/PilgrimSelector'
import YellowTShirtSelector from '../yellowTShirts/YellowTShirtSelector'

const OutingForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const outing = {
        "pilgrim": event.target.name.value,
        "yellowTShirt": event.target.yellowTShirt.value
      }
    props.handleOutingPost(outing);
  }

  return(
    <div>
      <PilgrimSelector pilgrims={props.pilgrims}/>
      <YellowTShirtSelector yellowTShirts={props.yellowTShirts}/>
    </div>
  )

}

export default OutingForm;
