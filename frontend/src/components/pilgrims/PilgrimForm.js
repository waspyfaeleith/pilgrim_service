import React from 'react';

const PilgrimForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const pilgrim = {
        "name": event.target.name.value,
        "roomNumber": event.target.roomNum.value
      }
    props.handlePilgrimPost(pilgrim)

  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name"/>
        <input type="number" placeholder="Room Number" name="roomNum"/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default PilgrimForm;
