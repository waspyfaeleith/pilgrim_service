import React from 'react';

const OutingForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const outing = {
        "pilgrim": event.target.name.value,
        "helper": event.target.helper.value
      }
    props.handleOutingPost(outing);
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

export default OutingForm;
