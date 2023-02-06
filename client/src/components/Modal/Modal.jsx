import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modal" onClick={() => {setOpenModal(false);}}>
      <div id="signup-modal" className="modal">
        <form id="signup-form" className="">
          <h3>Signup</h3>
          <p>Create your new account</p>
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
    </div>
  );
}

export default Modal;
