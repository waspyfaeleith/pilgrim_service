import React from 'react';

const YellowTShirtForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const yellowTShirt = {
        "name": event.target.name.value,
        "group": event.target.group.value
      }
    props.handleYellowTShirtPost(yellowTShirt)

  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={props.yellowTShirt.name}/>
        <select name="group">
          <option key={1} value="D">D</option>
          <option key={2} value="L">L</option>
          <option key={3} value="S">S</option>
        </select>
          <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default YellowTShirtForm;
