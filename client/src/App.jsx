import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>My Forum</h1>
          <button id="menu-button" class="menu-btn">Toggle Menu</button>
          <nav id="nav-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Members</a></li>
              <li><a href="#" id="signup-link">Sign up</a></li>
              <li><a href="#" id="login-link">Log in</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <div id="signup-modal" class="modal hidden">
            <form id="signup-form" class="">
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

          <div id="login-modal" class="modal hidden">
            <form id="login-form" class="">
              <label>Email:</label>
              <input type="email" name="email" />
              <br />
              <label>Password:</label>
              <input type="password" name="password" />
              <br />
              <input type="submit" value="Log in" />
            </form>
          </div>

          <button id="create-post-button">Create a new post</button>

          <div id="create-post-dropdown" class="hidden">
            <form action="">
              <label>Title:</label>
              <input type="text" name="title" /><br />
              <label>Body:</label>
              <textarea name="body"></textarea><br />
              <input type="submit" value="Post" />
            </form>
          </div>

          <h2>Recent Discussions</h2>
          <section>
            <h3><a href="#">Discussion Title</a></h3>
            <p>by <a href="#">Username</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie tempor velit, a hendrerit arcu sollicitudin id. Proin tincidunt, magna et dictum dictum, ipsum dui sollicitudin ante, quis tristique arcu justo quis diam. Proin euismod, purus in placerat tincidunt, justo lectus tristique tortor, non dictum est nibh sit amet lorem. In placerat, nisl id sodales auctor, nisi nunc vehicula lectus, auctor bibendum ligula arcu vel turpis. Vestibulum in turpis sem. Proin auctor ornare magna, et mollis leo semper at.</p>
          </section>
          <section>
            <h3><a href="#">Discussion Title</a></h3>
            <p>by <a href="#">Username</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie tempor velit, a hendrerit arcu sollicitudin id. Proin tincidunt, magna et dictum dictum, ipsum dui sollicitudin ante, quis tristique arcu justo quis diam. Proin euismod, purus in placerat tincidunt, justo lectus tristique tortor, non dictum est nibh sit amet lorem. In placerat, nisl id sodales auctor, nisi nunc vehicula lectus, auctor bibendum ligula arcu vel turpis. Vestibulum in turpis sem. Proin auctor ornare magna, et mollis leo semper at.</p>
          </section>
        </main>
        <footer>
          <p>Copyright 2021 My Forum</p>
        </footer>
      </div>
    </div>
  )
}

export default App
