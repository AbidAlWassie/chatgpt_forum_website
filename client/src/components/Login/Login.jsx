import React from 'react'

const SignUp = () => {
  return (
    <div id="login-modal" className="modal hidden">
      <form id="login-form" className="">
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}

export default SignUp