import React from 'react';

const RegisterForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const user = {
        "name": event.target.username.value,
        "password": event.target.password.value
      }
    props.handleRegisterPost(user)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username"/>
        <input type="password" placeholder="Password" name="password"/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm;
