import React  from 'react';

const MarkReturnedForm = (props) => {
  if (!props.handleSubmit) {
    return null;
  }
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit}>
        <button type="submit">Mark Returned</button>
      </form>
    </React.Fragment>
  )
}

export default MarkReturnedForm;
