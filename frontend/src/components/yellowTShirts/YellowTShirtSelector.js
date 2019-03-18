import React from 'react';

const YellowTShirtSelector = (props) => {
  const options = props.yellowTShirts.map((yellowTShirt, index) => {
    return <option value={yellowTShirt.id} key={index}>{yellowTShirt.name}</option>
  })

  function handleChange(event) {
    props.onYellowTShirtSelected(event.target.value);
  }

  return (
    <select id="yellowTShirt-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a helper...</option>
      { options }
    </select>
  )
}

export default YellowTShirtSelector;
