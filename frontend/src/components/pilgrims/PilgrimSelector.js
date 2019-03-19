import React from 'react';

const PilgrimSelector = (props) => {
  const options = props.pilgrims.map((pilgrim, index) => {
    return <option value={index} key={index}>{pilgrim.name}</option>
  })

  function handleChange(event) {
    props.onPilgrimSelected(event.target.value);
  }

  return (
    <select id="pilgrim-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a pilgrim...</option>
      { options }
    </select>
  )
}

export default PilgrimSelector;
