import { useState } from 'react'
import './App.css'
import '@picocss/pico'
import { Navbar, CreatePost, Discussion, Footer, Login, Signup, Modal } from './components';

function App() {

  const [toggle, setToggle] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App" id="App">
      <main className="container">
        <Navbar/>
          <button className="openModalBtn" onClick={() => {setModalOpen(true);}}>Open</button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
          <Login/>
          <Signup/>
          <button onClick={() => setToggle(!toggle)} id="create-post-button">Create a new post</button>
          {toggle && (
            <CreatePost/>
          )}
          <h2>Recent Discussions</h2>
          <Discussion/>
          <Discussion/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
