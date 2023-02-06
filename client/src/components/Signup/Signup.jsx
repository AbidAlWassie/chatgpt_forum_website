import React from 'react'

const Signup = () => {
  return (
    <div id="signup-modal" className="modal hidden">
      <form id="signup-form" className="">
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Confirm Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <label>Confirm Password:</label>
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Sign up" />
      </form>
    </div>
  )
}

export default Signup