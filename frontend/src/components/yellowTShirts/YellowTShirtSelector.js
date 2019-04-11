import React from 'react';

const YellowTShirtSelector = (props) => {
  const options = props.yellowTShirts.map((yellowTShirt, index) => {
    return <option value={index} key={index}>{yellowTShirt.name}</option>
  })

  function handleChange(event) {
    console.log(event.target.value)
    let selectedValues = Array.from(event.target.selectedOptions, option => option.value);
    props.onYellowTShirtSelected(event.target.value);
    props.onYellowTShirtSelected(selectedValues);
  }

  return (
    <select multiple size="10" id="yellowTShirt-selector" onChange={handleChange} defaultValue={[]}>
      <option disabled value="default">Choose a helper...</option>
      { options }
    </select>
  )
}

export default YellowTShirtSelector;
