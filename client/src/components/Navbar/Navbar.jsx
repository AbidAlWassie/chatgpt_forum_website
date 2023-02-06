import { useState } from 'react';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header>
      <button id="menu-button" className="menu-btn">Toggle Menu</button>
      <nav id="nav-menu">
      <ul>
        <li><strong>Forum App</strong></li>
      </ul>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Members</a></li>
          <li><a href="#" id="signup-link" className="openModalBtn" onClick={() => {setModalOpen(true);}}>Sign up</a></li>
          <li><a href="#" id="login-link">Log in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar