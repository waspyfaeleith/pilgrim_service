import React from 'react';

const LoginForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const user = {
        "name": event.target.username.value,
        "password": event.target.password.value
      }
    props.handleLoginPost(user)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username"/>
        <input type="password" placeholder="Password" name="password"/>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginForm;
